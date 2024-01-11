import React from "react";
import "./experience.css";
import Exp from "../components/exp_comp";
import axios from "axios";
import IconBuild from "../components/build_icon";
import { useState, useEffect } from "react";
import AnimateOnScroll from "../components/animateOnScroll.tsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Experiences() {
  // const [exper, setExper] = React.useState(null);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // Set a delay to simulate loading time, you can adjust this based on your needs
  //   const delay = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 300);

  //   // Clear the timeout on component unmount
  //   return () => clearTimeout(delay);
  // }, []);

  async function fetchData() {
    const res = await axios.get(
      "https://api.airtable.com/v0/apptiMTtiQUXJWj3u/experiences",
      {
        headers: {
          authorization: `Bearer patZ9dWK54UumkS3F.3696ce4c9b494d0eb24101532b5c847c586affba641931ed9e6ba448e9f784a9`,
        },
      }
    );
    console.log("logging res data");
    console.log(res.data);
    console.log("logging res data records");
    console.log(res.data.records);
    // setExper(res.data.records);
    console.log("logging exper");
    // console.log(exper);
  }

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  // if (!exper) {
  //   return <div>Loading...</div>;
  // }

  // var size = 0;
  // for (var elem in exper) {
  //   size += 1;
  // }

  //console.log("size", size);

  // const mid = exper.length / 2;
  // const first_half = exper.slice(0, mid);
  // const sec_half = exper.slice(mid, exper.length);
  // console.log("first half", first_half);
  // console.log("second hald", sec_half);

  const exp_1 = {
    date: "fall 2023",
    company: "doordash",
    position:
      "i worked with a team to build an ML testing platform, enabling ML engineers to test their models in a production like environment before deployment",
  };
  const exp_2 = {
    date: "spring 2023",
    company: "recidiviz",
    position:
      "i worked with a team to build a web tool calculator to envision the calculated amount of incarcerated time for a prisoner, persuading policymakers in Missouri not to pass anti-reform laws",
  };
  const exp_3 = {
    date: "fall 2022",
    company: "sfcm",
    position:
      "i worked with a team to build an internal full-stack web application for SFCM to help them plan and organize their concerts and visualize concert statistics",
  };
  const exp_4 = {
    date: "spring 2023 - present",
    company: "berkeley eecs",
    position:
      "i teach at berkeley. i have tutored CS61A, the introductory course at Berkeley and also teach a weekly section as part of Computer Science Mentors, a teaching club on campus!",
  };

  const expVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, scale: 1 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="experiences-section">
      <div className="top-part">
        <div id="header">
          <h1 id="myexp">my experiences </h1>
        </div>
        <div id="build-icon">
          <IconBuild />
        </div>
      </div>
      <div className="experiences-boxes">
        <br></br>
        {/* <div className="experiences-container-first">
          {first_half.map((record) => (
            <div className="exp_left">
              <Exp key={record.id} props={record.fields} />
            </div>
          ))}
        </div> */}
        <div className="experiences-container-first">
          <motion.div
            variants={expVariant}
            initial="hidden"
            transition={{ duration: 1 }}
            animate="visible"
          >
            <Exp props={exp_1} />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <img
              src={require("../assets/sfcm.png")}
              className="exp_images_left"
              /*className={`exp_images_left ${isVisible ? "visible" : ""}`}*/
            />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate={control}
            ref={ref}
            transition={{ duration: 1 }}
          >
            <Exp props={exp_2} />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate={control}
            ref={ref}
            transition={{ duration: 1 }}
          >
            <img
              src={require("../assets/b_eecs.jpeg")}
              className="exp_images_left"
              /*className={`exp_images_left ${isVisible ? "visible" : ""}`}*/
            />
          </motion.div>
        </div>
        {/* <div className="experiences-container-second">
          {sec_half.map((record) => (
            <div className="an_exp">
              <Exp key={record.id} props={record.fields} />
            </div>
          ))}
        </div> */}
        <div className="experiences-container-second">
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <img
              src={require("../assets/doordash.webp")}
              className="exp_images_right"
              //className={`exp_images_right ${isVisible ? "visible" : ""}`}
            />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <Exp props={exp_3} />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 1 }}
            ref={ref}
          >
            <img
              src={require("../assets/recidiviz.png")}
              className="exp_images_right"
              //className={`exp_images_right ${isVisible ? "visible" : ""}`}
            />
          </motion.div>
          <motion.div
            variants={expVariant}
            initial="hidden"
            animate={control}
            ref={ref}
            transition={{ duration: 1 }}
          >
            <Exp props={exp_4} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// export default function Experience(){
//     return(
//     <div className="experiences-section">

//     <h1 id="myexp">my experiences</h1>
//     <Exp position="software developer at codebase" date="september 2022-present"  />
//     <Exp position="software engineer intern at wayu health" date="august-october 2021"  />
//     <Exp position="president of interact club at delhi public school, vasant kunj" date="march 2021-april 2021"  />
//     <Exp position="founder, lead editor of environmental magazine at delhi public school, vasant kunj" date="march 2020-april 2022"  />
//     </div>
//     )
// }
