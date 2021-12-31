import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { LanguageContext } from '../../context/LanguageContext'

const Details = ({ text, image }) => {
  return (
    <Wrapper>
      <Container>
        <Image
          src={image}
          alt='check'
          width={28}
          height={28}
          style={{ marginRight: '12px' }}
          className='check-image'
        />
        <DetailText>{text}</DetailText>
      </Container>
    </Wrapper>
  )
}

export default Details

const Wrapper = styled.div`
  border: none;
  background: var(--backgroundColor);
  padding: 12px 16px;
  border-radius: 8px;
  color: var(--textColor);
  /* box-shadow: 0 4px 6px 0 rgb(0 55 83 / 13%); */
`

const Container = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  .check-image {
    margin-right: 12px;
  }
`

const DetailText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 0px 0px 0px 12px;
  line-height: 1;
`
