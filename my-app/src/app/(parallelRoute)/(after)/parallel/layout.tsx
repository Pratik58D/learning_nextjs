import React from 'react'

 type CP = {
  children : React.ReactNode;
  comments :React.ReactNode;
  members : React.ReactNode; 
}
const layout = ({children ,comments,members} : CP ) => {
  return ( 
    <div>
        {children}
        {comments}
        {members}

    </div>
  )
}
export default layout