// Dependenies
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

//Assets
import './Players.css'

class Player extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        let name = this.props[1]
        let equipment = this.props[3]
        let age = this.props[4]
        let id = this.props[0]
        return (
                    <Link to= {`/player/${id}`} >
                    <div className="Player-box">
                        <div className="Player-box-image"></div>
                        <div className="Player-box-info">                      
                                <div className="player-name">{name}</div>
                                <div className="Player-box-description">                      
                                    <div className="Equipment">
                                        <div className="Equipmente-title">Team</div>
                                        <div className="Equipmente-number">{equipment}</div>
                                    </div>
                                    <div className="Age">
                                        <div className="Age-title">Age</div>
                                        <div className="Age-number">{age}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
        )
    }
}


export default Player