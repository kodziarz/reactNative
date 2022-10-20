import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Key extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: styles.default
        };
    }

    render() {
        return (
            <View style={this.state.style}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => { this.props.onClick(this.props.value) }}>
                    <Text> {this.props.text} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: { fontSize: 48, backgroundColor: "#ff0000", flex: 1 }
});