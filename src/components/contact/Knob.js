import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';

const KnobWrapper = styled.div`
  --indicator-size: 164px;

  position: relative;
  width: var(--indicator-size);

  ${screen.below(bp.mobile, `
    --indicator-size: 123px;
  `)}
`;

const Indicators = styled.svg`
  position: relative;
  width: var(--indicator-size);
  height: var(--indicator-size);
`;

const TheKnob = styled.div`
  --knob-size: 117px;

  width: var(--knob-size);
  height: var(--knob-size);
  border-radius: 100%;
  position: absolute;
  top: 22px;
  left: 0;
  right: 0;
  margin: 0 auto;
  box-shadow: 3px 6px 1px rgb(0 0 0 / 10%);

  ${screen.below(bp.mobile, `
    --knob-size: 88px;
  `)}
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

const Tuner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  cursor: grab;
  border-radius: 100%;
`;

const Knob = ({ knobTitle }) => (
  <KnobWrapper>
    <Indicators viewBox="0 0 164 164">
      <path fill="#282829" d="M26.7 143.8l2.1 1.9 6.4-7.3-2-1.9-6.5 7.3zM4.7 111.1l1 2.6 9.4-3.6-1-2.6-9.4 3.6zM.3 72L0 74.6l10.4 1.2.4-2.8L.3 71.9zM14.6 35.1L13 37.4l9 6.1 1.6-2.3-9-6zM44.3 9.2l-2.5 1.3 5.2 9.6 2.5-1.3-5.2-9.6zM82.7 10.8V0h-2.9L80 11H82.7zM120.8 9.7l-2.5-1.3-4.8 9.4 2.5 1.3 4.8-9.4zM150.2 36l-1.6-2.3-8.3 5.9a72 72 0 011.6 2.2l8.3-5.8zM164 73l-.4-2.8-9.6 1.3.4 2.7L164 73zM150.4 109l8.7 3 1-2.5-8.8-3.2a72 72 0 01-.9 2.6zM136.7 144.5l2-1.9-6-6.7-2.1 1.9 6 6.7zM14.6 164H13.8l-.1-.1h-.2v-.1h-.2l-.1-.1H13l-.1-.1h-.1v-.1l-.2-.1-.1-.1v-.1h-.2v-.2h-.2v-.2l-.1-.1-.1-.2h-.1v-.2l-.1-.1v-.1l-.1-.1v-.2l-.1-.1v-.2h-.1v-.4l-.1-.2V159l.1-.1V158.7h.1v-.2l.1-.2.1-.2.1-.1v-.1h.1v-.2h.1l.1-.1v-.1h.1v-.2h.2v-.1h.1v-.1l.2-.1.1-.1h.1l.1-.1.2-.1h.2v-.1h.2l.1-.1h.4l.1-.1H15.3l.2.1h.2v.1h.2l.1.1h.1v.1h.2v.1l.1.1h.1v.1h.2v.2h.1v.1h.1l.1.2.1.1.1.2.1.1v.1l.1.1v.2h.1v.2h.1v.4h.1V159.7h.1V161.4l-.1.1v.1l-.1.2v.2h-.1v.2l-.1.2-.1.1v.1h-.1v.2H17l-.1.1v.1h-.1l-.1.2h-.1l-.1.2h-.2v.1l-.1.1h-.1l-.1.1-.2.1h-.2v.1h-.2l-.1.1h-.6l-.1.1h-.1zm0-1.4h.5l.1-.1.2-.1.1-.2h.1v-.1h.1l.1-.2.1-.1v-.2l.1-.1v-.2l.1-.1V160.9l.1-.1v-1.6H16v-.2l-.1-.2-.1-.1v-.1l-.1-.1v-.1h-.2v-.2l-.2-.1-.1-.1h-.1l-.1-.1H14.8l-.1-.1H14l-.1.1-.2.1-.1.2h-.1v.1h-.1l-.1.2-.1.1v.1l-.1.1v.2l-.1.1V159.4l-.1.1V161.3h.1v.2h.1v.2l.1.1v.1l.2.1.1.2.2.1.1.1h.1l.1.1h.2l.2.1h.1zM147.3 158h-.2l-.1.1H146.7l-.1.1H146.3l-.1.1h-.2v-.1l-.1-.1V157.8l-.1-.1V157.4l-.1-.1v-.2h.2l.1-.1h.2l.1-.1h.2l.2-.1h.2v-.1h.4v-.1h.2l.1-.1h1.2V164H147.3V158zM153.6 164h-.8v-.1h-.2l-.1-.1h-.1l-.2-.1-.2-.1-.1-.1-.1-.1-.2-.1v-.1h-.1v-.1l-.1-.1h-.1v-.2h-.1v-.1h-.1v-.2h-.1v-.1l-.1-.1v-.1l-.1-.1v-.1l-.1-.2v-.1l-.1-.2v-.2l-.1-.2V158.8l.1-.1v-.1l.1-.2v-.2h.1v-.2h.1v-.1l.1-.1.1-.2.2-.1v-.1l.1-.2h.1v-.1h.2v-.1l.1-.1h.1v-.1h.2v-.1h.1l.1-.1h.2l.1-.1h.2v-.1h.4l.2-.1h1l.1.1h.2l.1.1h.2v.1h.2v.1h.1l.1.1v.1h.2v.1h.1v.2h.2v.1h.1v.2h.1v.1h.1v.2h.1v.1l.1.1v.1l.1.1v.1l.1.2v.2h.1v.4h.1V161.6h-.1v.2l-.1.2-.1.2v.2h-.1v.1l-.1.1-.1.2-.1.1-.1.1-.1.2h-.1l-.2.2h-.1v.1l-.2.1-.2.1-.1.1h-.2l-.1.1h-.2v.1H153.8l-.2.1zm0-1.4H154.3v-.1h.1l.1-.1h.1v-.2h.2v-.1l.2-.2v-.2l.1-.1v-.1l.1-.1v-.2l.1-.1v-.7h.1v-1l-.1-.2v-.2h-.1v-.2h-.1v-.1l-.1-.1v-.1l-.1-.1h-.1v-.2h-.1l-.1-.1h-.1v-.1h-.2v-.1h-.4v-.1H153.1l-.1.1h-.1l-.1.1h-.1v.2h-.2v.1l-.2.2v.1l-.1.1v.2l-.1.1v.2l-.1.1v.7h-.1v1l.1.1v.2l.1.2.1.2.1.1v.1l.1.1.2.2.1.1.2.1.2.1h.2l.1.1h.2z" />
    </Indicators>

    <TheKnob>
      <Img
        src="/images/contact/dial-background.png"
        alt=""
        width="117"
        height="117"
      />
      <Img
        src="/images/contact/dial-reflect.png"
        alt=""
        width="117"
        height="117"
        className="i-am-shiny"
      />
      <Tuner className="the-knob">
        <Img
          src="/images/contact/dial-knob.png"
          alt=""
          width="117"
          height="117"
        />
      </Tuner>
    </TheKnob>
    <h3>{knobTitle}</h3>
  </KnobWrapper>
);

export default Knob;
