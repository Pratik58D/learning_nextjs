import React from "react";
import { add, subtract } from "@/utils/serveronly-utils";
// import { multiply } from "@/utils/clientonly-utils";

const ServerOnly = () => {
  const total = add(1, 2);
  const result = subtract(5, 4);
  //    console.log(result)
  // const mul = multiply(4,9);
  return (
    <>
      <div>ServerOnly : the result is : {result}</div>
      <div>ServerOnly : the total is : {total}</div>
      {/* <h1>multipy is : {mul}</h1> */}
    </>
  );
};

export default ServerOnly;
