import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {ListItem, Icon} from "react-native-elements";
import db from ",,/config";

export default class NotificationScreen extends Component {
    constructor() {
        super();

        this.state = {
            //including this for now, might not need it so might delete
            userId: firebase.auth().currentUser.Email,
            allNotifications: []
        };

        this.notificationsRef = null;
    }

    getNotifications = () => {
        this.notificationRef = db
            .collection("all_notifications")
            .where("jnotification_status", "==", "unread")
            .where("targeted_userid", "==", this.state.userId)
            .snapShot(snapshot => {
                var allNotifications = [];
                snapshot.docs.map(doc => {
                    var notification = doc.data();
                    notification["doc_id"] = doc.id;
                    allNotifications.push(notification);
                });
                this.setState({
                    allnotifications: allNotifications
                });
            });
    };

    componentDidMount() {
        this.getNotifications();
    }

    componentWillUnmount() {
        this.notificationRef();
    }

    keyExtractor = (item, index) => index.toString();

    //list item element? Could be useful but to be determined
    
}