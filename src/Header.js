import React from 'react'

const Header = ({ money, cartTotal }) => {
  return (
    <div className='header'>Harcamak için ${money - cartTotal} paranız var.</div>
  )
}

export default Header