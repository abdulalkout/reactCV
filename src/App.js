import "./App.css";
import myInfo from "./modules/info";
import NameDisplay from "./components/NameDisplay";
import Summary from "./components/Summary";
import TechSkills from "./components/TechSkills";
import JobExp from "./components/JobExp";
import Education from "./components/Education";
import Section from "./components/Section";
import { useState } from "react";

function App() {
  return (
    <div>
      <NameDisplay name={myInfo.name} />
      <Summary summary={myInfo.summary} />
      <Section headline={myInfo.headLins[0]} />
      <TechSkills lang={myInfo.languages} frame={myInfo.framework} />
      <Section headline={myInfo.headLins[1]} />
      <JobExp software={myInfo.softwareExp} jobExp={myInfo.jobExp} />
      <Section headline={myInfo.headLins[2]} />
      <Education education={myInfo.Education} />
    </div>
  );
}

export default App;
