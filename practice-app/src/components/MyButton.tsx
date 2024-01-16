import React from 'react'

interface MyButtonProps {
    text : string | number,
    onClick?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({onClick, text}) => {

  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default MyButton