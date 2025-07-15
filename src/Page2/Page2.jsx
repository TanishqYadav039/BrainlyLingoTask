import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import Tabs from '../Components/Tabs';
import SmallCard from '../Components/SmallCard';
import Loading from '../Components/Loading';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BigCard from '../Components/BigCard';
import { useTab } from '../Context/TabContext';
import Navbar from '../Components/Navbar';


const Page2 = () => {

    const { id } = useParams();

    const [storyData, setStoryData] = useState({})
    const [Wordexplore, setWorldExplore] = useState([])
    const [Storyadventure, setStoryAdventure] = useState({})
    const [Brainquest, setBrainquest] = useState([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const [questCount, setQuestCount] = useState(0)
    const [message, setMessage] = useState("")
    const [showAnswer, setShowAnswer] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const { tab } = useTab()


    useEffect(() => {
        axios.get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`).then((res) => {
            setStoryData(res.data)
            setWorldExplore(res.data["Wordexplore"])
            setStoryAdventure(res.data["Storyadvenure"])
            setBrainquest(res.data["Brainquest"])
            setLoading(false)
        })
    }, [])

    const increment = () => {
        if (Wordexplore.length - 1 == count) {
            return
        }
        setCount(count + 1);
    }

    const decrement = () => {
        if (0 === count) {
            return
        }
        setCount(count - 1);
    }

    const handleNext = () => {
        if (Brainquest.length - 1 == questCount) {
            return
        }
        setQuestCount(questCount + 1);
    }

    const handlePrevious = () => {
        if (0 === questCount) {
            return
        }
        setQuestCount(questCount - 1);
    }


    const handleAnswer = (value) => {
        setShowAnswer(true)
        if (value === Brainquest[questCount].Answer) {
            setMessage(`Your Answer is Correct`)
            setIsCorrect(true)
            setTimeout(() => {
                setShowAnswer(false)
                setIsCorrect(false)
                if (Brainquest.length - 1 > questCount) {
                    setQuestCount(questCount + 1)
                }
            }, [3000])
            return
        }
        setMessage(`Your Answer is Incorrect. Correct Answer is ${Brainquest[questCount].Answer}`)

        setTimeout(() => {
            setShowAnswer(false)
            setIsCorrect(false)
            if (Brainquest.length - 1 > questCount) {
                setQuestCount(questCount + 1)
            }
        }, [3000])
    }



    if (loading) return <Loading />

    return (
        <>
            <div className='min-h-screen w-screen cursor-pointer bg-[#001845] no-scrollbar'>
                <Navbar />
                <section className="h-100 w-full bg-[#001845] pt-24">
                    <div className="h-full w-full flex flex-col justify-center items-center gap-15">
                        <h1 className="text-6xl font-bold text-white"><span className='text-blue-400'>The Lost City of </span>Future Earth</h1>
                        <div className="h-15 w-full flex justify-center items-center gap-10">
                            <Tabs Wordexplore={"Wordexplore"} Storyadventure={"Story Adventure"} Brainquest={"Brainquest"} />
                        </div>
                    </div>
                </section>
                {/* <h1 className={`font-bold text-7xl text-center text-white py-15 ${tab === "wordexplore" ? "" : "hidden"}`}>Wordexplorer</h1> */}
                <div className={`h-[80%] w-full p-4 mt-5 justify-between gap-8 ${tab === "wordexplore" ? "flex" : "hidden"}`}>
                    <div className='w-140 min-h-160 border-white rounded-md'>
                        <BigCard Wordexplore={Wordexplore} count={count} />
                        <div className='h-20 w-full flex justify-center items-center py-4 gap-10'>
                            <button className='text-white h-15 w-15 border-2 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-600'
                                onClick={() => decrement()}
                            ><FaArrowLeft /></button>
                            <button className='text-white h-15 w-15 border-2 rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-600'
                                onClick={() => increment()}
                            ><FaArrowRight /></button>
                        </div>
                    </div>
                    <div className='h-140 w-[60%] flex gap-2 overflow-y-auto'>
                        <div className='h-80 w-full flex flex-wrap gap-3 no-scrollbar'>
                            {Storyadventure["content"].map((data) => {
                                return <SmallCard key={data._id} image={data["Storyimage"][0]} para={data["Paragraph"]} />
                            })}
                        </div>
                    </div>
                </div>
                {/* <h1 className={`font-bold text-7xl text-center text-white py-15 ${tab === "storyadventure" ? "" : "hidden"}`}>Story Adventure</h1> */}
                <div className={`h-100 w-full py-10 px-2 overflow-y-auto no-scrollbar ${tab === "storyadventure" ? "" : "hidden"}`}>
                    <div className='min-h-80 w-full flex flex-wrap gap-5 p-5'>
                        {Storyadventure["content"].map((data) => {
                            return <SmallCard key={data._id} image={data["Storyimage"][0]} para={data["Paragraph"]} />
                        })}
                        {Storyadventure["content"].map((data) => {
                            return <SmallCard key={data._id} image={data["Storyimage"][0]} para={data["Paragraph"]} />
                        })}
                        {Storyadventure["content"].map((data) => {
                            return <SmallCard key={data._id} image={data["Storyimage"][0]} para={data["Paragraph"]} />
                        })}
                        {Storyadventure["content"].map((data) => {
                            return <SmallCard key={data._id} image={data["Storyimage"][0]} para={data["Paragraph"]} />
                        })}
                    </div>
                </div>
                {/* <h1 className={`font-bold text-7xl text-center text-white py-15 ${tab === "brainquest" ? "" : "hidden"}`}>Brainquest</h1> */}
                <div className={`h-120 w-full ${tab === "brainquest" ? "" : "hidden"}`}>
                    <div className='h-110 w-[80%] p-2 border border-white rounded-xl flex flex-col gap-3 m-auto'>
                        <div className='w-full h-40 border-2 rounded-lg border-white p-3 text-2xl text-white relative'><div className='text-white text-2xl font-bold pb-2'>Question : </div>{Brainquest[questCount].Question}
                            <div id='answer' className={`h-10 w-150 border px-2 text-[18px] font-bold text-black flex items-center ${showAnswer ? "absolute" : "hidden"} right-0 bottom-0 ${isCorrect ? "bg-green-400" : "bg-red-500"}`}>
                                <span>
                                    Answer :
                                </span><span className={`pl-8`}>{message}</span>
                            </div>
                        </div>
                        <div className='w-full h-50 p-3 relative'>
                            <button className={`h-20 w-100 border border-white rounded-lg left-10 absolute text-white text-xl `} value={Brainquest[questCount].Option[0]} onClick={(e) => handleAnswer(e.target.value)}>{Brainquest[questCount].Option[0]}</button>

                            <button className={`h-20 w-100 border border-white rounded-lg right-10 absolute text-white text-xl `} value={Brainquest[questCount].Option[1]} onClick={(e) => handleAnswer(e.target.value)}>{Brainquest[questCount].Option[1]}</button>

                            <button className={`h-20 w-100 border border-white rounded-lg left-10 bottom-0 absolute text-white text-xl `} value={Brainquest[questCount].Option[2]} onClick={(e) => handleAnswer(e.target.value)}>{Brainquest[questCount].Option[2]}</button>

                            <button className={`h-20 w-100 border border-white rounded-lg right-10 bottom-0  absolute text-white text-xl `} value={Brainquest[questCount].Option[3]} onClick={(e) => handleAnswer(e.target.value)}>{Brainquest[questCount].Option[3]}</button>
                        </div>
                        <div className='h-15 w-full flex justify-between items-center'>
                            <button className='text-white text-lg h-10 w-40 border-2 mx-10 rounded-lg flex items-center justify-center gap-3' onClick={() => handlePrevious()}><FaArrowLeft /> Previous</button>

                            <button className='text-white text-lg h-10 w-40 border-2 mx-10 rounded-lg flex items-center justify-center gap-3' onClick={() => handleNext()}>Next <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2

