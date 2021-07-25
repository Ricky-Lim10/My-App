import React, { Component } from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            interests:'',
            work:'',
            username: "",
            contact:''
        }
    }

    getUserdetails = () => {
        var username = firebase.auth().currentUser.username;
        db.collection("users")
        .where("user_name", "==", username)
        .get()
        .then((snapchat) => {
            this.getSnapshotBeforeUpdate.forEach((doc) =>{
                var data = doc.data();
                this.setState({
                    username: data.user_name, 
                    firstname: data.first_name,
                    lastName: data.last_name,
                    contact: data.contact,
                    interests: data.interests,
                    work: data.work
                });
            });
        });
    };

    updateUserDetails = () => {
        db.collection("users").doc(this.state.docId).update({
            username: this.state.user_name,
            first_name: this.state.firstname,
            last_name: this.state.lastName,
            contact: this.state.contact,
            interesets: this.state.interests,
            work: this.state.work
        });

        Alert.alert("Profile Updated");
    };

    componentdidMount() {
        this.getUserdetails();
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <MyHeader title="Settings" navigation ={this.props.navigation}/>
                <View style ={{flex:1,width: "75%", alignItems: "Center"}}>
                    
                </View>
            </View>
        );
    }
}