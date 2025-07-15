import React from 'react'
import Button from './Button'

const Tabs = ({Wordexplore, Storyadventure, Brainquest, scrollToTarget}) => {
  return (
    <>
      <div className='w-full h-15 flex justify-evenly items-center py-10'>
        <Button data={Wordexplore} handleScroll={scrollToTarget} nameRef="WordexploreRef"/>
        <Button data={Storyadventure} handleScroll={scrollToTarget} nameRef="StoryadventureRef"/>
        <Button data={Brainquest} handleScroll={scrollToTarget} nameRef="BrainquestRef"/>
      </div>
    </>
  )
}

export default Tabs
