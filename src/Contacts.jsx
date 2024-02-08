const Contacts = () => {
  return (
    <div
      className="min-w-full min-h-screen grid bg-[url('../public/bg6.jpg')] bg-center bg-no-repeat bg-cover"
      id="Contacts"
    >
      <div className="grid md:grid-cols-2 w-fit mx-auto m-auto border border-slate-100 rounded-xl overflow-hidden shadow-2xl">
        <div className="relative bg-red-950 hidden md:block">
          {" "}
          {/* Hide on large screens and above */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1865044970/photo/businessman-using-virtual-screen-contact-icons-contact-us-or-connect-customer-support-hotline.jpg?s=1024x1024&w=is&k=20&c=EfiLQi_eNY8CEqyKLOkEAeExxjaWkGjYeB_gqm_ZeRg="
            alt="Contact"
          />
        </div>
        <div className="bg-[#31393C] p-3">
          <div className="text-center">
            <h1 className="text-2xl font-semibold p-5 text-[#EDEEEB]">
              Contact Us
            </h1>
          </div>
          <form>
            <div className="grid grid-cols-2">
              <div className="flex flex-col px-3">
                <label className="font-semibold my-2 text-[#EDEEEB]">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray-200 rounded-md px-3 py-1"
                />
              </div>
              <div className="flex flex-col px-3">
                <label className="font-semibold my-2 text-[#EDEEEB]">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray-200 rounded-md px-3 py-1"
                />
              </div>
              <div className="flex flex-col col-span-2 px-3">
                <label className="font-semibold my-2 text-[#EDEEEB]">
                  EMAIL
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-gray-200 rounded-md px-3 py-1"
                />
              </div>
              <div className="flex flex-col col-span-2 px-3">
                <label className="font-semibold my-2 text-[#EDEEEB]">
                  MESSAGE
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border border-gray-200 rounded-md p-3 resize-none"
                  placeholder="Please indicate the your message..."
                ></textarea>
              </div>
            </div>
            <div className="max-w-fit m-auto p-5">
              <button className="bg-[#31393C] text-[#EDEEEB] rounded-md opacity-80 hover:bg-[#3E96F4] hover:opacity-100 hover:scale-110 transition ease-in-out delay-150 p-5">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
