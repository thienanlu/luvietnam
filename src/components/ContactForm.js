import { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" required placeholder="Họ và tên"/>
          <input type="email" name="email" required placeholder="Email"/>
          <textarea name="message" rows={6} required placeholder="Nội dung chi tiết"></textarea>

          <button className="submit-form-btn" type="submit">Xác nhận & Gửi</button>
        </form>
        <span>{result}</span>
      </div>
    );
  }