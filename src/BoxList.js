import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        // {
        //   width: 200,
        //   height: 200,
        //   backgroundColor: 'red'
        // }
      ]
    };
    this.createBox = this.createBox.bind(this);
  }

  createBox(box) {
    let newBox = { ...box, id: uuid() };
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }));
    //... spread operator makes copy of the array and then add newBox or id
    // st is the current state
  }

  render() {
    return (
      <div>
        <NewBoxForm createBox={this.createBox} />
        <ul>
          {this.state.boxes.map(box => (
            <li>
              <Box
                width={box.width}
                height={box.height}
                backgroundColor={box.backgroundColor}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BoxList;
