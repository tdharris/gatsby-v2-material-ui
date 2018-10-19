import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white
  },
  link: {
    color: 'inherit !important',
    textDecoration: 'none !important'
  },
  contact: {
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    backgroundColor: '#2B2B2B',
    marginRight: theme.spacing.unit,
     '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey[900]
    }
  },
  title: {
    marginBottom: theme.spacing.unit * 4
  }
})

class Footer extends Component {
  state = {}

  getContactButtons() {
    const { classes, contactItems } = this.props
    return (
      <Grid container className={classes.contact} direction='column' justify='flex-start'>
          {contactItems.map(item => {
            return (
              <Grid item key={item.description}>
                <Link to={item.to} className={classes.link}>
                  <Grid container className={classes.contact} alignItems='center'>
                    {item.icon &&
                      <Grid item>
                        <IconButton color='inherit' className={classes.icon} aria-label="Delete">
                          {item.icon}
                        </IconButton>
                      </Grid>
                    }
                    {item.label &&
                      <Grid item>
                        <Typography variant='subheading' color='inherit'>
                          {item.label}
                        </Typography>
                        {item.label2 &&
                          <Typography variant='subheading' color='inherit'>
                            {item.label2}
                          </Typography>
                        }
                      </Grid>
                    }
                  </Grid>
                </Link>
              </Grid>
            )
          })}
      </Grid>
    )
  }

  render() {
    const { classes, title, contactItems, copyright, footerProps } = this.props
    return (
      <div className={classes.root} {...footerProps}>
        <Grid container justify='center'>
          <Grid item className={classes.title} xs={11} md={5} lg={3}>
            <Typography variant={title.variant} color='inherit' gutterBottom {...title.props}>
              {title.label}
            </Typography>
            {copyright &&
              <Typography variant='caption' color='inherit'>
                {copyright}
              </Typography>
            }
          </Grid>
          <Grid item xs={11} md={5} lg={3}>
            {contactItems &&
              this.getContactButtons()
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

Footer.defaultProps = {
  title: {
    label: 'My App',
    variant: 'headline'
  },
  copyright: `Copyright © ${new Date().getFullYear()}.`,
  contactItems: [{
    description: 'phone',
    label: '(202) 555-0179',
    icon: <PhoneIcon />,
    to: 'tel:5302421227'
  }, {
    description: 'location',
    label: '161 Rockland Street Woodside',
    label2: 'NY 11377',
    icon: <LocationOnIcon />,
    to: ''
  }]
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  footerProps: PropTypes.object,
  title: PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button']),
    props: PropTypes.object
  }),
  copyright: PropTypes.string,
  contactItems: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.object,
    label: PropTypes.string,
    to: PropTypes.string
  }))
}

export default withStyles(styles)(Footer)
