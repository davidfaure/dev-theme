import React from 'react'
import styled from 'styled-components'
import { m, AnimatePresence } from 'framer-motion'

const Notifications = ({ closeToast, toastProps }) => {
  return (
    <div>
      <h3>Mon CV </h3>
    </div>
  )
}

const Container = styled.div`
  margintop: 10px;
  width: 100vw;
  height: 20vh;
  border: 1px solid blue;
`

const NotifContainer = styled.ul`
  position: fixed;
  bottom: 0;
  right: 0;
  top: 10%;
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: flex-end;
  border: 1px solid red;
`

const TextContainer = styled(m.li)`
  width: 300px;
  height: 150px;

  background: white;
  margin: 10px;
  flex: 0 0 100px;
  position: relative;
  border-radius: 10px;
`

export default Notifications
