import React, { Component } from 'react'
import './App.css'
// import 'rc-slider/assets/index.css'
import { DenseAppBar, SnackBar } from './components'
import { PresetButtonGroup, SleepTimeGroup, BrightnessSlider } from './groups'
import { Flex, Box } from 'rebass'
import { mapper } from './lib'

type myState = { value: number }
class App extends React.Component<{}, myState> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0
    }
    this.onSliderChange = this.onSliderChange.bind(this)
    this.makeApiRequest = this.makeApiRequest.bind(this)
  }
  ws = new WebSocket('ws://localhost:6000/websocket')

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.setState({ value: message.value })
    }
  }

  onSliderChange = (value: number) => {
    this.ws.send(JSON.stringify({ value: value }))
    this.setState({ value })
  }

  makeApiRequest = (value: number) => {
    this.onSliderChange(value)
    console.log('123')
    fetch('http://localhost:5000/changelight', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        brightness: mapper(value)
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <DenseAppBar />
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Box width={[1 / 2]}>
            <BrightnessSlider
              value={this.state.value}
              onSliderChange={this.onSliderChange}
              onFinished={this.makeApiRequest}
            />
          </Box>
          <Box width={[1 / 2]}>
            <PresetButtonGroup change={this.makeApiRequest} />
          </Box>
        </Flex>
        <SleepTimeGroup change={this.makeApiRequest} />
      </React.Fragment>
    )
  }
}

export default App
