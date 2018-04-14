import React from 'react'
import {Button, Form} from 'semantic-ui-react';

export default class CommentBox extends React.Component {
  render() {

    return (
      <Form>
        <Form.TextArea />
        <Button>Submit</Button>
      </Form>
    )
  }
} 