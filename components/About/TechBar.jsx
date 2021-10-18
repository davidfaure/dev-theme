import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { techImages } from '../../data'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      type: 'spring',
      damping: 18,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
}

const TechBar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <LazyMotion features={domAnimation}>
      <Waypoint onEnter={() => setVisible(true)} bottomOffset='-300px'>
        <div>
          {visible && (
            <Wrapper
              variants={list}
              initial='hidden'
              animate='visible'
              techImagesLength={techImages.length}
            >
              {techImages.map(({ tech, logo }) => (
                <picture key={tech}>
                  <source srcSet={logo} />
                  <Logo
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', damping: 18 }}
                    src={logo}
                    alt={tech}
                    variants={item}
                  />
                </picture>
              ))}
            </Wrapper>
          )}
        </div>
      </Waypoint>
    </LazyMotion>
  )
}

export default TechBar

// Styles
const Wrapper = styled(m.div)`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) =>
    `repeat(${props.techImagesLength}, auto)`};
  gap: 20px;
  margin-left: 0;
  margin-bottom: 40px;
  order: -1;
  z-index: 1000;
  width: min-content;
  position: absolute;

  @media (min-width: 768px) {
    margin-bottom: 0;
    order: 0;
    gap: 22px;
  }

  @media (min-width: 1440px) {
    gap: 40px;
  }
`

const Logo = styled(m.img)`
  width: 40px;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));

  @media (min-width: 768px) {
    width: 42px;
  }

  @media (min-width: 1440px) {
    width: 60px;
  }
`
