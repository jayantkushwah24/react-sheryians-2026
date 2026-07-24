import React from "react";

const Contact = ({ user }) => {
  console.log("contact rendering");

  return (
    <div>
      <h1>contact</h1>
    </div>
  );
};

export default React.memo(Contact);

// export default React.memo(Contact, (prevProp, nextProp) => {
//   return prevProp.user.id === nextProp.user.id;
// });
