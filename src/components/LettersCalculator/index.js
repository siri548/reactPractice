// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {
    count: 0,
    inputText: '',
  }

  onTextCount = () => {
    this.setState(prevState => ({
      count: prevState.inputText.length,
    }))
  }

  render() {
    const {count, inputText} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="para" for="input">Enter the Phrase</label>
          <input
            type="/text"
            className="input-box"
            id="input"
            value={inputText}
            placeholder="calculator"
            onChange={event => {
              this.setState({inputText: event.target.value}, this.onTextCount)
            }}
          />
          <p className="box">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
