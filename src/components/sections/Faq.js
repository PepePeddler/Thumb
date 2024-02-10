import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY ARE THEY BUILT ON BASE?" >
  Base lets everyone mint memes for almost free. Plus its likely a shit ton of normies will be onboared through it... with meme marketing.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT DO THEY DO?" >
    At the moment you get a cool thumb looking thing to meme with and leave your print, on your memes + a community of aurtistic, memers.
    
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHEN ?" >
  Me-me's mint will launch on x/x/xx
Meme Creators - XPM - XPM
Allow List - XPM - XPM
  Public - XPM - XPM
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="EARN & WIN FROM MAKING MEMES" >
Join 1 of the many me me collab contests, or submit a meme to you favorite collections group, every time someone mints a meme you earn ETH!
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq
