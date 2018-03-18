import React from 'react';
import PropTypes from 'prop-types';
import { format as formatDate } from 'date-fns';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  flex: 1;
  height: 90vh;
  @media(max-width: 700px) {
    width: 90%;
  }
`;

const PostWrapper = styled.div`
  background-color: white;
  overflow: scroll;
  height: 55vh;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #495057;
`;

const ActionsWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const ActionsInput = styled.input.attrs({
  type: 'text',
})`
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  margin-bottom: 20px;
`;

const ActionsButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid #ced4da;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #495057;
  width: 200px;
  cursor: pointer;
  margin: 0 auto;
`;

const PostItem = styled.div`
  border-top: 1px solid #ced4da;
  margin-top: 15px;
  padding-top: 15px;
`;

const PostItemDetails = styled.div`
  span {
    font-weight: 600;
  }
`;

const Chat = (props) => {
  const {
    author,
    handleChange,
    handleSubmit,
    message,
    postIds,
    posts,
    postsLoading,
  } = props;

  const renderPost = key => {
    const post = posts[key];
    const timestamp = formatDate(post.time, 'MMMM Do YYYY, h:mm:ss');

    return (
      <PostItem>
        <PostItemDetails>
          <span>{post.author}</span>
          &nbsp;
          |
          &nbsp;
          <span>
            {timestamp}
          </span>
        </PostItemDetails>
        <div>
          {post.message}
        </div>
      </PostItem>
    );
  };

  return (
    <ChatWrapper>
      <PostWrapper id="chat">
        {postsLoading && <div>Loading...</div>}
        {postIds.map(renderPost)}
      </PostWrapper>
      <ActionsWrapper>
        <ActionsInput value={message} name="message" onChange={handleChange} placeholder="Message" />
        <ActionsInput value={author} name="author" onChange={handleChange} placeholder="Author" />
        <ActionsButton onClick={handleSubmit}>
          Send Message
        </ActionsButton>
      </ActionsWrapper>
    </ChatWrapper>
  );
};

Chat.PropTypes = {
  author: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  postIds: PropTypes.array.isRequired,
  posts: PropTypes.object.isRequired,
  postsLoading: PropTypes.bool.isRequired,
};

export default Chat;
