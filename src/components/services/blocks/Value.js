import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../../styles/helpers';
import Section from '../../Section';
import Container from '../../Container';
import Grid from '../../Grid';
import ServicesContainer from '../ServicesContainer';
import OffsetImageGrid from '../../OffsetImageGrid';
import Button from '../../Button';
import { Ninety } from '../../Jumbo';
import TextBlock from '../../TextBlock';

const ValueGrid = styled(Grid)`
  grid-template-columns: 1fr 520px;
  align-items: center;
  justify-content: space-between;
  max-width: 1394px;

  ${props => props.valueTitle && `
    margin: auto auto 144px;

    ${screen.below(bp.desktopSm, `
      margin-bottom: 108px;
    `)}

    ${screen.below(bp.laptopSm, `
      margin-bottom: 72px;
    `)}
  `}

  ${screen.below(bp.desktop, `
    grid-template-columns: 1fr 1.2fr;
    grid-gap: 60px;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${screen.below(bp.portrait, `
    grid-template-columns: 1fr;
  `)}
`;

const Content = styled.div`
  max-width: 540px;
`;

const Value = ({
  valueTitle,
  valueSubTitle,
  valueDescription,
  valueLink,
  valueLinkText,
  valueImageLeft,
  valueImageRight,
}) => (
  <Section hasPadding bgColor="white">
    <Container>

      {valueTitle || (valueDescription?.length > 0 && valueDescription[0].text !== '') ?
        <ValueGrid>
          <Content>

            {valueTitle ?
              <h2>{valueTitle}</h2>
              :
              null
            }

            {valueDescription?.length > 0 && valueDescription[0].text !== '' ?
              <TextBlock content={valueDescription} />
              :
              null
            }

            {valueLink.url ?
              <Button
                large
                isdark
                bgcolor="gold"
                hasmargin
                href={valueLink?.url}
              >
                {valueLinkText}
              </Button>
              :
              null
            }

          </Content>
          <div>

            {valueSubTitle ?
              <Ninety>{valueSubTitle}</Ninety>
              :
              null
            }

          </div>
        </ValueGrid>
        :
        null
      }
      <ServicesContainer>
        <OffsetImageGrid
          smallImageLeft
          smallImage={valueImageLeft}
          bigImage={valueImageRight}
        />
      </ServicesContainer>
    </Container>
  </Section>
);

Value.propTypes = {
  valueTitle: PropTypes.string,
  valueSubTitle: PropTypes.string,
  valueDescription: PropTypes.array,
  valueLink: PropTypes.object,
  valueLinkText: PropTypes.string,
  valueImageLeft: PropTypes.object,
  valueImageRight: PropTypes.object,
};

export default Value;
