const Contacts = () => {
  return (
    <div className="min-w-full min-h-screen grid bg-amber-200">
      <div className="grid md:grid-cols-2 w-fit mx-auto m-auto">
        <div className="relative bg-red-950 hidden md:block">
          {" "}
          {/* Hide on large screens and above */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://burst.shopifycdn.com/photos/contact-phone-notepad.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            alt="Contact"
          />
        </div>
        <div className="bg-orange-500">
          <div className="text-center">
            <h1 className="text-2xl font-semibold p-5">Contact Us</h1>
          </div>
          <form>
            <div className="grid grid-cols-2">
              <div className="flex flex-col px-3">
                <label className="py-1">First Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className="flex flex-col px-3">
                <label className="py-1">Last Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className="flex flex-col col-span-2 px-3">
                <label className="py-1">Email</label>
                <input type="text" name="" id="" />
              </div>
              <div className="flex flex-col col-span-2 px-3">
                <label className="py-1">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
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
