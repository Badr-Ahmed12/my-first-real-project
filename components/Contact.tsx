'use client';

import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'success' | 'error' | null;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div id="contact" className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 pt-24 xl:pt-28">
      <div className="w-full lg:flex space-y-6 lg:space-y-0">
        <div className="w-full lg:w-1/3">
          <h6 className="pl-[20px] relative font-outfit font-medium text-sm uppercase tracking-wider text-white/40 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[12px] before:h-[12px] before:rounded-full before:border-2 before:border-white/30">Contact</h6>
          <h2 className="font-outfit font-medium text-4xl md:text-5xl lg:text-6xl text-white mt-2">Let&#39;s <span className="bg-themeGradient bg-clip-text text-transparent">Talk</span></h2>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex">
            <div className="w-1/2 flex items-center">
              <Mail className="text-white mr-2" />
              <div>
                <h6 className="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-2">Email:</h6>
                <h3 className="font-outfit font-medium text-2xl lg:text-3xl text-white">contact@flatheme.net</h3>
              </div>
            </div>
            <div className="w-1/2 flex items-center">
              <Phone className="text-white mr-2" />
              <div>
                <h6 className="font-outfit font-medium uppercase text-sm tracking-wider text-white mb-2">Call:</h6>
                <h3 className="font-outfit font-medium text-2xl lg:text-3xl text-white">+123 456 7890</h3>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:text-right">
            <form className="space-y-4 transition duration-200 ease-out" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input className="w-1/2 bg-darkBg px-5 py-4 rounded-lg text-white/70 placeholder:text-white/40 focus:outline-none"
                  type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                <input className="w-1/2 bg-darkBg px-5 py-4 rounded-lg text-white/70 placeholder:text-white/40 focus:outline-none"
                  type="email" name="email" placeholder="E-Mail" required value={formData.email} onChange={handleChange} />
              </div>
              <input className="w-full bg-darkBg px-5 py-4 rounded-lg text-white/70 placeholder:text-white/40 focus:outline-none"
                type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
              <textarea className="w-full bg-darkBg px-5 py-4 rounded-lg text-white/70 placeholder:text-white/40 h-[160px] focus:outline-none"
                name="message" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
              <button className="inline-flex items-center bg-white/15 px-7 py-3 pr-11 rounded-3xl font-outfit font-medium uppercase text-sm tracking-wider text-white hover:bg-themeGradient hover:opacity-90 transition duration-200 ease-out"
                type="submit">
                Send Message <Send className="ml-2 text-white text-lg" />
              </button>
            </form>
            <div className="submit-result mt-4">
              {status === 'success' && <span className="text-green-700">Thank you! Your Message has been sent.</span>}
              {status === 'error' && <span className="text-red-600">Something went wrong, Please try again!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

