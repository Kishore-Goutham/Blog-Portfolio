import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center">

      <div className="flex justify-center gap-6 mb-4">

        <FaGithub size={25} />
        <FaLinkedin size={25} />

      </div>

      <p className="text-gray-600">
        © 2026 Kishore Goutham. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
