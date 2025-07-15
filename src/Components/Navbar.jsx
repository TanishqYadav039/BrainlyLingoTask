import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="h-14 w-full p-2 text-white left-0 top-0 fixed backdrop-blur-sm bg-black/25 z-10">
                <div className="flex h-full w-full items-center justify-evenly">
                    <div className='h-10 w-38 flex justify-center items-center font-bold text-2xl'>BrainlyLingo</div>
                    <div className="h-10 w-90 flex justify-center items-center">
                        <ul className="flex justify-center items-center gap-4 font-bold">
                            <li>Home</li>
                            <li>LeaderBoard</li>
                            <li>DailyQuiz</li>
                            <li>
                                <select name="" id="" className="border-none outline-none">
                                    <option value="Genre" className="text-black">Genre</option>
                                    <option value="" className="text-black">Option 1</option>
                                    <option value="" className="text-black">Option 2</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="h-10 w-20 font-bold flex justify-center items-center rounded-full border-2 border-white bg-blue-500">
                        <button>Sign Up</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
