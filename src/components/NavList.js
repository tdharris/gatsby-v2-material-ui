import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'gatsby'

const styles = theme => ({
  root: {
    minWidth: 250,
  },
  listItemWrapper: {
    padding: theme.spacing.unit
  }
})

class SimpleList extends Component {

  render() {
    const { classes, items } = this.props

    return (
      <List className={classes.root}>
        {items &&
          items.map(item => {
            const { title, to, linkProps } = item
            return (
              <div key={title}>
                <div className={classes.listItemWrapper}>
                  {to ? (
                    <ListItem button
                      color='inherit'
                      component={props => <Link to={to} {...props} {...linkProps} />}
                    >
                      <ListItemText>{title}</ListItemText>
                    </ListItem>
                  ) : (
                    <ListItem button color='inherit'>
                      <ListItemText>{title}</ListItemText>
                    </ListItem>
                  )}
                </div>
                <Divider />
              </div>
            )
          })
        }
      </List>
    )
  }

}

SimpleList.defaultProps = {

}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
      props: PropTypes.object
    })
  ),
}

export default withStyles(styles)(SimpleList)
