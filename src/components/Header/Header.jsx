import React from 'react'

// styles
import StyledHeader from './HeaderStyles'
import ThemeSwitcher from './ThemeSwitcher'

function Header() {
  return (
    <StyledHeader>
      <h1>TODO</h1>
      <ThemeSwitcher />
    </StyledHeader>
  )
}

export default Header