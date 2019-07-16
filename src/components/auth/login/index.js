import * as React from 'react';
import { Text, View, StyleSheet,Dimensions,ScrollView } from 'react-native';
import TATextInput from '../../../TAPages/TAComponents/RoundedComponents/TextInput';
import TAHeading from '../../../TAPages/TAComponents/Heading/heading';
import TAButton from '../../../TAPages/TAComponents/RoundedComponents/Button';
import TATriangleButton from '../../../TAPages/TAComponents/Other/triangleButton';
import TAAshBtn1 from '../../../TAPages/TAComponents/RoundedComponents/ashBtn1';
import TAAshBtn2 from '../../../TAPages/TAComponents/RoundedComponents/ashBtn2';

export default class App extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',padding:25,}} >
            <View style={{padding:10,alignItems:'center'}}>
                  <TAHeading caption="Login"/>
            </View>
            <View style={{padding:10,}}>
                  <TATriangleButton/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Mobile Number"/>
            </View>
            <View style={{padding:10,}}>
                  <TAButton title="Login" />
           </View>
           <View style={{padding:10,}}>
                  <TAAshBtn1/>
           </View>
           <View style={{padding:10,}}>
                  <TAAshBtn2/>
           </View>
        </View>
        </ScrollView>
    );
  }
}
