import { useState } from 'react'
import logo from '../assets/img/logo.png'
import user from '../assets/img/user.png'
import ring from '../assets/img/ring.svg'
import phone1 from '../assets/img/phone1.png'
import phone2 from '../assets/img/phone2.png'
import phone3 from '../assets/img/phone3.png'
import phone4 from '../assets/img/phone4.png'

function Search() {
    const [selected, setSelected] = useState(2)
    return (
        <div className="px-40 pb-28">
            <div className="pt-12">
                <div className="flex justify-between">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="flex">
                        <div className="pr-12 relative">
                            <img src={ring} />
                            <span className="absolute right-10 top-3 rounded-full w-5 h-5 text-sm text-white text-center bg-orange">
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
                            <label className="absolute bottom-24 text-lg font-bold">
                                Headline
                            </label>
                            <input
                                type="text"
                                className="border-solid border-2 rounded-md border-blue text-xl w-full px-8 py-6"
                                placeholder="Please input..."
                            />
                        </div>
                    </div>
                    <div className="w-1/4">
                        <button className="bg-blue border-solid border-2 rounded-md border-blue text-white text-center font-bold w-full p-6 text-xl">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex justify-between">
                    <p className="text-lg">
                        Headline suggestions for{' '}
                        <span className="font-bold">
                            "Tiktok advertisement"
                        </span>
                    </p>
                    <p className="text-blue font-bold text-lg">Select all</p>
                </div>
                <div className="flex justify-between rounded-md bg-lightblue mt-6 px-36 py-4">
                    <div className="flex items-center text-lg w-full">
                        You're using a free version of this tool | 2 out of 3
                        free daily searches available
                    </div>
                    <button className="bg-blue border-solid border-2 rounded-md border-blue text-white text-center w-24 h-10 text-sm">
                        Upgrade
                    </button>
                </div>
                <div className="flex justify-between rounded-md bg-gray px-7 py-4 my-4">
                    <input type="checkbox" className="default:ring-2" />
                    <p className="flex items-center text-lg w-11/12 mr-14">
                        Tiktok advertisement change the way people see their
                        products.
                    </p>
                </div>
                <div className="flex justify-between rounded-md bg-gray px-7 py-4 my-4">
                    <input type="checkbox" className="default:ring-2" />
                    <p className="flex items-center text-lg w-11/12 mr-14">
                        Tiktok advertisement change the way people see their
                        products.
                    </p>
                </div>
                <div className="flex justify-between rounded-md bg-gray px-7 py-4 my-4">
                    <input type="checkbox" className="default:ring-2" />
                    <p className="flex items-center text-lg w-11/12 mr-14">
                        Tiktok advertisement change the way people see their
                        products.
                    </p>
                </div>
                <div className="flex justify-between rounded-md bg-gray px-7 py-4 my-4">
                    <input type="checkbox" className="default:ring-2" />
                    <p className="flex items-center text-lg w-11/12 mr-14">
                        Tiktok advertisement change the way people see their
                        products.
                    </p>
                </div>
            </div>
            <div className="rounded-md bg-blue w-full relative">
                <div className="px-14 py-10 mt-14">
                    <p className="text-white text-xl font-bold leading-[0.5rem]">
                        {selected}headlines are selected.
                    </p>
                    <p className="text-white text-sm leading-[4rem]">
                        Test these headlines by launching a Google Ad Headline
                        Test
                    </p>
                    <button className="bg-white border-solid border-2 rounded-md border-blue text-blue font-bold text-vsm text-center px-6 py-2">
                        Create Test
                    </button>
                </div>
                <img src={phone1} className="absolute bottom-0 right-36" />
                <img src={phone2} className="absolute bottom-0 right-14" />
                <img src={phone3} className="absolute bottom-0 right-0" />
                <img src={phone4} className="absolute bottom-0 right-0" />
            </div>
        </div>
    )
}

export default Search
