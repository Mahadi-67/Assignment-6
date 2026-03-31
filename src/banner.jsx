import BannerImage from "./assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-600/10  text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold ">
          Supercharge Your <br />Digital Workflow
          </h1>

          <p className="text-sm opacity-60 max-w-lg">
          Access premium AI tools, design assets, templates, and productivity <br/>software—all in one place. Start creating faster today. <br/>Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn btn-primary rounded-full">
            Explore Products
            </button>
            <button class="btn btn-outline btn-primary rounded-full"><span className="group-hover:translate-x-1 transition">▷</span>Watch Demo</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Banner;