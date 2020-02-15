import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class TransferMoney extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Transfer Money!</Text>
            </View>
            
        );
    }
}
export default TransferMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});