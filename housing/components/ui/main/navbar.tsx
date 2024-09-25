function Navbar() {
  return (
    <nav className="h-24 w-full flex items-center justify-between px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between pr-3 flex-auto w-64">
        <a href="/" className="font-bold sm:text-2xl text-lg">
          <h1>
            Estate
            <span className="text-red-600">Explore</span>
          </h1>
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/">Home</a>
          <a href="/list">ListPage</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
