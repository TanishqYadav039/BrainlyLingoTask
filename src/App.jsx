import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card.jsx'
import Loading from './Components/Loading.jsx'
import Navbar from './Components/Navbar.jsx'



const App = () => {

  const [allData, setAllData] = useState("")
  const [loading, setLoading] = useState(true)

  const storyData = []


  useEffect(() => {
    axios.get("https://mxpertztestapi.onrender.com/api/sciencefiction").then((res) => {
      setAllData(res.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
      setLoading(false)
    })
  }, [])

  // console.log(typeof allData)


  if (loading) return <Loading />

  for (let i = 0; i < allData.length; i++) {
    let obj = { image: allData[i]["Image"][0], title: allData[i]["Title"], storyStatus: allData[i]["Status"], id: allData[i]._id };
    if (obj.image && obj.title && obj.storyStatus) {
      storyData.push(obj)
    }
  }

  return (
    <>
      <div className='min-h-screen w-full bg-[#001845] relative'>
        <Navbar />
        <section className="h-80 w-full bg-[#001845] pt-24">
          <div className="h-full w-full flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl font-bold text-white">Science Fiction Stories</h1>
            <div className="h-15 w-full flex justify-center items-center gap-10">
              <button className="h-12 w-45 bg-blue-600 font-bold text-lg rounded-full text-white">New</button>
              <button className="h-12 w-45 bg-yellow-300 font-bold text-lg rounded-full text-white">In Progress</button>
              <button className="h-12 w-45 bg-green-400 font-bold text-lg rounded-full text-white">Completed</button>
              <button className="h-12 w-45 bg-red-400 font-bold text-lg rounded-full text-white">Clear All</button>
            </div>
          </div>
        </section>
        <div className='min-h-full w-full flex justify-center bg-[#001845] flex-wrap gap-4 py-5'>
          {storyData.map((data) => {
            if (data.image && data.storyStatus && data.title && data.id) {
              return <Card image={data.image} status={data.storyStatus} title={data.title} id={data.id} key={data.id} />
            }
          })}
        </div>
      </div>
    </>
  )
}

export default App

