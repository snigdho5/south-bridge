import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { app } from '../utils/colors';

const Button = ({
    btnStyle,
    txtStyle,
    label,
    onPress
}) => (
    <TouchableOpacity style={[styles.container, btnStyle]} onPress={onPress}>
        <Text style={[styles.text, txtStyle]} >{label}</Text>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    container: {
        height: 50,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: app
    },
    text: {
        color: 'white',
    }
});
export default Button;
