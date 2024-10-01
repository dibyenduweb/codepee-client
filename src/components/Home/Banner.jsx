const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-cover bg-center min-h-[50vh] text-white py-16 px-8 font-sans"
           style={{ backgroundImage: "url('https://i.pinimg.com/originals/6f/1e/86/6f1e86ffdb2926aead1616cc8719ca41.jpg')" }}>
        
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-center min-h-[50vh] gap-x-6 gap-y-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 mt-10">Unlock Your Potential</h2>
            <p className="text-base text-gray-300">
              Upgrade your skills with our premium courses. Enroll now and access exclusive content!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <button
              type="button"
              className="bg-yellow-400 text-gray-800 py-3 px-6 font-semibold rounded"
            >
              Book A Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
