import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { app, black } from '../utils/colors';
import Icon from './icon';
import Text from './text';

const Input = ({
    icon,
    style,
    value,
    label,
    setValue,
    inputStyle,
    labelStyle,
    placeholder,
    lableColor = black + 90,
    iconType = "Feather",
    placeholderColor = app,
    ...props
}) => (
    <View style={[styles.container, { flexDirection: icon ? 'row' : 'column' }, style]}>
        {
            icon ?
                <Icon
                    name={icon}
                    color={app}
                    size={30}
                    type={iconType}
                />
                : null
        }
        {
            label ?
                <Text color={lableColor} size={16} style={[styles.label, labelStyle]}>
                    {label}
                </Text>
                : null
        }
        <TextInput
            {...props}
            style={[styles.input, { width: icon ? '90%' : '100%' }, inputStyle]}
            value={value}
            onChangeText={(text) => setValue(text)}
            placeholder={placeholder}
            placeholderTextColor={placeholderColor}
        />
    </View>

);
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: app,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    input: {
        color: app,
    },
    label: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: 5
    }
});

export default Input;
