import React, { useState } from 'react'

const Header = () => {
    const [show,setShow]  = useState(false)
  return (
    <header className='bg-white'>
        <nav className='container mx-auto text-[14px] flex justify-between items-center px-2 md:px-0'>
            <div className="">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968382.png"  alt="Stripe " title="Stripe" className='w-16'/>
            </div>
            <div className={`absolute md:static shadow-sm md:shadow-none min-h-[16vh] md:min-h-fit left-0 ${ show ? 'top-[6%]' : 'top-[100%]'} transition-all ease-in-out delay-150 bg-white w-full md:w-auto px-2 flex items-center py-4 md:py-0`}>
                <ul className='flex flex-col md:flex-row md:items-center gap-[6vw] md:gap-[4vw]'>
                    <li>
                        <a className='hover:text-slate-600 text-slate-500' href="#">Home</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-600 text-slate-500' href="#">Products</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-600 text-slate-500' href="#">Solutions</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-600 text-slate-500' href="#">Developers</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-600 text-slate-500' href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button className='bg-[coral] py-2 md:py-2.5 px-6 rounded-full text-white hover:bg-slate-700'>Sign In</button>
                <div className="md:hidden">
                    { !show && <div onClick={ () => setShow(!show) }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </div>
                    }               
                    { show && <div onClick={ () => setShow(!show) }><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></div>
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header