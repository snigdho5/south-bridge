import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Text from '../components/text'
import BaseView from '../containers/base'
import Header from '../containers/header'
import { app, white } from '../utils/colors'
import Button from '../components/button'
import ServiceList from '../containers/serviceList'
import DocumentUpload from '../containers/documentUpload'

export default function Services() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <BaseView>
            <Header
                name={"ServicesList"}
            />
            <Text blackText size={18} style={styles.heading}>List of Services</Text>
            <ServiceList
                onPress={()=>setIsVisible(true)} />
            <DocumentUpload
                isVisible={isVisible}
                setIsVisible={setIsVisible}
            />
            <Button
                footer
                label={"Next"}
            />
        </BaseView>
    )
}

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        paddingVertical: 10,
        fontWeight: '500',
    },
    list: {
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 20,
        borderColor: app,
        borderWidth: 1,
        backgroundColor: white,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})