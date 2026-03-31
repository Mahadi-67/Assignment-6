const StatsSection = () => {
    return (
      <div className="bg-blue-500 text-white py-12 px-25 flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Stat 1 */}
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-2">50K+</h2>
          <p className="text-sm opacity-90">Active Users</p>
        </div>
  
        {/* Divider */}
        <div className="hidden md:block w-px h-16  opacity-20"></div>
  
        {/* Stat 2 */}
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-2">200+</h2>
          <p className="text-sm opacity-90">Premium Tools</p>
        </div>
  
        {/* Divider */}
        <div className="hidden md:block w-px h-16  opacity-20"></div>
  
        {/* Stat 3 */}
        <div className="text-center flex-1">
          <h2 className="text-5xl font-bold mb-2">4.9</h2>
          <p className="text-sm opacity-90">Rating</p>
        </div>
  
      </div>
    );
  };
  
  export default StatsSection;