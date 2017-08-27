import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Template } from 'src/features/dashboard/Template';

describe('dashboard/Template', () => {
  it('renders node with correct class name', () => {
    const props = {
      dashboard: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Template {...props} />
    );

    expect(
      renderedComponent.find('.dashboard-template').node
    ).to.exist;
  });
});
