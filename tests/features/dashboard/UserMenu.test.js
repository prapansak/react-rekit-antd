import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { UserMenu } from 'src/features/dashboard/UserMenu';

describe('dashboard/UserMenu', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <UserMenu {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-user-menu').node
    ).to.exist;
  });
});
