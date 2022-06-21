import React, { useEffect, useState } from "react";

export default function User(props) {
  useEffect(() => {
    console.log("Use Effect props Count " + props.count);
  }, [props.count]);

  return (
    <div>
      <React.Fragment>
        <h4>Use Effect Count Props {props.count}</h4>
        <h4>Use Effect Data Props {props.data}</h4>
      </React.Fragment>
    </div>
  );
}
