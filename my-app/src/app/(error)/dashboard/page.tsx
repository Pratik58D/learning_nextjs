import React from 'react'

const DashBoard = () => {
    if(2<5){
        throw new Error("Error in Dashboard");
    }
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard