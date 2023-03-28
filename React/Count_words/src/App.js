import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      words: ''
    }
  }

  onCountWords = () => {
      this.setState(state => ({
        words:state.name
      }
    ))      
  }

  onValueChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value,
    })
}

  render() {
    const words = this.state.words.trim().split(/\s+/);;
    const {name} = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <textarea 
        placeholder='Write!'
        name="name" 
        value={name}
        onChange={this.onValueChange}>
        </textarea>
        <button onClick={this.onCountWords}>Count words</button>
        <p>Word count: {words.length}</p>
      </header>
    </div>
    )
  }
}

export default App;