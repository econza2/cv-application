import { useState } from "react";

let generalInformationArray = [];
let schoolInformationArray = [];
let practicalExperienceArray = [];

function GeneralInformation() {
  const [generalInformation, setGeneralInformation] = useState({
    id: crypto.randomUUID(),
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [disableButton, setDisableButton] = useState(false);

  let handleName = function (e) {
    setGeneralInformation({ ...generalInformation, name: e.target.value });
  };

  let handlePhoneNumber = function (e) {
    setGeneralInformation({
      ...generalInformation,
      phoneNumber: e.target.value,
    });
  };

  let handleEmail = function (e) {
    setGeneralInformation({ ...generalInformation, email: e.target.value });
  };

  let addGeneralInformationDetails = function () {
    setGeneralInformation({ ...generalInformation, id: crypto.randomUUID() });
    generalInformationArray.push(generalInformation);
    setDisableButton(true);
  };

  console.log(generalInformationArray);
  return (
    <>
      <h2>General Information</h2>
      <label>
        Name
        <input
          type="text"
          value={generalInformation.name}
          onChange={handleName}
        />
      </label>
      <label>
        Phone Number
        <input
          type="number"
          value={generalInformation.phoneNumber}
          onChange={handlePhoneNumber}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={generalInformation.email}
          onChange={handleEmail}
        />
      </label>
      <button onClick={addGeneralInformationDetails} disabled={disableButton}>
        Add Info
      </button>
    </>
  );
}

function SchoolInformation() {
  return (
    <>
      <h2>Educational Experience</h2>
      <label>
        School Name
        <input type="text" />
      </label>
      <label>
        Title Of Study
        <input type="text" />
      </label>
      <label>
        Duration of Study In Years
        <input type="number" />
      </label>
      <label>
        Date Finished
        <input type="date" />
      </label>
    </>
  );
}

function PracticalExperience() {
  return (
    <>
      <h2>Practical Experience</h2>
      <label>
        Company Name
        <input type="text" />
      </label>
      <label>
        Position Title
        <input type="text" />
      </label>
      <label>
        Main Responsibilities
        <textarea></textarea>
      </label>
      <label>
        Worked Since
        <input type="date" />
      </label>
      <label>
        Worked Until
        <input type="date" />
      </label>
    </>
  );
}

function CurriculumVitae({ children }) {
  return <>{children}</>;
}

function MainCurriculumVitaeDisplay({ children }) {
  return <>{children}</>;
}

function GeneralInformationRender() {
  return (
    <>
      <h1>General Information</h1>
      {generalInformationArray.length > 0
        ? generalInformationArray.map((info) => (
            <p key={info.id}>
              {info.name} {info.phoneNumber} {info.email}
            </p>
          ))
        : "Awaiting Upload"}
    </>
  );
}

export default function CV() {
  return (
    <>
      <CurriculumVitae>
        <GeneralInformation />
        <SchoolInformation />
        <PracticalExperience />
      </CurriculumVitae>
      <MainCurriculumVitaeDisplay>
        <GeneralInformationRender />
      </MainCurriculumVitaeDisplay>
    </>
  );
}
