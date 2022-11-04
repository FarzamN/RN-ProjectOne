import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Menu from "../Components/Menu"


const Home = (Props) => {
    return (
        <View style={styles.HomeMain}>
            <View style={styles.ImgBox}>
                <Image
                    style={styles.homeImg}
                    source={require("./Images/Home-img.png")} />
            </View>
            <View style={styles.TextBox}>
                <Text style={styles.headingOne}>Welcome to</Text>
                <Text style={styles.headingTwo}>{Props.BrandName} </Text>
                <Text style={styles.HomePara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus eius modi dolorum dignissimos officiis provident assumenda cumque placeat omnis!</Text>
            </View>
            <View style={{
                justifyContent: "flex-end",
                alignItems: "flex-end"
            }}>
                <Menu />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HomeMain: {
        // height: "100%",
        // justifyContent: "center"
    },
    ImgBox: {
        alignItems: "center",
        marginTop: 20
    },
    TextBox: {
        marginLeft: 40,
        marginTop: 10
    },
    homeImg: {
        width: 300,
        height: 200,
        borderRadius: 20
    },
    headingOne: {
        fontSize: 20,
        color: "#e28743",
        marginTop: 5
    },
    headingTwo: {
        fontSize: 40,
        color: "#f9a006",
        marginTop: 5,
        fontWeight: "bold"
    },
    HomePara: {
        fontSize: 15,
        color: "#000",
        lineHeight: 22,
        marginTop: 10
    }
})



export default Home