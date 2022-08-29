import { View, StyleSheet, TouchableOpacity, ActionSheetIOS } from 'react-native'
import React from 'react'
import { Picker as PickerRN } from '@react-native-picker/picker'
import { isIphone } from '../utils/constants'
import Text from './text';
import { app } from '../utils/colors';

export default function Picker(props) {
    const {
        list,
        style,
        catSelected,
        setCatSelected
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
                        width: '100%',
                        color: app,
                    }}
                    onValueChange={
                        (itemValue) => setCatSelected(itemValue)
                    }
                >
                    <PickerRN.Item label="Select Category" value="" />
                    {list.map((Item) => {
                        return <PickerRN.Item key={Item} label={Item} value={Item} />
                    })}
                </PickerRN>
            }
        </View>
    )
}
const styles = StyleSheet.create({

})