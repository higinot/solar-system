import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    const cName = 'text-center fw-bold text-white fs-6 m-2  ';

    return (
      <div
        data-testid="mission-card"
        className="col-3 border border-2 m-1 border-secondary rounded-3 p-0"
        style={ { width: '275px' } }
      >
        <p data-testid="mission-name" className={ cName }>
          {name}
        </p>
        <hr className="border border-1 border-secondary m-0" />
        <p data-testid="mission-year" className="text-center text-white m-auto p-1">
          {year}
        </p>
        <p data-testid="mission-country" className="text-center text-white m-auto p-1">
          {country}
        </p>
        <p data-testid="mission-destination" className="text-center text-white mb-2 p-1">
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
