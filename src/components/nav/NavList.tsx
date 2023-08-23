import React from 'react'
import { NavItem } from './NavItem'

export const NavList = () => {
  return (
    <div className="flex gap-[27px] items-center">
    <NavItem text="New York" />
    <NavItem text="For job seekers" />
    <NavItem text="For employers" />
  </div>
  )
}
