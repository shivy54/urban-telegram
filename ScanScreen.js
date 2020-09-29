import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Alert} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';





export default class ScanScreen extends Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions:null,
            scannedBookId:'',
        scannedStudentId:'',
            scanned:false,
            scannedData:'',
            ButtonState:'normal'
        }
    }
    //barcode app this imp.
    getCameraPermission=async(id)=>{
        const {status}  = await Permissions.askAsync(Permissions.CAMERA);


        this.setState({
            hasCameraPermissions:status === "granted",
            ButtonState:"clicked",
            scanned: false
        });
    }
    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.ButtonState;
  
        if (buttonState !== "normal" && hasCameraPermissions){
          return(
           <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          );
        }
  
        else if (buttonState === "normal"){
        return ( 
          <View>
              <TouchableOpacity
                  onPress={this.getCameraPermission}
                  style={styles.scanButton}
                  title="Bar Code Scanner">
                 <text>tyrubcv</text>
              </TouchableOpacity>
          </View>
        )
    }
    }
}
const styles = StyleSheet.create({
    scanButton:{
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
      },
    })