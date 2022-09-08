import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Button from '../../components/button'
import Input from '../../components/input'
import Text from '../../components/text'
import BaseView from '../../containers/base'
import { app, black, red } from '../../utils/colors'
import { navigate } from '../../navigation/routeRef'
import Picker from '../../components/picker'
import RadioForm from 'react-native-simple-radio-button'
import { cityList, countryList, stateList, userCategoryList } from '../../services/basic'
import { fcmToken, formData } from '../../utils/helper'
import { validateRegister } from '../../validation'
import Form from '../../components/form'
import { useAuth } from '../../context/authContext'
import { register } from '../../services/auth'
import { ToastError } from '../../utils/toast'


export default function Register() {
  const { setUser } = useAuth();
  const [data, setData] = useState({
    full_name: __DEV__ ? "Test User" : "",
    company_name: __DEV__ ? "ABCD" : "",
    email: __DEV__ ? "test@tes.com" : "",
    phone: __DEV__ ? "9928185712" : "",
    address: __DEV__ ? "TEst" : "",
    country_id: __DEV__ ? "101" : "",
    state_id: __DEV__ ? "33" : "",
    city_id: __DEV__ ? "3297" : "",
    pin_code: __DEV__ ? "123123" : "",
    iec_no: __DEV__ ? "1231231231" : "",
    gst_no: __DEV__ ? "09AAACH7409R1ZZ" : "",
    pan_no: __DEV__ ? "AAACH7409R" : "",
    user_category_id: __DEV__ ? "3" : "",
    user_sub_category_id: __DEV__ ? "1" : "",
    fcm_token: "",
  });
  const [countries, setCountries] = useState([])
  const [categories, setCategories] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [error, setError] = useState({});

  useEffect(() => {
    if (!data?.country_id) getCountry();
    if (data?.country_id) getState();
    if (data?.state_id) getCity();
    if (!data?.fcm_token) getToken();
  }, [data?.country_id, data?.state_id])

  const getToken = async () => {
    updateData('fcm_token', await fcmToken())
  }

  const getCountry = async () => {
    try {
      let cat = await userCategoryList();
      setCategories(cat?.data)
      let res = await countryList();
      setCountries(res?.data)
    } catch (error) {
      ToastError(error?.message, 'Register')
    }
  }

  const getState = async () => {
    try {
      let res = await stateList(formData(data));
      setStates(res?.data)
    } catch (error) {
      ToastError(error?.message, 'Register')
    }
  }
  const getCity = async () => {
    try {
      let res = await cityList(formData(data));
      setCities(res?.data)
    } catch (error) {
      ToastError(error?.message, 'Register')
    }
  }

  const updateData = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const onRegister = async () => {
    const validate = validateRegister(data);
    setError(validate);
    if (Object.values(validate).length < 1) {
      try {
        let res = await register(formData(data))
        setUser(res?.data);
      } catch (error) {
        ToastError(error?.message, 'Register')
      }
    }
  }

  return (
    <BaseView>
      <KeyboardAvoidingView keyboardVerticalOffset={20}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, alignItems: 'center' }}>
          <Text color={app} size={30} style={styles.heading}>Registration</Text>
          <Form
            data={data}
            errors={error}
            onValidate={validateRegister}
            setError={(value) => setError(value)}>
            <Input
              value={data?.full_name}
              placeholder="Full Name"
              error={error?.full_name}
              setValue={v => updateData('full_name', v)}
            />
            <Input
              value={data?.company_name}
              placeholder="Company Name"
              error={error?.company_name}
              setValue={v => updateData('company_name', v)}
            />
            <Input
              value={data?.email}
              placeholder="Email Address"
              error={error?.email}
              keyboardType="email-address"
              setValue={v => updateData('email', v)}
            />
            <Input
              value={data?.phone}
              placeholder="Phone Number"
              error={error?.phone}
              keyboardType="number-pad"
              setValue={v => updateData('phone', v)}
            />
            <Input
              value={data?.address}
              placeholder="Address"
              error={error?.address}
              setValue={v => updateData('address', v)}
            />
            <Picker
              style={[styles.picker, { borderBottomColor: error?.country_id ? red : app }]}
              list={countries}
              displayValue='id'
              displayKey='id'
              displayLabel='name'
              placeholder="Choose Country"
              error={error?.country_id}
              catSelected={data?.country_id}
              setCatSelected={v => updateData('country_id', v)}
            />
            <Picker
              style={[styles.picker, { borderBottomColor: error?.state_id ? red : app }]}
              list={states}
              displayValue='id'
              displayKey='id'
              displayLabel='name'
              placeholder="Choose State"
              error={error?.state_id}
              catSelected={data?.state_id}
              setCatSelected={v => updateData('state_id', v)}
            />
            <Picker
              style={[styles.picker, { borderBottomColor: error?.city_id ? red : app }]}
              list={cities}
              displayValue='id'
              displayKey='id'
              displayLabel='name'
              placeholder="Choose City"
              error={error?.city_id}
              catSelected={data?.city_id}
              setCatSelected={v => updateData('city_id', v)}
            />
            <Input
              value={data?.pin_code}
              keyboardType="number-pad"
              error={error?.pin_code}
              placeholder="Pincode"
              setValue={v => updateData('pin_code', v)}
            />
            <Input
              value={data?.iec_no}
              error={error?.iec_no}
              placeholder="IEC No."
              setValue={v => updateData('iec_no', v)}
            />
            <Input
              value={data?.gst_no}
              error={error?.gst_no}
              placeholder="GSTIN"
              setValue={v => updateData('gst_no', v)}
            />
            <Input
              value={data?.pan_no}
              error={error?.pan_no}
              placeholder="Pan No."
              setValue={v => updateData('pan_no', v)}
            />
            <Picker
              style={[styles.picker, { borderBottomColor: error?.user_category_id ? red : app }]}
              list={categories}
              displayValue='id'
              displayKey='id'
              displayLabel='category_name'
              placeholder="Choose Category"
              error={error?.user_category_id}
              catSelected={data?.user_category_id}
              setCatSelected={(v) => updateData('user_category_id', v)}
            />
            {data?.user_category_id == 3 &&
              <RadioForm
                radio_props={[{ label: 'Local', value: 0 }, { label: 'International', value: 1 }]}
                style={{
                  marginVertical: 20
                }}
                formHorizontal={true}
                buttonColor={app}
                selectedButtonColor={app}
                labelStyle={{ fontSize: 12, color: app, marginRight: 7 }}
                onPress={(v) => updateData('user_sub_category_id', v)}
              />
            }
          </Form>
          <Button
            label={"Register"}
            btnStyle={styles.btn}
            txtStyle={styles.btnTxt}
            onPress={onRegister}
          />
          <Text
            color={black + 90}
            style={{ paddingBottom: 20 }}
            onPress={() => navigate('Login')}
          >Go to Login Screen</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseView>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 120,
    marginTop: 20
  },
  heading: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  btn: {
    width: '100%',
    height: 50
  },
  btnTxt: {
    fontSize: 20
  },
  forgot: {
    alignSelf: 'flex-end',
    marginVertical: 10
  },
  txt: {
    position: 'absolute',
    bottom: 20
  },
  picker: {
    width: '100%',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: app,
  },
})