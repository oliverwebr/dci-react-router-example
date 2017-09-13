import React from 'react'
import DeveloperAPI from '../api'
import { Link } from 'react-router-dom'

const Developer = (props) => {
  const developer = DeveloperAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!developer) {
    return <div>Sorry, but the developer was not found</div>
  }
  return (
    <div>
      <h1>{developer.name}</h1>
      <h2>Github: {developer.ghPage}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Developer
