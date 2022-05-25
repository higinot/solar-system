import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const inputPlanets = (planet, index) => (
  <PlanetCard
    planetImage={ planet.image }
    planetName={ planet.name }
    key={ index }
  />
);

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="row">
        <Title headline="Planetas" />
        {planets.map(inputPlanets)}
      </div>
    );
  }
}

export default SolarSystem;
