import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'

const AddToCard = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fafafc" }}>
            <View style={styles.Container}>
                <View style={styles.imageBox}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={{ uri: 'https://img.freepik.com/premium-vector/shopping-concept-cart-around-gift-box-hand-bag-icon-with-soft-color-solid-line-style-vector-design-illustration_197170-1598.jpg?w=740' }}
                    />
                </View>
                <View style={styles.TextCard}>
                    <View style={styles.RawOne}>
                        <Text style={[styles.heading, styles.TextCentre]}>Added to Card</Text>
                    </View>
                    <View style={styles.RawOne}>
                        <Text style={[styles.Para, styles.TextCentre]}>Your Order is added in Card successfully, if you need help let us know</Text>
                    </View>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#fafafc",
        alignItems: "center",
        borderRadius: 20,

    },
    imageBox: {
        alignItems: "center"
    },
    heading: {
        color: "#030047",
        fontWeight: "bold",
        fontSize: 40
    },
    TextCentre: {
        textAlign: "center"
    },
    Para: {
        fontSize: 20,
        marginTop: 10
    },
    TextCard: {
        width: "85%"
    }
})

export default AddToCard
