import React from 'react'

const SmallCard = ({image, para}) => {
    return (
        <>
            <div className='h-80 w-60 border border-white rounded-lg p-1'>
                <img className='h-45 w-full border-white border rounded-md text-white' src={`https://ik.imagekit.io/dev24/${image}`} alt="randomimage" />
                <p className='p-1 text-white'>{para}</p>
            </div>
        </>
    )
}

export default SmallCard;
