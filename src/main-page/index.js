import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedTeam from './featured-team'

class App extends Component {
  
  state = {}

  componentDidMount() {
    this.fetchTeams();
  }

  fetchTeams = () => {
    fetch('/allsvenskan.json')
    .then(rsp => rsp.json())
    .then(allTeams => {
      this.allTeams = allTeams;
      this.determineFeaturedTeam();
    })
  }
   
  determineFeaturedTeam = () => {
    if (this.allTeams) {
      const randomIndex = Math.floor(Math.random() * this.allTeams.length);
      const featuredTeam = this.allTeams[randomIndex];
      this.setState({ featuredTeam });
    }  
  }
  
  render() {
    return (
      <div className="container">
        <Header subtitle="Så få klubbar!" />
        <FeaturedTeam team={ this.state.featuredTeam } />
      </div>
    );
  }
}

export default App;
