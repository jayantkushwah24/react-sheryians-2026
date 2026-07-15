import React, { useEffect } from "react";

const About = () => {
  console.log("about redering");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("set interval inside about");
    }, 1000);

    return () => {
      console.log(
        "code inside return will run during un-mounting of component only",
      );

      // to avoid memory leak i.e. setInterval and setTimeOut gonna run after the unmounting of
      // about component we have to use clearInterval
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>about</h1>
    </div>
  );
};

export default About;
