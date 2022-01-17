import React from 'react'
import dynamic from 'next/dynamic'
import useWindowSize from '../../utils/size'

const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const MobileNavbar = dynamic(() => import('./MobileNavbar'), { ssr: false })

const Navigation = () => {
  const size = useWindowSize()
  const isDesktop = size.width > 900
  return isDesktop ? <Navbar /> : <MobileNavbar />
}

export default Navigation
