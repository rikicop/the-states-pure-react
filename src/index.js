import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class CountingParent extends React.Component {
  
  state = {
    actionCount: 0
  };

  handleAction = (action) => {
    console.log('Child says', action);
    
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  handleRemove = (action) => {
    console.log('Child says', action);
    
    this.setState({
      actionCount: 0
    });
  }
  render() {
    return (
      <div>
        <Child onAction={this.handleAction} onRemove={this.handleRemove}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

function Child({ onAction, onRemove }) {
  return (
    <>
      <button onClick={onAction}>
        Click Me!
      </button><br />
      <button onClick={onRemove}>
        Borrar!
      </button>
    </>
  );
}

const Page = () => (
  <div>
    <CountingParent />

  </div>
)

ReactDOM.render(<Page />, document.querySelector('#root'));