import React from 'react';
import { StyleSheet, Text as TextRN } from 'react-native';
import { black, white } from '../utils/colors';

const Text = (props) => {
    const {
        style,
        color,
        blackText,
        size,
        children,
        ...rest
    } = props;
    return (
        <TextRN
            {...rest}
            style={StyleSheet.flatten([
                styles.text,
                blackText && styles.color(black),
                color && styles.color(color),
                size && styles.size(size),
                style
            ])}>
            {children}
        </TextRN>
    );
};

const styles = {
    text: {
        fontSize: 14,
        textAlign: 'left',
        color: white
    },
    color: (color) => ({
         color,
    }),
    size: (size) => ({
        fontSize: size,
    }),

};


export default Text;
