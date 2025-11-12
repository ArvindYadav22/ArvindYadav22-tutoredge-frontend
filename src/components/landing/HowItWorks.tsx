import React from "react";
import { Users, CheckSquare, FileText, BarChart } from "lucide-react";

const stepsData = [
  {
    id: 1,
    icon: Users,
    title: "1 to 3 Tutors give a demo session to your child",
    color: "bg-yellow-100",
  },
  {
    id: 2,
    icon: CheckSquare,
    title: "Parents select the best tutor based on demo",
    color: "bg-green-200",
  },
  {
    id: 3,
    icon: FileText,
    title: "Tutor conducts monthly test series on our platform",
    color: "bg-blue-200",
  },
  {
    id: 4,
    icon: BarChart,
    title: "Student’s scorecard displayed on dashboard",
    color: "bg-green-300",
  },
];

const HowItWorks = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-12 text-3xl font-bold text-gray-800">
        One <span className="text-primary">Step-by-Step Learning Process</span>
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {stepsData.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`relative flex w-full flex-col items-center justify-center rounded-lg ${step.color} p-6 shadow-md transition hover:shadow-lg md:w-1/4`}
            >
              <Icon className="mb-3 size-10 text-gray-800" />
              <p className="text-center text-gray-800 font-medium leading-snug">
                {step.title}
              </p>

              {index < stepsData.length - 1 && (
                <div className="absolute right-[-30px] top-1/2 hidden h-1 w-10 -translate-y-1/2 transform bg-gray-400 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
