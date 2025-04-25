import { useState } from "react";

// const Filter = ({ choices, filterName }) => {
//   const [dropdown, setDropdown] = useState(false);
//   const [filter, setFilter] = useState();
//   const [nameFilter, setNameFilter] = useState(filterName);
//   const toggleDropdown = () => {
//     setDropdown(!dropdown);
//   };

//   return (
//     <div
//       className="relative h-auto w-auto flex flex-col justify-start items-center whitespace-nowrap rounded-md cursor-pointer"
//       onClick={toggleDropdown}
//     >
//       <div
//         className={`w-56 h-12 px-5 flex items-center bg-primary text-white ${
//           dropdown ? "rounded-t-md border-b-[1px]" : "rounded-md"
//         }`}
//       >
//         {nameFilter}
//       </div>
//       {dropdown && (
//         <ul className="absolute top-12 w-56 h-auto bg-primary rounded-b-md z-10">
//           {choices.map((choice, index) => (
//             <li
//               key={index}
//               onClick={() => {
//                 setFilter(choice), setNameFilter(choice);
//               }}
//               className="h-12 w-full flex items-center bg-primary text-white px-5 rounded-md border-b-[1px]"
//             >
//               {choice}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Filter;
const Filter = ({ choices, filterName, onSelect }) => {
  const [dropdown, setDropdown] = useState(false);
  const [nameFilter, setNameFilter] = useState(filterName);

  const toggleDropdown = () => setDropdown(!dropdown);

  const handleSelect = (choice) => {
    setNameFilter(choice);
    setDropdown(false);
    onSelect(choice); // Notify parent
  };

  return (
    <div
      className="relative h-auto w-auto flex flex-col justify-start items-center whitespace-nowrap rounded-md cursor-pointer"
      onClick={toggleDropdown}
    >
      <div
        className={`w-56 h-12 px-5 flex items-center bg-primary text-white ${
          dropdown ? "rounded-t-md border-b-[1px]" : "rounded-md"
        }`}
      >
        {nameFilter}
      </div>
      {dropdown && (
        <ul className="absolute top-12 w-56 h-auto bg-primary rounded-b-md z-10">
          {choices.map((choice, index) => (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // prevent toggling
                handleSelect(choice);
              }}
              className="h-12 w-full flex items-center bg-primary text-white px-5 rounded-md border-b-[1px]"
            >
              {choice}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;