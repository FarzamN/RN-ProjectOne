import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.Logo}>
            <TouchableOpacity onPress={() => navigation.navigate("Shirt")}>
                <Image
                    style={styles.ShirtLogo}
                    source={require("./Images/Shirt.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Pant") }}>
                <Image
                    style={styles.PantLogo}
                    source={require("./Images/Pant.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Shoes") }}>
                <Image
                    style={styles.ShoesLogo}
                    source={require("./Images/Shoes.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Jacket") }}>
                <Image
                    style={styles.JacketLogo}
                    source={require("./Images/Jacket.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Logo: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#cee2e0",
        justifyContent: "space-evenly",
        marginTop: 150

    },
    ShirtLogo: {
        width: 100,
        height: 100
    },
    PantLogo: {
        width: 100,
        height: 65
    },
    ShoesLogo: {
        width: 100,
        height: 70
    },
    JacketLogo: {
        width: 65,
        height: 85,
        marginBottom: 20
    }
})

export default Menu;