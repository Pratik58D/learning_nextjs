import React from 'react'

interface AboutParams {
    params  : Promise<{id : string} >
}


//dynamic meta data
export const generateMetadata = async({params} : AboutParams) =>{
    const {id} = await params;
    return {
        title : `partik ${id}`
    }
}

const AboutPratiks = async ({params} : AboutParams) => {

    const {id} = await params;

  return (


    <div>About Pratik number : {id} </div>
  )
}



export default AboutPratiks