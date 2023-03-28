import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '0',
    }
  }

onValueChange = (e) => {
  this.setState({
      [e.target.number] : e.target.value,
  })
}

sqrt = (e) => {
  const {number} = this.state;
  const sqrt = Math.sqrt(number).toFixed(3);
  if(sqrt >= "1"){
    this.setState({number: "√" + sqrt});
  }
}


btnClick = (e) => {
  const {number} = this.state;

  if (number === "0"){
    this.setState({number: e});
  }else if(number >= "1"){
    this.setState({ number: number + e });
  } else if(number === "-"){
    this.setState({ number: number + e });
  }
  // else if(number === e + (/[^\w\s]/g, "")){
  //   this.setState({ number: number + "0" });
  // }
}

onClear = () =>{
  this.setState({number: "0"});
}

onAdd = (e) => {
  const {number} = this.state;
  const results = eval(number);

  this.setState({number: eval(number)});
  if (results === Infinity) {
      this.setState({ number: "0" });
  }
  // else if(number ===  (/[^\w\s]/g, "") + e){
  //   this.setState({ number: number + e });
  // }
}

  render() {
    const { number } = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <input type="text" id="display" value={number}onChange={this.onValueChange}/>
      <div className="container">
      <div>
            <input type="button" id="display" value="7"onClick={() => this.btnClick('7')}/>
            <input type="button" id="display" value="8"onClick={() => this.btnClick('8')}/>
            <input type="button" id="display" value="9"onClick={() => this.btnClick('9')}/>
            <input type="button" id="display" value="/"onClick={() => this.btnClick('/')}/>  
        </div>       
        <div>
            <input type="button" id="display" value="4"onClick={() => this.btnClick('4')}/>
            <input type="button" id="display" value="5"onClick={() => this.btnClick('5')}/>
            <input type="button" id="display" value="6"onClick={() => this.btnClick('6')}/>
            <input type="button" id="display" value="*"onClick={() => this.btnClick('*')}/>
        </div>
        <div>
          <input type="button" id="display" value="1"onClick={() => this.btnClick('1')}/>
          <input type="button" id="display" value="2"onClick={() => this.btnClick('2')}/>
          <input type="button" id="display" value="3"onClick={() => this.btnClick('3')}/>
          <input type="button" id="display" value="+" onClick={() => this.btnClick('+')}
          />
        </div>
        <div>
          <input type="button" id="display" value="-"onClick={() => this.btnClick('-')}/>
          <input type="button" id="display" value="0"onClick={() => this.btnClick('0')}/>
          <input type="button" id="display" value="C" onClick={this.onClear}/>
          <input type="button" id="display" value="="onClick={this.onAdd}/>
        </div>
        <div>
        <input type="button" id="display" value="√" onClick={() => this.sqrt('√')}/>
        </div>
      </div>
      </header>
    
    </div>
    )
  }
}

export default App;