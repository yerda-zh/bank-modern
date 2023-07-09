import React from 'react'

const Button = ({styles}) => (
    <button type='button' className={`py-4 px-6
      bg-blue-gradient font-poppins font-medium
      text-[18px] text-primary outline-none rounded-[10px]
      transform transition duration-300 hover:scale-105 
      ${styles}`}>
      Get Started
    </button>
  )

export default Button