import React from 'react';
import './Resume.css'
const CreateResume = () => {
  return (
    <div>
      {/* Contact Details Section */}
      <h1>RESUME</h1>
   
      <form>
      <h2>Contact Details</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        
        <div>
          <label htmlFor="phone">Phone No:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" placeholder="Enter your country" />
        </div>
        
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" />
        </div>

        {/* Education Section */}
        <h2>Education</h2>
        <div>
          <label htmlFor="school">School/University:</label>
          <input type="text" id="school" name="school" placeholder="Enter your school or university" />
        </div>
        
        <div>
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" name="degree" placeholder="Enter your degree" />
        </div>
        
        <div>
          <label htmlFor="field">Field of Study:</label>
          <input type="text" id="field" name="field" placeholder="Enter your field of study" />
        </div>
        
        <div>
          <label htmlFor="graduationYear">Graduation Year:</label>
          <input type="text" id="graduationYear" name="graduationYear" placeholder="Enter your graduation year" />
        </div>

        {/* Experience Section */}
        <h2>Experience</h2>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" name="jobTitle" placeholder="Enter your job title" />
        </div>
        
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" placeholder="Enter the company name" />
        </div>
        
        <div>
          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" placeholder="Enter your duration of work" />
        </div>
        
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="Description" name="Description" placeholder="Enter Description" />
        </div>
      </form>
    </div>
  );
}

export default CreateResume;
