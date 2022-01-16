import React, { useContext } from 'react'
import styled from 'styled-components'
// import { useMedia } from 'react-use-media'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { ThemeContext } from '../../context/ThemeContext'
import useWindowSize from '../../utils/size'

const Card = ({ project, index, totalProjects }) => {
  const size = useWindowSize()
  const isDesktop = size.width > 1210
  // const isDesktop = useMedia({
  //   minWidth: 1210,
  // })

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
              objectFit='cover'
              objectPosition='center'
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
                    color: 'hsla(288, 98%, 30%, 1)',
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
const Wrapper = styled(m.li)`
  background: #ffffff;
  border-radius: 15px;
  border-bottom: 10px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  flex: 1;
  min-width: 350px;
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
      border-radius: 10px;
      pointer-events: none;
      will-change: border;
    }
  }

  @media (max-width: 320px) {
    min-width: 100%;
  }
`

const TopContainer = styled.div`
  border-radius: 15px;
  height: 180px;
  top: 0;
  left: 0;
  position: relative;
`

const BottomContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
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
    color: #392049;
  }
`

const Description = styled.p`
  line-height: 1.4;
  font-size: 1.6rem;
  flex: 1 0 auto;
`

const Button = styled(m.button)`
  border: none;
  width: 100%;
  padding: 16px 30px;
  font-weight: 600;
  font-size: 1.8rem;
  cursor: pointer;
  background: radial-gradient(
    circle farthest-corner at left center,
    hsla(195, 92%, 60%, 1) 0%,
    hsla(288, 98%, 60%, 1) 110%
  );
  border-radius: 5px;
  filter: drop-shadow(0 0 7.5px rgba(204, 75, 194, 0.4));

  & a {
    color: #392049;
    display: block;
  }

  &:focus {
    outline-color: hsla(288, 98%, 54%, 1);
  }
`

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 15px;
`

const ProjectImage = styled(Image)`
  display: block;
  transition: transform 450ms ease-out;
  will-change: transform;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  ${Wrapper}:hover & {
    transform: scale(1.02);
  }
`
