export default function ContactPage() {

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Successfully !");
        }
      });
  };
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-6xl font-extrabold text-gray-800 text-center mb-8">Contact Us</h2>
  
          <div className="bg-white shadow-xl rounded-2xl p-8 space-y-8">
            {/* Contact Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-800 hover:from-indigo-800 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
  
            {/* Contact Info Below */}
            <div className="pt-6 border-t border-gray-200 space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold">Reach Us At</h3>
                <p>Email: skillxchangesupport@gmail.com</p>
                <p>Phone: +91 9876543210</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Office Address</h3>
                <p>GTU Campus</p>
                <p>Ahmedabad, Gujarat</p>
                <p>India - 123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  