import React, { Component } from 'react';
import{ View,Stylesheet, Text, TouchableOpacity, KeyboardAvoidingView, Alert, Modal, ScrollView} from 'react-native'



export default class WelcomeScreen extends Component {
    constructor(){
        super()
        this.state={
            username : '',
            password: '',
            isVisible: false,
            firstName:"",
            lastName:"",
            confrimPassword:"",
            interests:"",
            problems:"",
        }
    }

    userLogin = (username, password, confirmPassword) => {
        if (password !== confirmPassword) {
            return Alert.alert("Password doesn't match\nCheck your password")
        } else {
            firebase.auth().signInWithEmailAndPassword(username, password)
            .then(()=>{
                this.props.navigation.nabigate('ProblemScreen')
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage)
            })
        }

    }

}