import * as React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import { inputBorderColor, gradientStart, gradientEnd } from '../../TAStyles/TAcolors';
import {inputBorderRadius} from '../../TAStyles/TAalignment';
import {inputHeight} from '../../TAStyles/TAalignment';
import {inputFontSize} from '../../TAStyles/TAalignment';
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:0,flexDirection:'column'}} >
            <View style={styles.container}>
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[gradientStart, gradientEnd]}  style={styles.boxLeft}>
                <Text style={{color:'white',fontSize: inputFontSize}}> Student </Text>
              </LinearGradient>
              <View style={styles.boxRight} >
                  <Text style={{fontSize: inputFontSize,alignItems:'center'}} >Teacher </Text>
              </View>
            </View>
            <LinearGradient style={[styles.triangle, this.props.style]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={[gradientStart, gradientEnd]} >
            </LinearGradient>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  boxLeft:{
    height:inputHeight,
    borderBottomLeftRadius: inputBorderRadius, 
    borderTopLeftRadius: inputBorderRadius, 
    borderColor:inputBorderColor,
    alignItems:'center',
    justifyContent:'center',
    flex: 0.5,
  },
  boxRight:{
    height:inputHeight,
    borderBottomRightRadius: inputBorderRadius, 
    borderTopRightRadius: inputBorderRadius, 
    borderColor:inputBorderColor,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    flex: 0.5,
  },
  container: {    
    height:inputHeight,
    borderRadius: inputBorderRadius, 
    fontSize: inputFontSize,
    borderColor:inputBorderColor,
    borderBottomWidth: 1,
    flexDirection: "row",
    borderColor: "red",
    zIndex: 3
  },


  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'orange',
    left:width/5,
    marginTop: -3,
    zIndex: 1
  }
});
