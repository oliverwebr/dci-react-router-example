import React from 'react'

const spanStyle = {
    'font-weight': 'bold',
};

const Schedule = () => (
  <div>
    <ul>
      <li><span style={spanStyle}>09:00 - 12:00</span> - Project Time</li>
      <li><span style={spanStyle}>12:00 - till end</span> - React Router</li>
      <li><span style={spanStyle}>Extra:</span> Get your profile date for your project's about page</li>
    </ul>
  </div>
)

export default Schedule
