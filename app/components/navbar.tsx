function Navbar() {
  return (
    <div className="w-1/3 absolute right-4 py-4">
      <ul className="flex justify-around items-center text-sm">
        <li className="hover:scale-105">About</li>
        <li className="hover:scale-105">Experience</li>
        <li className="hover:scale-105">Contact</li>
        <div className="border-2 border-solid rounded-md border-[#9CFF2E] px-3 py-2 w-[5rem] hover:text-[#2A2F4F] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white hover:border-white duration-[400ms,600ms] transition-[color,box-shadow] cursor-pointer">
          Resume
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
