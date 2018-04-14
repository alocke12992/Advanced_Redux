import React from 'react';
import {connect} from 'react-redux'

const CommentList = (props) => {
  const list = props.comments.map(comment =>
    <li key={comment}>{comment}</li>
  )

  return (
    <ui className='comment-list'>
      {list}
    </ui>
  )
}

const mapStateToProps = (state) => {
  return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentList)