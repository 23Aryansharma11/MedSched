import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const CategorySection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-8">
        <div className=" items-center flex flex-col gap-2">
          <h2 className="font-bold text-4xl tracking-wide">
            Search <span className="text-blue-600">Doctors</span>
          </h2>
          <h2 className="text-gray-400 text-xl ">
            Search your Doctor and book appointment in one click
          </h2>
          <div className="flex w-full max-w-sm md:max-w-md lg:max-w-lg items-center space-x-2">
            <Input type="text" placeholder="Search Doctors" />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Search className="h-4 w-4 mr-2"/>
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
