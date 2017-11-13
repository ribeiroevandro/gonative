import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import styles from './styles';

import Header from '../Header';
import Post from '../Post';

import '../../config/ReactotronConfig';

console.tron.display({
  name: 'GoNative App',
  preview: 'Desafio 01',
  value: 'Primeiro App criado no curso GoNative da Rocket Seat',
  important: true,
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        autor: 'Evandro Ribeiro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Evandro Ribeiro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Evandro Ribeiro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.postContainer}>
          { this.state.posts.map(post => <Post key={post.id} post={post} />) }
        </ScrollView>
      </View>
    );
  }
}
