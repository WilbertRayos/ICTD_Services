const WebsiteUpload = () => {
    return ( 
        <div className="w-full h-screen grid place-item-center bg-[url('../public/wu_bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="grid grid-cols-2 my-auto mx-72 bg-rose-500">
                <div className="col-span-2 text-center">
                    <h1 className="font-bold text-5xl">Website Upload</h1>
                </div>
                <div className="bg-red-700">
                    <div className="grid grid-col-1 gap-2">
                        Select Category of Document
                        <ul>
                            <li>
                                <input type="radio" id="a" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="a" className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                        Hope Page
                                    </div>
                                    <div className="bg-green-500 p-3 rounded-r-md">
                                        Visit Page
                                    </div>
                                </label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="b" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="b" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-red-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Transparency Seal</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="c" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="c" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Bids and Awards Notice</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="d" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="d" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Examination Results</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="a" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="a" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Downloadable Forms</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="b" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="b" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Memorandum Circulars</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="c" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="c" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Public Hearings</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="d" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="d" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Contact Us</label>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <input type="radio" id="d" name="hosting" value="hosting-small" class="hidden peer bg-blue-500" required />
                                <label for="d" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">Others</label>
                            </li>
                        </ul>
                    </div>
                        {/* <ul class="grid w-full gap-6 md:grid-cols-2">
                            <li className="bg-green-500 align-middle text-center">
                                
                                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden opacity-0 absolute peer" required />
                                    <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                        <div class="block">
                                            <div class="w-full text-lg font-semibold">0-50 MB</div>
                                            <div class="w-full">Good for small websites</div>
                                        </div>
                                        <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                        </svg>
                                    </label>
                                
                            </li>
                        </ul> */}
                    {/* <ul class="grid w-full gap-6 md:grid-cols-2">
                        <li className="bg-green-500 w-full align-middle text-center">
                            asdasdwebsiteswebsiteswebsiteswebsites
                            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden opacity-0 absolute peer" required />
                            <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                <div class="block">
                                    <div class="w-full text-lg font-semibold">0-50 MB</div>
                                    <div class="w-full">Good for small websites</div>
                                </div>
                                <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </label>
                        </li>
                    </ul> */}
                </div>
                <div className="bg-yellow-500 ml-5">
                    <div className="flex flex-col">
                        <label>Date</label>
                        <input type="text" name="" id="" value={`asdasdasdsad`} readOnly />
                    </div>
                    <div className="flex flex-col">
                        <label>Description of the document</label>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label>Purpose</label>
                        <textarea name="" id="" cols="10" rows="5"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label>Requestor</label>
                        <input type="text" name="" id="" value={`asdasdasdsad`} />
                    </div>
                    <div className="flex flex-col">
                        <label>Approver</label>
                        <input type="text" name="" id="" value={`asdasdasdsad`} />
                    </div>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
     );
}
 
export default WebsiteUpload;