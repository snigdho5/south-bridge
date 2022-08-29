import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Button from '../../components/button'
import Icon from '../../components/icon'
import Picker from '../../components/picker'
import { app, white } from '../../utils/colors'

const list = ["Exporters/Traders", "Importers/Traders", "Transporters", "Custom Brokers", "CFS"];

export default function DirectorySearch() {
    const [searchString, setSearchString] = useState();
    const [catSelected, setCatSelected] = useState();

    return (
        <View>
            <View style={styles.row}>
                <View style={[styles.row, styles.card]}>
                    <Icon
                        type="Ionicons"
                        name="ios-search"
                        size={20}
                        color={app} />
                    <TextInput
                        placeholder={'Search by City, Country'}
                        style={{ width: '90%', color: app }}
                        onChangeText={text => setSearchString(text)}
                        value={searchString}
                        placeholderTextColor={app}
                    />

                </View>
                <Picker
                    style={[styles.row, styles.card]}
                    list={list}
                    catSelected={catSelected}
                    setCatSelected={setCatSelected}
                />
            </View>

            <Button
                label={"Search"}
                btnStyle={styles.btn}
                txtStyle={{ fontSize: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '90%',
        height: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        elevation: 3,
        backgroundColor: white,
        padding: 5,
        margin: 5,
        width: '47%',
        height: 60
    }
})