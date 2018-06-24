import React from 'react';
import YS from '../../images/homepage.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Welcom to my page (under construction!)
        <br />
        <img src={YS} width={1200} height={800} mode='fit' />
      </div>
    );
  }
}
