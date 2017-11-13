// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Assetes
import './Home.css'

// Utils
import api from '../../lib/utils/api'

// Components
import Player from '../../components/Player'

// Utils
import { isFirstRender } from '../../lib/utils/frontend'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            players: []
        }
    }

    async componentDidMount() {
        const players = await api.players.getList('leaguedashplayerbiostats')
        this.setState({
            players: players
        })
    }



    render() {
        return (
            <div className="Home">
                
                <div className="Players">
                {
                   this.state.players.map((player, key) => <Player key={key} { ...player } />)
                }
                </div>
    )
            </div>
        )
    }
}

export default Home