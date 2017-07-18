import * as React from 'react';

const style = require('./<%= names["component-name"] %>.css');

export interface <%= names['ComponentName'] %>Props {};

export interface <%= names['ComponentName'] %>State {};

export class <%= names['ComponentName'] %> extends React.Component<<%= names['ComponentName'] %>Props, <%= names['ComponentName'] %>State> {
  render() {
    return (<div className={style['<%= names["component-name"] %>']}></div>);
  }
}
