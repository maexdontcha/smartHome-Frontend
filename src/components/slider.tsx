import React, { Component } from 'react'
import Slider from 'rc-slider'
import { Flex, Box } from 'rebass'
import { SunSVG } from '../assets/sun'
import styled from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

const StyledSlider = styledComponentsTS<{}>(styled.div)`
  height: 300px;
  padding: 10px;
  touchAction: none;
  position: relative;
  span{
    position: absolute;
    bottom: 70px;
    left: 50%;
    height: 50px;
    width: 50px;
    transform: translateX(-25px);
  }
`
type myProps = {
  value: number
  onSliderChange: Function
  onFinished: Function
}

class BrightnessSlider extends React.Component<myProps, {}> {
  constructor(props: myProps) {
    super(props)
  }

  render() {
    const { value, onSliderChange, onFinished } = this.props
    return (
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <StyledSlider>
            <Slider
              vertical
              value={value}
              onChange={() => {
                onSliderChange
              }}
              onAfterChange={() => {
                onFinished
              }}
            />
            <span>
              <SunSVG opacity={value} />
            </span>
          </StyledSlider>
        </Box>
      </Flex>
    )
  }
}

export default BrightnessSlider
