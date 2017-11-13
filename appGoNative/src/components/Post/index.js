import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Post = ({ post }) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postAutor}>{post.autor}</Text>
    </View>
    <Text style={styles.postText}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    autor: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
