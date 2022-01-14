import React from "react";
import { Jsme } from "jsme-react";

const Editortwo = ({ setSolventState }) => {
  return (
    <div>
      <Jsme
        height="300px"
        width="400px"
        options="oldlook,star"
        onChange={setSolventState}
      />
    </div>
  );
};

export default Editortwo;
