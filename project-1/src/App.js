import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  state = {
    name: 'Lucas Vieira',
    counter: 0
  };


  handlePClicks = () => {
    this.setState({ name: 'Lucas' })
  }

  handleAClicks = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClicks}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClicks}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
