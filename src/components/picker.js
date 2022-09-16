import { View, StyleSheet, TouchableOpacity, ActionSheetIOS, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker as PickerRN } from '@react-native-picker/picker'
import { deviceHeight, isIphone } from '../utils/constants'
import Text from './text';
import { app, red, white } from '../utils/colors';
import Input from './input';
import Modal from 'react-native-modal';

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
    const [selecteedItem, setSelecteedItem] = useState({})
    const [visible, setVisible] = useState(false);
    const [filterData, setFilterData] = useState([])

    useEffect(() => { if (filterData.length < 1) setFilterData(list) }, [list, visible])

    const searchKey = (title) => {
        if (title) {
            const titleData = title.toUpperCase();
            const newData = list.filter(item => {
                const itemData = item[displayLabel].toUpperCase()
                return itemData.indexOf(titleData) > -1;
            });
            if (newData.length) setFilterData(newData)
            else { setFilterData([]) }
        }
    }

    return (
        <>
            <TouchableOpacity
                style={[styles.container, style]}
                onPress={() => setVisible(true)}
            >
                <Text
                    size={16}
                    color={app}
                    style={{ marginLeft: 10 }}
                >
                    {selecteedItem[displayLabel] ?? placeholder}
                </Text>
            </TouchableOpacity>
            <Modal
                style={{
                    margin: 0,
                    justifyContent: 'flex-end',
                }}
                isVisible={visible}
                onBackButtonPress={() =>
                    setVisible(false)
                }
                onBackdropPress={() =>
                    setVisible(false)
                }
            >
                <View style={styles.modalView}>
                    <Input
                        placeholder={"Search here..."}
                        setValue={v => searchKey(v)}
                        autoFocus
                    />
                    <FlatList
                        data={filterData ?? list}
                        keyboardShouldPersistTaps='handled'
                        style={{ maxHeight: deviceHeight / 2 }}
                        extraData={list}
                        ListEmptyComponent={() => <Text blackText >No Data Found!</Text>}
                        keyExtractor={v => v[displayKey]}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => {
                                setSelecteedItem(item);
                                setVisible(false)
                                setCatSelected(item[displayValue])
                                setFilterData([])
                            }} >
                                <Text
                                    blackText
                                    size={18}
                                    style={styles.txt}
                                >
                                    {item[displayLabel]}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </Modal>


            {error ? <Text color={red}>{error}</Text> : null}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        justifyContent: 'center'
    },
    modalView: {
        paddingVertical: 10,
        maxHeight: deviceHeight / 1.3,
        justifyContent: 'flex-end',
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: white,
    },
    txt: {
        padding: 5,
        paddingHorizontal: 10
    }
})