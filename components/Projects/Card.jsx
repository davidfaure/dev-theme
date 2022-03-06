import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { ThemeContext } from '../../context/ThemeContext'
import useWindowSize from '../../utils/size'

const Card = ({ project, index, totalProjects }) => {
  const size = useWindowSize()
  const isDesktop = size.width > 1210

  const { darkmode } = useContext(ThemeContext)

  return (
    <Wrapper
      style={{
        marginTop: index % 2 === 0 && isDesktop && totalProjects === 3 ? 30 : 0,
        marginBottom:
          index % 2 === 0 && isDesktop && totalProjects === 3 ? -30 : 0,
      }}
      darkmode={darkmode}
      transition={{ type: 'spring', damping: 8 }}
    >
      <LazyMotion features={domAnimation}>
        <TopContainer>
          <ProjectImageContainer>
            <ProjectImage
              src={project.image}
              layout='fill'
              alt={project.title}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgB7cqhEQAACAJAdP897d6ZZQUCkc9fN/sQNESJnkgetQPh0RGf5wAAAABJRU5ErkJggg=='
            />
          </ProjectImageContainer>
        </TopContainer>
        <BottomContainer>
          <Heading>
            <Title>
              <a
                href={project.link}
                target='_blank'
                rel='noreferrer'
                tabIndex={-1}
              >
                {project.title}
              </a>
            </Title>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noreferrer'
                aria-label='Github link'
              >
                <FaGithub
                  style={{
                    fontSize: '2rem',
                    marginTop: -7,
                    marginLeft: 20,
                    cursor: 'pointer',
                    color: '#000000',
                  }}
                />
              </a>
            )}
          </Heading>
          <Description>{project.description}</Description>
          <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
            <a
              href={project.link}
              target='_blank'
              rel='noreferrer'
              tabIndex={-1}
            >
              View project
            </a>
          </Button>
        </BottomContainer>
      </LazyMotion>
      </Wrapper>
  )
}

export default Card

// Styles
const Wrapper = styled(m.div)`
  background: #ffffff;
  border-radius: 6px;
  /* border-bottom: 10px solid rgba(0, 0, 0, 0.1); */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  flex: 1 500px;
  padding: 5px 2px;
  position: relative;
  transition: box-shadow 0.15s ease-in-out;
  overflow-wrap: break-word;
  hyphens: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1210px) {
    &:hover {
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }

    &:before {
      content: '';
      position: absolute;
      top: 40px;
      left: 40px;
      right: 40px;
      height: 100%;
      filter: blur(30px);
      z-index: -1;
    }

    &:after {
      content: '';
      border: 2px solid transparent;
      transition: border 0.15s ease-in-out;
      position: absolute;
      top: -3%;
      left: -3%;
      right: -3%;
      bottom: -3%;
      height: calc(106% + 10px);
      width: 106%;
      border-radius: 6px;
      pointer-events: none;
      will-change: border;
    }
  }

  @media (max-width: 320px) {
    min-width: 100%;
  }
`

const TopContainer = styled.div`
  overflow: hidden;
  border-radius: 6px;
  height: 280px;
  top: 0;
  left: 0;
  position: relative;
`

const BottomContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  overflow-wrap: break-word;
  hyphens: auto;

  a {
    color: #000000;
  }
`

const Description = styled.p`
  line-height: 1.4;
  font-size: 1.6rem;
  flex: 1 0 auto;
`

const Button = styled(m.button)`
  border: none;
  width: 30%;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  background: #fbad3c;

  border-radius: 6px;
  filter: drop-shadow(0 0 0.75rem hsla(36, 96%, 75%, 0.4));

  & a {
    color: #000000;
    display: block;
  }

  &:focus {
    outline-color: hsla(36, 96%, 54%, 1);
  }
`

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 280px;
`

const ProjectImage = styled(Image)`
  display: block;
  transition: transform 450ms ease-out;
  will-change: transform;

  ${Wrapper}:hover & {
    transform: scale(1.02);
  }
`
