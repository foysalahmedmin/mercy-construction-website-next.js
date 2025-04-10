import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Our location",
    items: [
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
    ],
  },
  {
    title: "Services",
    items: [
      {
        type: "link",
        text: "Home Renovation",
        href: "/services/home-renovation",
      },
      {
        type: "link",
        text: "Interior Painting Services",
        href: "/services/interior-painting-services",
      },
      {
        type: "link",
        text: "Kitchen Remodeling",
        href: "/services/kitchen-remodeling",
      },
      {
        type: "link",
        text: "Bathroom Remodeling",
        href: "/services/bathroom-remodeling",
      },
      {
        type: "link",
        text: "Roofing",
        href: "/services/roofing",
      },
      {
        type: "link",
        text: "Apartment Renovation",
        href: "/services/apartment-renovation",
      },
      {
        type: "link",
        text: "Hardwood floor",
        href: "/services/hardwood-floor",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        type: "link",
        text: "History",
        href: "/history",
      },
      {
        type: "link",
        text: "Vision",
        href: "/vision",
      },
      {
        type: "link",
        text: "Safety",
        href: "/safety",
      },
      {
        type: "link",
        text: "Careers",
        href: "/careers",
      },
      {
        type: "link",
        text: "Leadership",
        href: "/leadership",
      },
      {
        type: "link",
        text: "Projects",
        href: "/projects",
      },
    ],
  },
];
const links = [
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "History",
    href: "/history",
  },
  {
    text: "Vision",
    href: "/vision",
  },
  {
    text: "Leadership",
    href: "/leadership",
  },
  {
    text: "Careers",
    href: "/careers",
  },
];
const socials = [
  {
    text: "Facebook",
    href: "https://www.facebook.com/mercyconstructioninc",
    target: "_blank",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/mercyconstructioninc",
    target: "_blank",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/mercyconstructioninc",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-24">
      <div className="container space-y-16 md:space-y-24">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="space-y-4 lg:col-span-3 xl:col-span-2 xl:space-y-12">
            <Link
              href=""
              className="font-display block w-full text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
              aria-label="Home"
            >
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={150}
                height={50}
                className="h-10 w-full object-contain object-left md:h-14"
              />
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link target="_blank" href="tel:+16463925450">
                <Button className="foreground" size="lg">
                  <span>+1 (646) 392-5450</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="foreground" size="lg">
                  <span>CONTACT US</span>
                </Button>
              </Link>
            </div>
          </div>
          {data?.map((obj, index) => (
            <div key={index}>
              <strong className="mb-4 block font-medium">{obj?.title}</strong>
              {obj?.items?.length > 0 && (
                <ul className="space-y-2">
                  {obj?.items.map((item, index) => (
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
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          {links.map((link, index) => (
            <Link className="w-full" key={index} href={link?.href}>
              <Button
                className="border-b-foreground hover:text-primary hover:border-b-primary w-full items-start justify-start border-b bg-transparent px-0 uppercase hover:bg-transparent"
                size="lg"
              >
                <span>{link?.text}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            ©2025
            <Link
              className="primary underline-effect hover:text-primary"
              href="https://mercyconstructionnyc.com"
            >
              Mercy Construction Inc.
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            {socials?.map((social, index) => (
              <Link
                className="primary underline-effect hover:text-primary"
                key={index}
                href={social?.href}
                target={social?.target}
              >
                {social?.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-center">
            <Link
              className="primary underline-effect hover:text-primary"
              href="/terms-and-conditions"
            >
              Terms and Conditions
            </Link>
            <Link
              className="primary underline-effect hover:text-primary"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
