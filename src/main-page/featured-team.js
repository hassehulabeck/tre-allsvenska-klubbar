import React from 'react';
import Team from '../team';

const FeaturedTeam = (props) => {
  if (props.team) return (
    <div>
      <div className="row featuredTeam">
        <h3 className="col-md-12 text-center">
          Vald klubb
        </h3>
      </div>
      <Team team={ props.team } />
    </div>)
  return (<div>Ingen klubb är vald</div>)
}

export default FeaturedTeam;