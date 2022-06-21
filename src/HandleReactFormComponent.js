import React, { useState } from "react";

export default function HandleReactFormComponent() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  function getFormDataOnSubmit(e){
    console.warn(email, name, acceptTerms);
    e.preventDefault();
  }

  return (
    <React.Fragment>
        <h4>Handle React From</h4>
        <form onSubmit={(e)=>getFormDataOnSubmit(e)} style={{'marginLeft': '50px'}}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <select className="form-control" id="email" placeholder="Enter email" 
                    value={email == null ? '' : email} onChange={(e)=> setEmail(e.target.value)}>
                <option value="">Select Email</option>
                <option value="dev.vikassaini@gmail.com">dev.vikassaini@gmail.com</option>
                <option value="dev.viomsaini@gmail.com">dev.viomsaini@gmail.com</option>
                <option value="dev.vinisaini@gmail.com">dev.vinisaini@gmail.com</option>
                <option value="dev.vishakhasaini@gmail.com">dev.vishakhasaini@gmail.com</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" value={name == null ? '' : name} 
                onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="acceptTerms"  onChange={(e)=> setAcceptTerms(e.target.checked)}/>
              <label className="form-check-label" htmlFor="acceptTerms">
                Accept Terms
              </label>
            </div>
            <button type="submit" className="btn btn-primary"> Submit </button>
            <button type="button" className="btn btn-default"> Clear </button>         
        </form>
    </React.Fragment>
  );
}
