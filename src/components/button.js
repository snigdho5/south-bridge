import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { app } from '../utils/colors';
import { deviceWidth } from '../utils/constants';
import Icon from './icon';
import Text from './text';

const Button = ({
    btnStyle,
    txtStyle,
    label,
    footer,
    onPress
}) => (
    <TouchableOpacity
        style={[footer ? styles.fContainer : styles.container, btnStyle]}
        onPress={onPress}>
        <Text
            size={footer ? 20 : 15}
            style={[footer ? styles.fText : styles.text, txtStyle]}
        >
            {label}
        </Text>
        {footer ?
            <Icon name="arrow-collapse-right" type="MaterialCommunityIcons" />
            : null
        }
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    fContainer: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: deviceWidth,
        backgroundColor: app,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        height: 40,
        paddingHorizontal: 25,
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: app
    },
    fText: {
        paddingRight: 10
    },
    text: {
        fontWeight: 'bold'
    }
});
export default Button;
