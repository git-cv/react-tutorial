import React, { Component } from "react"

class Demo extends Component {
  state = { loading: false, msg: 'WAIT FOR IT...' }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("chuck-norris")}>{loading ? "Loading..." : "Call Async Chuck Norris"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

export default Demo