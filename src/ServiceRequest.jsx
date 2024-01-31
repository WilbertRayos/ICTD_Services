const ServiceRequest = () => {
    return ( 
        <div className="min-h-screen place-items-center bg-[url('../public/sr_bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="max-w-fit mx-auto bg-red-500">
                <div className="flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-12">
                    <div className="sm:w-1/2">
                        <h1 className="text-3xl text-center">
                            Service Request
                        </h1>
                        <div className="bg-amber-500 my-5 px-2 py-5 border rounded shadow-sm">
                            <form>
                                <div className="flex flex-col">
                                    <label for="" className=" text-sm text-gray-700 dark:text-gray-100 p-1">BRANCH</label>
                                    <select className="text-sm border border-gray-200 rounded-md">
                                        <option value="ab">Administrative Branch</option>
                                        <option value="pfmb">Planning, Finance, and Management Branch</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label for="" className=" text-sm text-gray-700 dark:text-gray-100 p-1">DIVISION</label>
                                    <select className="text-sm border border-gray-200 rounded-md">
                                        <option value="ab">Administrative Branch</option>
                                        <option value="pfmb">Planning, Finance, and Management Branch</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label for="" className=" text-sm text-gray-700 dark:text-gray-100 p-1">UNIT</label>
                                    <select className="text-sm border border-gray-200 rounded-md">
                                        <option value="ab">Administrative Branch</option>
                                        <option value="pfmb">Planning, Finance, and Management Branch</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label for="" className=" text-sm text-gray-700 dark:text-gray-100 tracking-wide py-1">REQUESTOR</label>
                                    <input className="border border-gray-200 rounded-md p-1 text-sm" type="text" name="" id="" />
                                </div>
                                <div className="flex flex-col">
                                    <label for="" className=" text-sm text-gray-700 dark:text-gray-100 tracking-wide py-1">ISSUE/S ENCOUNTERED</label>
                                    <textarea className="border border-gray-200 rounded-md p-1 text-sm resize-none" name="" id="" cols="40" rows="5" placeholder="Please specify issue/s you encountered..."></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 bg-green-500">
                        <div className="sm:col-span-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden">
                            <a href="#">
                                <img className="w-full h-32 object-cover" src="../public/cards/hardware.png" alt="" />
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
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden">
                            <a href="#">
                                <img className="w-full h-32 object-cover" src="../public/cards/hardware.png" alt="" />
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
                        <div className="">
                            asdasdasd
                        </div>
                        <div className="">
                            asdasdasd
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container grid md:grid-cols-2">
                <div className="col-span-2 bg-red-900 text-center my-5">
                    <h1 className="font-bold text-5xl">Service Request</h1>
                </div>
                <div className="col-span-2 md:col-span-1 dark:bg-gray-900 border border-gray-200 rounded-xl shadow-black shadow-md p-5 opacity-40">
                    <div className="flex flex-col px-5">
                         <label for="" className="font-semibold text-xl text-gray-700 dark:text-gray-100 tracking-wide py-2 ">BRANCH</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1 tracking-wide">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-5">
                         <label for="" className="font-semibold text-xl text-gray-700 dark:text-gray-100 tracking-wide py-2">DIVISION</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1 tracking-wide">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-5">
                         <label for="" className="font-semibold text-xl text-gray-700 dark:text-gray-100 tracking-wide py-2">UNIT</label>
                         <select className="text-xl border border-gray-200 rounded-md p-1 tracking-wide">
                             <option value="ab">Administrative Branch</option>
                             <option value="pfmb">Planning, Finance, and Management Branch</option>
                         </select>
                    </div>
                    <div className="flex flex-col px-5">
                        <label for="" className="font-semibold text-xl text-gray-700 dark:text-gray-100 tracking-wide py-2">REQUESTOR</label>
                        <input className="border border-gray-200 rounded-md p-1 text-xl tracking-wide" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col px-5 mb-5">
                        <label for="" className="font-semibold text-xl text-gray-700 dark:text-gray-100 tracking-wide py-2">ISSUE/S ENCOUNTERED</label>
                        <textarea className="border border-gray-200 rounded-md p-1 text-xl tracking-wide resize-none" name="" id="" cols="40" rows="5" placeholder="Please specify issue/s you encountered..."></textarea>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:col-span-2 md:col-span-1 bg-green-500">
                    asd
                    <div className="bg-red-500">
                        <img className="w-full h-48 object-cover" src="../public/cards/hardware.png" alt="" />
                        <div>
                            <span>A</span>
                            <span className="block">b</span>
                        </div>
                    </div>
                    <div className="sm:max-w-full sm:min-w-[612px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                        <a href="#">
                            <img className="w-full h-56 object-cover" src="../public/cards/hardware.png" alt="" />
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
                    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-90 hover:opacity-100 hover:scale-110 transition ease-in-out">
                        <a href="#">
                            <img className="rounded-t-lg max-h-fit object-cover" src="../public/cards/hardware.png" alt="" />
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
                </div> */}
                {/* <div className="flex justify-center items-center">
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
                </div> */}
            {/* </div> */}
{/*             
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:mx-96">
                <div className="dark:bg-gray-900 border border-gray-200 rounded-xl shadow-black shadow-md">
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
                                    <img className="rounded-t-lg max-h-48" src="../public/cards/others.png" alt="" />
                                </a>
                                <div className="p-1">
                                    <a href="#">
                                        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Network</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                                        <div className="p-2">
                                            <input type="text" name="" id="" placeholder="Please specify here..." />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            
            </div>
            <div className="mx-auto mb-auto md:mx-96">
                <button className="bg-gray-900 text-gray-200 text-xl font-bold font border border-white rounded-full px-16 py-2 hover:bg-blue-900">Submit</button>
            </div> */}
        </div>
        
     );
}
 
export default ServiceRequest;