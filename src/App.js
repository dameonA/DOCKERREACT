import './App.css';
import React from 'react'
const fs = require('fs')

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/list')
    const json = await response.json()
    console.log('hello')
    console.log(json)
    this.setState({items: json})
  }


  render() {
    return (
    <div>
      <h3>Shopping List</h3>
      <table border="5">
        {
          this.state.items.map(
            item =>
              <tr>
                <td> {item.qty+' '+item.units+' of '+item.item} </td>
              </tr>
          )
        }
      </table>
      <button type='button'>Add Item</button>
    </div>)
  }
}

export default App;
