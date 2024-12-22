const Contact = () => (
  <div className="min-h-screen flex items-center justify-center p-8">
    <div className="max-w-6xl w-full">
      <h2 className="text-4xl font-bold mb-12 text-[#00ff95]">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-[#111] p-8 rounded-2xl">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] focus:border-[#00ff95] transition-colors outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] focus:border-[#00ff95] transition-colors outline-none"
            />
            <textarea
              placeholder="Message"
              className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] focus:border-[#00ff95] transition-colors outline-none h-40 resize-none"
            />
            <button
              className="bg-[#00ff95] text-black p-4 rounded-lg font-bold hover:bg-[#00cc78] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert("Message sent! (Demo)");
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl">
          <h3 className="text-[#00ff95] text-2xl font-bold mb-8">
            Get in Touch
          </h3>
          <div className="grid gap-8">
            <div>
              <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                Email
              </h4>
              <a
                href="mailto:your.email@example.com"
                className="block mb-2 hover:text-[#00ff95] transition-colors"
              >
                your.email@example.com
              </a>
              <a
                href="mailto:alternative@example.com"
                className="hover:text-[#00ff95] transition-colors"
              >
                alternative@example.com
              </a>
            </div>

            <div>
              <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                Phone
              </h4>
              <p className="mb-2">+1 (234) 567-8900 (Primary)</p>
              <p>+1 (234) 567-8901 (Alternative)</p>
            </div>

            <div>
              <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                Social Media
              </h4>
              <div className="grid gap-2">
                <a href="#" className="hover:text-[#00ff95] transition-colors">
                  GitHub: @yourusername
                </a>
                <a href="#" className="hover:text-[#00ff95] transition-colors">
                  LinkedIn: /in/yourprofile
                </a>
                <a href="#" className="hover:text-[#00ff95] transition-colors">
                  Twitter: @yourhandle
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#00ff95] text-lg font-semibold mb-3">
                Location
              </h4>
              <p>City, Country</p>
              <p>Time Zone: UTC+0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Contact;
