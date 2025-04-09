import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const sections = [
  {
    title: "What information do we collect?",
    description:
      "When you interact with us, we may collect your name, address, email address(es), telephone number(s), and, where appropriate, date of birth.",
  },
  {
    title: "How do we collect information?",
    description:
      "We may collect information about you whenever you interact with us. For example, when you contact regarding our activities, register as a supporter, send or receive information or sign a petition, you specifically and knowingly provide us with your personal information. We may also receive information about you from third parties – but only if you have given them permission to share your information.",
  },
  {
    title: "Confidentiality",
    description:
      "We will not be responsible for the privacy of data collected by websites not owned or managed by Charity, including those linked through our website.",
  },
  {
    title: "Making a complaint",
    description:
      "If you are not satisfied with the response, please contact us at konstruktion@email.com with the details explaining your concerns. We will review your complaint and investigate if the right procedures have been followed and respond back to you as appropriate. We aim to complete this investigation within 15 working days of receiving your complaint, however, in some cases it may take longer. If you are still unsatisfied with the response, you may contact us.",
  },
];

const TermsAndConditionsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Terms</Subtitle>
          <Title>Terms and Conditions</Title>
        </SectionTitle>
        <div className="space-y-8 md:space-y-12">
          {sections?.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl">{section?.title}</h3>
              <p>{section?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsSection;
