import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Content Creator",
          "MERN Stack Developer",
          "Video Editor",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 55,

    
      }}
    />
  );
}

export default Type;
