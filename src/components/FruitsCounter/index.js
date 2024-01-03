import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    bananasCount: 5,
    mangoesCount: 4,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state

    return (
      <div className="app-container">
        <div className="fruits-counter">
          <div className="heading">
            <h1 className="count-text">
              Bob ate
              <span className="count-text count"> {mangoesCount} </span>
              <span className="count-text"> mangoes </span>
              <span className="count-text count"> {bananasCount} </span>
              <span className="count-text"> bananas </span>
            </h1>
          </div>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
