import Roadmap from './Roadmap';

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverVideo />
          </Suspense>
        </Box>
        
        <Roadmap />
        
        <Round>
          <Circle>
            &#x2193;
          </Circle>
          <img width={500} height={400} src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  )
}

export default Home;

export default Home
