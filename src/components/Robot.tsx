import React from 'react'

interface RobotProps {
  id: number
  name: string
  email: string
}

// type React.FC<P = {}> = React.FunctionComponent<P>
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}

export default Robot
