import React, { useState } from 'react';

const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    className: "",
    complainType: "",
    address: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="container mt-5" style={{ backgroundImage: "url(https://media.istockphoto.com/photos/science-technology-concept-education-technology-edtech-picture-id1271697681?b=1&k=20&m=1271697681&s=170667a&w=0&h=6Sysf0tg_AvITtJV-N-DDu-HpT-UuZxF0aAzfY0Y38w=)", backgroundSize: "cover" }}>
      <h1 className="text-center " style={{color:"#ecf39e",fontSize:"50px"}}>Submit Your Student Request</h1>
      {submitted && (
        <div className="alert alert-warning" role="alert">
          <strong>Success!</strong> Your request has been submitted successfully.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row mb-4 mt-5" style={{backgroundColor:"transparent"}}>
          <div className="col-md-6 fs-4">
            <label htmlFor="name" className="text-danger">Name</label>
            <input type="text" className="form-control p-3 fs-5" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter Your Name" style={{ borderRadius: "50px", backgroundColor: "transparent", color: "#e9c46a" }} />
          </div>
          <div className="col-md-6 fs-4">
            <label htmlFor="fatherName" className="text-danger">Father's Name</label>
            <input type="text" className="form-control p-3 fs-5" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required placeholder="Enter Your Father's Name" style={{ borderRadius: "50px", backgroundColor: "transparent", color: "#e9c46a" }} />
          </div>
        </div>
        <div className="row mb-4 "style={{backgroundColor:"transparent"}}>
          <div className="col-md-6 fs-4" >
            <label htmlFor="email" className="text-danger" >Email</label>
            <input type="email" className="form-control p-3 fs-5" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" style={{ borderRadius: "50px", backgroundColor: "transparent", color: "#e9c46a" }} />
          </div>
          <div className="col-md-6 fs-4">
            <label htmlFor="className" className="text-danger">Class</label>
            <input type="text" className="form-control p-3 fs-5" id="className" name="className" value={formData.className} onChange={handleChange} required placeholder="Enter Your Class" style={{ borderRadius: "50px", backgroundColor: "transparent", color: "#e9c46a" }} />
          </div>
        </div>
        <div className="mb-4 col-md-6 fs-4">
          <label htmlFor="complainType" className="text-danger">Complain Type</label>
          <select className="form-control p-3" id="complainType" name="complainType" value={formData.complainType} onChange={handleChange} required style={{ borderRadius: "50px", backgroundColor: "transparent" }}>
            <option value="">Select Complain Type</option>
            <option value="Technical Issue">Technical Issue</option>
            <option value="Billing Issue">Billing Issue</option>
            <option value="Don't Understood">Don't Understood</option>
            <option value="Don't Solve Dought">Don't Solve Dought</option>
            <option value="Don't Read Home">Don't Read Home </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4 col-md-6 fs-4">
          <label htmlFor="address" className="text-danger">Address</label>
          <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Enter Your Address" style={{ color: "#6f1d1b", backgroundColor: "transparent" }} />
        </div>
        <button type="submit" className="btn btn-warning p-3  fw-bold fs-5 mb-5" style={{borderRadius:"15px",width:"250px"
        }}>Submit</button>
      </form>
    </div>
  );
};

export default Complaint;
