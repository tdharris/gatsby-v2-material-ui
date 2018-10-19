import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import NavList from '../components/NavList'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    marginLeft: theme.spacing.unit,
    fontWeight: 400,
  },
  logo: {
    maxHeight: 28,
  },
  title: {
    color: 'inherit',
    textTransform: 'none',
    '&:hover': {
      color: 'inherit',
      background: 'transparent'
    }
  },
  nav: {
    flexGrow: 1,
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: theme.spacing.unit * 3,
    color: theme.palette.common.white
  },
  transition: {
    transition: '0.3s ease all'
  },
  dark: {
    color: theme.palette.common.white,
    backgroundColor: '#212121 !important'
  },
  white: {
    border: '0',
    marginBottom: theme.spacing.unit * 2,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.common.white
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false
    }
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.headerColorChange = this.headerColorChange.bind(this)
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  getToolbar() {
    const { classes, navItems, variant } = this.props
    switch (variant) {
      case 'full':
        return (
          <Toolbar>
            <div className={classes.flex}>{this.getTitle()}</div>
            {navItems && this.getNavigation(navItems)}
          </Toolbar>
        )
      case 'center':
        return (
          <Grid container spacing={0} className={classes.root} alignItems='center' justify='center'>
            <Grid item xs={9} sm={10} md={7} lg={4}>
              <Toolbar disableGutters>{this.getTitle()}</Toolbar>
            </Grid>
            <Grid item>
              <Toolbar disableGutters>
                {navItems && this.getNavigation(navItems)}
              </Toolbar>
            </Grid>
          </Grid>
        )
      case 'prominent':
        return (
          <Grid container className={classes.root} direction='column' justify='center' alignItems='center'>
            <Grid item>
              <Toolbar>{this.getTitle()}</Toolbar>
            </Grid>
            <Grid item>
              <Toolbar>{navItems && this.getNavigation(navItems)}</Toolbar>
            </Grid>
          </Grid>
        )
      default:
        return null
    }
  }

  getNavigation(items) {
    const { classes } = this.props
    return (
      <div>
        <Grid container>
          <Hidden smDown implementation='css'>
            {this.getNavButtonsInline(items)}
          </Hidden>
          <Hidden mdUp implementation='css'>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon />
              <Menu open={this.state.mobileOpen} />
            </IconButton>
          </Hidden>
        </Grid>
        <Hidden mdUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor='right'
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <NavList
              items={items}
            />
          </Drawer>
        </Hidden>
      </div>
    )
  }

  getNavButtonsInline(items) {
    return (
      <Grid container>
        {items &&
          items.map(item => {
            const { title, to, linkProps, buttonProps } = item
            return (
              <div key={title}>
                {to ? (
                  <Button
                    color='inherit'
                    className={this.props.classes.button}
                    component={props => <Link to={to} {...props} {...linkProps} />}
                    {...buttonProps}
                  >
                    {title}
                  </Button>
                ) : (
                  <Button color='inherit' className={this.props.classes.button} {...buttonProps}>
                    {title}
                  </Button>
                )}
              </div>
            )
          })
        }
      </Grid>
    )
  }

  getTitle() {
    const { classes, brand } = this.props
    return (
      <Button href='/' className={classes.title} disableFocusRipple={true} {...brand.props}>
        <Typography variant={brand.variant} color='inherit' className={classes.flex}>
          {brand.title}
          {brand.logo && <img src={brand.logo} className={classes.logo} alt='logo' />}
        </Typography>
      </Button>
    )
  }

  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange)
    }
  }

  headerColorChange() {
    // this will cause the sidebar to change the color from this.props.color to
    // changeColorOnScroll.color when the window.pageYOffset is heigher or equal
    // to changeColorOnScroll.height and then when it is smaller than
    // changeColorOnScroll.height change it back to this.props.color
    const { classes, color, changeColorOnScroll } = this.props
    const windowsScrollTop = window.pageYOffset
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color])
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color])
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color])
    }
  }

  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange)
    }
  }

  render() {
    const { classes, appBarProps, color } = this.props
    return (
      <div className={classes.root}>
        <AppBar
          className={classNames(classes[color], classes.transition) }
          {...appBarProps}
          >
          {this.getToolbar()}
        </AppBar>
      </div>
    )
  }

}

Header.defaultProps = {
  brand: {
    title: 'My App',
    variant: 'headline',
  },
  variant: 'center',
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  brand: PropTypes.shape({
    title: PropTypes.string.isRequired,
    logo: PropTypes.string,
    variant: PropTypes.oneOf([
      'display4', 'display3', 'display2',
      'display1', 'headline', 'title', 'subheading',
      'body2', 'body1', 'caption', 'button'
    ]),
    props: PropTypes.object
  }),
  appBarProps: PropTypes.object,
  navItems: PropTypes.array,
  variant: PropTypes.oneOf(['full', 'center', 'prominent']),
  color: PropTypes.oneOf(['transparent', 'white', 'dark', 'primary', 'secondary']),
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['transparent', 'white', 'dark', 'primary', 'secondary']).isRequired
  })
}

export default withStyles(styles)(Header)
