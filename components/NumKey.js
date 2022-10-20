import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Key from './Key';

export default class NumKey extends Key {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                fontSize: 48,
                backgroundColor: "#ff0000"
            }
        }
    }
}
