import React from "react";

export default function HandleArrayListComponent() {
  const family = ["Vikas Kumar", "Vishakha Saini", "Vini Saini", "Viom Saini"];
  const familyPersons = [
    { Name: "Vikas Kumar", Email: "vikas@gmail.com", contact: 999 },
    { Name: "Vishakha Saini", Email: "vishakha@gmail.com", contact: 888 },
    { Name: "Viom Saini", Email: "viom@gmail.com", contact: 111 },
    { Name: "Vini Saini", Email: "vini@gmail.com", contact: 555 },
  ];

  family.map((item) => {
    console.log("Map ", item);
  });
  for (let i = 0; i < family.length; i++) {
    console.log("for loop ", family[i]);
  }
  return (
    <React.Fragment>
      <h4>HandleArrayListComponent</h4>
      {family.map((item) => (
        <h5 key={item}>Hello Map inside return. {item}</h5>
      ))}

      {familyPersons.map((item) => (
        <h5 key={item.Name}>
          Hello Map Object array inside return. {item.Email}
        </h5>
      ))}
    </React.Fragment>
  );
}
