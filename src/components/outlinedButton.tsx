import React from 'react'
import PropTypes, { any } from 'prop-types'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = () => ({
  button: {
    margin: '.5em'
  },
  input: {
    display: 'none'
  }
})

export interface Props extends WithStyles<typeof styles> {
  onClick: Function
  value: number
  content: string
}

function OutlinedButtons(props: Props) {
  const { classes, onClick, value, content } = props
  return (
    <Button
      size="medium"
      onClick={() => {
        onClick(value)
      }}
      variant="outlined"
      color="inherit"
      className={classes.button}
    >
      {content}
    </Button>
  )
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired
} as any

export default withStyles(styles)(OutlinedButtons)
