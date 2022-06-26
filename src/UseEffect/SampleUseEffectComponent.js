import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SampleUseEffectComponent() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data.title);
      });
  }, []);
  return (
    <React.Fragment>
      <h5> Sample UseEffect Component API Call</h5>
      <h1>{data}</h1>
    </React.Fragment>
  );
}
