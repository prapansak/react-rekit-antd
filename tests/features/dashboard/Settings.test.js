import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Settings } from 'src/features/dashboard/Settings';

describe('dashboard/Settings', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Settings {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-settings').node
    ).to.exist;
  });
});
