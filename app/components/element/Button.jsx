import React from 'react'

const Button = ({className, children}) => {
  return <button className={`${className} h-fit rounded-xl bg-[#E9A163] hover:bg-opacity-50`}>{children}</button>;
}

export default Button