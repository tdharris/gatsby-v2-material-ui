import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Grid from '@material-ui/core/Grid'
import { Parallax } from 'react-parallax'
import site from '../../site-config'

const styles = theme => ({
  root: {},
  contentWrapper: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 10,
  },
})

class MainLayout extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.root}>
        <Header
          variant='center'
          color='transparent'
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          appBarProps={{
            position: 'fixed'
          }}
          navItems={site.navItems}
        />
        <Parallax
          bgImage='https://source.unsplash.com/random/1920x650/?business,dark'
          bgImageAlt='landingPageImage'
          strength={200}>
          <div style={{ height: '320px' }} />
        </Parallax>
        <Grid
          container
          className={classes.contentWrapper}
          justify='center'
          alignItems='flex-start'
          >
          <Grid item xs={11} md={10} lg={6}>
            {children}
          </Grid>
        </Grid>
        <Footer />
      </div>
     )
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
}

export default withRoot(withStyles(styles)(MainLayout))
