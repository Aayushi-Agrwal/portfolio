import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="flex flex-col h-1/3 justify-between absolute left-16 items-center bottom-4">
      <Link
        href="https://github.com/Aayushi-Agrwal"
        className="w-6"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aayushi-agarwal-bb104222b/"
        className="w-6"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link
        href="https://twitter.com/Aayushi73442077"
        target="_blank"
        className="w-6"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </Link>
      <div className="h-[8rem] border-r-2 border-white"></div>
    </div>
  );
}

export default Sidebar;
