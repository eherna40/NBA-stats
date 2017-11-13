// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// Assetes
import './Profile.css'
import image from '../../components/Global/images/player.png'

// Utils
import api from '../../lib/utils/api'

// Components
import PlayerSingle from '../../components/Profile'

// Utils
import { isFirstRender } from '../../lib/utils/frontend'

class Profile extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            player: []
        }
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        const player = await api.players.getSingle('commonplayerinfo', `?PlayerID=${id}`)
console.log(player)

        this.setState ({
        player: player
       })
       }

    render() {
        return (
            <div className="Profile">
                <div className="Profile-image">
                    <img src={image} alt="Info Player NBA" />
                </div>
                <PlayerSingle {...this.state.player[0]} />
                <div className="Back">
                    <Link to={'/'}>Back</Link>
                </div>
            </div>
            
        )
    }
}

export default Profile