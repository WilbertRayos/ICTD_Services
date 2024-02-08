const WebsiteUpload = () => {
  return (
    <div
      className="min-h-screen w-full flex place-items-center bg-[url('../public/bg6.jpg')] bg-center bg-no-repeat bg-cover"
      id="WebsiteUpload"
    >
      {/* <div className="min-h-screen w-full flex place-items-center bg-[#EDEEEB]"> */}
      <div className="w-full">
        <div className="flex flex-col justify-center sm:flex-row p-6 items-center gap-8 mb-5">
          <div className="min-w-full sm:min-w-fit sm:w-1/2 m-auto sm:ml-24 ">
            <h1 className="font-semibold text-3xl text-center">
              Website Upload
            </h1>
            <div className="my-2 p-5">
              <h1 className="font-semibold mb-2 text-[#31393C]">CATEGORY</h1>
              <form action="">
                <ul className="grid grid-cols-2 gap-3">
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="text-gray-500 inline-flex items-center justify-between w-full dark:border-gray-700 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Hope Page</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Transparency Seal</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Bids and Awards Notice</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Examination Results</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Downloadable Forms</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Memorandum Circulars</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Public Hearings</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                  <li className="col-span-2 sm:col-span-1 opacity-80 hover:scale-105 hover:opacity-100 transition ease-in-out delay-75">
                    <input
                      type="radio"
                      id="a"
                      name="hosting"
                      value="hosting-small"
                      class="hidden peer bg-blue-500"
                      required
                    />
                    <label
                      for="a"
                      className="inline-flex items-center justify-between w-full text-gray-500 bg-white border rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block mx-3">Contact Us</div>
                      <div className="bg-[#31393C] hover:bg-[#3E96F4] p-3 rounded-r-md transition ease-in-out">
                        <h3 className="text-[#EDEEEB]">Visit Page</h3>
                      </div>
                    </label>
                  </li>
                </ul>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="my-3 font-semibold text-[#31393C]"
                  >
                    OTHERS
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="5"
                    className="resize-none min-w-fit p-3 rounded-md border-[1px] border-[#31393C]"
                    placeholder="Please specify the page where to upload the file/s..."
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="my-3 font-semibold text-[#31393C]">
                    SELECT FILE
                  </label>
                  <input
                    type="file"
                    name=""
                    id=""
                    className="border border-gray-200 rounded-md p-1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[#31393C] sm:ml-5 p-8 border rounded-lg min-w-full sm:min-w-fit sm:w-1/2 mr-0 sm:mr-24">
            <div className="flex flex-col">
              <label className="font-semibold my-2 text-[#EDEEEB]">DATE</label>
              <input
                type="text"
                name=""
                id=""
                value={`asdasdasdsad`}
                className="border border-gray-200 rounded-md px-3 py-1"
                readOnly
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold my-2 text-[#EDEEEB]">
                DESCRIPTION OF DOCUMENT
              </label>
              <textarea
                name=""
                id=""
                cols="5"
                rows="5"
                className="border border-gray-200 rounded-md p-3 resize-none"
                placeholder="Please describe the document..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold my-2 text-[#EDEEEB]">
                PURPOSE
              </label>
              <textarea
                name=""
                id=""
                cols="5"
                rows="5"
                className="border border-gray-200 rounded-md p-3 resize-none"
                placeholder="Please indicate the purpose of the document..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold my-2 text-[#EDEEEB]">
                REQUESTOR
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-200 rounded-md px-3 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold my-2 text-[#EDEEEB]">
                APPROVER
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border border-gray-200 rounded-md px-3 py-1"
              />
            </div>
          </div>
        </div>
        <div className="max-w-fit m-auto pb-10">
          <button className="bg-[#31393C] text-[#EDEEEB] rounded-md opacity-80 hover:bg-[#3E96F4] hover:opacity-100 hover:scale-110 transition ease-in-out delay-150 p-5">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteUpload;
