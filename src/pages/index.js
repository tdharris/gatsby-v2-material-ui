import React from 'react'
import PropTypes from 'prop-types'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '@material-ui/core/Button'
import { Parallax } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'
import InfoArea from '../components/InfoSection'
import config from '../../site-config'

const styles = theme => ({
  root: {},
  parallax: {
    color: theme.palette.common.white,
  },
  section: {
    padding: '120px 0',
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: '700',
  },
  gridContainer: {
    marginBottom: '80px',
  },
})

class Index extends React.Component {
  getParallaxSection() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Parallax
          bgImage="https://source.unsplash.com/random/1920x650/?business,dark"
          bgImageAlt="landingPageImage"
          strength={200}
          className={classes.parallax}
        >
          <div style={{ height: '320px' }} />
          <Grid container spacing={0} direction="row" justify="center" alignItems="flex-start">
            <Grid item xs={11} sm={11} md={10} lg={6}>
              <Typography variant="display1" gutterBottom color="inherit">
                Your Story Starts With Us
              </Typography>
              <Typography style={{ maxWidth: 600 }} variant="subheading" gutterBottom color="inherit">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                ante dapibus diam. Sed nisi. Nulla quis sem at nib.
              </Typography>
              <br />
              <Button
                color="primary"
                variant="contained"
                size="large"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />Watch video
              </Button>
            </Grid>
            {/* <Grid item xs={2} sm={6} md={5} lg={3}/> */}
          </Grid>
          <div style={{ height: '100px' }} />
        </Parallax>
      </div>
    )
  }

  getProductSection() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <Grid container justify="center" className={classes.gridContainer}>
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="display1" align="center" className={classes.title} gutterBottom>
              Let's talk product
            </Typography>
            <Typography variant="subheading" align="center" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
              ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellu.
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.gridContainer}>
          <Grid container justify="center" alignItems="center" alignContent="center">
            <Grid item xs={12} sm={12} md={3}>
              <InfoArea
                title="Free Chat"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib."
                icon={Chat}
                iconColor="primary"
                vertical
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <InfoArea
                title="Verified Users"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib."
                icon={VerifiedUser}
                iconColor="secondary"
                vertical
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <InfoArea
                title="Secure Identity"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nib."
                icon={Fingerprint}
                iconColor="error"
                vertical
              />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Header
          variant="center"
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: 'white',
          }}
          appBarProps={{
            position: 'fixed',
          }}
          navItems={[
            { title: 'Thing1', to: '/md/example' },
            { title: 'Thing2' },
            { title: 'Login', to: 'login', buttonProps: { color: 'secondary', variant: 'contained' } },
          ]}
        />

        {this.getParallaxSection()}
        {this.getProductSection()}

        <Footer 
          title={{
            label: config.title
          }}
          copyright={config.copyright}
        />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
