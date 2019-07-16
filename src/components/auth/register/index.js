import * as React from 'react';
import { Text, View, StyleSheet,Dimensions,ScrollView } from 'react-native';
import TATextInput from '../../../TAPages/TAComponents/RoundedComponents/TextInput';
import TAPassword from '../../../TAPages/TAComponents/RoundedComponents/Password';
import TAHeading from '../../../TAPages/TAComponents/Heading/heading';
import TAPicker from '../../../TAPages/TAComponents/RoundedComponents/Picker';
import TAButton from '../../../TAPages/TAComponents/RoundedComponents/Button';
import TATriangleButton from '../../../TAPages/TAComponents/Other/triangleButton';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'column',padding:25,}} >
            <View style={{padding:10,alignItems:'center'}}>
                  <TAHeading caption="Register"/>
            </View>
            <View style={{padding:10,}}>
                  <TATriangleButton/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Full Name"/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="Email"/>
            </View>
            <View style={{padding:10,}}>
                  <TATextInput _placeholder="PhoneNumber"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPassword/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Select State"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Language"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Class"/>
            </View>
            <View style={{padding:10,}}>
                  <TAPicker _placeholder="Syllabus"/>
           </View>
            <View style={{padding:10,}}>
                  <TAButton title="Register" />
           </View>
        </View>
        </ScrollView>
    );
  }
}
