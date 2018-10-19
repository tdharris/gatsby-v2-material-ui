import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px',
  },
  iconWrapper: {
    margin: '36px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    width: '36px',
    height: '36px',
  },
  iconWrapperVertical: {
    float: 'none',
  },
  iconVertical: {
    width: '61px',
    height: '61px',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
  error: {
    color: theme.palette.error.main,
  },
})

class InfoArea extends Component {
  render() {
    const { classes, title, description, iconColor, vertical } = this.props
    const iconWrapper = classNames({
      [classes.iconWrapper]: true,
      [classes[iconColor]]: true,
      [classes.iconWrapperVertical]: vertical,
    })
    const iconClasses = classNames({
      [classes.icon]: true,
      [classes.iconVertical]: vertical,
    })
    return (
      <div className={classes.root}>
        <div className={iconWrapper}>
          <this.props.icon className={iconClasses} />
        </div>
        <div className={classes.descriptionWrapper}>
          <Typography variant="title" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" align="center">
            {description}
          </Typography>
        </div>
      </div>
    )
  }
}

InfoArea.defaultProps = {
  iconColor: 'primary',
}

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'error']),
  vertical: PropTypes.bool,
}

export default withStyles(styles)(InfoArea)
