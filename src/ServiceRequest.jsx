const ServiceRequest = () => {
    return ( 
        <div className="w-full h-screen grid place-items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-96">
                <div className="dark:bg-gray-900 border border-gray-200 rounded-xl shadow-black shadow-2xl">
                    <div className="mt-5 flex flex-col px-10">
                         <label for="" className="font-semibold text-xl text-gray-100 my-2">Branch</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-10">
                         <label for="" className="text-gray-200 font-semibold text-xl my-2">Division</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-10">
                         <label for="" className="text-gray-200 font-semibold text-xl my-2">Unit</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-10">
                        <label for="" className="text-gray-200 font-semibold text-xl my-2">Requestor</label>
                        <input className="border border-gray-200 rounded-md p-1" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col px-10">
                        <label for="" className="text-gray-200 font-semibold text-xl my-2">Issue/s Encountered</label>
                        <textarea className="border border-gray-200 rounded-md p-1" name="" id="" cols="60" rows="5"></textarea>
                    </div>
                </div>
                <div className="pl-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-5">
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/software.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Software</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Microsoft Office</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Anti-Virus</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Printer/scanner Driver</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Email</label>
                                        </div>
                                    </p>
                                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    <div className="bg-rose-500">
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/hardware.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Hardware</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">CPU</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Monitor</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Printer/Scanner</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Laptop</label>
                                        </div>
                                    </p>
                                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-500">
                        <div className="">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/network.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Network</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Internet</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                            <label for="html">Local Area Network</label>
                                        </div>
                                        
                                    </p>
                                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-teal-600">
                        <div className="">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/software.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Others</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <textarea name="" id="" cols="20" rows="2"></textarea>
                                        
                                    </p>
                                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-red-500">
                <button>Submit</button>
            </div>
        </div>
    </div>
        // <div className="w-full h-screen bg-blue-600">
        //     <div className="grid grid-cols-2">
        //         <div className="bg-green-700 w-80">
        //             <div className="mb-5">
        //                 <label for="" className="px-5 font-semibold text-xl">Branch</label>
        //                 <select className="text-xl">
        //                     <option value="ab">Administrative Branch</option>
        //                     <option value="pfmb">Planning, Finance, and Management Branch</option>
        //                 </select>
        //             </div>
                    // <div>
                    //     <label for="">Division</label>
                    //     <select>
                    //         <option value="hr">Human Resource</option>
                    //         <option value="mb">Management Branch</option>
                    //     </select>
                    // </div>
        //             <div>
        //                 <label for="">Unit</label>
        //                 <select>
        //                     <option value="rs">Records Section</option>
        //                     <option value="pmu">Procurement Management Unit</option>
        //                 </select>
        //             </div>
                    // <div>
                    //     <label htmlFor="">Requestor</label>
                    //     <input type="text" name="" id="" />
                    // </div>
                    // <div>
                    //     <h1>Issue/s Encountered</h1>
                    //     <textarea name="" id="" cols="50" rows="10"></textarea>
                    // </div>
        //         </div>
        //         <div className="bg-yellow-500 grid grid-cols-2">
        //             <div className="bg-violet-500">
                        // <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        //     <a href="#">
                        //         <img className="rounded-t-lg" src="../public/cards/hardware.png" alt="" />
                        //     </a>
                        //     <div className="p-5">
                        //         <a href="#">
                        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hardware</h5>
                        //         </a>
                        //         <div className="flex flex-col items-start">
                        //             <div>
                        //                 <input type="radio" name="" id="" />
                        //                 <label for="">Option 1</label>
                        //             </div>
                        //             <div>
                        //                 <input type="radio" name="" id="" />
                        //                 <label for="">Option 1</label>
                        //             </div>
                        //             <div>
                        //                 <input type="radio" name="" id="" />
                        //                 <label for="">Option 1</label>
                        //             </div>
                        //             <div>
                        //                 <input type="radio" name="" id="" />
                        //                 <label for="">Option 1</label>
                        //             </div>
                        //             <div>
                        //                 <input type="radio" name="" id="" />
                        //                 <label for="">Option 1</label>
                        //             </div>
                        //         </div>
                                
                        //         {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        //         {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        //             Read more
                        //             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        //             </svg>
                        //         </a> */}
                        //     </div>
        //                 </div>
        //             </div>
        //             <div className="bg-pink-400">
                        // <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        //     <a href="#">
                        //         <img className="rounded-t-lg" src="../public/cards/software.png" alt="" />
                        //     </a>
                        //     <div className="p-5">
                        //         <a href="#">
                        //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Software</h5>
                        //         </a>
                        //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        //         {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        //             Read more
                        //             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        //             </svg>
                        //         </a> */}
                        //     </div>
                        // </div>
        //             </div>
        //             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //                 <a href="#">
        //                     <img className="rounded-t-lg" src="../public/cards/network.png" alt="" />
        //                 </a>
        //                 <div className="p-5">
        //                     <a href="#">
        //                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Network</h5>
        //                     </a>
        //                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //                     {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //                         Read more
        //                         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        //                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        //                         </svg>
        //                     </a> */}
        //                 </div>
        //             </div>

        //             <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        //                 <a href="#">
        //                     <img className="rounded-t-lg" src="../public/cards/others.png" alt="" />
        //                 </a>
        //                 <div className="p-5">
        //                     <a href="#">
        //                         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Others</h5>
        //                     </a>
        //                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //                     {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        //                         Read more
        //                         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        //                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        //                         </svg>
        //                     </a> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        //     <div className="grid grid-col-3">
        //         <div className="py-10 font-bold text-5xl text-center p-52 col-span-3">
        //             Service Request
        //         </div>
        //         <div>
                    
        //         </div>
        //         <div>

        //         </div>
        //     </div>
            
        //     <form>
        //         <div className="grid grid-cols-2">
                    

        //             <div className="grid grid-col-2">
                        
                        
        //             </div>
        //         </div>
        //     </form>
            
            
        //     <form action="">
        //         <div className="grid grid-cols-3">
                    
                    
                    
        //         </div>
                
        //         <div className="grid grid-cols-4 gap-5">
                    
                    
                    
        //         </div>
                
        //         <div>
        //             <input type="button" value="Submit" />
        //         </div>
        //     </form>
            
        // </div>
     );
}
 
export default ServiceRequest;