import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Col,
  Row,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

const Chat = (props) => {
  const {
    postIds,
    posts,
    handleSubmit,
    handleChange,
    postsLoading,
    message,
    author,
  } = props;

  const renderPost = key => {
    const post = posts[key];
    const timestamp = moment(post.time).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <Row key={key} className="post-item">
        <div className="post-item-author">
          {post.author}
          &nbsp;
          |
          &nbsp;
          <span className="post-item-timestamp">
            {timestamp}
          </span>
        </div>
        <div className="post-item-message">
          {post.message}
        </div>
      </Row>
    );
  }
  return (
    <div className="app-chat">
      <Row>
        <Col className="app-chat-container" xsOffset={1} xs={10} smOffset={2} sm={8}>
          <div id="chat" className="posts-container">
            {postsLoading && <div>Loading...</div>}
            {postIds.map(renderPost)}
          </div>
          <div className="message-container">
            <Row>
              <Col sm={12}>
                <FormGroup>
                  <FormControl
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Message"
                  />
                </FormGroup>
              </Col>
              <Col sm={12}>
                <FormGroup>
                  <FormControl
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </FormGroup>
              </Col>
              <Col sm={12}>
                <Button block onClick={handleSubmit}>
                  Send Message
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

Chat.PropTypes = {
  postIds: PropTypes.array.isRequired,
  posts: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  postsLoading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Chat;
