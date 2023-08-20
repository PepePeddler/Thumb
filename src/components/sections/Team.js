import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/meme-16.svg';
import img2 from '../../assets/Nfts/meme-1.svg';
import img3 from '../../assets/Nfts/meme-12.svg';
import img4 from '../../assets/Nfts/meme-11.svg';
import img5 from '../../assets/Nfts/meme-14.svg';
import img6 from '../../assets/Nfts/meme-5.svg';
import img7 from '../../assets/Nfts/meme-6.svg';
import img8 from '../../assets/Nfts/meme-7.svg';
import img9 from '../../assets/Nfts/meme-8.svg';
import img10 from '../../assets/Nfts/meme-16.svg';
import img11 from '../../assets/Nfts/meme-1.svg';
import img12 from '../../assets/Nfts/meme-12.svg';
import img13 from '../../assets/Nfts/meme-11.svg';
import img14 from '../../assets/Nfts/meme-8.svg';
import img15 from '../../assets/Nfts/meme-14.svg';
import img16 from '../../assets/Nfts/meme-5.svg';
import img17 from '../../assets/Nfts/meme-6.svg';
import img18 from '../../assets/Nfts/meme-7.svg';
import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';

const ConfettiComponent = lazy(() => import("../Confetti"));


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
    <Suspense fallback={<Loading />}>
    <ConfettiComponent  /> </Suspense>
      <Title>Memes</Title>
      <Container>
        <MemberComponent img={img2}  name="PEPE" position="" />
        <MemberComponent img={img8}  name="DOODLES" position="" />
        <MemberComponent img={img3}  name="KEVIN" position="" />
        <MemberComponent img={img4}  name="CRYPTOPUNKS" position="" />
        <MemberComponent img={img5}  name="MIKABISHU" position="" />
        <MemberComponent img={img6}  name="TUNGSTEN CUBE" position="" />
        <MemberComponent img={img9}  name="KEKO" position="" />
        <MemberComponent img={img10}  name="NOUNS" position="" />
        <MemberComponent img={img11}  name="SHREDDING SASSY" position="" />
        <MemberComponent img={img12}  name="BITCOIN" position="" />
        <MemberComponent img={img18}  name="ETHEREUM" position="" />
        <MemberComponent img={img13}  name="MFER" position="" />
        <MemberComponent img={img14}  name="LASER EYES" position="" />
        <MemberComponent img={img15}  name="NPC" position="" />
        <MemberComponent img={img16}  name="COCO" position="" />
        <MemberComponent img={img17}  name="RETRO GAMING" position="" />
        <MemberComponent img={img1}  name="SUPER HEROS" position="" />
        <MemberComponent img={img7}  name="SOUTH PARK" position="" />

      </Container>
    </Section>
  )
}

export default Team
