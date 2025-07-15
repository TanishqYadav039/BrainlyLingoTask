import React from 'react'

const BigCard = ({Wordexplore, count}) => {
    return (
        <>
            <div id='mainCard' className='h-140 w-140 border border-white rounded-md p-3 border-dashed'>
                <h1 className='text-4xl text-white px-2'>{Wordexplore[count].Storytitle}</h1>
                <p className='text-xl text-white p-2'>{Wordexplore[count].Storyttext}</p>
                <img src={`https://ik.imagekit.io/dev24/${Wordexplore[count].Storyimage[0]}`} alt="" className='w-full h-80' />
                <p className='text-xl text-white p-2'>{Wordexplore[count].Storyitext}</p>
                <div><span className='text-green-400 p-2 text-xl'>Synonyms :</span><span className='text-xl text-white'>{Wordexplore[count].Synonyms}</span></div>
                <div><span className='text-pink-500 p-2 text-xl'>Antonyms :</span><span className='text-xl text-white'>{Wordexplore[count].Antonyms}</span></div>
            </div>
        </>
    )
}

export default BigCard
