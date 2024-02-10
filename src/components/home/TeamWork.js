import React from 'react';
import PropTypes from 'prop-types';
import TwoColWithImage from '../TwoColWithImage';

const TeamWork = ({
  title,
  description,
  link,
  linkText,
  image,
}) => (
  <TwoColWithImage
    headline={title}
    description={description}
    link={link}
    linkText={linkText}
    image={image}
  />
);

TeamWork.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  link: PropTypes.object,
  linkText: PropTypes.string,
  image: PropTypes.object,
};

export default TeamWork;
