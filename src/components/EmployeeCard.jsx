import { useInView } from "react-intersection-observer";
import { Bounce } from "react-reveal";

function EmployeeCard({ row, col, imgSrc, name, age, description, delay }) {
  const gridRow = {
    1: "row-start-1",
    4: "row-start-4",
  };

  const gridCol = {
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
  };

  const border = {
    1: "rounded-xl",
    4: "rounded-t-xl",
  };

  const borderInverted = {
    4: "rounded-b",
    1: "rounded-t",
  };


  return (
    <Bounce delay={delay}>
      <div
        className={`relative z-20 w-4/5 h-full bg-amber-500 ${gridRow[row]} ${gridCol[col]}  ${border[row]} row-span-3 col-span-1 custom_shadow flex flex-col p-2`}
      >
        <img
          src={imgSrc}
          alt="employee"
          className={`w-10/12 h-3/5 object-cover self-center ${borderInverted[row]}`}
        />
        <span className="w-full h-1 bg-slate-800 self-center"></span>
        <h2 className="text-xl text-slate-800 font-bold mt-2 laptop:text-sm">{name}</h2>
        <h3 className="text-xs text-slate-900 font-semibold my-1">
          {age} Years Old
        </h3>
        <p className="text-xs text-slate-900 font-semibold">{description}</p>
      </div>
    </Bounce>
  );
}

export default EmployeeCard;
