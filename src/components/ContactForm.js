import { useState } from "react";


// Web3Form Plugin
export default function ContactForm() {
    const [result, setResult] = useState("");

    console.log(result)

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);


      // access key: 8d50f287-73a6-4522-9460-971d1140e49a
      formData.append("access_key", "8d50f287-73a6-4522-9460-971d1140e49a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        alert('Thông tin của quý khách đã được gửi thành công')
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
      <div>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" required placeholder="Họ và tên *"/>
          <input type="email" name="email" required placeholder="Email *"/>
          <textarea name="message" rows={6} required placeholder="Nội dung chi tiết *"></textarea>

          <button className="submit-form-btn" type="submit">Xác nhận & Gửi</button>
        </form>
      </div>
    );
  }