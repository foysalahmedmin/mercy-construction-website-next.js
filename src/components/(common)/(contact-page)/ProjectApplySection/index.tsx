"use client";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormControl } from "@/components/ui/FormControl";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";
import React, { useState, FormEvent, ChangeEvent } from "react";

const construction_types = [
  { value: "building", label: "Buildings" },
  { value: "civil", label: "Civil" },
  { value: "industrial", label: "Industrial" },
];

const ProjectApplySection = () => {
  const [project_type, setProjectType] = useState("");
  const [project_description, setProjectDescription] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
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
      { field: project_type, name: "Project type" },
      { field: project_description, name: "Project description" },
      { field: first_name, name: "First name" },
      { field: last_name, name: "Last name" },
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
      project_type,
      project_description,
      first_name,
      last_name,
      email,
      phone,
      description,
    };

    try {
      const response = await fetch(
        "https://admin.mercyconstructioninc.com/api/project/create_project",
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
      setProjectType("");
      setProjectDescription("");
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
    <section className="bg-muted py-16">
      <div className="container">
        <SectionTitle>
          <Title>Build a project with us </Title>
        </SectionTitle>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="block space-y-16 md:max-w-1/2"
        >
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-4xl">Choose your project type</h2>
            <div className="flex flex-wrap items-center gap-4">
              {construction_types?.map((item, index) => (
                <label
                  key={index}
                  className="bg-card inline-flex h-16 cursor-pointer items-center gap-2 border px-4"
                >
                  <Checkbox
                    className="foreground rounded-none"
                    value={item?.value}
                    name="construction-type"
                    checked={project_type === item?.value}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setProjectType(e.target.value)
                    }
                  />{" "}
                  <span className="leading-none">{item?.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-4xl">Describe your project</h2>
            <label className="block">
              <FormControl
                as="textarea"
                className="primary bg-card h-auto py-2"
                placeholder="Description"
                rows={4}
                value={project_description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setProjectDescription(e.target.value)
                }
              />
            </label>
          </div>
          <div className="space-y-8 md:flex-1 md:space-y-12">
            <h2 className="text-4xl">Get in touch </h2>
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="w-full space-y-2">
                  <span className="block">First Name </span>
                  <FormControl
                    as="input"
                    type="text"
                    placeholder="First Name"
                    value={first_name}
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
                    value={last_name}
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
                    value={phone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  />
                </label>
                <label className="w-full space-y-2">
                  <span className="block">Email Address </span>
                  <FormControl
                    as="input"
                    type="email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Email Address"
                  />
                </label>
                <label className="w-full space-y-2 lg:col-span-2">
                  <span className="block">Description </span>
                  <FormControl
                    as="textarea"
                    className="primary h-auto py-2"
                    placeholder="Description"
                    value={description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                    rows={4}
                  />
                </label>
              </div>
              <label className="flex cursor-pointer items-center gap-2">
                <Checkbox
                  className="foreground rounded-none"
                  name="construction-type"
                />{" "}
                <span className="leading-none">
                  Sign me up for access to exclusive content and the latest
                  news,
                </span>
              </label>
              <small>
                By clicking Submit you have read and understood our{" "}
                <Link
                  className="underline-effect hover:text-primary primary"
                  href="/privacy-policy"
                >
                  Privacy Policy.
                </Link>
              </small>
              {error && <p className="mt-3 text-red-500">{error}</p>}
              {success && <p className="mt-3 text-green-500">{success}</p>}
              <div className="mt-6 md:mt-8">
                <Button
                  disabled={loading}
                  className="foreground"
                  variant="outline"
                  size="lg"
                >
                  <span className="uppercase">
                    {loading ? "Loading..." : "Send"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectApplySection;
