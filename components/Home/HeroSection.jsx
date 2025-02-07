import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="Doctors"
              width={800}
              height={800}
              src="/Doc.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl ">
              Find & Book <span className="text-blue-600">Appointments</span>{" "}
              with your Favourite <span className="text-blue-600">Doctors</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Effortlessly find and book appointments with your favorite doctors
              through our app. Access a network of trusted healthcare
              professionals, view their profiles, and schedule visits at your
              convenience, ensuring your health is always a priority.
            </p>

            <Link
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400 "
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
