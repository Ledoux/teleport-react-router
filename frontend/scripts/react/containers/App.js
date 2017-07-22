import React, { Component } from 'react'

class App extends Component {
  render () {
    const { children,
      pathname
    } = this.props
    return (
      <div className='app'>
        {children}
      </div>
    )
  }
}

export default App
