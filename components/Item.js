import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text style={styles.view}> {this.props.text} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: { fontSize: 48, }
});