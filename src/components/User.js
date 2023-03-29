import { useState } from "react";
function User() {
  const [data, setData] = useState("pogo");
  function updateData() {
    setData("tommy");
  }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>click me</button>
    </>
  );
}
export default User;
