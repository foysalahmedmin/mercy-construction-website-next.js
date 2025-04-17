"use client";

import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormControl } from "@/components/ui/FormControl";
import React, { ChangeEvent, FormEvent, useState } from "react";

const whyChooseUs = [
  "We provide consistent and quality work on a regular basis.",
  "Our work orders are priced reasonably and there is room for negotiation.",
  "WE PAY YOU INSTANTLY, within 24 hours after work is completed as the photo requirements have been met, and the client has accepted the work, however if you require payment on an urgent basis in case of emergency, we can consider.",
  "Well-known and respected by our vendor network.",
  "We have professionals who are here to assist you in case you face any kind of issues.",
  "Should you complete 10 work orders on a timely basis, you will be entitled to a bonus figure.",
];

const states = [
  { label: "Alabama", value: "Alabama", code: "AL" },
  { label: "Alaska", value: "Alaska", code: "AK" },
  { label: "Arizona", value: "Arizona", code: "AZ" },
  { label: "Arkansas", value: "Arkansas", code: "AR" },
  { label: "California", value: "California", code: "CA" },
  { label: "Colorado", value: "Colorado", code: "CO" },
  { label: "Connecticut", value: "Connecticut", code: "CT" },
  { label: "Delaware", value: "Delaware", code: "DE" },
  { label: "Florida", value: "Florida", code: "FL" },
  { label: "Georgia", value: "Georgia", code: "GA" },
  { label: "Hawaii", value: "Hawaii", code: "HI" },
  { label: "Idaho", value: "Idaho", code: "ID" },
  { label: "Illinois", value: "Illinois", code: "IL" },
  { label: "Indiana", value: "Indiana", code: "IN" },
  { label: "Iowa", value: "Iowa", code: "IA" },
  { label: "Kansas", value: "Kansas", code: "KS" },
  { label: "Kentucky", value: "Kentucky", code: "KY" },
  { label: "Louisiana", value: "Louisiana", code: "LA" },
  { label: "Maine", value: "Maine", code: "ME" },
  { label: "Maryland", value: "Maryland", code: "MD" },
  { label: "Massachusetts", value: "Massachusetts", code: "MA" },
  { label: "Michigan", value: "Michigan", code: "MI" },
  { label: "Minnesota", value: "Minnesota", code: "MN" },
  { label: "Mississippi", value: "Mississippi", code: "MS" },
  { label: "Missouri", value: "Missouri", code: "MO" },
  { label: "Montana", value: "Montana", code: "MT" },
  { label: "Nebraska", value: "Nebraska", code: "NE" },
  { label: "Nevada", value: "Nevada", code: "NV" },
  { label: "New Hampshire", value: "New Hampshire", code: "NH" },
  { label: "New Jersey", value: "New Jersey", code: "NJ" },
  { label: "New Mexico", value: "New Mexico", code: "NM" },
  { label: "New York", value: "New York", code: "NY" },
  { label: "North Carolina", value: "North Carolina", code: "NC" },
  { label: "North Dakota", value: "North Dakota", code: "ND" },
  { label: "Ohio", value: "Ohio", code: "OH" },
  { label: "Oklahoma", value: "Oklahoma", code: "OK" },
  { label: "Oregon", value: "Oregon", code: "OR" },
  { label: "Pennsylvania", value: "Pennsylvania", code: "PA" },
  { label: "Rhode Island", value: "Rhode Island", code: "RI" },
  { label: "South Carolina", value: "South Carolina", code: "SC" },
  { label: "South Dakota", value: "South Dakota", code: "SD" },
  { label: "Tennessee", value: "Tennessee", code: "TN" },
  { label: "Texas", value: "Texas", code: "TX" },
  { label: "Utah", value: "Utah", code: "UT" },
  { label: "Vermont", value: "Vermont", code: "VT" },
  { label: "Virginia", value: "Virginia", code: "VA" },
  { label: "Washington", value: "Washington", code: "WA" },
  { label: "West Virginia", value: "West Virginia", code: "WV" },
  { label: "Wisconsin", value: "Wisconsin", code: "WI" },
  { label: "Wyoming", value: "Wyoming", code: "WY" },
];

