import react, {Component} from "react";
import {
View,
Text, 
TextInput, 
Stylesheet, 
TouchableOpacity, 
Alert, 
ScrollView,
Flatlist
} from "react-native"
import db from "../config";
import firebase from 'firebase';

export default class ProblemScreen extends Component {
    constructor() {
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            problem: "",
            reason: "",
            showFlatlist: false
        };
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7);
    }

    inputProblem(){
        //what to put
    }
}