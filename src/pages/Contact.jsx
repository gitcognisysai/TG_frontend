
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      desc: "TSCHE Office, Masab Tank, Hyderabad - 500028",
    },
    {
      icon: Phone,
      title: "Phone",
      desc: "040-23146146\n040-23146147",
    },
    {
      icon: Mail,
      title: "Email",
      desc: "convener.pgcet@tsche.ac.in",
    },
    {
      icon: Clock,
      title: "Office Hours",
      desc: "Mon-Sat: 10:00 AM - 5:00 PM\n(Closed on Public Holidays)",
    },
  ];

  const inputClass =
    "w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500";

  const errorClass = "text-red-600 text-xs mt-1";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (form.name.trim().length < 2) {
      newErrors.name = "Name is required";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (form.subject.trim().length < 5) {
      newErrors.subject = "Subject is required";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully. We will get back to you soon.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <SiteLayout>
      <PageBanner title="Contact Us" crumbs={[{ label: "Contact" }]} />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-card text-center hover:shadow-md transition-shadow rounded-xl border shadow-sm"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>

                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden border bg-muted/30">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse mb-2">
                <MapPin className="w-8 h-8 text-primary" />
              </div>

              <span className="font-serif font-bold text-xl text-primary bg-background/80 px-4 py-1 rounded backdrop-blur-sm border">
                PGCET HQ
              </span>
            </div>
          </div>

          <div className="bg-card shadow-lg border border-gray-200 rounded-xl">
            <div className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Query regarding..."
                    className={inputClass}
                  />
                  {errors.subject && (
                    <p className={errorClass}>{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`${inputClass} min-h-[120px] resize-none`}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full h-12 text-base font-bold mt-4 inline-flex items-center justify-center rounded-md bg-primary text-white hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}