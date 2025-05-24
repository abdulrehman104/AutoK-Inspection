import Image from "next/image";

export const Flags = () => {
  return (
    <div className="mx-auto container max-w-6xl relative flex flex-col items-center justify-center overflow-hidden rounded-lg py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
          Where We Provide Service
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-2">
          Serving Customers Across the United States
        </p>
        <p className="text-md sm:text-lg text-gray-500 dark:text-gray-400">
          We proudly offer our services throughout the United States.
        </p>
      </div>

      {/* Rotating USA Flag */}
      <div className="flex justify-center items-center mb-8">
        <Image
          src="/flags/usa.gif"
          alt="USA Flag"
          width={760}
          height={500}
          className="object-cover"
        />
      </div>
    </div>  
  );
};



// import { cn } from "@/lib/utils";
// import { Marquee } from "./ui/marquee";

// interface Country {
//   id: number;
//   name: string;
//   path: string; // Path to the flag image
// }

// const countries: Country[] = [
//   { id: 1, name: "United States", path: "/flags/United_States.webp" },
//   { id: 1, name: "United Kingdom", path: "/flags/United_Kingdom.webp" },
//   { id: 1, name: "Austria", path: "/flags/Austria.webp" },
//   { id: 2, name: "Belgium", path: "/flags/Belgium.webp" },
//   { id: 3, name: "Cyprus", path: "/flags/Cyprus.webp" },
//   { id: 4, name: "Finland", path: "/flags/Finland.webp" },
//   { id: 5, name: "France", path: "/flags/France.webp" },
//   { id: 6, name: "Germany", path: "/flags/Germany.webp" },
//   { id: 7, name: "Ireland", path: "/flags/Ireland.webp" },
//   { id: 8, name: "Italy", path: "/flags/Italy.webp" },
//   { id: 9, name: "Luxembourg", path: "/flags/Luxembourg.webp" },
//   { id: 10, name: "Netherlands", path: "/flags/Netherlands.webp" },
//   { id: 11, name: "Portugal", path: "/flags/Portugal.webp" },
//   { id: 12, name: "Spain", path: "/flags/Spain.webp" },
//   { id: 14, name: "Canada", path: "/flags/Canada.png" },
//   { id: 15, name: "New Zealand", path: "/flags/New_Zealand.png" },
//   { id: 16, name: "Australia ", path: "/flags/Australia.png" },
// ];

// const firstRow = countries.slice(0, countries.length / 2);
// const secondRow = countries.slice(countries.length / 2);

// const FlagCard = ({ img, name }: { img: string; name: string }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-36 sm:w-48 cursor-pointer overflow-hidden rounded-xl border p-2 sm:p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-col items-center gap-3 sm:gap-4">
//         {/* Flag Image */}
//         <div className="relative w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden">
//           <Image src={img} alt={name} fill className="object-cover" />
//         </div>

//         {/* Country Name */}
//         <figcaption className="text-base sm:text-lg font-semibold text-center dark:text-white">
//           {name}
//         </figcaption>
//       </div>
//     </figure>
//   );
// };

// {/* First Row of Flags */}
// {/* <Marquee pauseOnHover className="[--duration:20s]">
//   {firstRow.map((country) => (
//     <FlagCard key={country.id} img={country.path} name={country.name} />
//   ))}
// </Marquee> */}

// {/* Second Row of Flags */}
// {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
//   {secondRow.map((country) => (
//     <FlagCard key={country.id} img={country.path} name={country.name} />
//   ))}
// </Marquee> */}

// {/* Gradient Overlays */}
// {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
// <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div> */}
