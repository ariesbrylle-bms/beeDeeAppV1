import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class BuyLoad extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buy Load!</Text>
            </View>
            
        );
    }
}
export default BuyLoad;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});