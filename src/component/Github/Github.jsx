import React from 'react'
import GitHubCalendar from 'github-calendar'

const Github = () => {
  return (
    <div>
      <h1>Github</h1>
      <GitHubCalendar
        username = "SPinfluencers"
        // blockSize={15}
        // blockMargin={5}
        // color="red"
        // fontSize={16}
        // year={new Date().getFullYear()}
        
       />
    </div>
  )
}

export default Github