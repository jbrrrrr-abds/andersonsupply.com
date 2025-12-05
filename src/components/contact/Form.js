import React, { useRef, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import screen from 'superior-mq';
import { useForm, Controller } from 'react-hook-form';
import { rem } from 'polished';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Draggable from 'gsap/dist/Draggable';
import InertiaPlugin from 'gsap/dist/InertiaPlugin';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import netlifySubmit from 'util/netlifySubmit';
import { linkResolver } from 'util/prismicHelpers';
import { bp, hover } from 'styles/helpers';
import CheckInput from '../forms/CheckInput';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import LazyImg from '../LazyImg';
import Input from '../forms/Input';
import Button from '../Button';
import UnstyledButton from '../UnstyledButton';
import { OneSixty, Sixty, Forty, TwentyFive, Fifteen } from '../Jumbo';
import InlineLink from '../InlineLink';
import Skeleton from './Skeleton';
import Equalizer from './Equalizer';
import Watt from './Watt';
import Knob from './Knob';
import TextBlock from '../TextBlock';
import VisuallyHidden from '../VisuallyHidden';

const defaultValues = {
  'form-name': 'contact',
  serviceNeeded: '',
  designService: [],
  categories: [],
  timeline: '5',
  budget: '10000',
  firstName: '',
  lastName: '',
  company: '',
  emailAddress: '',
  phoneNumber: '',
};

const FormWrapper = styled.section`
  position: relative;
`;

const StyledForm = styled.form`
  --gap: 36px;

  position: relative;
  text-align: center;

  ${screen.below(bp.desktop, `
    --gap: 16px;
  `)}
`;

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;

  legend {
    width: 100%;
    margin-bottom: 34px;
  }
`;

const FieldsetWithBorder = styled(Fieldset)`
  padding-bottom: 55px;

  ${screen.above(bp.mobile, `
    margin-bottom: 38px;
    border-bottom: 1px solid #cbcbcb;
  `)}
`;

const ServicesSection = styled(Section)`
  max-width: 1400px;
  margin: auto;
`;

const InfoFieldset = styled(Fieldset)`
  margin-bottom: 84px;
`;

const DesignGrid = styled(Grid)`
  grid-column-gap: var(--gap);

  ${screen.above(bp.laptopSm, `
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${screen.below(bp.laptopSm, `
    grid-row-gap: calc(var(--gap) * 2.5);
  `)}
`;

const CategoryGrid = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  ${screen.below(bp.laptop, `
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${screen.below(bp.laptopSm, `
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${screen.below(bp.mobile, `
    grid-template-columns: 1fr;
  `)}
`;

const CategoryWrap = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(28 28 30 / 0%) 70%, rgb(10 10 11 / 0%) 70%, #0a0a0b 100%);
    content: "";
  }
`;

const Category = styled(CheckInput)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    &::before,
    &::after {
      position: absolute;
      top: unset;
      bottom: 20px;
      left: 20px;
      transform: translateY(0);
      width: 65px;
      height: 65px;
    }

    /* stylelint-disable */
    span {
      position: absolute;
      top: unset;
      line-height: 65px;
      bottom: 20px;
      padding-left: 20px;
    }
    /* stylelint-enable */
  }

`;

const CategoryMessageWrap = styled.div`
  max-width: 617px;
  padding: 26px;
  margin: 44px auto auto;
  background-color: var(--brand-white);
  text-align: center;

  img {
    margin: auto auto 18px;
  }

  p:last-of-type {
    margin-bottom: 0;
  }
`;

const TextWrap = styled.div`
  position: relative;
  max-width: 1036px;
  margin: auto;

  svg {
    position: absolute;
    top: calc(50% - 20px);
    left: 142px;
    transform: translateY(-50%);
    pointer-events: none;

    ${screen.below(bp.mobile, `
      left: 50%;
      transform: translate(-50%, -50%);
    `)}
  }

  ${screen.below(bp.mobile, `
    padding-top: 154px;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
    }
  `)}
`;

const SmallContainer = styled.div`
  max-width: 584px;
  margin: auto;

  ${screen.below(bp.mobile, `
    max-width: var(--container-width);
  `)}
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 35px 50px;
  margin-bottom: 88px;
  font-size: ${rem(35)};

  ${screen.below(bp.laptopSm, `
    padding: 20px 50px;
  `)}
`;

const FaqLink = styled(InlineLink)`
  display: inline-block;
  margin-top: 50px;
  color: var(--gold);
  text-decoration: underline;
  transition: color 300ms ease-in-out;

  ${hover(`
    color: var(--brand-black);
  `)}
`;

const RangeSection = styled(Section)`
  --bottom-spacing: 212px;

  position: relative;
  padding: var(--spacing) 0 var(--bottom-spacing);
  overflow: hidden;

  ${screen.below(bp.mobile, `
    --bottom-spacing: 180px;
  `)}
`;

const RangeContainer = styled.div`
  position: relative;
  max-width: 1172px;
  margin: auto;
`;

const RangeFieldset = styled(Fieldset)`
  display: flex;
  justify-content: center;

  legend {
    margin-bottom: 150px;

    ${screen.below(bp.desktopSm, `
      margin-bottom: 112px;
    `)}
  }
`;

const InformationSection = styled(Section)`
  padding: var(--spacing) 0 20px;
  overflow: hidden;

  ${screen.below(bp.laptop, `
    padding-bottom: 42px;
  `)}
`;

const KnobContainer = styled.div`
  position: relative;
  max-width: 1172px;
  display: flex;
  justify-content: center;
  margin-top: 90px;
  column-gap: 200px;

  ${screen.below(bp.desktopSm, `
    column-gap: 125px;
  `)}

  ${screen.below(bp.laptopSm, `
    column-gap: 65px;
  `)}
`;

const KnobWrapper = styled.div`

  &:first-child {
    /* not sure why */
    margin-left: 8px;
  }
`;

const RangeGrid = styled(Grid)`
  grid-template-columns: repeat(2, 80px);
  grid-gap: 280px;

  ${screen.below(bp.desktopSm, `
    grid-gap: 210px;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-gap: 140px;
  `)}

  ${screen.below(bp.mobile, `
    grid-gap: 50px;
  `)}
`;

const RangeColumn = styled.div`
  position: relative;
  width: 80px;
  height: 316px;
`;

const RangeLabel = styled.div`
  position: absolute;
  top: -70px;
  width: 316px;
  display: inline-block;
  text-transform: uppercase;
  transform: translateX(-50%);

  img {
    margin: auto auto 4px;
  }

  /* stylelint-disable */
  span {
    ${screen.below(bp.mobile, `
      display: block;
      margin: auto;
      font-size: ${rem(12)};
    `)}
  }
`;

const RangeInput = styled.input`
  --chromium-gradient: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 316px;
  height: 80px;
  cursor: pointer;
  background-color: transparent;
  background-image: repeating-linear-gradient(
    90deg,
    #d9d5c1 0,
    #d9d5c1 1px,
    transparent 1px,
    transparent 15px
  );
  background-repeat: repeat-y;
  transform-origin: top left;
  transform: rotate(-90deg) translateX(-100%);

  &,
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &::-webkit-slider-runnable-track {
    height: 3px;
    background: linear-gradient(to right, #b48645 var(--chromium-gradient), #d9d5c1 var(--chromium-gradient), #d9d5c1);
  }

  &::-moz-range-track {
    height: 3px;
    background: #d9d5c1;
  }

  &::-webkit-slider-thumb {
    width: 50px;
    height: 26px;
    border-radius: 3px;
    background: #fff;
    box-shadow: inset -21.5px -1px 0 1.5px #282829,
      inset 21.5px 1px 0 1.5px #282829, inset 21.5px -1px 0 1.5px #282829,
      inset -21.5px 1px 0 1.5px #282829, 0 4px 20px rgba(0, 0, 0, .27);
    border: none;
    margin-top: -11px;
  }

  &::-moz-range-thumb {
    width: 50px;
    height: 26px;
    border-radius: 3px;
    background: #fff;
    box-shadow: inset -21.5px -1px 0 1.5px #282829,
      inset 21.5px 1px 0 1.5px #282829, inset 21.5px -1px 0 1.5px #282829,
      inset -21.5px 1px 0 1.5px #282829, 0 4px 20px rgba(0, 0, 0, .27);
    border: none;
  }

  &::-moz-range-progress {
    background-color: #b48645;
  }

  &::-webkit-progress-value {
    background-color: #b48645;
  }
  /* stylelint-enable */
`;

const RangeMessageWrap = styled.div`
  position: relative;
  z-index: 2;
  padding: 34px 20px;
  max-width: 584px;
  margin: auto;
  background-color: var(--white);

  ${screen.below(bp.mobile, `
    max-width: var(--container-width);
  `)}
`;

const RangeMessage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;



  .range-icon {
    display: inline-block;
    margin-right: 20px;
  }

  p:first-of-type {
    margin-top: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  ${screen.below(bp.mobile, `
    text-align: center;
    display: block;

    .range-icon {
      margin-right: 0px;
    }
  `)}

`;

const RangeSpeaker = styled.div`
  --speaker-position: 0;

  position: absolute;
  bottom: calc((var(--bottom-spacing) * -1) - 30px);
  ${props => props.alignedLeft ? 'left: var(--speaker-position)' : 'right: var(--speaker-position)'};
  z-index: 1;
  width: 117px;
  height: 385px;
  pointer-events: none;

  ${screen.below(bp.laptopSm, `
    --speaker-position: calc(var(--container-gutter) + 150px);
  `)}

  ${screen.below(bp.mobile, `
    width: 85px;
    height: 280px;
    --speaker-position: calc(var(--container-gutter) + 215px);
  `)}
`;

const RangeValue = styled.span`
  position: absolute;
  bottom: -44px;
  left: 50%;
  width: 200px;
  transform: translateX(-50%);
`;

const RangeJumboValue = styled.div`
  --left: -308px;
  --right: -352px;

  position: absolute;
  top: 50%;
  ${props => props.alignedLeft ? 'left: var(--left)' : 'right: var(--right)'};
  ${props => props.alignedLeft ? 'text-align: right' : 'text-align: left'};
  pointer-events: none;
  transform: translateY(-50%);

  span:first-of-type {
    display: block;
    margin-bottom: 5px;
    color: var(--gold);
    font-size: ${rem(12)};
    text-transform: uppercase;

    ${screen.above(bp.mobile, `
      text-align: center;
    `)}
  }

  ${screen.below(bp.laptopSm, `
    --left: -230px;
    --right: -264px;
  `)}

  ${screen.below(bp.tablet, `
    --left: -172px;
    --right: -198px;
  `)}

  ${props => screen.below(bp.mobile, `
    --left: -129px;
    --right: -148px;
    ${props.alignedLeft ? 'text-align: left' : 'text-align: right'};
  `)}

  ${screen.below(bp.mobileMid, `
    --left: -86px;
    --right: -100px;
  `)}

  ${screen.below(bp.mobileSm, `
    --left: -44px;
    --right: -50px;
  `)}
`;

const RadioGrid = styled(Grid)`
  grid-gap: var(--gap);

  ${screen.above(bp.laptopSm, `
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

const RangeSixty = styled(Sixty)`
  ${screen.below(bp.desktopSm, `
    font-size: ${rem(45)};
  `)}

  ${screen.below(bp.mobile, `
    font-size: ${rem(25)};
  `)}

  ${screen.below(bp.mobileSm, `
    font-size: ${rem(16)};
  `)}
`;

const BudgetSpan = styled.span`
  ${screen.below(bp.mobile, `
    max-width: 88px;
  `)}
`;

const TimelineSpan = styled.span`
  ${screen.below(bp.mobile, `
    max-width: 62px;
  `)}
`;

const RadioWrap = styled.div`
  position: relative;
  text-align: left;
`;

const StyledRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  + label {
    position: relative;
    cursor: pointer;
    display: block;
    color: inherit;
    padding: 28px 24px 28px 82px;
    transition: color .3s ease;
    line-height: 1.2;
    z-index: 1;
  }

  + label div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--brand-black);
    transition: border .3s ease;
  }

  + label::before,
  + label::after {
    content: "";
    position: absolute;
    left: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  + label::before {
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid var(--brand-black);
    min-width: 16px;
  }

  + label::after {
    top: 50%;
    left: 28px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%) scale(0);
    transition: all .2s ease;
    z-index: 1;
    background-color: var(--gold);
  }

  &:checked + label {
    color: inherit;
  }

  &:checked + label::before {
    border-color: var(--gold);
  }

  &:checked + label div {
    border: 4px solid var(--gold);
  }

  &:checked + label::after {
    transform: translateY(-50%) scale(1);
  }
`;

const StepsWrapper = styled.div`
  position: absolute;
  top: calc(var(--spacing) + 120px);
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 55;

  ${screen.below('1500px', `
    display: none;
  `)}
`;

const Steps = styled.ol`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;

  li:not(:last-of-type) {
    margin-bottom: 26px;
  }

  &::before {
    position: absolute;
    bottom: -28px;
    left: 50%;
    width: 78px;
    height: 1px;
    background-color: var(--brand-black);
    transform: translateX(-50%);
    content: "";
  }
`;

const Step = styled(UnstyledButton)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--brand-black);
  transition: color .4s;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color .2s, transform .4s ease-out;
    transform: translate(-50%, -50%) scale(0);
    content: "";
  }

  &.active {
    color: var(--brand-white);

    &::before {
      background-color: var(--gold);
      transform: translate(-50%, -50%) scale(1);
    }

    ${hover(`
      color: var(--brand-white);
    `)}
  }

  ${hover(`
    color: var(--gold);
  `)}
`;

const TriggerAnchor = styled(UnstyledButton)`
  display: block;
  margin-top: 108px;
  transform: rotate(90deg);

  .pull-trigger {
    pointer-events: none;
  }
`;

const StyledJumbo = styled(OneSixty)`
  ${screen.below('450px', `
    font-size: 15vw;
  `)}
`;

const Form = ({
  servicesTitle,
  designServicesTitle,
  designServices = [],
  categoriesTitle,
  categories = [],
  alertText,
  timelineTitle,
  turnaroundText,
  informationTitle,
  jumboText,
  faqLink,
  faqLinkText,
}) => {
  const budgetMin = '4000';
  const budgetMax = '50000';
  const budgetSteps = '2000';
  const timelineMin = '2';
  const timelineMax = '15';
  const timelineSteps = '1';

  const budgetKnobEl = useRef();
  const timelineKnobEl = useRef();
  const isDragging = useRef(false);

  const router = useRouter();

  const {
    watch,
    setValue,
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const watchBudget = watch('budget');
  const watchTimeline = watch('timeline');
  const maxRotation = 270;

  const budgetKnob = useCallback((el) => {
    if (!el) return;
    budgetKnobEl.current = el.querySelector('.the-knob');

    gsap.registerPlugin(Draggable, InertiaPlugin);

    const max = Number(budgetMax);
    const min = Number(budgetMin);
    const steps = Number(budgetSteps);
    const indexAmount = maxRotation / ((max - min) / steps); // steps

    const updateValue = () => {
      isDragging.current = true;
      const val = `${(Math.round((Draggable.get(budgetKnobEl.current).rotation / indexAmount)) * steps) + min}`;

      setValue('budget', val);
    };

    Draggable.create(budgetKnobEl.current, {
      type: 'rotation',
      bounds: { maxRotation, minRotation: 0 },
      inertia: true,
      snap: value => Math.round(value / indexAmount) * indexAmount,
      onDrag: updateValue,
      onDragStart: () => {
        gsap.set(budgetKnobEl.current, { cursor: 'grabbing' });
      },
      onDragEnd: () => {
        gsap.set(budgetKnobEl.current, { cursor: 'grab' });
      },
      onThrowUpdate: updateValue,
      onThrowComplete() {
        isDragging.current = false;
      },
    });
  }, [setValue]);

  const timelineKnob = useCallback((el) => {
    if (!el) return;
    timelineKnobEl.current = el.querySelector('.the-knob');
    gsap.registerPlugin(Draggable, InertiaPlugin);
    const max = Number(timelineMax);
    const min = Number(timelineMin);
    const steps = Number(timelineSteps);
    const indexAmount = maxRotation / ((max - min) / steps); // steps

    const updateValue = () => {
      isDragging.current = true;
      const val = `${(Math.round((Draggable.get(timelineKnobEl.current).rotation / indexAmount)) * steps) + min}`;

      setValue('timeline', val);
    };

    Draggable.create(timelineKnobEl.current, {
      type: 'rotation',
      bounds: { maxRotation, minRotation: 0 },
      inertia: true,
      snap: value => Math.round(value / indexAmount) * indexAmount,
      onDrag: updateValue,
      onDragStart: () => {
        gsap.set(timelineKnobEl.current, { cursor: 'grabbing' });
      },
      onDragEnd: () => {
        gsap.set(timelineKnobEl.current, { cursor: 'grab' });
      },
      onThrowUpdate: updateValue,
      onThrowComplete() {
        isDragging.current = false;
      },
    });
  }, [setValue]);

  useEffect(() => {
    const val = Number(watchBudget);
    const max = Number(budgetMax);
    const min = Number(budgetMin);
    const rotationVal = ((val - min) / (max - min)) * maxRotation;

    gsap.set('#budget', { '--chromium-gradient': `${((val - min) / (max - min)) * 100}%` });

    if (!isDragging.current) {
      gsap.to(budgetKnobEl.current, {
        rotate: rotationVal,
      });
    }
  }, [watchBudget]);

  useEffect(() => {
    const val = Number(watchTimeline);
    const max = Number(timelineMax);
    const min = Number(timelineMin);
    const rotationVal = ((val - min) / (max - min)) * maxRotation;

    gsap.set('#timeline', { '--chromium-gradient': `${((val - min) / (max - min)) * 100}%` });

    if (!isDragging.current) {
      gsap.to(timelineKnobEl.current, {
        rotate: rotationVal,
      });
    }
  }, [watchTimeline]);

  const knobs = useCallback((el) => {
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    const shinyKnobs = el.querySelectorAll('.i-am-shiny');

    gsap.fromTo(shinyKnobs,
      { rotate: -30 },
      {
        rotate: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          id: 'shiny-knobs',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

  }, []);

  /**
 * Add commas to stat number when it hits 4 digits
 *
 * @param {string} val
 */
  const formatValue = (val) => {
    if (!val) return null;
    return val.toString().replace(/(\d+)(\d{3})/g, '$1,$2');
  };

  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  const onSubmit = (values) => {

    if (values.budget) {
      values.budget = formatCurrency.format(values.budget);
    }

    if (values.timeline) {
      values.timeline = `${Math.abs(values.timeline)} weeks`;
    }

    netlifySubmit(values, ['fileUpload'])
      .then(() => {
        router.push('/confirmed');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => () => {
    if (Draggable.get(budgetKnobEl.current)) {
      Draggable.get(budgetKnobEl.current).kill();
    }

    if (Draggable.get(timelineKnobEl.current)) {
      Draggable.get(timelineKnobEl.current).kill();
    }

    if (ScrollTrigger.getById('shiny-knobs')) {
      ScrollTrigger.getById('shiny-knobs').kill();
    }
  }, []);

  const [currentStep, setCurrentStep] = useState(0);

  const formRef = useCallback((node) => {
    if (!node) return;

    const steps = node.querySelector('.steps-wrapper');
    const services = node.querySelector('#services-needed');
    const budget = node.querySelector('#budget-and-timeline');
    const information = node.querySelector('#information');
    const pullTrigger = node.querySelector('#pull-the-trigger');

    const sections = [services, budget, information];

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    ScrollTrigger.create({
      trigger: steps,
      pin: true,
      start: 'center center',
      end: 'center center',
      endTrigger: pullTrigger,
      pinSpacing: false,
      id: 'form-nav',
    });

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 25%',
        end: 'bottom 25%',
        id: `section-${i}`,
        onToggle: ({ isActive }) => {
          if (isActive) {
            setCurrentStep(i);
          }
        },
      });

    });
  }, []);

  const scrollToStep = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: e.target.dataset.step,
        autoKill: false,
      },
    });
  };

  useEffect(() => () => {
    if (ScrollTrigger.getById('form-nav')) {
      ScrollTrigger.getById('form-nav').kill();
    }
    if (ScrollTrigger.getById('section-0')) {
      ScrollTrigger.getById('section-0').kill();
    }
    if (ScrollTrigger.getById('section-1')) {
      ScrollTrigger.getById('section-1').kill();
    }
    if (ScrollTrigger.getById('section-2')) {
      ScrollTrigger.getById('section-2').kill();
    }
  }, []);

  return (
    <FormWrapper ref={formRef}>
      <StepsWrapper className="steps-wrapper">
        <Steps>
          <li>
            <Step className={`${currentStep === 0 ? 'active' : ''}`} onClick={scrollToStep} data-step="#services-needed">1</Step>
          </li>
          <li>
            <Step className={`${currentStep === 1 ? 'active' : ''}`} onClick={scrollToStep} data-step="#budget-and-timeline">2</Step>
          </li>
          <li>
            <Step className={`${currentStep === 2 ? 'active' : ''}`} onClick={scrollToStep} data-step="#information">3</Step>
          </li>
        </Steps>
        <TriggerAnchor onClick={scrollToStep} data-step="#pull-the-trigger">
          <Fifteen className="pull-trigger">Pull the Trigger</Fifteen>
        </TriggerAnchor>
      </StepsWrapper>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        data-netlify="true"
      >
        <input type="hidden" {...register('form-name')} />

        <ServicesSection hasPadding id="services-needed">
          <Container>
            <FieldsetWithBorder>
              {servicesTitle ?
                <Forty as="legend">{servicesTitle}</Forty>
                :
                null
              }

              <RadioGrid>
                <RadioWrap>
                  <StyledRadio
                    name="serviceNeeded"
                    id="design-needed"
                    type="radio"
                    value="Design service needed"
                    {...register('serviceNeeded', {})}
                  />
                  <label htmlFor="design-needed">
                    I NEED A FRESH LOOK (Our design team is ready!)
                    <div />
                  </label>
                </RadioWrap>

                <RadioWrap>
                  <StyledRadio
                    name="serviceNeeded"
                    id="design-ready"
                    type="radio"
                    value="Designs are ready"
                    {...register('serviceNeeded', {})}
                  />
                  <label htmlFor="design-ready">
                    MY DESIGNS ARE READY TO GO (Upload assets below)
                    <div />
                  </label>
                </RadioWrap>

              </RadioGrid>

            </FieldsetWithBorder>
            <FieldsetWithBorder>

              {designServicesTitle ?
                <TwentyFive as="legend">{designServicesTitle}</TwentyFive>
                :
                null
              }

              <DesignGrid>
                {designServices.map((item, index) => (
                  <CheckInput
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    id={item?.design_service}
                    {...register('designService')}
                    name="designService"
                    value={item?.design_service}
                    label={item?.design_service}
                  />
                ))}
              </DesignGrid>
            </FieldsetWithBorder>
            <Fieldset>
              {categoriesTitle ?
                <TwentyFive as="legend">{categoriesTitle}</TwentyFive>
                :
                null
              }
              <CategoryGrid>
                {categories.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <CategoryWrap key={index}>
                    <Category
                      name="categories"
                      id={item?.category_title}
                      {...register('categories')}
                      value={item?.category_title}
                      label={item?.category_title}
                      isDark
                    />
                    <LazyImg
                      width={334}
                      height={460}
                      src={item?.category_image?.url}
                      alt={item?.category_image?.alt ? item.category_image.alt : ''}
                    />
                  </CategoryWrap>
                ))}
              </CategoryGrid>
            </Fieldset>

            {alertText?.length > 0 && alertText[0].text !== '' ?
              <CategoryMessageWrap>
                <LazyImg
                  src="/images/svg/warning.svg"
                  alt=""
                />
                <TextBlock content={alertText} />
              </CategoryMessageWrap>
              :
              null
            }

          </Container>
        </ServicesSection>
        <RangeSection bgColor="brand-white" id="budget-and-timeline">
          <RangeContainer>
            <RangeFieldset>
              {timelineTitle ?
                <Forty as="legend">{timelineTitle}</Forty>
                :
                null
              }

              <RangeGrid>
                <RangeColumn>
                  {/* Fake input to fix chrome bug. */}
                  <RangeInput
                    style={{ opacity: 0, pointerEvents: 'none', zIndex: -1 }}
                    aria-hidden="true"
                    id="bugfix"
                    type="range"
                    step="0"
                    min="0"
                    max="0"
                  />
                  {/* End fake input to fix chrome bug. */}
                  <RangeLabel>
                    <LazyImg src="/images/svg/flame.svg" alt="" />
                    <BudgetSpan aria-hidden="true">Possibly My Credit Limit</BudgetSpan>
                  </RangeLabel>
                  <VisuallyHidden as="label" htmlFor="budget">Budget</VisuallyHidden>
                  <Controller
                    control={control}
                    name="budget"
                    render={({ field }) => (
                      <RangeInput
                        {...field}
                        className="input-range"
                        id="budget"
                        type="range"
                        step={budgetSteps}
                        min={budgetMin}
                        max={budgetMax}
                      />
                    )}
                  />
                  <RangeValue>$4,000</RangeValue>
                  <RangeJumboValue alignedLeft aria-hidden="true">
                    <span>Budget</span>
                    <RangeSixty>${formatValue(watchBudget)}</RangeSixty>
                  </RangeJumboValue>
                </RangeColumn>
                <RangeColumn>
                  <RangeLabel>
                    <LazyImg src="/images/svg/skull.svg" alt="" />
                    <TimelineSpan aria-hidden="true">Put it in my Will</TimelineSpan>
                  </RangeLabel>
                  <VisuallyHidden as="label" htmlFor="timeline">Timeline</VisuallyHidden>
                  <Controller
                    control={control}
                    name="timeline"
                    render={({ field }) => (
                      <RangeInput
                        {...field}
                        className="input-range"
                        id="timeline"
                        type="range"
                        step={timelineSteps}
                        min={timelineMin}
                        max={timelineMax}
                      />
                    )}
                  />
                  <RangeValue>2-3 Weeks</RangeValue>
                  <RangeJumboValue aria-hidden="true">
                    <span>Timeline</span>
                    <RangeSixty>
                      {Math.abs(Number(watchTimeline))}-{Math.abs(Number(watchTimeline)) + 1} Weeks
                    </RangeSixty>
                  </RangeJumboValue>
                </RangeColumn>
              </RangeGrid>
            </RangeFieldset>
            <KnobContainer ref={knobs}>
              <KnobWrapper ref={budgetKnob}>
                <Knob knobTitle="Budget" />
              </KnobWrapper>
              <KnobWrapper ref={timelineKnob}>
                <Knob knobTitle="Timeline" />
              </KnobWrapper>
            </KnobContainer>
            <Watt
              budget={watchBudget}
              timeline={watchTimeline}
              budgetMin={budgetMin}
              budgetMax={budgetMax}
              timelineMin={timelineMin}
              timelineMax={timelineMax}
            />

            {turnaroundText?.length > 0 && turnaroundText[0].text !== '' ?
              <RangeMessageWrap>
                <RangeMessage>
                  <LazyImg
                    src="/images/svg/warning.svg"
                    className="range-icon"
                    alt=""
                  />
                  <div>
                    <TextBlock content={turnaroundText} />
                  </div>
                </RangeMessage>
              </RangeMessageWrap>
              :
              null
            }

            <RangeSpeaker alignedLeft>
              <LazyImg
                src="/images/speaker.png"
                alt=""
                width={117}
                height={355}
              />
            </RangeSpeaker>
            <RangeSpeaker>
              <LazyImg
                src="/images/speaker.png"
                alt=""
                width={117}
                height={355}
              />
            </RangeSpeaker>
          </RangeContainer>
          <Equalizer
            budget={watchBudget}
            timeline={watchTimeline}
            budgetMin={budgetMin}
            budgetMax={budgetMax}
            timelineMin={timelineMin}
            timelineMax={timelineMax}
          />
        </RangeSection>
        <InformationSection id="information">
          <SmallContainer>
            <InfoFieldset>

              {informationTitle ?
                <Forty as="legend">{informationTitle}</Forty>
                :
                null
              }

              <Controller
                control={control}
                name="firstName"
                required
                rules={{
                  required: 'Please enter your first name',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    errors={errors}
                  />
                )}
              />
              <Controller
                control={control}
                name="lastName"
                required
                rules={{
                  required: 'Please enter your last name',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    errors={errors}
                  />
                )}
              />
              <Controller
                control={control}
                name="company"
                required
                rules={{
                  required: 'Please enter your company name',
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Company"
                    placeholder="Company"
                    errors={errors}
                  />
                )}
              />
              <Controller
                control={control}
                required
                rules={{
                  required: 'Please enter your email address',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address',
                  },
                }}
                name="emailAddress"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Email Address"
                    placeholder="Email"
                    errors={errors}
                  />
                )}
              />
              <Controller
                control={control}
                required
                rules={{
                  required: 'Please enter your phone number',
                }}
                name="phoneNumber"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="tel"
                    label="Phone Number"
                    placeholder="Phone"
                    errors={errors}
                  />
                )}
              />
              <Input
                {...register('fileUpload')}
                type="file"
                name="fileUpload"
                accept="image/*, .pdf, video/*"
                label="Upload Brand Assets and Logo"
                errors={errors}
              />
            </InfoFieldset>
            <SubmitButton
              type="submit"
              isdark
              large
              bgcolor="gold"
              id="pull-the-trigger"
            >
              Submit!
            </SubmitButton>
          </SmallContainer>

          {jumboText ?
            <TextWrap>
              <StyledJumbo>{jumboText}</StyledJumbo>
              <Skeleton />
            </TextWrap>
            :
            null
          }

          {faqLink.href ?
            <FaqLink
              href={linkResolver(faqLink)}
            >
              {faqLinkText}
            </FaqLink>
            :
            null
          }

        </InformationSection>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
