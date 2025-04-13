"use client";
import { faqs } from "@/assets/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import { Description, SectionTitle, Title } from "@/components/ui/SectionTitle";
import React, { useState, FormEvent } from "react";

const FAQSection = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [looking_for, setLookingFor] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      { field: name, name: "Name" },
      { field: email, name: "Email" },
      { field: phone, name: "Phone" },
      { field: looking_for, name: "Looking for" },
      { field: message, name: "Message" },
    ];

    const missingField = requiredFields.find((item) => !item.field);
    if (missingField) {
      setError(`${missingField.name} is required`);
      return;
    }

    setError("");
    setSuccess("");
    setLoading(true);

    const contactData = {
      name,
      email,
      phone,
      looking_for,
      message,
    };

    try {
      const response = await fetch(
        "https://admin.mercyconstructioninc.com/api/schedule/create_schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccess(data?.message || "Contact created successfully");
      setName("");
      setEmail("");
      setPhone("");
      setLookingFor("");
      setMessage("");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create contact";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <SectionTitle>
              <Title>Frequently asked questions</Title>
              <Description>
                These sets of questionnaires and answers by experts can help get
                a better understanding of our general remodeling services,
                timeline & process.
              </Description>
            </SectionTitle>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs?.map((faq) => (
                  <AccordionItem key={faq._id} value={faq._id}>
                    <AccordionTrigger>
                      <span className="text-xl">{faq?.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{faq?.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div>
            <div className="bg-card space-y-6 p-12">
              <h3 className="text-3xl">Schedule Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4" action="">
                <label className="block w-full space-y-2">
                  <span className="inline-block">Your name</span>
                  <FormControl
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                    as="input"
                    placeholder="You name"
                    type="text"
                  />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Email address</span>
                  <FormControl
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    as="input"
                    placeholder="Email address"
                    type="email"
                  />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Phone number 2334</span>
                  <FormControl
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                    as="input"
                    placeholder="Phone number"
                    type="tel"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">
                    What are you looking for?
                  </span>
                  <FormControl
                    value={looking_for}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setLookingFor(e.target.value)
                    }
                    as="select"
                    size="lg"
                  >
                    <option value="">Select</option>
                    <option value="home_renovation">Home Renovation</option>
                    <option value="interior_painting_service">
                      Interior Painting Services
                    </option>
                    <option value="kitchen_remodeling">
                      Kitchen Remodeling
                    </option>
                    <option value="bathroom_remodeling">
                      Bathroom Remodeling
                    </option>
                    <option value="apartment_renovation">
                      Apartment Renovation
                    </option>
                    <option value="roofing">Roofing</option>
                  </FormControl>
                </label>
                <label className="block w-full space-y-2">
                  <span className="inline-block">Your message</span>
                  <FormControl
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                    className="primary h-auto py-2"
                    as="textarea"
                    rows={4}
                    placeholder="Your message"
                  />
                </label>
                {error && <p className="mt-3 text-red-500">{error}</p>}
                {success && <p className="mt-3 text-green-500">{success}</p>}
                <Button className="flex w-full" size="lg" disabled={loading}>
                  <span className="uppercase">
                    {loading ? "Loading..." : "Get your free quote"}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
