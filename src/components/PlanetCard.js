import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const classP = 'd-flex justify-content-center fs-6 text-white fw-bold';
const classImg = 'rounded mx-auto d-block';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const cImg = `${classImg}  ${planetName}`;
    return (
      <div data-testid="planet-card" className="col">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ cImg }
        />
        <p data-testid="planet-name" className={ classP }>
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
