import React from 'react'
import styled from 'styled-components'
import range from '../../utils/range'
import generateSparkle from '../../utils/Sparkle'
import useRandomInterval from '../../utils/useRandomInterval'
import SparkleInstance from './SparkleInstance'

const Sparkles = ({ children, color }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => generateSparkle((color = '#FFC700')))
  })

  useRandomInterval(
    () => {
      const now = Date.now()
      const sparkle = generateSparkle()

      // Clean up any "expired" sparkles
      const nextSparkles = sparkles.filter((sparkle) => {
        const delta = now - sparkle.createdAt
        return delta < 1000
      })

      // Include our new sparkle
      nextSparkles.push(sparkle)
      // Make it so!
      setSparkles(nextSparkles)
    },
    50,
    500
  )
  return (
    <Wrapper>
      {sparkles.map((sparkle) => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  )
}
const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`

export default Sparkles
