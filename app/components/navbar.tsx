function Navbar() {
  return (
    <div className="w-1/3 absolute right-0 py-4">
      <ul className="flex justify-around items-center text-sm">
        <li>About</li>
        <li>Experience</li>
        <li>Contact</li>
        <div className="border-2 border-solid rounded-md border-[#9CFF2E] px-3 py-2 w-[5rem] hover:text-[#2A2F4F] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white hover:border-white duration-[400ms,600ms] transition-[color,box-shadow] cursor-pointer">
          Resume
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
