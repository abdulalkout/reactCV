import "./App.css";
import myInfo from "./modules/info";
import NameDisplay from "./components/NameDisplay";
import Summary from "./components/Summary";
import TechSkills from "./components/TechSkills";
import JobExp from "./components/JobExp";
import Education from "./components/Education";
import Section from "./components/Section";
import { useState } from "react";
import NextButton from "./components/NextButton";

function App() {
  const [counter, setCounter] = useState(0);

  const changeCounter = () => {
    if (counter === 2) {
      setCounter(0);
    } else if (counter <= 2) {
      setCounter(counter + 1);
    }
  };

  if (counter === 0) {
    return (
      <div>
        <NameDisplay name={myInfo.name} />
        <Summary summary={myInfo.summary} />
        <Section headline={myInfo.headLins[0]} />
        <TechSkills lang={myInfo.languages} frame={myInfo.framework} />
        <NextButton toggleCounter={changeCounter} />
      </div>
    );
  } else if (counter === 1) {
    return (
      <div>
        <NameDisplay name={myInfo.name} />
        <Section headline={myInfo.headLins[1]} />
        <JobExp software={myInfo.softwareExp} jobExp={myInfo.jobExp} />
        <NextButton toggleCounter={changeCounter} />
      </div>
    );
  } else if (counter === 2) {
    return (
      <div>
        <NameDisplay name={myInfo.name} />;
        <Section headline={myInfo.headLins[2]} />
        <Education education={myInfo.Education} />
        <NextButton toggleCounter={changeCounter} />
      </div>
    );
  }
}

export default App;
