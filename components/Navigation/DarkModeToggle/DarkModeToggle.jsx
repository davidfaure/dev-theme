import * as React from 'react'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ThemeContext } from '../../../context/ThemeContext'

import SunSvg from './SunSvg'
import MoonSvg from './MoonSvg'

const DarkModeToggle = () => {
  const { darkmode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <Wrapper
      onClick={() => toggleDarkMode()}
      style={{
        background: !darkmode
          ? 'rgba(251, 174, 61, 0.3)'
          : 'rgba(0, 0, 0, 0.3)',
        justifyContent: !darkmode ? 'flex-start' : 'flex-end',
      }}
    >
      <Thumb
        layout
        aria-label='Toggle dark mode'
        onClick={() => toggleDarkMode()}
        style={{
          background: !darkmode
            ? 'rgba(0, 0, 0, 0.5)'
            : 'rgba(251, 174, 61, 1)',
        }}
        animate={{ x: !darkmode ? -2 : 2 }}
        transition={{ type: 'spring', damping: 10 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        tabIndex={0}
      >
        {!darkmode ? (
          <SunSvg />
        ) : (
          <motion.div
            layout
            style={{ marginTop: 2, marginRight: 2 }}
            initial={{ rotate: -30 }}
            animate={{ rotate: 0 }}
            transition={{ type: 'spring', damping: 10 }}
          >
            <MoonSvg />
          </motion.div>
        )}
      </Thumb>
    </Wrapper>
  )
}

export default DarkModeToggle

// Styles
const Wrapper = styled.div`
  width: 50px;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 40px;
  cursor: pointer;
  margin-left: 40px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  border: 1px solid hsla(251, 174, 61, 0.1);
  transition: background 400ms ease;

  @media (max-width: 500px) {
    margin-left: 0px;
    width: 60px;
  }
`

const Thumb = styled(motion.button)`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.4));
  cursor: pointer;

  @media (max-width: 500px) {
    width: 36px;
    height: 36px;
  }
`
