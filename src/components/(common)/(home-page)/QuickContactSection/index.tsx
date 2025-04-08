import { Phone } from "lucide-react";

const QuickContactSection = () => {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <h3 className="text-xl">
          Looking for professional <br /> construction services?
        </h3>
        <div className="flex gap-4">
          <Phone className="text-primary my-1 size-6" />
          <div>
            <strong className="block text-xl font-normal">
              (646) 392-5450
            </strong>
            <p>Call us now for more details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;
