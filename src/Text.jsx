import React from 'react';
import View from '@gag/view';

class Text extends React.Component{
  static defaultProps = {
    Component: 'span',
  };
  render() {
    return <View {...this.props}/>;
  }
}

Text.displayName = "Text";
module.exports=Text;
