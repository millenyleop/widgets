import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Meio() {
    return (
        <View style={styles.content}>
            <Text style={styles.title}></Text>
            <Text style={styles.paragraph}>
                Theo willy faz aniversário no dia 30 de abril, tem 5 aninhos e adora coisas novas
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('/')}
                    style={styles.image}
                />
                <Image
                    source={require('/')}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFFF", // Rosa claro
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FF69B4", // Rosa médio
    },
    paragraph: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 5,
        borderRadius: 10,
    },
});

export default Meio;