const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur">
      {/* <div>
        <div className="flex items-center justify-between relative">
          <div className="px-4">
           
          </div>
          <div className="flex items-center px-4">

          </div>
        </div>
      </div> */}
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10">
          <div className="relative flex items-center ml-16">
            <img className="w-10" src="/yere.png" alt="icon" />
            <div className="relative lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 mr-16">
                <ul className="flex space-x-8">
                  <li>
                    <a className="hover:text-sky-500" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-sky-500" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-sky-500" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-sky-500" href="#project">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-sky-500" href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
