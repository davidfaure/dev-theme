import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { useMedia } from 'react-use-media'
import Image from 'next/image'
import { VscGlobe } from 'react-icons/vsc'
import { BiCodeAlt } from 'react-icons/bi'

import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion'

import { ThemeContext } from '../../context/ThemeContext'
import { LanguageContext } from '../../context/LanguageContext'

const Card = ({ project, index, totalProjects }) => {
  const isDesktop = useMedia({
    minWidth: 1210,
  })

  const { darkMode } = useContext(ThemeContext)
  const { lang } = useContext(LanguageContext)
  const [selectedId, setSelectedId] = React.useState(null)

  return (
    <AnimateSharedLayout type='crossfade'>
      <Wrapper
        style={{
          marginTop:
            index % 2 === 0 && isDesktop && totalProjects === 3 ? 30 : 0,
          marginBottom:
            index % 2 === 0 && isDesktop && totalProjects === 3 ? -30 : 0,
        }}
        darkMode={darkMode}
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
                objectPosition='top'
                blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAjSURBVHgB7cqhEQAACAJAdP897d6ZZQUCkc9fN/sQNESJnkgetQPh0RGf5wAAAABJRU5ErkJggg=='
              />
            </ProjectImageContainer>
          </TopContainer>
          <BottomContainer>
            <Heading>
              <Title darkMode={darkMode}>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex={-1}
                >
                  {project.title}
                </a>
              </Title>
              <StackButton
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
                // onClick={() => setSelectedId(project.id)}
                onMouseEnter={() => setSelectedId(project.id)}
                onMouseLeave={() => setSelectedId(null)}
                darkMode={darkMode}
              >
                {lang === 'FR' ? 'Stack Technique' : 'Tech Stack'}
              </StackButton>
            </Heading>
            <Description darkMode={darkMode}>{project.description}</Description>
            <ButtonContainer>
              <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  tabIndex={-1}
                >
                  <VscGlobe
                    style={{
                      marginRight: 15,
                      fontSize: '2.5rem',
                      color: 'hsl(225, 100%, 94%)',
                    }}
                  />
                  {lang === 'FR' ? 'Démo' : 'Demo'}
                </a>
              </Button>
              {project.githubLink && (
                <ButtonCode whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noreferrer'
                    tabIndex={-1}
                  >
                    <BiCodeAlt
                      style={{
                        marginRight: 15,
                        fontSize: '2.5rem',
                        color: 'hsl(225, 100%, 94%)',
                      }}
                    />
                    {lang === 'FR' ? 'Code Source' : 'Source Code'}
                  </a>
                </ButtonCode>
              )}
            </ButtonContainer>
          </BottomContainer>
          <AnimatePresence>
            {selectedId && (
              <ContainerModal
                key='modal'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                length={project.stack.length}
                darkMode={darkMode}
              >
                {/* <ContainerBlur /> */}
                {project.stack.map(({ tech, logo }) => (
                  <picture key={tech}>
                    <source srcSet={logo} />
                    <Logo
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      src={logo}
                      alt={tech}
                    />
                  </picture>
                ))}
              </ContainerModal>
            )}
          </AnimatePresence>
        </LazyMotion>
      </Wrapper>
    </AnimateSharedLayout>
  )
}

export default Card

// Styles

const ContainerModal = styled(m.div)`
  position: absolute;
  z-index: 1000;
  max-width: 1400px;
  width: 100%;
  height: 286px;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.darkMode ? 'rgba(1, 1, 1, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const AnimBlur = keyframes`
  O% {
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
  100% {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
`

const ContainerBlur = styled.div`
  position: absolute;
  max-width: 1400px;
  width: 100%;
  height: 280px;
  top: 0;
  left: 0;
  animation: ${AnimBlur} 0.1s ease-in-out;
`

const Logo = styled(m.img)`
  width: 40px;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  z-index: 1000;

  @media (min-width: 768px) {
    width: 42px;
  }

  @media (min-width: 1440px) {
    width: 60px;
  }
`

const StackButton = styled(m.button)`
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${(props) =>
    props.darkMode ? 'hsl(225, 100%, 94%)' : 'hsl(225, 100%, 18%)'};
  padding: 6px 10px;
  border-radius: 10px;
  color: ${(props) =>
    props.darkMode ? 'hsl(225, 100%, 18%)' : 'hsl(225, 100%, 94%)'};
  cursor: pointer;
  white-space: nowrap;
`

const Wrapper = styled(m.div)`
  background: ${(props) =>
    props.darkMode ? '#000F3D' : 'hsl(225, 100%, 94%)'};
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  flex: 1 600px;
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
  height: 280px;
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

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Title = styled.h3`
  font-size: 3.5rem;
  margin: 0;
  overflow-wrap: break-word;
  hyphens: auto;
  margin: 10px 10px 10px 0px;

  a {
    ${'' /* color: #000000; */}
    color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  line-height: 1.8;
  font-size: 1.6rem;
  flex: 1 0 auto;
  color: ${(props) => (props.darkMode ? '#FFFFFF' : '#000000')};
`

const ButtonContainer = styled(m.div)`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Button = styled(m.button)`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  display: flex;
  background: hsl(225, 100%, 60%);
  color: hsl(225, 100%, 98%);
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  font-weight: 600;
  margin-right: 25px;
  will-change: transform;
  cursor: pointer;
  filter: drop-shadow(0 0 0.75rem hsla(225, 98%, 64%, 0.4));

  & a {
    color: hsl(225, 100%, 98%);
    display: flex;
    align-items: center;
  }

  &:focus {
    outline-color: hsla(225, 98%, 54%, 1);
  }

  @media (max-width: 500px) {
    margin-right: 0px;
    margin-bottom: 2rem;
    width: 220px;
  }
`

const ButtonCode = styled(m.button)`
  border: none;
  font-size: 1.8rem;
  border-radius: 5px;
  background: hsl(225, 100%, 40%);
  color: hsl(225, 100%, 98%);
  font-weight: 600;
  display: flex;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem hsla(225, 98%, 44%, 0.4));
  width: 200px;
  justify-content: center;
  align-items: center;

  & a {
    color: hsl(225, 100%, 98%);
    display: flex;
    align-items: center;
  }

  &:focus {
    outline-color: hsla(225, 98%, 54%, 1);
  }

  @media (max-width: 500px) {
    width: 220px;
    padding: 16px 30px;
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
