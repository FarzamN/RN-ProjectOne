import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const jacket = [
    { id: "1", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/one.png") },
    { id: "2", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/two.png") },
    { id: "3", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/three.png") },
    { id: "4", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/four.png") },
    { id: "5", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/five.png") },
    { id: "6", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/six.png") },
    { id: "7", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/seven.png") },
    { id: "8", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/eight.png") },
    { id: "9", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/nine.png") },
    { id: "10", brandName: "Louis Vuitton", stars: require("./JacketsImg/5stars.png"), ProduckName: "Winter wear", Price: "$300.00", buyNow: "Buy Now", discription: "cool windy weather is on its way.send him out the door in a jacket he wanats to wasr.Warm Zipper Hooded jacket", logo: require("./Images/Cart.png"), Image: require("./JacketsImg/ten.png") }
]

const Jacket = () => {
    const navigation = useNavigation();

    const shitsCard = ({ item }) => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff1d9" }}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image}
                            source={item.Image} />
                    </View>
                    <View style={styles.TextMainContainer}>
                        <View style={[styles.TextRawOne, styles.raw, styles.MB]}>
                            <Text style={styles.bName}>{item.brandName}</Text>
                            <Text style={styles.price}>{item.Price}</Text>
                        </View>
                        <View style={[styles.TextRawTwo, styles.M]}>
                            <Text style={styles.PName}>{item.ProduckName}</Text>
                        </View>
                        <View>
                            <Image style={styles.StarImage}
                                source={item.stars} />
                        </View>
                        <View style={[styles.TextRawThree, styles.MB]}>
                            <Text style={styles.discription}>{item.discription}</Text>
                        </View>
                        <View style={[styles.TextRawFour, styles.raw, styles.MB]}>
                            <TouchableOpacity onPress={() => { navigation.navigate("AddToCard") }}>
                                <Image style={styles.logo}
                                    source={item.logo} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("BuyNow") }}>
                                <Text style={styles.btn}>{item.buyNow}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={jacket}
            renderItem={shitsCard}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#fdb164",
        width: "90%",
        alignItems: "center",
        borderRadius: 20,

    },
    image: {
        width: 260,
        height: 400,
        borderRadius: 30
    },
    imageContainer: {
        borderRadius: 20,
        marginVertical: 10
    },
    TextMainContainer: {
        width: "80%"
    },
    StarImage: {
        width: 100,
        height: 25
    },
    MB: {
        marginBottom: 10
    },
    raw: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    discription: {
        // fontSize: 10,
        // textAlign: "center"
    },
    bName: {
        marginRight: 5,
        fontSize: 27,
        fontWeight: "bold",
        color: "#00003c"
    },
    price: {
        marginLeft: 5,
        fontSize: 23,
        fontWeight: "bold",
        color: "#fdbe7d"
    },
    PName: {
        marginLeft: 7
    },
    logo: {
        // widht: 3,
        // height: 3
    },
    btn: {

        textAlign: "center",
        color: "#fff",
        backgroundColor: "#fdbe7d",
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 20
    }
})

export default Jacket
