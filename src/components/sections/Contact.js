const Contact = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
    <div>
      <h2 className="text-3xl mb-8">Contact</h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#111] p-4 rounded-lg border-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-[#111] p-4 rounded-lg border-none"
        />
        <textarea
          placeholder="Message"
          className="bg-[#111] p-4 rounded-lg border-none h-40"
        />
        <button
          className="bg-[#3498db] text-white p-4 rounded-lg font-bold hover:bg-[#2980b9] transition-colors"
          onClick={(e) => {
            e.preventDefault();
            alert("Message sent! (Demo)");
          }}
        >
          Send Message
        </button>
      </form>
    </div>

    <div className="bg-[#111] p-8 rounded-lg">
      <h3 className="text-[#3498db] text-xl mb-6">Get in Touch</h3>

      <div className="grid gap-6">
        <div>
          <h4 className="text-[#3498db] mb-2">Email</h4>
          <a href="mailto:your.email@example.com" className="block mb-2">
            your.email@example.com
          </a>
          <a href="mailto:alternative@example.com">alternative@example.com</a>
        </div>

        <div>
          <h4 className="text-[#3498db] mb-2">Phone</h4>
          <p className="mb-2">+1 (234) 567-8900 (Primary)</p>
          <p>+1 (234) 567-8901 (Alternative)</p>
        </div>

        <div>
          <h4 className="text-[#3498db] mb-2">Social Media</h4>
          <div className="grid gap-2">
            <a href="#">GitHub: @yourusername</a>
            <a href="#">LinkedIn: /in/yourprofile</a>
            <a href="#">Twitter: @yourhandle</a>
          </div>
        </div>

        <div>
          <h4 className="text-[#3498db] mb-2">Location</h4>
          <p>City, Country</p>
          <p>Time Zone: UTC+0</p>
        </div>
      </div>
    </div>
  </div>
);
