import { Button } from "@/components/ui/Button";
import { FormControl } from "@/components/ui/FormControl";
import Link from "next/link";
const services = [
  { value: "", label: "Select" },
  { value: "Construction", label: "Construction" },
  { value: "Pre-Construction Services", label: "Pre-Construction Services" },
  { value: "Design - Build", label: "Design - Build" },
  { value: "Lump-Sum Contracting", label: "Lump-Sum Contracting" },
];
const regions = [
  { value: "", label: "Select" },
  { value: "Alaska", label: "Alaska" },
  { value: "Midwest", label: "Midwest" },
  { value: "Northwest", label: "Northwest" },
  { value: "North Central", label: "North Central" },
  { value: "Northeast", label: "Northeast" },
  { value: "Pacific Islands Southwest", label: "Pacific Islands Southwest" },
  { value: "South Central", label: "South Central" },
  { value: "Southeast", label: "Southeast" },
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
              <form action="">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <label className="w-full space-y-2">
                    <span className="block">Select Inquiry</span>
                    <FormControl as="select">
                      {services?.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </FormControl>
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Select Region </span>
                    <FormControl as="select">
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
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Last Name </span>
                    <FormControl
                      as="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Phone Number </span>
                    <FormControl
                      as="input"
                      type="tel"
                      placeholder="Phone Number"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                  </label>
                  <label className="w-full space-y-2">
                    <span className="block">Email Address </span>
                    <FormControl
                      as="input"
                      type="email"
                      placeholder="Email Address"
                    />
                  </label>
                  <label className="w-full space-y-2 lg:col-span-2">
                    <span className="block">Description </span>
                    <FormControl
                      as="textarea"
                      className="primary h-auto py-2"
                      placeholder="Description"
                      rows={4}
                    />
                  </label>
                </div>
                <div className="mt-6 md:mt-8">
                  <Button className="foreground" variant="outline" size="lg">
                    <span>SEND</span>
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
