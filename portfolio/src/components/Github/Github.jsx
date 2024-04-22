import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
// this is import the library form the rect-router for easy fletching

function Github() {

    const data = useLoaderData()
    // this is Hook given by the [react-router] its used to run the funciton when hover

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    // note: this is one way to fletch the data form api by useing [useEffect] Hook.. but how its worm mean when we click then onplay
    // the data get fletch and give the result its make some slow ProcessingInstruction. we have another opmize option is there by using [react-router]

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
//  this is the concept the when over the component in that time it get fletch the data form the api its given by the [react-router]