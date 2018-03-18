import React, { Component } from 'react';
import * as firebase from 'firebase';

import config from '../firebase-config';
import { Chat } from '../components';

class ChatContainer extends Component {
  state = {
    posts: {},
    postIds: [],
    postsLoading: true,
    message: '',
    author: '',
  };

  componentWillMount() {
    firebase.initializeApp(config);

    this.postsRef = firebase.database().ref('posts');

    this.postsRef.on('value', (snapshot) => {
      const posts = snapshot.val();

      this.setState({
        posts,
        postIds: Object.keys(posts),
        postsLoading: false,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.postIds.length !== this.state.postIds.length) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    const objDiv = document.getElementById('chat');

    objDiv.scrollTop = objDiv.scrollHeight;
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.message) return;

    this.postsRef.push({
      message: this.state.message,
      author: this.state.author || 'Anonymous',
      time: Date.now(),
    })
    .then(() => this.setState({ message: '' }));
  }

  render() {
    const props = {
      posts: this.state.posts,
      postIds: this.state.postIds,
      message: this.state.message,
      postsLoading: this.state.postsLoading,
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
    };

    return <Chat {...props} />;
  }
}

export default ChatContainer;