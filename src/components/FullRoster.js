import React from 'react'
import DeveloperAPI from '../api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the developers and creates
// a link to their profile page.
const FullRoster = () => (
  <div>
    <ul>
      {
        DeveloperAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster
