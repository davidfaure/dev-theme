import React from 'react'
import { useMedia } from 'react-use-media'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./Navbar'), { ssr: false })
const MobileNavbar = dynamic(() => import('./MobileNavbar'), { ssr: false })

const Navigation = () => {
  const isDesktop = useMedia({
    minWidth: 900,
  })

  return isDesktop ? <Navbar /> : <MobileNavbar />
}

export default Navigation
