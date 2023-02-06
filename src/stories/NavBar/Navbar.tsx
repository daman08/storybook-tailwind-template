interface NavbarProps {
  title: string;
  links?: { name: string; href: string }[];
}

export const Navbar = (props: NavbarProps) => {
  const { title, links } = props;
  return (
    <>
      <nav className="bg-gray-900 text-white flex justify-between items-center rounded m-2 p-4 shadow-lg">
        <a className="font-bold text-3xl" href="#">
          {title}
        </a>
        <button
          data-target="navbar-dropdown"
          data-toggle="collapse"
          className="text-3xl md:hidden hover:text-slate-500 flex justify-center items-center"
          type="button"
          aria-controls="navbar-dropdown"
          aria-expanded="true"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex gap-10">
            {links?.map((link) => (
              <li key={link.name}>
                <a
                  className="text-md hover:text-slate-500 uppercase"
                  href="{link.href}"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Create a div on top right corner to show menu items */}
        <div
          className="absolute top-16 right-3 md:hidden collapse in"
          id="navbar-dropdown"
        >
          <ul className=" bg-slate-500 px-3 rounded flex flex-col">
            {links?.map((link) => (
              <li key={link.name}>
                <a
                  className="text-xl hover:text-slate-500 uppercase"
                  href="{link.href}"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
