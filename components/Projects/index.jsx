import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import Parallax from '../Parallax'
import Card from './Card'
import Wave from '../Waves/Wave'

import { projects } from '../../data'

import bg from '../../public/images/projects-background.png'

const Projects = () => {
  return (
    <Wrapper>
      <BackgroundImage
        src={bg}
        layout='fill'
        objectFit='cover'
        placeholder='blur'
        alt='Background'
      />
      <Container id='projects'>
        <HeadingText tabIndex={0}>{projects.headerText} &mdash;</HeadingText>
        <InfoText dangerouslySetInnerHTML={{ __html: projects.infoText }} />
        <Parallax offset={10} offsetInitial={30}>
          <CardList totalProjects={projects.projectsData.length}>
            {projects.projectsData.slice(0, 3).map((project, index) => (
              <Card
                key={project.id}
                project={project}
                index={index}
                totalProjects={projects.projectsData.length}
              />
            ))}
          </CardList>
        </Parallax>
      </Container>
      <WaveWrapper>
        <Wave />
      </WaveWrapper>
    </Wrapper>
  )
}

export default Projects

// Styles
const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  background: var(--projectsBackgroundColor);
  top: 0px;
`

const Container = styled.div`
  position: relative;
  z-index: 1000;
  padding: 80px 20px 0px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    padding: 90px 40px 0px;
  }
`

const HeadingText = styled.h2`
  margin-top: 0;
  font-size: 4.2rem;
  margin-bottom: 60px;
  background: radial-gradient(
    circle farthest-corner at left center,
    hsl(195, 100%, 90%) -100%,
    hsl(288, 100%, 90%) 30%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 1024px) {
    font-size: clamp(4rem, calc(4vw + 1rem), 5rem);
  }
`

const InfoText = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }

  & p {
    line-height: 1.6;
    color: hsl(288, 100%, 92%);
    max-width: 120ch;
    font-size: 1.6rem;

    @media (min-width: 1024px) {
      font-size: 1.8rem;
    }
  }
`

const BackgroundImage = styled(Image)`
  position: absolute;
  left: 0;
  z-index: 120;
`

const WaveWrapper = styled.div`
  position: absolute;
  bottom: -10px;
  left: -3%;
  right: -3%;
  z-index: 999;
  width: 103%;

  @media (min-width: 1440px) {
    bottom: -50px;
  }
`

const CardList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  z-index: 200;
  position: relative;
  padding: 0;
  top: 40px;

  @media (min-width: 1440px) {
    gap: 60px;
  }
`
