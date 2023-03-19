import EmployeeCard from "./EmployeeCard";
import profile1 from "../assets/Employees/profile1.jpg";
import profile2 from "../assets/Employees/profile2.jpg";
import profile3 from "../assets/Employees/profile3.jpg";
import profile4 from "../assets/Employees/profile4.jpg";
import profile5 from "../assets/Employees/profile5.jpg";
import Fade from "react-reveal/Fade";

function AboutUsSection() {
  return (
    <section id="OurTeam" className="small_section bg-slate-800 grid grid-rows-6 grid-cols-5 place-items-center relative">
      <Fade delay={1300}>
        <span className="row-start-1 row-span-3 col-start-1 col-span-5 absolute w-full h-1 bg-amber-500 z-10"></span>
        <span className="row-start-4 row-span-3 col-start-1 col-span-5 absolute w-full h-1 bg-amber-500 z-10"></span>
        <span className="row-start-4 row-span-3 col-start-3 col-span-1 text-amber-500 font-bolder text-3xl z-20 mb-10">
          |Our Team|
        </span>
      </Fade>
      <EmployeeCard
        row="1"
        col="1"
        imgSrc={profile1}
        name="Jhon"
        age="25"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
        delay={0}
      />
      <EmployeeCard
        row="4"
        col="2"
        imgSrc={profile2}
        name="Elisa"
        age="23"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
        delay={300}
      />
      <EmployeeCard
        row="1"
        col="3"
        imgSrc={profile3}
        name="Catherine"
        age="26"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
        delay={600}
      />
      <EmployeeCard
        row="4"
        col="4"
        imgSrc={profile4}
        name="Jason"
        age="23"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
        delay={900}
      />
      <EmployeeCard
        row="1"
        col="5"
        imgSrc={profile5}
        name="Mary"
        age="23"
        description={"Lorem ipsum dolor, sit amet consectetur adipisicing"}
        delay={1200}
      />
    </section>
  );
}

export default AboutUsSection;
