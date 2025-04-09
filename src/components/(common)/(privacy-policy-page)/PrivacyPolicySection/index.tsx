import { SectionTitle, Subtitle, Title } from "@/components/ui/SectionTitle";

const sections = [
  {
    title: "Who We Are",
    description: "Our website address is: mercyconstructioninc.com.",
  },
  {
    title: "Comments",
    description:
      "When visitors leave comments on the site, we collect the data shown in the comments form, as well as the visitor’s IP address and browser user agent string to help with spam detection.\n\nAn anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to check if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/.\n\nAfter approval of your comment, your profile picture (if available via Gravatar) will be visible to the public alongside your comment.",
  },
  {
    title: "Media",
    description:
      "If you upload images to the website, avoid uploading images with embedded location data (EXIF GPS).\n\nVisitors can download and extract any location data from images on the website.",
  },
  {
    title: "Cookies",
    description:
      "If you leave a comment, you may opt-in to saving your name, email, and website in cookies. These are for convenience so you don’t have to re-enter details for future comments. These cookies last for one year.\n\nIf you visit our login page, we set a temporary cookie to check if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.\n\nUpon logging in, we set up cookies to save your login info and screen display choices. Login cookies last two days, and screen options cookies last a year. Selecting 'Remember Me' extends login persistence to two weeks.\n\nLogging out removes login cookies.\n\nEditing or publishing an article saves an additional cookie with no personal data, only the post ID. It expires after 1 day.",
  },
  {
    title: "Embedded Content",
    description:
      "This site may include embedded content (e.g., videos, images, articles).\n\nEmbedded content from other websites behaves exactly as if you visited the source website. These sites may collect data, use cookies, embed third-party tracking, and monitor interactions—including if you’re logged into that website.",
  },
  {
    title: "Data Sharing",
    description:
      "If you request a password reset, your IP address will be included in the reset email.",
  },
  {
    title: "Data Retention",
    description:
      "Comments and their metadata are retained indefinitely to recognize and auto-approve follow-up comments.\n\nFor registered users, we store personal information provided in their profiles. Users can see, edit, or delete their info anytime (except usernames). Administrators can also access and edit this information.",
  },
  {
    title: "Your Rights",
    description:
      "If you have an account or have left comments, you can request:\n\n- An exported file of your personal data.\n- Erasure of your personal data (excluding data retained for administrative, legal, or security purposes).",
  },
  {
    title: "Data Processing",
    description:
      "Visitor comments may be processed by an automated spam detection service.",
  },
];

const PrivacyPolicySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionTitle>
          <Subtitle>Privacy</Subtitle>
          <Title>Privacy Policy</Title>
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

export default PrivacyPolicySection;
