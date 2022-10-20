import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Key extends Component {
    style = styles.default

    constructor(props) {
        super(props);
        this.state = {
            style: this.style
        };
    }

    render() {
        return (
            <View style={this.state.style}>
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => { this.props.onClick(this.props.value) }}>
                    <Text style={{ flex: 1, fontSize: 48, textAlign: "center", textAlignVertical: "center" }}> {this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    default: { backgroundColor: "#ff0000", flex: 1 }
});