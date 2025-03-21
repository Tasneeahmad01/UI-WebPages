// import React, { useState } from "react";

// const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

// function WordOmitter() {
//   const [inputText, setInputText] = useState("");
//   const [omitWords, setOmitWords] = useState(true);

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//   };

//   const toggleOmitWords = () => {
//     setOmitWords(!omitWords);
//   };

//   const clearFields = () => {
//     setInputText(""); // Clear input text
//   };

//   const getProcessedText = () => {
//     if (!omitWords) {
//       return inputText; // Return unaltered input text
//     }
//     // Filter out omitted words
//     const words = inputText.split(/\s+/); // Split input into words
//     const filteredWords = words.filter(
//       (word) => !OMITTED_WORDS.includes(word.toLowerCase())
//     );
//     return filteredWords.join(" "); // Join words back into a string
//   };

//   return (
//     <div className="omitter-wrapper">
//       <textarea
//         placeholder="Type here..."
//         value={inputText}
//         onChange={handleInputChange}
//         data-testid="input-area"
//       />
//       <div>
//         <button onClick={toggleOmitWords} data-testid="action-btn">
//           {omitWords ? "Show All Words" : "Omit Words"}
//         </button>
//         <button onClick={clearFields} data-testid="clear-btn">
//           Clear
//         </button>
//       </div>
//       <div>
//         <h2>Output:</h2>
//         <p data-testid="output-text">{getProcessedText()}</p>
//       </div>
//     </div>
//   );
// }

// export { WordOmitter };




import React, { useState } from "react";

function EmployeeValidationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.match(/^[a-zA-Z\s]{4,}$/)) {
      newErrors.name = "Name must be at least 4 characters long and only contain letters and spaces";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Email must be a valid email address";
    }
    if (!formData.employeeId.match(/^\d{6}$/)) {
      newErrors.employeeId = "Employee ID must be exactly 6 digits";
    }
    const today = new Date().toISOString().split("T")[0];
    if (formData.joiningDate > today) {
      newErrors.joiningDate = "Joining Date cannot be in the future";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
      console.log("Form submitted successfully", formData);

      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        employeeId: "",
        joiningDate: "",
      });

      setIsSubmitting(false);
    }
  };

  return (
    <form className="layout-column align-items-center mt-20" onSubmit={handleSubmit}>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={handleChange}
        />
        {errors.name && <p className="error mt-2">{errors.name}</p>}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p className="error mt-2">{errors.email}</p>}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={formData.employeeId}
          placeholder="Employee ID"
          onChange={handleChange}
        />
        {errors.employeeId && <p className="error mt-2">{errors.employeeId}</p>}
      </div>

      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
        />
        {errors.joiningDate && <p className="error mt-2">{errors.joiningDate}</p>}
      </div>

      <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default EmployeeValidationForm;
