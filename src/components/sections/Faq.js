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
  <Accordion ScrollTrigger={ScrollTrigger} title="What Are NFTs" >
  NFTs or Non Fungible Tokens are one of a kind and unique data stored on the blockchain that can be sold or traded. They function like cryptographic Tokens but unlike cryptocurrencies, are not mutually interchangeable.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is The Metaverse?" >
  The Metaverse is a virtual space where people can work, play and socialize.  In the future, the Metaverse or multiple metaverses will combine with our reality and the internet of things, merging digital interactions with real life.  Today we are still discovering the utility of connecting virtual, augmented and mixed realities to our daily lives.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is the Gas Fee?" >
  Gas is the internal pricing for running a contract or in general any transaction in the blockchain. It is a unit of measurement for the amount of computational effort required to perform operations within the Blockchain.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="How can I use my NFT?" >
After minting your NFT in our platform, you will then be able to play with it and integrate it in a Metaverse. If you prefer, at your desk you can also connect an NFT from our online platform with a physical Holographic display and motion sensor in order to interact with the NFT.
</Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is Minting" >
  Minting is the process of converting a digital file into a digital asset stored on the blockchain. In the Memento Studio platform, the first thing you do is connect with your wallet. Once connected you can then upload the digital file, write the details of your NFT and just click Mint. Once minted you will now be able to see your items at the gallery.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What are the uses of NFT?" >
  NFTs can be used in a variety of ways. Since we can tokenize anything digital, its use cases include Authenticating Digital Identity, Intellectual Property, Patents, Real Estate Documentations, Academic Credentialing, Gaming and Artwork.  
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq