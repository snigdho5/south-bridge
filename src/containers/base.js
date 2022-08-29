import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { app, white } from '../utils/colors';

const BaseView = ({
    style,
    children
}) => (
    <SafeAreaView style={[styles.base, style]}>
        <StatusBar backgroundColor={app} barStyle='light-content' />
        {children}
    </SafeAreaView>
);
const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: white
    }
});
export default BaseView;
