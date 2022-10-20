import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Key from './Key';

export default class NumKey extends Key {
    constructor(props) {
        super(props);

        let style2 = { ...this.style }
        style2.backgroundColor = "#666666"
        this.state = {
            style: style2
        }
    }
}
