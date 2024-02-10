import React from 'react';
import PropTypes from 'prop-types';
import { linkResolver } from '../../util/prismicHelpers';
import Section from '../Section';
import Container from '../Container';
import Button from '../Button';
import ImageWithText from '../ImageWithText';
import TextBlock from '../TextBlock';

const OurWorkCustomerExperience = ({
  image,
  title,
  description,
  linkText,
  linkUrl,
}) => (
  <Section hasPadding bgColor="brand-white">
    <Container>
      <ImageWithText
        imageLeft
        image={image}
      >

        {title ?
          <h2>{title}</h2>
          :
          null
        }

        {description ?
          <TextBlock content={description} />
          :
          null
        }

        {linkUrl ?
          <Button
            large
            isdark
            bgcolor="gold"
            hasmargin
            href={linkResolver(linkUrl)}
          >
            {linkText}
          </Button>
          :
          null
        }

      </ImageWithText>
    </Container>
  </Section>
);

OurWorkCustomerExperience.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.array,
  linkText: PropTypes.string,
  linkUrl: PropTypes.object,
};

export default OurWorkCustomerExperience;
