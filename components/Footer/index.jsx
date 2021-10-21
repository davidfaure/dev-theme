import React from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { footer } from '../../data'
import Notifications from '../Notification'

const Footer = () => {
  React.useEffect(() => {
    toast(<Notifications />, { position: toast.POSITION.BOTTOM_RIGHT })
  })
  return (
    <Wrapper>
      &copy;{new Date().getFullYear()} {footer.text}
    </Wrapper>
  )
}

export default Footer

// Styles
const Wrapper = styled.footer`
  text-align: center;
  padding: 40px 0;
  color: var(--textColor);
  font-size: 1.6rem;
  font-weight: 500;
  background: var(--backgroundColor);
  z-index: 10;
  position: relative;
`
