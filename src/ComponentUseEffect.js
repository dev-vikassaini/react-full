import React, { useEffect, useState } from "react";
import User from './User';

export default function ComponentUseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(() => {
    console.log("Use Effect Count");
  }, [count]);

  useEffect(() => {
    console.log("Use Effect data");
  }, [data]);

  return (
    <div>
      <React.Fragment>
        <h4>Use Effect Count {count}</h4>
        <h4>Use Effect Data {data}</h4>
        <button onClick={() => setCount(count + 1)}>Use Effect Count</button>
        <button onClick={() => setData(data + 1)}>Use Effect Data</button>

        <User count={count} data={data}/>

      </React.Fragment>
    </div>
  );
}
