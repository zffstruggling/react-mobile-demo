import React from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        Component: null,
      };
    }

    async componentDidMount() {
      const { default: Component } = await importComponent();

      this.setState({
        Component,
      });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
