import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="relative mt-20 flex flex-col gap-5 justfy-center">
      <h2 className="relative inline-block uppercase text-center whitespace-nowrap text-[1.7rem] sm:text-[2rem] font-bold text-secondary mb-20 after:block after:absolute after:top-[50px] after:left-1/2 after:w-20 after:sm:w-40 after:h-[5px] after:bg-secondary after:rounded-[20px] after:-translate-x-1/2">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
