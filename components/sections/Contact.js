import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }

    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({...tempErrors});
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formIsValid = handleValidation();

    if (formIsValid) {
      setButtonText("Sending...");
      const response = await fetch("/api/sendgrid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
      });

      const result = await response.json();
      if (result.error) {
        console.error("Error sending message: ", result.error);
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      setButtonText("Send");
    }
  };


  return (
    <div id="contact" className="h-screen bg-indigo-900">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>Please enter a name.</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          {errors.email && <p>Please enter a valid email.</p>}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <p>Please enter a subject.</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea id="message" name="message" value={message}
            onChange={(e) => setMessage(e.target.value)} 
          ></textarea>
          {errors.message && <p>Please enter a message.</p>}
        </div>
        <button type="submit">{buttonText}</button>
        {showSuccessMessage && <p>Message sent. Thank you!</p>}
        {showErrorMessage && <p>Failed to send message.</p>}
      </form>
    </div>
  );
}