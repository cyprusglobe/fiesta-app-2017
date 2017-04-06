import React, { Component } from 'react';
import codePush from 'react-native-code-push';

export default function syncEnchancer(WrappedComponent) {
  return class Enhance extends Component {
    componentDidMount() {
      console.log('[Enhancer] - View has been enhanced');
      codePush.sync({ mandatoryInstallMode: codePush.InstallMode.IMMEDIATE });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
