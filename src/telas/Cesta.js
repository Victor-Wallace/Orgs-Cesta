import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native"
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

function Cesta() {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Text style={styles.titulo}>Detalhes da cesta</Text>

            <View>
                <Text>Cesta de verduras</Text>
                <Text>Jenny Jack Farm</Text>
                <Text>Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha</Text>
                <Text>R$ 40,00</Text>
            </View>
        </>
    )

}

export default Cesta;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo:{
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }

});