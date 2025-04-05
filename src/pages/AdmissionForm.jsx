import React, { useState } from "react";
import './style.css';


const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    Student_Name: "",
    Date_of_Birth: "",
    Admission_Number: "",
    Place: "",
    District: "",
    State: "",
    Pincode: "",
    Mobile: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
  
    if (
      formData.Student_Name === "" ||
      formData.Date_of_Birth === "" ||
      formData.Admission_Number === "" ||
      formData.Place === "" ||
      formData.District === "" ||
      formData.State === "" ||
      formData.Pincode === "" ||
      formData.Mobile === ""
    ) {
      alert("Fill all fields compulsorily.");
    } else {
      alert("Your Data Stored...");
      console.log(formData)
      
      setFormData({
        Student_Name: "",
        Date_of_Birth: "",
        Admission_Number: "",
        Place: "",
        District: "",
        State: "",
        Pincode: "",
        Mobile: "",
      });
    }
  };
  

  return (
    <div className="form-container"> 
      <h2>Student Admission Form</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name="Student_Name" placeholder="Full Name" value={formData.Student_Name} onChange={handleChange}  />
        <input type="date" name="Date_of_Birth" value={formData.Date_of_Birth} onChange={handleChange}  />
        <input type="text" name="Admission_Number" placeholder="Admission Number" value={formData.Admission_Number} onChange={handleChange}  />
        <input type="text" name="Place" placeholder="Place" value={formData.Place} onChange={handleChange}  />
        <input type="text" name="District" placeholder="District" value={formData.District} onChange={handleChange}  />
        <input type="text" name="State" placeholder="State" value={formData.State} onChange={handleChange}  />
        <input type="number" name="Pincode" placeholder="Pincode" value={formData.Pincode} onChange={handleChange}  />
        <input type="tel" name="Mobile" placeholder="Mobile Number" value={formData.Mobile} onChange={handleChange}  />
        <button type="submit">Submit</button>
        < a href="/Success">Click Here to AdmissionForm Updation</a>
      </form>
    </div>
  );
};

export default AdmissionForm;