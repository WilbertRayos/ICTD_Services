const ServiceRequest = () => {
    return ( 
        <div className="w-full h-screen grid place-items-center bg-[url('../public/sr_bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="mt-auto">
                <h1 className="font-bold text-5xl">Service Request</h1>
            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/software.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Software</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Microsoft Office</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Anti-Virus</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Printer/scanner Driver</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Email</label>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/hardware.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Hardware</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">CPU</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Monitor</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Printer/Scanner</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Laptop</label>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/network.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Network</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Internet</label>
                                        </div>
                                        <div>
                                            <input type="radio" id="html" name="fav_language" value="HTML" className="mx-1" />
                                            <label for="html">Local Area Network</label>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="max-w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                                <a href="#">
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/software.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Others</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                                        <textarea name="" id="" cols="22" rows="2" className="border border-gray-200 rounded-md p-1 text-gray-900"></textarea>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="mx-auto mb-auto md:mx-96">
                <button className="bg-gray-900 text-gray-200 text-2xl font-bold font border border-white rounded-full px-24 py-5 hover:bg-blue-900">Submit</button>
            </div>
    </div>
        
     );
}
 
export default ServiceRequest;