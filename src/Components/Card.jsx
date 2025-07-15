import React from 'react'
import { useNavigate } from 'react-router'



const Card = ({ image, title, status, id }) => {

    const cardStatus = function(value){
        const trimValue = value.trim().replace(" ", "").toLowerCase()
        if(trimValue === "published"){
            return "text-blue-500"
        }else if(trimValue === "inprogress"){
            return "text-yellow-500"
        }else if(trimValue === "draft"){
            return "text-purple-500"
        }else{
            return "text-green-500"
        }
    }

    const navigate = useNavigate()
    const handleInfo = () => {
        navigate(`/page2/${id}`)
    }

    return (
        <>
            <div className='h-95 w-80 rounded-xl p-3 bg-[#0643a4]'>
                <img className='h-65 w-full rounded-lg border-2 bg-white' src={`https://ik.imagekit.io/dev24/${image}`} />
                <h2 className='font-bold text-xl py-2 text-white'>{title}</h2>
                <button
                    className={`h-10 w-74 border-2 my-2 rounded-xl bg-white font-bold text-black text-lg ${cardStatus(status)}`}
                    onClick={() => handleInfo()}>{status}</button>
            </div>
        </>
    )
}

export default Card
