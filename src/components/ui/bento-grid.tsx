import { cn } from "@/lib/utils";
import type React from "react"; // Import React

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  icon,
  title,
  description,
}: {
  className?: string;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento p-6 bg-gradient-to-b from-neutral-800/80 to-neutral-900 hover:from-black hover:to-black justify-between flex flex-col space-y-4 transition-all duration-200 ease-in-out",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-custom_red mb-4">{icon}</div>
        <div className="text-xl md:text-2xl font-bold text-white mb-2">
          {title}
        </div>
        <div className="font-normal text-gray-400 text-sm">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
