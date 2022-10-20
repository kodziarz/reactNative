import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NumKey from './NumKey';
import OperatorKey from './OperatorKey';
import { Dimensions } from 'react-native';

export default class Calculator extends Component {

    static SPECIAL_OPERATORS = {
        RESULT: "=",
        DELETE: "del",
        CLEAR: "C"
    }
    constructor(props) {
        super(props);
        this.state = {
            isPortrait: this.isPortrait(),
            currentOpreations: "",
            currentResult: "",
            keyboard: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [".", 0, Calculator.SPECIAL_OPERATORS.RESULT]
            ],
            operators: ["+", "-", "*", "/"]
        };

        Dimensions.addEventListener("change", () => {
            this.setState({
                isPortrait: this.isPortrait()
            })
        })
    }

    handleKeyClicked = (value) => {
        switch (value) {
            case Calculator.SPECIAL_OPERATORS.RESULT:
                this.calculateResult()
                break
            case Calculator.SPECIAL_OPERATORS.DELETE:
                this.setState({
                    currentOpreations: this.state.currentOpreations.slice(0, -1),
                    currentResult: ""
                })
                break
            case Calculator.SPECIAL_OPERATORS.CLEAR:
                this.setState({
                    currentOpreations: "",
                    currentResult: ""
                })
                break
            default:
                this.setState({ currentOpreations: this.state.currentOpreations + value })
                break
        }
    }

    calculateResult = () => {
        this.setState({ currentResult: eval(this.state.currentOpreations) })
    }

    render() {
        if (this.state.isPortrait)
            return this.renderPortrait()
        return this.renderLandscape()
    }

    renderPortrait = () => {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar />
                <View style={{ flex: 1 }}>
                    <Text style={{ flex: 1 }}> {this.state.currentOpreations} </Text>
                    <Text style={{ flex: 1 }}> {this.state.currentResult} </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 3 }}>
                        {this.state.keyboard.map((keys, i) => {
                            return <View key={i} style={{ flex: 1, flexDirection: "row" }}>
                                {keys.map((value, j) => {
                                    return <NumKey key={j} style={{ flex: 1 }}
                                        text={value} value={value} onClick={this.handleKeyClicked} />
                                })}
                            </View>
                        })}
                    </View>
                    <View style={{ flex: 1 }}>
                        <OperatorKey key={0} style={{ flex: 1 }}
                            text={"del"} value={Calculator.SPECIAL_OPERATORS.DELETE} onClick={this.handleKeyClicked} />
                        <OperatorKey key={1} style={{ flex: 1 }}
                            text={"C"} value={Calculator.SPECIAL_OPERATORS.CLEAR} onClick={this.handleKeyClicked} />
                        {this.state.operators.map((operator, i) => {
                            return <OperatorKey key={i + 2} style={{ flex: 1 }}
                                text={operator} value={operator} onClick={this.handleKeyClicked} />
                        })}
                    </View>
                </View>
            </View>
        );
    }

    renderLandscape = () => {
        return <View style={{ flex: 1 }}>
            <StatusBar />
            <View style={{ flex: 1 }}>
                <Text style={{ flex: 1 }}> {this.state.currentOpreations} </Text>
                <Text style={{ flex: 1 }}> {this.state.currentResult} </Text>
            </View>
            <View style={{ flex: 4, flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                    {this.state.keyboard.map((keys, i) => {
                        return <View key={i} style={{ flex: 1, flexDirection: "row" }}>
                            {keys.map((value, j) => {
                                return <NumKey key={j} style={{ flex: 1 }}
                                    text={value} value={value} onClick={this.handleKeyClicked} />
                            })}
                        </View>
                    })}
                </View>
                <View style={{ flex: 1 }}>
                    <OperatorKey key={0} style={{ flex: 1 }}
                        text={"Sqrt"} value={0} onClick={() => {
                            let currentResult = this.state.currentOpreations != "" ? eval(this.state.currentOpreations) : this.state.currentResult
                            this.setState({
                                currentOpreations: "",
                                currentResult: Math.sqrt(currentResult)
                            })
                        }} />
                    <OperatorKey key={1} style={{ flex: 1 }}
                        text={"Pow"} value={0} onClick={() => {
                            let currentResult = this.state.currentOpreations != "" ? eval(this.state.currentOpreations) : this.state.currentResult
                            this.setState({
                                currentOpreations: "",
                                currentResult: currentResult * currentResult
                            })
                        }} />
                    <OperatorKey key={2} style={{ flex: 1 }}
                        text={"sin"} value={0} onClick={() => {
                            let currentResult = this.state.currentOpreations != "" ? eval(this.state.currentOpreations) : this.state.currentResult
                            this.setState({
                                currentOpreations: "",
                                currentResult: Math.sin(currentResult)
                            })
                        }} />
                    <OperatorKey key={3} style={{ flex: 1 }}
                        text={"cos"} value={0} onClick={() => {
                            let currentResult = this.state.currentOpreations != "" ? eval(this.state.currentOpreations) : this.state.currentResult
                            this.setState({
                                currentOpreations: "",
                                currentResult: Math.cos(currentResult)
                            })
                        }} />
                </View>
                <View style={{ flex: 1 }}>
                    <OperatorKey key={0} style={{ flex: 1 }}
                        text={"del"} value={Calculator.SPECIAL_OPERATORS.DELETE} onClick={this.handleKeyClicked} />
                    <OperatorKey key={1} style={{ flex: 1 }}
                        text={"C"} value={Calculator.SPECIAL_OPERATORS.CLEAR} onClick={this.handleKeyClicked} />
                    {this.state.operators.map((operator, i) => {
                        return <OperatorKey key={i + 2} style={{ flex: 1 }}
                            text={operator} value={operator} onClick={this.handleKeyClicked} />
                    })}
                </View>
            </View>
        </View>
    }

    isPortrait = () => {
        let dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
}
