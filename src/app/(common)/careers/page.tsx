import BenefitsSection from "@/components/partials/Sections/BenefitsSection";
import FollowUpSection from "@/components/partials/Sections/FollowUpSection";
import PageHeaderSection from "@/components/partials/Sections/PageHeaderSection";
import SplitSection2 from "@/components/partials/Sections/SplitSection2";

const CareersPage = () => {
  return (
    <main>
      <PageHeaderSection
        subtitle="The future you want is within reach"
        title="Careers"
        description="That’s the mindset that moves us forward. It builds our strong, supportive community, nurtures our curiosity, and drives us toward inventive ways of delivering results."
        image="/images/(careers-page)/page-header.png"
      />
      <PageHeaderSection
        subtitle="Careers at Mercy Construction"
        title="Life at Mercy Construction"
        description="At Mercy Construction, being an employee means being part of a dedicated family that thrives on collaboration and shared success. Our culture is built on mutual respect and support, where every team member is encouraged to bring their unique talents to the table. We believe in empowering our employees to take ownership of their work, fostering a sense of pride in every project we undertake. Together, we celebrate our diverse backgrounds and experiences, driving innovation and excellence in the construction industry. Here, your contributions matter, and your growth is our priority. Join us, and be part of a team that values integrity, quality, and the pursuit of excellence."
        image="/images/(careers-page)/career-life.png"
      />
      <BenefitsSection />
      <SplitSection2
        className="bg-muted"
        subtitle="Growing"
        title="Intern Program"
        description="At Mercy Construction, our Internship Program is a vital part of nurturing the next generation of industry leaders. With an impressive 85% of our former interns advancing their careers within the company, they are actively contributing to shaping our future across all levels. Our interns gain hands-on experience by collaborating with seasoned professionals on various project phases, allowing them to develop practical skills and industry insights. We offer internships tailored for students aspiring to become Project Managers, Superintendents, and other key roles in areas such as marketing, finance, information technology, and safety. With opportunities for increased responsibility throughout multiple internship sessions, Mercy Construction is dedicated to empowering interns to grow their careers while making meaningful contributions to our projects and culture."
        image1="/images/(careers-page)/internship-1.png"
        image2="/images/(careers-page)/internship-2.png"
      />
      <PageHeaderSection
        subtitle="Career Opportunities"
        title="A career where anything is possible"
        description="At Mercy, there’s no limit to what you can achieve. We offer opportunities in a variety of disciplines that go above and beyond what you expect from a construction company."
        image="/images/(careers-page)/career-opportunities.png"
      />
      <FollowUpSection />
    </main>
  );
};

export default CareersPage;
