import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Button from '../../components/button'
import { gray, white } from '../../utils/colors'
import Text from '../../components/text'

const list = [
    { a: 'Exporters/Traders', b: 'Axel Roses', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Transporters', b: 'John Petrucci', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Importers/Traders', b: 'Saikat Banerjee', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Custom Brokers', b: 'Pratik Ghosh', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Exporters/Traders', b: 'Sandip Marda', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Transporters', b: 'Chandrani Sen', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Importers/Traders', b: 'Amit Pramanik', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Custom Brokers', b: 'Snigdho Upadhoy', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Exporters/Traders', b: 'Debasis Pramanik', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'CFS', b: 'Madhumoy Das', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Importers/Traders', b: 'dads dsdasrqrqr', c: '(ALPS)(311)', d: 'Available Stock: 134' }
]
export default function DirectoryList() {
    return (
        <FlatList
            data={list}
            keyExtractor={item => Math.random().toString()}
            renderItem={({ item }) =>
                <View style={styles.list}>
                    <Text blackText style={styles.header}>
                        {item.b}
                    </Text>
                    <View style={styles.row}>
                        <Text blackText>{item.a}</Text>
                        <Button
                            label={"View Details"}
                        />
                    </View>

                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    list: {
        borderRadius: 10,
        elevation: 3,
        marginVertical: 5,
        borderColor: 'grey',
        borderWidth: .5,
        backgroundColor: white,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    header: {
        textAlignVertical: 'center',
        backgroundColor: gray,
        height: 40,
        paddingLeft: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:10,
        justifyContent: 'space-between'
    }
})