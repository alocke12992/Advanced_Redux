import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions';

describe('actions', () => {
  it('has the correct type', () => {
    const action = saveComment()
    expect(action.type).to.equal(SAVE_COMMENT)
  })
  it('has the correct return data', () => {
    const action = saveComment('New Comment')
    expect(action.data).to.equal('New Comment')
  })
})