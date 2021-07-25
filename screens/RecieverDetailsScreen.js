import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import {Card, Header,Icon} from "react-native-elements"
import firebase from "firebase";
import {RfValue} from "react-native-responsive-fontize";
import db from "../config.js";

export default class RecieverDetailsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: firebase.auth().currentUser.email,
            userName: "",
            recieverId: this.props.navigation.getParam('details')["user_id"],
            problem: this.props.navigation.getParam('details')["problem"],
            //might need to add more, can't remember what
        }
    }

    getRecieverDetails() {
        db.collection("users")
        .where("email_id", "==", this.state.revieverId)
        .get()
        .then((snapshot)) => {
            snapshot.forEach((doc) =>{
                this.setState({
                    revievername: doc.data().first_name,
                    revieverContact: doc.data().contact,
                });
            });
        }
        
    }
    
}