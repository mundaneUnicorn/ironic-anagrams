import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  AsyncStorage,
  TouchableHighlight,
  Stylesheet
} from 'react-native';

import styles from '../styles/CommentSceneStyles';

export default class CommentScene extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{paddingTop:500}}>
        <TextInput placeholder={ `Enter a comment...` } />
      </View>
    )
  }
}