import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ConnectedDefaultPage, { HomePage } from 'src/features/home/HomePage';


describe('features/home/DefaultPage', () => {
  it('redux connect works', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const store = createStore(state => state, pageProps);

    const wrapper = render(
      <Provider store={store}>
        <ConnectedDefaultPage />
      </Provider>
    );

    expect(
      wrapper.find('.home-home-page').length
    ).to.equal(1);
  });

  it('should render node with correct class name', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...pageProps} />
    );

    expect(
      renderedComponent.find('.home-home-page').node
    ).to.exist;
  });

  it('should disable fetch button when fetching reddit', () => {
    const pageProps = {
      home: {
        fetchRedditReactjsListPending: true,
      },
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...pageProps} />
    );

    expect(
      renderedComponent.find('.btn-fetch-reddit[disabled]').node
    ).to.exist;
  });

  it('should show error if fetch failed', () => {
    const pageProps = {
      home: {
        fetchRedditReactjsListError: new Error('server error'),
      },
      actions: {},
    };
    const renderedComponent = shallow(
      <HomePage {...pageProps} />
    );

    expect(
      renderedComponent.find('.fetch-list-error').node
    ).to.exist;
  });

  // it('counter actions are called when buttons clicked', () => {
  //   const pageProps = {
  //     home: {},
  //     actions: {
  //       counterPlusOne: sinon.spy(),
  //       counterMinusOne: sinon.spy(),
  //       resetCounter: sinon.spy(),
  //       fetchRedditReactjsList: sinon.spy(),
  //     },
  //   };
  //   const renderedComponent = shallow(
  //     <DefaultPage {...pageProps} />
  //   );
  //   renderedComponent.find('.btn-plus-one').simulate('click');
  //   renderedComponent.find('.btn-minus-one').simulate('click');
  //   renderedComponent.find('.btn-reset-counter').simulate('click');
  //   renderedComponent.find('.btn-fetch-reddit').simulate('click');
  //   expect(pageProps.actions.counterPlusOne).to.have.property('callCount', 1);
  //   expect(pageProps.actions.counterMinusOne).to.have.property('callCount', 1);
  //   expect(pageProps.actions.resetCounter).to.have.property('callCount', 1);
  //   expect(pageProps.actions.fetchRedditReactjsList).to.have.property('callCount', 1);
  // });
});
