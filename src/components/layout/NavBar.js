import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class NavBar extends Component {
    static defaultProps = {
        icon: "fab fa-github",
        title: "GitHub Finder"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}></i> {this.props.title}</h1>
            </nav>
        )
    }
}

export default NavBar
