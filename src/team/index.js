import React, { Component } from 'react';
import './team.css';

class Team extends Component {
  state = {}

  render() {
    const team = this.props.team;
    
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{team.Namn}</h5>
        </div>
        <div className="row">
          <h6 className="col-md-12">{team.Hemmaplan}</h6>
        </div>
        <div className="row">
          <div className="col-md-3">
            <img src={team.Badge} />
          </div>
          <div className="col-md-5">
            <p className="coach">Tränare: {team.Coach}</p>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Team;