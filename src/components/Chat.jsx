import React from 'react';
import PropTypes from 'prop-types';
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
  } = props;

  const renderPost = key => {
    const post = posts[key];

    return (
      <Row key={key} className="post-item">
        <div className="post-item-author">
          Blake
          <span className="post-item-timestamp">5 / 25 / 2018 5:00PM</span>
        </div> 
        <div className="post-item-message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae asperiores dolores autem velit officiis, non, ipsa corporis. Voluptatum nobis, quod fugiat, nemo, aliquid, labore repellat doloremque rerum reiciendis accusantium itaque!
        </div>
      </Row>
    );
  }
  return (
    <div className="app-chat">
      <Row>
        <Col className="app-chat-container" xsOffset={1} xs={10} smOffset={2} sm={8}>
          <div id="chat" className="posts-container">
            {postIds.map(renderPost)}
          </div>
          <div className="message-container">
            <Row>
              <Col md={9} sm={12}>
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
              <Col md={3} sm={12}>
                <Button block={12} onClick={handleSubmit}>
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
}

export default Chat;