import {SAVE_COMMENT} from './types';

export const saveComment = (comment) => {
  debugger
  return (
    {
      type: SAVE_COMMENT,
      data: comment
    }
  )
}