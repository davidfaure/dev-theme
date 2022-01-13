import React from 'react'
// import { useMedia } from 'react-use-media'
import dynamic from 'next/dynamic'
import useWindowSize from '../../utils/size'

const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const MobileNavbar = dynamic(() => import('./MobileNavbar'), { ssr: false })

const Navigation = () => {
  const size = useWindowSize()
  const isDesktop = size.width > 900
  // const isDesktop = useMedia({
  //   minWidth: 900,
  // })
  return isDesktop ? <Navbar /> : <MobileNavbar />
}

export default Navigation