const terms = [
  {
    term: "Late Fee",
    description:
      "Invoice total amount will be deducted by 2% if vendor is unable to submit the work order within due date.",
  },
  {
    term: "Invoices",
    description:
      "Vendor shall submit detailed invoices and work photos to Company for services provided.",
  },
  {
    term: "Payment Amount",
    description:
      "The payment amount for each invoice shall be determined based on the agreed-upon rates for specific services.",
  },
  {
    term: "Completion Requirement",
    description:
      "Payment will not be made for partial services; you must complete the entire work in order to secure full payment.",
  },
  {
    term: "Payment Timeline",
    description:
      "Company agrees to make payments to Vendor within 24 hours from the date of receipt of a valid invoice.",
  },
  {
    term: "Payment Method",
    description:
      "Payments will be made via [preferred payment method, e.g., check, electronic transfer].",
  },
];

const VendorRegistrationPage = () => {
  const [business_name, setBusinessName] = useState("");
  const [contact_name, setContactName] = useState("");
  const [contact_email, setContactEmail] = useState("");
  const [contact_phone, setContactPhone] = useState("");
  const [contact_address, setContactAddress] = useState("");
  const [state, setState] = useState("");
  const [coverage_countries, setCoverageCountries] = useState("");
  const [area_of_expertise, setAreaOfExpertise] = useState("");
  const [tools, setTools] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [cash_app, setCashApp] = useState("");
  const [zelle, setZelle] = useState("");
  const [others, setOthers] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const requiredFields = [
      { field: business_name, name: "Business name" },
      { field: contact_name, name: "Contact name" },
      { field: contact_email, name: "Contact email" },
      { field: contact_phone, name: "Contact phone" },
      { field: contact_address, name: "Contact address" },
      { field: state, name: "State" },
      { field: coverage_countries, name: "Coverage countries" },
      { field: area_of_expertise, name: "Area of expertise" },
      { field: tools, name: "Tools" },
      { field: payment_method, name: "Payment method" },
    ];
    if (payment_method === "cash_app" && !cash_app) {
      requiredFields.push({ field: cash_app, name: "Cash App details" });
    } else if (payment_method === "zelle" && !zelle) {
      requiredFields.push({ field: zelle, name: "Zelle details" });
    } else if (payment_method === "others" && !others) {
      requiredFields.push({ field: others, name: "Other payment details" });
    }
    const missingField = requiredFields.find((item) => !item.field);
    if (missingField) {
      setError(`${missingField.name} is required`);
      return;
    }

    if (!agreeToTerms) {
      setError("You must agree to the terms to continue");
      return;
    }
    const vendorData = {
      business_name,
      contact_name,
      contact_email,
      contact_phone,
      contact_address,
      state,
      coverage_countries: coverage_countries
        .split(",")
        .map((item) => item.trim()),
      area_of_expertise: area_of_expertise
        .split(",")
        .map((item) => item.trim()),
      tools: tools.split(",").map((item) => item.trim()),
      payment_method,
      cash_app: payment_method === "cash_app" ? cash_app : undefined,
      zelle: payment_method === "zelle" ? zelle : undefined,
      others: payment_method === "others" ? others : undefined,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://admin.mercyconstructioninc.com/api/vendor/create_vendor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(vendorData),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccess(data?.message || "Vendor registration successful!");
      setBusinessName("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactAddress("");
      setState("");
      setCoverageCountries("");
      setAreaOfExpertise("");
      setTools("");
      setPaymentMethod("");
      setCashApp("");
      setZelle("");
      setOthers("");
      setAgreeToTerms(false);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to register vendor";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main>
      <PageHeaderSection
        subtitle="Vendor Registration"
        title="Vendor Agreement Form"
        description="MERCY CONSTRUCTION INC. works with bank owned or mortgage owned properties that are foreclosed or occupied. Our main objective is to make sure the
client demands are met and the service quality is maintained on the highest level
possible."
      />
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row-reverse md:gap-12">
            <div className="space-y-8 md:flex-1 md:space-y-12">
              <h2 className="text-4xl">Why choose us? </h2>
              <div>
                <ul className="ml-4 list-disc space-y-2">
                  {whyChooseUs.map((point, index) => (
                    <li className="font-light" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-border hidden md:block md:w-0.5 md:self-stretch" />
            <div className="space-y-8 md:flex-1 md:space-y-12">
              <h2 className="text-4xl">Vendor Agreement Form </h2>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <label className="w-full space-y-2 lg:col-span-2">
                      <span className="block">
                        Business Name (if you are under a business){" "}
                      </span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="Business Name"
                        value={business_name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setBusinessName(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Contact Name</span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="Contact Name"
                        value={contact_name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setContactName(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Phone Number </span>
                      <FormControl
                        as="input"
                        type="tel"
                        placeholder="Phone Number"
                        value={contact_phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setContactPhone(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Email Address </span>
                      <FormControl
                        as="input"
                        type="email"
                        placeholder="Email Address"
                        value={contact_email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setContactEmail(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Select State </span>
                      <FormControl
                        as="select"
                        value={state}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                          setState(e.target.value)
                        }
                      >
                        <option value="">Select State</option>
                        {states?.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </FormControl>
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Business Address </span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="Business Address"
                        value={contact_address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setContactAddress(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Coverage counties</span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="Mention the areas (comma separated)"
                        value={coverage_countries}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setCoverageCountries(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">Area of expertise </span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="Area of expertise (comma separated)"
                        value={area_of_expertise}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setAreaOfExpertise(e.target.value)
                        }
                      />
                    </label>
                    <label className="w-full space-y-2">
                      <span className="block">List of Owned tools </span>
                      <FormControl
                        as="input"
                        type="text"
                        placeholder="List of Owned tools (comma separated)"
                        value={tools}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setTools(e.target.value)
                        }
                      />
                    </label>
                    <div className="group w-full space-y-2 lg:col-span-2">
                      <span className="block">Preferred Payment Method</span>
                      <div className="grid grid-cols-1 lg:grid-cols-3">
                        <label className="flex items-center gap-2">
                          <input
                            className="accent-foreground size-[1.25rem]"
                            type="radio"
                            name="payment"
                            value="cash_app"
                            checked={payment_method === "cash_app"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <span>CashApp</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="accent-foreground size-[1.25rem]"
                            type="radio"
                            name="payment"
                            value="zelle"
                            checked={payment_method === "zelle"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <span>Zelle</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="accent-foreground peer/other size-[1.25rem]"
                            type="radio"
                            name="payment"
                            value="others"
                            checked={payment_method === "others"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <span>Other</span>
                        </label>
                      </div>
                      <div className="hidden group-has-[input[value=others]:checked]:block">
                        <label className="w-full space-y-2">
                          <FormControl
                            as="input"
                            type="text"
                            placeholder="Other Method"
                            value={others}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setOthers(e.target.value)
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <label className="w-full space-y-2 lg:col-span-2">
                      <span className="block">
                        Provide your preferred payment details.
                      </span>
                      <small className="italic">
                        Please enter your Cash tag or Zelle number/email for
                        smooth payment.
                      </small>
                      {payment_method === "cash_app" && (
                        <FormControl
                          as="input"
                          type="text"
                          placeholder="Cash App Details"
                          value={cash_app}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setCashApp(e.target.value)
                          }
                        />
                      )}
                      {payment_method === "zelle" && (
                        <FormControl
                          as="input"
                          type="text"
                          placeholder="Zelle Details"
                          value={zelle}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setZelle(e.target.value)
                          }
                        />
                      )}
                    </label>
                    <div className="space-y-2 border p-4 lg:col-span-2">
                      <p>
                        <strong className="font-medium">Payment Terms:</strong>{" "}
                        Company agrees to compensate Vendor for services
                        rendered according to the following payment terms:
                      </p>
                      <ul className="ml-4 list-disc">
                        {terms.map((item, index) => (
                          <li key={index}>
                            <strong className="font-medium">
                              {item?.term}:
                            </strong>{" "}
                            {item?.description}
                          </li>
                        ))}
                      </ul>
                      <label className="flex cursor-pointer items-center gap-2">
                        <Checkbox
                          className="foreground rounded-none"
                          name="terms"
                          checked={agreeToTerms}
                          onChange={(e) => setAgreeToTerms(e.target.checked)}
                        />{" "}
                        <span className="leading-none">I agree</span>
                      </label>
                    </div>
                  </div>
                  {error && <p className="mt-3 text-red-500">{error}</p>}
                  {success && <p className="mt-3 text-green-500">{success}</p>}
                  <div className="mt-6 md:mt-8">
                    <Button
                      type="submit"
                      className="foreground"
                      variant="outline"
                      size="lg"
                      disabled={loading}
                    >
                      <span>{loading ? "SUBMITTING..." : "SUBMIT"}</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FollowUpSection />
    </main>
  );
};

export default VendorRegistrationPage;
