import React from 'react'
import styled from 'styled-components'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { Waypoint } from 'react-waypoint'

import Image from 'next/image'

const Details = ({ text, image }) => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Waypoint onEnter={() => setVisible(true)} bottomOffset='200px'>
      {visible && (
        <Wrapper
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            damping: 18,
            stiffness: 80,
            bounce: 0.9,
            delay: 0.15,
          }}
        >
          <LazyMotion features={domAnimation}>
            <Container>
              <ImageWrapper>
                <Image
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  src={image}
                  alt='check'
                  layout='fill'
                  className='check-image'
                />
              </ImageWrapper>
              <DetailText>{text}</DetailText>
            </Container>
          </LazyMotion>
        </Wrapper>
      )}
    </Waypoint>
  )
}

export default Details

const Wrapper = styled(m.div)`
  border: none;
  background: var(--backgroundColor);
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--textColor);
  cursor: default;
`

const ImageWrapper = styled(m.div)`
  position: relative;
  width: 28px;
  height: 28px;
`

const Container = styled(m.span)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .check-image {
    margin-right: 12px;
  }
`

const DetailText = styled(m.p)`
  font-size: 2rem;
  font-weight: 600;
  margin: 4px 0px 0px 12px;
  line-height: 1;
`
