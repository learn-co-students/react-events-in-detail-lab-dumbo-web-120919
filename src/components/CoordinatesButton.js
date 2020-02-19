import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let coordArr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordArr)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }

}