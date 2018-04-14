import React from 'react'
import {Button, Form} from 'semantic-ui-react';

export default class CommentBox extends React.Component {
  render() {

    return (
      <div className='comment-box'>
        <textarea />
        <button>Submit</button>
      </div>
    )
  }
} 