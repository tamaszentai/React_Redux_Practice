import React, { useState } from "react";
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types';

const Postform = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      title: title,
      body: body
    }

    props.createPost(post);
  }

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title: </label>
          <br />
          <input type="text" name="title" onChange={titleChangeHandler} value={title}/>
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea name="body" onChange={bodyChangeHandler} value={body}/>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
