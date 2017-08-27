import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Template } from 'src/features/home/Template';

describe('home/Template', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Template {...props} />
    );

    expect(
      renderedComponent.find('.home-template').node
    ).to.exist;
  });
});
