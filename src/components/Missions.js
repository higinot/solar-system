import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const inputMissions = (mission, index) => (
  <MissionCard
    name={ mission.name }
    year={ mission.year }
    country={ mission.country }
    destination={ mission.destination }
    key={ index }
  />
);

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="row d-flex justify-content-center">
        <Title headline="Missões" />
        {missions.map(inputMissions)}
      </div>
    );
  }
}

export default Missions;

/* { name, year, country, destination } = this.props; */
