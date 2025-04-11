import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormControl } from "@/components/ui/FormControl";
import { SectionTitle, Title } from "@/components/ui/SectionTitle";
import Link from "next/link";

const construction_types = [
  { value: "Buildings", label: "Buildings" },
  { value: "Civil", label: "Civil" },
  { value: "Industrial", label: "Industrial" },
];

const ProjectApplySection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <SectionTitle>
          <Title>Build a project with us </Title>
        </SectionTitle>
        <form className="block space-y-16 md:max-w-1/2">
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
                  />
                </label>
                <label className="w-full space-y-2">
                  <span className="block">Last Name </span>
                  <FormControl as="input" type="text" placeholder="Last Name" />
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
              <div className="mt-6 md:mt-8">
                <Button className="foreground" variant="outline" size="lg">
                  <span>SEND</span>
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
