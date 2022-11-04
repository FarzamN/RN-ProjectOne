import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const BuyNow = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <View style={styles.Container}>
                <View style={styles.imageBox}>
                    <Image
                        style={{ width: 380, height: 200 }}
                        source={require("./BuyImg.png")}
                    />
                </View>
                <View style={styles.TextCard}>
                    <View style={styles.RawOne}>
                        <Text style={[styles.heading, styles.TextCentre]}>Order Sucess</Text>
                    </View>
                    <View style={styles.RawOne}>
                        <Text style={[styles.Para, styles.TextCentre]}>Your Packet will be sent to your adress, thanks for order</Text>
                    </View>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#fff",
        alignItems: "center",
    },
    imageBox: {
        alignItems: "center"
    },
    heading: {
        color: "#030047",
        fontWeight: "bold",
        fontSize: 40,
        marginVertical: 20
    },
    TextCentre: {
        textAlign: "center"
    },
    Para: {
        fontSize: 20
    },
    TextCard: {
        width: "85%"
    }
})

export default BuyNow
