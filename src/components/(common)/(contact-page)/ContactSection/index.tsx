"use client";

// Direct fetch implementation, no need for API import
import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import Link from "next/link";
import React, { useState, FormEvent, ChangeEvent } from "react";

const services = [
  { value: "", label: "Select" },
  { value: "construction", label: "Construction" },
  { value: "pre_construction_service", label: "Pre-Construction Services" },
  { value: "design_build", label: "Design - Build" },
  { value: "lump_sum_contracting", label: "Lump-Sum Contracting" },
];
const regions = [
  { value: "", label: "Select" },
  { value: "alaska", label: "Alaska" },
  { value: "midwest", label: "Midwest" },
  { value: "northwest", label: "Northwest" },
  { value: "north_central", label: "North Central" },
  { value: "northeast", label: "Northeast" },
  { value: "pacific_islands_southwest", label: "Pacific Islands Southwest" },
  { value: "south_central", label: "South Central" },
  { value: "southwest", label: "Southwest" },
];
const locations = [
  {
    type: "text",
    text: "95-28 147th Place, Queens, NY 11435, United States",
  },
  {
    type: "link",
    text: "+1 (646) 392-5450",
    href: "tel:+16463925450",
  },
  {
    type: "link",
    text: "mercyconstructionnyc@gmail.com",
    href: "mailto:mercyconstructionnyc@gmail.com",
  },
];
const ContactSection = () => {
  const [inquiry, setInquiry] = useState("");
  const [region, setRegion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const requiredFields = [
      { field: inquiry, name: "Inquiry" },
      { field: region, name: "Region" },
      { field: firstName, name: "First name" },
      { field: lastName, name: "Last name" },
      { field: email, name: "Email" },
      { field: phone, name: "Phone" },
      { field: description, name: "Description" },
    ];

    const missingField = requiredFields.find((item) => !item.field);
    if (missingField) {
      setError(`${missingField.name} is required`);
      return;
    }

    setError("");
    setSuccess("");

    const contactData = {
      inquiry,
      region,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      description,
    };

    try {
      const response = await fetch(
        "https://admin.mercyconstructioninc.com/api/contact/create_contact",
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
      setInquiry("");
      setRegion("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to create contact";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row-reverse md:gap-12">
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">Our location </h2>
            <div>
              <strong className="mb-4 block font-medium uppercase">
                New York
              </strong>
              <ul>
                {locations.map((item, index) => (
                  <li className="font-light" key={index}>
                    {item?.type === "link" ? (
                      <Link
                        className="underline-effect primary hover:text-primary"
                        href={item?.href || "#"}
                      >
                        {item?.text}
                      </Link>
                    ) : (
                      <p className="mb-4">{item?.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-border hidden md:block md:w-0.5 md:self-stretch" />
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">How can we help? </h2>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <label className="w-full space-y-2">
                    <span className="block">Select Inquiry</span>
                    <FormControl
                      as="select"
                      value={inquiry}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setInquiry(e.target.value)
                      }
                    >
                      {services?.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </FormControl>
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Select Region </span>
                    <FormControl
                      as="select"
                      value={region}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setRegion(e.target.value)
                      }
                    >
                      {regions?.map((region) => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </FormControl>
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">First Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                      }
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Last Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                      }
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Phone Number </span>
                    <FormControl
                      as="input"
                      type="tel"
                      placeholder="Phone Number"
                      // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      value={phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setPhone(e.target.value)
                      }
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Email Address </span>
                    <FormControl
                      as="input"
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                  </label>
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Description </span>
                    <FormControl
                      as="textarea"
                      className="primary h-auto py-2"
                      placeholder="Description"
                      rows={4}
                      value={description}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setDescription(e.target.value)
                      }
                    />
                  </label>
                  {error && <p className="text-red-500">{error}</p>}
                  {success && <p className="text-green-500">{success}</p>}
                </div>
                <div className="mt-6 md:mt-8">
                  <Button
                    type="submit"
                    className="foreground"
                    variant="outline"
                    size="lg"
                    disabled={loading}
                  >
                    <span className="uppercase">
                      {loading ? "Loading..." : "Send"}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
