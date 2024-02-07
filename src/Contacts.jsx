const Contacts = () => {
  return (
    <div className="min-w-full min-h-screen grid bg-[url('../public/bg6.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="grid md:grid-cols-2 w-fit mx-auto m-auto border border-slate-100 rounded-xl overflow-hidden">
        <div className="relative bg-red-950 hidden md:block">
          {" "}
          {/* Hide on large screens and above */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://burst.shopifycdn.com/photos/contact-phone-notepad.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            alt="Contact"
          />
        </div>
        <div className="bg-orange-500 p-3">
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
            <div className="text-center p-3">
              <button className="border border-solid rounded-md bg-amber-400 p-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
