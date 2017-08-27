import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SigninModal } from 'src/features/authentication/SigninModal';

describe('authentication/SigninModal', () => {
  it('renders node with correct class name', () => {
    const props = {
      authentication: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <SigninModal {...props} />
    );

    expect(
      renderedComponent.find('.authentication-signin-modal').node
    ).to.exist;
  });
});
