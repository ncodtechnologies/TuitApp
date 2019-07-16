import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { inputBorderColor, gradientStart, gradientEnd } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';
import LinearGradient from "react-native-linear-gradient"

export default class TATextInput extends React.Component {
  render() {
    return (
          <TouchableOpacity>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[gradientStart, gradientEnd]}  style={styles.box}>
                  <Text style={{color:'white',fontSize: inputFontSize,}}> {this.props.title} </Text>
            </LinearGradient>
          </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  box:{
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    backgroundColor:'orange',
    alignItems:'center',
    justifyContent:'center',
  },
});