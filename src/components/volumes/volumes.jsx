import React from 'react';
import PropTypes from 'prop-types';
import Volume from './volume';

const Volumes = ({ volumes }) => {
  if (volumes.length === 0) {
    return null;
  }
  const listVolumes = volumes.map(volume => (
    <Volume key={volume.id} {...volume} />
  ));
  return (
    <ul className="fb-volumes collection">
      {listVolumes}
    </ul>
  );
};

Volumes.propTypes = {
  volumes: PropTypes.arrayOf(PropTypes.shape(Volume.propTypes)),
};

Volumes.defaultProps = {
  volumes: [],
};

export default Volumes;

