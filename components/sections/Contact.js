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
    <section id="contact" className="w-full h-auto px-4 py-8 text-white bg-cetacean">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl">Send me a message</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col w-full py-2">
            <label htmlFor="name" className="py-1">Name</label>
            <input id="name" name="name" type="text" value={name}
              onChange={(e) => setName(e.target.value)}
              className={`text-black px-2 py-1 rounded-md border-4 border-white focus:outline-none focus:border-gold ${errors.name && "border-2 border-red-500"}`}
            />
            {errors.name && <p className="mt-1 text-red-500">Please enter a name.</p>}
          </div>
          <div className="flex flex-col w-full py-2">
            <label htmlFor="email" className="py-1">Email</label>
            <input id="email" name="email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className={`text-black px-2 py-1 rounded-md border-4 border-white focus:outline-none focus:border-gold ${errors.email && "border-2 border-red-500"}`}
            />
            {errors.email && <p className="mt-1 text-red-500">Please enter a valid email.</p>}
          </div>
          <div className="flex flex-col w-full py-2">
            <label htmlFor="subject" className="py-1">Subject</label>
            <input id="subject" name="subject" type="text" value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`text-black px-2 py-1 rounded-md border-4 border-white focus:outline-none focus:border-gold ${errors.subject && "border-2 border-red-500"}`}
            />
            {errors.subject && <p className="mt-1 text-red-500">Please enter a subject.</p>}
          </div>
          <div className="flex flex-col w-full py-2">
            <label htmlFor="message" className="py-1">Message</label>
            <textarea id="message" name="message" value={message}
              onChange={(e) => setMessage(e.target.value)} 
              className={`text-black px-2 py-1 rounded-md border-4 border-white focus:outline-none focus:border-gold ${errors.message && "border-2 border-red-500"}`}
            ></textarea>
            {errors.message && <p className="mt-1 text-red-500">Please enter a message.</p>}
          </div>
          <button type="submit" className="bg-gold my-2 px-6 py-2 rounded-md">{buttonText}</button>
          {showSuccessMessage && <p  className="mt-1 text-green-500">Message sent. Thank you!</p>}
          {showErrorMessage && <p className="mt-1 text-red-500">Failed to send message.</p>}
        </form>
      </div>
    </section>
  );
}