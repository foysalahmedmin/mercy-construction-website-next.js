import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    _id: "5febd0aa",
    name: "",
    image:
      "/client_1.jpg",
  },
  {
    _id: "74b6be72",
    name: "",
    image: "https://www.logo.wine/a/logo/Mobil/Mobil-Logo.wine.svg",
  },
  {
    _id: "1be6777e",
    name: "",
    image:
      "https://foodbrandlogo.com/wp-content/uploads/2024/11/Burger-King-Symbol-1024x580.webp",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex max-w-4xl flex-wrap items-center gap-8">
        <div className="">
          <h2 className="text-3xl">Our clients</h2>
        </div>
        <div className="flex items-center justify-center border-s md:flex-1">
          {clients?.map((client) => (
            <div
              key={client._id}
              className="basis-1/1 sm:basis-1/2 sm:px-4 md:basis-1/3 md:px-6"
            >
              <div className="group/card grid items-center gap-6">
                <Link
                  href={"/clients/" + client?._id}
                  className="relative aspect-[2/1] w-full cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client?.image}
                      alt={client?.name || "Client logo"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
