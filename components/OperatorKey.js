import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Key from './Key';

export default class OperatorKey extends Key {
    constructor(props) {
        super(props);

        let style2 = { ...this.state.style }
        style2.backgroundColor = "#aaaaaa"
        this.state = {
            style: style2
        }
    }
}
