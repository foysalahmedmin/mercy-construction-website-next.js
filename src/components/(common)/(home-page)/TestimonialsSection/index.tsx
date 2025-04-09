import { testimonials } from "@/assets/data/testimonials";
import Link from "next/link";

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="mb-8 space-y-2 text-center md:mb-12">
          <h2 className="text-4xl">Trusted by Homeowners</h2>
          <Link
            href="/testimonials"
            className="underline-effect hover:text-primary primary"
          >
            Read customers reviews
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-muted flex flex-col gap-6 self-stretch rounded-md p-6 md:p-10"
            >
              <div>
                <p className="text-sm font-light">{testimonial?.quote}</p>
              </div>
              <div className="mt-auto">
                <strong className="block font-medium">
                  {testimonial?.author}
                </strong>
                <span className="text-sm">{testimonial?.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
