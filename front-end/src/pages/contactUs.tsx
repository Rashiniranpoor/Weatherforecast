 
function Contactus() {
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">

        <form id="contactForm" className="grid grid-cols-1 gap-6">

            <div>
                <label  className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name"  className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>

            <div>
                <label  className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email"  className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" name="subject" id="subject" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>

            <div>
                <label  className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
            </div>

            <div>
                <button type="button"  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Submit</button>
            </div> 
        </form> 
    </div>
  )
}

export default Contactus