import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const Github = () => {
  return (
    <div>
      <h4 style={{textAlign:'center'}}>GITHUB</h4>
      <p style={{textAlign:'center', fontSize: '50px', fontWeight: "bold"}}>Github <span style={{color:'#ff014f'}}>Calendar</span></p>
      <br />
      <div style={{marginLeft:'200px'}}>
      <GitHubCalendar 
      username='SPinfluencers'
      blockSize={20}
      blockMargin={5}
      fontSize={16}
      />
      </div>
    </div>
  )
}

export default Github