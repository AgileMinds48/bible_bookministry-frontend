import React from 'react'

const Menu = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'E-books', href: '/e-books' },
    { label: 'About us', href: '/about' },
  ];
  return (
    <div className=" h-screen  bg-white pt-28">
      <ul>
        {navItems.map(({label,href}) => (
          <li>{label}</li>
        ))}
      </ul>
  </div>  )
}

export default Menu;