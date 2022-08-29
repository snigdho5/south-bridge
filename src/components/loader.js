import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { black } from '../utils/colors';
import { deviceHeight, deviceWidth } from '../utils/constants';

const Loader = ({
    size = "large",
    color = black,
    visible
}) => (visible ?
    <ActivityIndicator
        size={size}
        color={color}
        style={[styles.loader]}
    />
    : null
);

const styles = StyleSheet.create({
    loader: {
        backgroundColor: black + 10,
        width: deviceWidth,
        height: deviceHeight,
        position:'absolute',
        zIndex: 99
    }
});
export default Loader;
