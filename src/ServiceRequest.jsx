import { useState, useEffect } from "react";
import offices from "./json/offices.json";

const ServiceRequest = () => {
  const [officesInfo, setOfficesInfo] = useState(null);
  const [branchInfo, setBranchInfo] = useState("Administrative Branch");
  const [divisionInfo, setDivisionInfo] = useState(null);

  useEffect(() => {
    setOfficesInfo(offices);
  }, []);

  const sample1 = (event) => {
    setBranchInfo(event.target.value);
  };

  const sample2 = (event) => {
    setDivisionInfo(event.target.value);
  };

  useEffect(() => {
    console.log("wews");
  });

  return (
    <div
      className="flex min-h-screen w-full place-items-center bg-[url('../public/bg1.jpg')] bg-center bg-no-repeat bg-cover"
      id="ServiceRequest"
    >
      {/* <div className="flex min-h-screen w-full place-items-center bg-[#CCC7BF]"> */}
      <div className="w-full">
        <div className="flex flex-col justify-center sm:flex-row p-6 items-center gap-8 sm:mx-40">
          <div className="min-w-full sm:min-w-fit sm:w-1/2">
            <h1 className="text-3xl text-[#CCC7BF] text-center mx-auto m-5">
              Service Request
            </h1>
            <div className="bg-[#CCC7BF] p-8 border rounded-lg min-w-full sm:w-1/2 mr-0 sm:mr-24">
              <form>
                <div className="flex flex-col">
                  <label for="" className="font-semibold my-2 text-[#31393C]">
                    BRANCH
                  </label>
                  <select
                    className="border border-gray-200 rounded-md px-3 py-1"
                    onChange={sample1}
                  >
                    {officesInfo &&
                      officesInfo.branches.map((branch, index) => (
                        <option key={index} value={branch.name}>
                          {branch.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label for="" className="font-semibold my-2 text-[#31393C]">
                    DIVISION
                  </label>
                  <select
                    className="border border-gray-200 rounded-md px-3 py-1"
                    onClick={sample2}
                  >
                    {officesInfo &&
                      officesInfo.branches
                        .filter((branch) => branch.name === branchInfo)
                        .map((branch) =>
                          branch.divisions.map((division, index) => (
                            <option key={index} value={division.name}>
                              {division.name}
                            </option>
                          ))
                        )}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label for="" className="font-semibold my-2 text-[#31393C]">
                    UNIT
                  </label>
                  <select className="border border-gray-200 rounded-md px-3 py-1">
                    {officesInfo &&
                      officesInfo.branches
                        .filter((branch) => branch.name === branchInfo)
                        .map((branch) =>
                          branch.divisions
                            .filter(
                              (division) => division.name === divisionInfo
                            ) // Filter divisions based on selected division
                            .map((division) =>
                              division.units.map((unit, index) => (
                                <option key={index} value={unit.name}>
                                  {unit.name}
                                </option>
                              ))
                            )
                        )}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    for="requestor"
                    className="font-semibold my-2 text-[#31393C]"
                  >
                    REQUESTOR
                  </label>
                  <input
                    className="border border-gray-200 rounded-md px-3 py-1"
                    type="text"
                    name="requestor"
                    id="requestor"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for="issues"
                    className="font-semibold my-2 text-[#31393C]"
                  >
                    ISSUE/S ENCOUNTERED
                  </label>
                  <textarea
                    className="border border-gray-200 rounded-md p-3 resize-none"
                    name="issues"
                    id="issues"
                    cols="5"
                    rows="5"
                    placeholder="Please specify issue/s you encountered..."
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="grid min-w-full sm:min-w-fit sm:grid-cols-1 md:grid-cols-2 gap-5 sm:w-1/2">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-85 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden delay-75">
              <a href="#">
                <img
                  className="w-full h-32 object-cover"
                  src="../public/cards/software.png"
                  alt=""
                />
              </a>
              <div className="p-1">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Software
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                  <div>
                    <input
                      type="radio"
                      id="microsoft_office"
                      name="service"
                      value="microsoft_office"
                      className="mx-1"
                    />
                    <label for="html">Microsoft Office</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="anti_virus"
                      name="service"
                      value="Hanti_virus"
                      className="mx-1"
                    />
                    <label for="html">Anti-virus</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="driver"
                      name="service"
                      value="driver"
                      className="mx-1"
                    />
                    <label for="html">Printer/Scanner Drivers</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="email"
                      name="service"
                      value="email"
                      className="mx-1"
                    />
                    <label for="html">Email</label>
                  </div>
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-85 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden delay-75">
              <a href="#">
                <img
                  className="w-full h-32 object-cover"
                  src="../public/cards/hardware.png"
                  alt=""
                />
              </a>
              <div className="p-1">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Hardware
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                  <div>
                    <input
                      type="radio"
                      id="cpu"
                      name="service"
                      value="cpu"
                      className="mx-1"
                    />
                    <label for="html">CPU</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="monitor"
                      name="service"
                      value="monitor"
                      className="mx-1"
                    />
                    <label for="html">Monitor</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="printer"
                      name="service"
                      value="printer"
                      className="mx-1"
                    />
                    <label for="html">Printer/Scanner</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="laptop"
                      name="service"
                      value="laptop"
                      className="mx-1"
                    />
                    <label for="html">Laptop</label>
                  </div>
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-85 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden delay-75">
              <a href="#">
                <img
                  className="w-full h-32 object-cover"
                  src="../public/cards/network.png"
                  alt=""
                />
              </a>
              <div className="p-1">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Network
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                  <div>
                    <input
                      type="radio"
                      id="internet"
                      name="service"
                      value="internet"
                      className="mx-1"
                    />
                    <label for="html">Internet</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="lan"
                      name="service"
                      value="lan"
                      className="mx-1"
                    />
                    <label for="html">Local Area Network</label>
                  </div>
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-75 hover:opacity-100 hover:scale-110 transition ease-in-out overflow-hidden delay-100">
              <a href="#">
                <img
                  className="w-full h-32 object-cover"
                  src="../public/cards/others.png"
                  alt=""
                />
              </a>
              <div className="p-1">
                <a href="#">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Others
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-5">
                  <div className="flex flex-col">
                    <textarea
                      name="others"
                      id="others"
                      cols="5"
                      rows="5"
                      className="border border-gray-200 rounded-md p-1 resize-none"
                      placeholder="Please specify..."
                    ></textarea>
                  </div>
                </p>
              </div>
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

export default ServiceRequest;
