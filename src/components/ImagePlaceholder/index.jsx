import React from "react";

const Index = ({ className, paddingTop, src }) => {
  const divStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "#f7f7f7",
  };

  const beforeStyle = {
    paddingTop: paddingTop,
    float: "left",
  };

  const afterStyle = {
    display: "table",
    clear: "both",
  };

  return (
    <div style={divStyle} className={`${className}`}>
      <div style={beforeStyle}></div>
      <img src={src} alt="" />
      <div style={afterStyle}></div>
    </div>
  );
};

export default Index;
