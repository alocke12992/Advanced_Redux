import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox)
  })

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box')
  })

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect(component.find('button')).exist
  })

  describe('Entering some Text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment')
    })

    it('shows the text entered', () => {
      expect(component.find('textarea')).to.have.value('new comment')
    })

    it('clears input on submit', () => {
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })
})