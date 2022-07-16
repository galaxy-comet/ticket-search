import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.png'
import user from '../assets/img/user.png'
import ring from '../assets/img/ring.svg'
import phone1 from '../assets/img/phone1.png'
import phone2 from '../assets/img/phone2.png'
import phone3 from '../assets/img/phone3.png'
import phone4 from '../assets/img/phone4.png'

function Search() {
    const [selected, setSelected] = useState(2)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const setImgshow = () => {
            return window.innerWidth < 1140 ? setFlag(false) : setFlag(true)
        }

        setImgshow()
        window.addEventListener('resize', () => setImgshow())
    })
    return (
        <div className="lg:px-40 md:px-40 sm:px-10 px-5 pb-28">
            <div className="pt-12">
                <div className="flex justify-between">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="flex">
                        <div className="lg:pr-12 md:pr-12 sm:pr-10 pr-5 pt-1 relative">
                            <img src={ring} />
                            <span
                                className="absolute lg:right-10 md:right-10 sm:right-8 right-3 top-4 rounded-full 
                                lg:w-5 lg:h-5 md:w-5 md:h-5 sm:w-5 sm:h-5 w-4 h-4 lg:text-sm md:text-sm sm:text-sm text-vsm text-white text-center bg-orange"
                            >
                                3
                            </span>
                        </div>
                        <div>
                            <img src={user} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-20">
                    <div className="w-3/4 mr-3.5">
                        <div className="relative">
                            <label className="absolute lg:bottom-24 md:bottom-24 sm:bottom-16 bottom-16 lg:text-lg md:text-lg sm:text-sm font-bold">
                                Headline
                            </label>
                            <input
                                type="text"
                                className="border-solid border-2 rounded-md border-blue w-full lg:text-xl 
                                md:text-lg sm:text-lg text-base lg:px-8 lg:py-6 md:px-8 md:py-6 sm:px-6 sm:py-4 px-6 py-3"
                                placeholder="Please input..."
                            />
                        </div>
                    </div>
                    <div className="w-1/4">
                        <button
                            className="bg-blue border-solid border-2 rounded-md border-blue 
                                text-white text-center font-bold w-full lg:py-6 md:py-6 sm:py-4 py-3 lg:text-xl 
                                md:text-lg sm:text-lg text-base"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <div className="flex justify-between">
                    <p className="lg:text-lg md:text-lg_1 sm:text-lg text-base">
                        Headline suggestions for{' '}
                        <span className="md:lg_2 text-base font-bold">
                            "Tiktok advertisement"
                        </span>
                    </p>
                    <p className="lg:text-lg md:text-lg_1 sm:text-lg text-base text-blue font-bold cursor-pointer">
                        Select&nbsp;all
                    </p>
                </div>

                <div className="flex justify-between rounded-md bg-lightblue mt-6 lg:px-28 md:px-16 sm:px-14 px-4 py-4">
                    <p className="flex items-center lg:text-lg md:text-lg_1 sm:text-lg text-base w-full">
                        You're using a free version of this tool | 2 out of 3
                        free daily searches available
                    </p>
                    <div className="flex items-center">
                        <button
                            className="bg-blue border-solid rounded-md border-blue text-white 
                        text-center lg:px-4 md:px-3 sm:px-2 px-1 lg:h-8 md:h-8 
                        h-7 lg:text-sm md:text-vsm text-vssm"
                        >
                            Upgrade
                        </button>
                    </div>
                </div>

                <div className="flex justify-between rounded-md bg-gray px-7 py-4 my-4">
                    <input type="checkbox" className="default:ring-2" />
                    <p className="flex items-center w-11/12 lg:text-lg md:text-lg_1 sm:text-lg text-base lg:mr-10 md:mr-2 sm:mr-2 ml-2">
                        Tiktok advertisement change the way people see their
                        products.
                    </p>
                </div>
            </div>

            <div className="rounded-md bg-blue w-full relative">
                <div className="lg:px-14 md:px-8 sm:px-6 px-4 py-10 mt-14">
                    <p className="text-white font-bold lg:text-xl md:text-lg sm:text-lg text-base">
                        {selected}headlines are selected.
                    </p>
                    <p className="text-white lg:text-sm md:text-sm text-vsm mt-2">
                        Test these headlines by launching a Google Ad Headline
                        Test
                    </p>
                    <button
                        className="bg-white border-solid border-2 rounded-md border-blue text-blue font-bold 
                        lg:text-sm md:text-sm text-vsm text-center lg:px-6 md:px-5 px-2 lg:py-2 md:py-2 py-1 mt-6"
                    >
                        Create Test
                    </button>
                </div>
                {flag ? (
                    <>
                        <img
                            src={phone1}
                            className="absolute bottom-0 right-36"
                        />
                        <img
                            src={phone2}
                            className="absolute bottom-0 right-14"
                        />
                        <img
                            src={phone3}
                            className="absolute bottom-0 right-0"
                        />
                        <img
                            src={phone4}
                            className="absolute bottom-0 right-0"
                        />
                    </>
                ) : (
                    <>
                        <img
                            src={phone1}
                            className="absolute bottom-0 right-36 hidden"
                        />
                        <img
                            src={phone2}
                            className="absolute bottom-0 right-14 hidden"
                        />
                        <img
                            src={phone3}
                            className="absolute bottom-0 right-0 hidden"
                        />
                        <img
                            src={phone4}
                            className="absolute bottom-0 right-0 hidden"
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default Search
