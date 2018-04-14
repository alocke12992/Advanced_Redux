import {SAVE_COMMENT} from './types';

export function saveComment(comment) {
  debugger
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}