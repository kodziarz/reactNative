import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NumKey from './NumKey';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOpreations: "",
            currentResult: ""
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar />
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1 }}> {this.state.currentOpreations} </Text>
                    <Text style={{ flex: 1 }}> {this.state.currentResult} </Text>
                </View>
                <NumKey style={{ flex: 1 }} text="xdd" />
            </View>
        );
    }
}
