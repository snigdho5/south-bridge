import { View, StyleSheet, TouchableOpacity, ActionSheetIOS } from 'react-native'
import React from 'react'
import { Picker as PickerRN } from '@react-native-picker/picker'
import { isIphone } from '../utils/constants'
import Text from './text';
import { app, red } from '../utils/colors';

export default function Picker(props) {
    const {
        list,
        style,
        error,
        catSelected,
        displayKey,
        displayLabel,
        displayValue,
        setCatSelected,
        placeholder = "Select Category"
    } = props;


    const ActionSheetIOSonPress = () =>
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: list,
                destructiveButtonIndex: 5,
                title: 'Select One',
                uttonIndex: 5,
                userInterfaceStyle: 'dark'
            },
            buttonIndex => {

            }
        );


    return (
        <>
            <View style={style}>
                {isIphone ?
                    <TouchableOpacity onPress={ActionSheetIOSonPress}>
                        <View style={{}}>
                            <Text style={{}}>{catSelected}</Text>
                        </View>
                    </TouchableOpacity>
                    :
                    <PickerRN
                        selectedValue={catSelected}
                        dropdownIconColor={app}
                        mode='dropdown'
                        style={{
                            width: '102%',
                            color: app,
                            marginLeft: -5
                        }}
                        onValueChange={
                            (itemValue) => setCatSelected(itemValue)
                        }
                    >
                        <PickerRN.Item label={placeholder} value="" />
                        {list.map((Item) => {
                            return typeof (Item) === 'object' ?
                                <PickerRN.Item key={Item[displayKey]} label={Item[displayLabel]} value={Item[displayValue]} />
                                :
                                <PickerRN.Item key={Item} label={Item} value={Item} />
                        })}
                    </PickerRN>
                }
            </View>
            {error ? <Text color={red}>{error}</Text> : null}
        </>
    )
}
const styles = StyleSheet.create({

})