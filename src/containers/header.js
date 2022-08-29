import { View, StyleSheet, Linking } from 'react-native'
import React from 'react'
import { app } from '../utils/colors'
import Icon from '../components/icon'
import Text from '../components/text'
import { goBack, navigate, toggleDrawer } from '../utils/config';

export default function Header(props) {
    const { name } = props;

    switch (name) {
        case "Dashboard":
            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Icon
                            type="Feather"
                            name="menu"
                            size={30}
                            onPress={() => toggleDrawer()}
                        />
                        <Text size={20} style={{ paddingLeft: 15 }}>
                            Dashboard
                        </Text>
                    </View>
                    <View style={[styles.row, { width: '25%' }]}>
                        <Icon
                            size={30}
                            name="whatsapp"
                            type="FontAwesome"
                            onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=+31612345678')}
                        />
                        <Icon
                            size={30}
                            name="phone-outline"
                            type="MaterialCommunityIcons"
                            style={{ paddingLeft: 20 }}
                            onPress={() => Linking.openURL(`tel:${'+918240956028'}`)}
                        />
                    </View>
                </View>
            );
        case "ServicesList":
        case "Directories":
        case "Notifications":
        case "Subscription":
        case "Order History":
        case "Edit Profile":
            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Icon
                            type="Feather"
                            name="chevron-left"
                            size={30}
                            onPress={() => goBack()}
                        />
                        <Text size={20} style={{ paddingLeft: 15 }}>
                            {name}
                        </Text>
                    </View>
                </View>
            );
        case "Profile":
            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        <Icon
                            type="Feather"
                            name="chevron-left"
                            size={30}
                            onPress={() => goBack()}
                        />
                        <Text size={20} style={{ paddingLeft: 15 }}>
                            {name}
                        </Text>
                    </View>
                    <View style={[styles.row, { width: '10%' }]}>
                        <Text size={16} onPress={() => navigate("UpdateProfile")}>
                            Edit
                        </Text>
                    </View>
                </View>
            );
        default:
            null;
    }

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: app,
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    row: {
        flexDirection: 'row',
    }
})
