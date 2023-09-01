import React, { Component } from 'react';

class RenderingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List of Items</h1>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RenderingComponent;
