const Contacts = () => {
    return ( 
        <div className="min-w-full min-h-screen bg-amber-200">
            <div className="grid grid-cols-2 place-items-center">
                <div className="max-w-2xl">
                    <img src="https://burst.shopifycdn.com/photos/contact-phone-notepad.jpg?width=1000&format=pjpg&exif=0&iptc=0"></img>
                </div>
                <div className="bg-orange-500">
                    <form>
                        <div>
                            <label>First Name</label>
                            <input type="text" name="" id="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contacts;