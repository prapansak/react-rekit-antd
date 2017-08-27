import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Documents } from 'src/features/dashboard/Documents';

describe('dashboard/Documents', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Documents {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-documents').node
    ).to.exist;
  });
});
