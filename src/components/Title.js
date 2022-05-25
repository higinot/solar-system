import React from 'react';
import PropTypes from 'prop-types';

const sTitle = 'd-flex justify-content-center text-white';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    console.log(headline);

    return <h2 className={ sTitle }>{headline}</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
