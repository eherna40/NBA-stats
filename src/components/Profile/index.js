
// Dependenies
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import moment from 'moment'
//Assets
import './Player.css'

class Player extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        const name = this.props[1]
        const surName = this.props[2]
        const birth = {
            "day": moment(this.props[6]).format("DD,"),
            "month": moment(this.props[6]).format("MMM"),   
            "year": moment(this.props[6]).format("YYYY")
        }
        

        
        return (
                <div className="Profile-info">
                <div className="Info-name">
                    <div>
                        <div className="Info-name-label">Name</div>
                        <div className="Info-name-description">{name}</div>
                    </div>
                    <div>
                        <div className="Info-name-label">Sur Name</div>
                        <div className="Info-name-description">{surName}</div>
                    </div>
                    </div>
                <div className="Info-birth">
                    <div className="Info-birth-title">Birth</div>
                        <div className="Info-birth-box">
                    <div>
                        <div className="month">{birth.month}</div>
                    </div>
                    <div>
                        <div className="day">{birth.day}</div>
                    </div>
                    <div>
                        <div className="year">{birth.year}</div>
                    </div>
                </div>

                </div></div>
        )
    }
}


export default Player