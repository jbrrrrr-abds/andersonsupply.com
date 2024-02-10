import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { linkResolver } from '../../util/prismicHelpers';
import { bp } from '../../styles/helpers';
import Grid from '../Grid';
import Button from '../Button';
import { Ninety } from '../Jumbo';
import UnstyledList from '../UnstyledList';
import AbsoluteImage from '../AbsoluteImage';

const StyledSection = styled.section`
  color: var(--brand-white);
  text-align: center;
`;

const StyledGrid = styled(Grid)`
  grid-gap: 0;

  ${screen.above(bp.laptopSm, `
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

const ListItem = styled.li`
  position: relative;
  padding: 266px 0;

  ${screen.below(bp.desktopSm, `
    padding: 200px 0;
  `)}

  ${screen.below(bp.laptopSm, `
    padding: 134px 0;
  `)}
`;

const ListImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: var(--${props => props.bgcolor});
    opacity: .8;
    content: "";
  }
`;

const PreFooter = ({
  leftTitle,
  leftLink,
  leftLinkText,
  leftImage,
  rightTitle,
  rightLink,
  rightLinkText,
  rightImage,
}) => (
  <StyledSection>
    <UnstyledList as={StyledGrid}>
      <ListItem>

        {leftImage ?
          <ListImage bgcolor="gold">
            <AbsoluteImage
              src={`${leftImage.url}&w=900&h=690&fit=crop&q=85&fm=pjpg`}
              alt={leftImage.alt}
            />
          </ListImage>
          :
          null
        }

        {leftTitle ?
          <Ninety>{leftTitle}</Ninety>
          :
          null
        }

        {leftLink ?
          <Button
            large
            isdark
            hasmargin
            bgcolor="brand-black"
            href={linkResolver(leftLink)}
          >
            {leftLinkText}
          </Button>
          :
          null
        }

      </ListItem>
      <ListItem>

        {rightImage ?
          <ListImage bgcolor="brand-black">
            <AbsoluteImage
              src={`${rightImage.url}&w=900&h=690&fit=crop&q=85&fm=pjpg`}
              alt={rightImage.alt}
            />
          </ListImage>
          :
          null
        }

        {rightTitle ?
          <Ninety>{rightTitle}</Ninety>
          :
          null
        }

        {rightLink ?
          <Button
            large
            isdark
            hasmargin
            bgcolor="gold"
            href={linkResolver(rightLink)}
          >
            {rightLinkText}
          </Button>
          :
          null
        }

      </ListItem>
    </UnstyledList>
  </StyledSection>
);

PreFooter.propTypes = {
  leftTitle: PropTypes.string,
  leftLink: PropTypes.object,
  leftLinkText: PropTypes.string,
  leftImage: PropTypes.object,
  rightTitle: PropTypes.string,
  rightLink: PropTypes.object,
  rightLinkText: PropTypes.string,
  rightImage: PropTypes.object,
};

export default PreFooter;
