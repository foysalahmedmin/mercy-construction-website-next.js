import { Description, Subtitle, Title } from "@/components/ui/SectionTitle";

const PageHeaderSection = ({
  title = "",
  subtitle = "",
  description = "",
  image = "",
  className = "",
}) => {
  return (
    <section className={className}>
      <div className="container py-16">
        <Subtitle>{subtitle}</Subtitle>
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className="h-[60vh] bg-cover bg-center bg-no-repeat"
      />
    </section>
  );
};

export default PageHeaderSection;
