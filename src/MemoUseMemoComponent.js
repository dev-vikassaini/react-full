import React, { useState, useMemo } from "react";

 function MemoUseMemoComponent() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  // It is the problem it is calling when set item, it should be call only count;
  //   function multiplyCount() {
  //     console.log("it is calling for set item as well. it is wrong.");
  //     return count;
  //   }

  // this is the solution
  const multiplyCount = useMemo(
    function multiplyCount() {
      console.log("useMemo is the solution");
      return count * 2;
    },
    [count]
  );

  return (
    <React.Fragment>
      <h5> useMemo Component</h5>
      <h5> useMemo Count : {count}</h5>
      <h5> useMemo Item : {item}</h5>

      <h5> Multi Count : {multiplyCount}</h5>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
    </React.Fragment>
  );
}

export default MemoUseMemoComponent;