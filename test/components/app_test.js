import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App', () => {
  // Use 'it' to test a single attribute of a target
  // The string inside here is only used for output in the console if it passes
  it('shows the correct text', () => {
    // Create an instance of App
    const component = renderComponent(App)
    // Use 'expect' to make an 'assertion' about target
    expect(component).to.contain('React simple starter');
  })

  it('renders a comment box', () => {
    const component = renderComponent(App)
    expect(component.find('.comment-box')).to.exist
  })
})

