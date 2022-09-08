import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { app, black } from '../utils/colors';
import { deviceHeight, deviceWidth } from '../utils/constants';

const Loader = ({
    size = "large",
    color = app,
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
        backgroundColor: black + 30,
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute',
        zIndex: 99
    }
});
export default Loader;
