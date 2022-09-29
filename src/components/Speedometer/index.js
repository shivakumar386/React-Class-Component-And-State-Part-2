import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="images"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="paragraph-two">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button button-one"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button button-two"
            onClick={this.onBreake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
