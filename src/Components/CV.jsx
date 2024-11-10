import { useState } from "react";
import { Fragment } from "react";

function MainCurriculumVitaeDisplay({ children }) {
  //let generalInformationArray = [];
  const [submitGeneralInformation, setSubmitGeneralInformation] =
    useState(false);

  const [generalInformation, setGeneralInformation] = useState({
    id: crypto.randomUUID(),
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [informationEducation, setInformationEducation] = useState([]);

  const [informationExperience, setInformationExperience] = useState([]);

  function GeneralInformation() {
    const [generalInformationTwo, setGeneralInformationTwo] = useState({
      id: crypto.randomUUID(),
      name: "",
      phoneNumber: "",
      email: "",
    });

    let handleName = function (e) {
      setGeneralInformationTwo({
        ...generalInformationTwo,
        name: e.target.value,
      });
    };

    let handlePhoneNumber = function (e) {
      setGeneralInformationTwo({
        ...generalInformationTwo,
        phoneNumber: e.target.value,
      });
    };

    let handleEmail = function (e) {
      setGeneralInformationTwo({
        ...generalInformationTwo,
        email: e.target.value,
      });
    };

    let addGeneralInformationDetails = function () {
      setGeneralInformationTwo({
        ...generalInformationTwo,
        id: crypto.randomUUID(),
      });
      //generalInformationArray.push(generalInformation);
      setSubmitGeneralInformation(true);
      setGeneralInformation(generalInformationTwo);
      //setInfoSubmitted(true);
    };

    //console.log(generalInformationArray);
    return (
      <>
        <h2>General Information Two</h2>
        <label>
          Name
          <input
            type="text"
            value={generalInformationTwo.name}
            onChange={handleName}
          />
        </label>
        <label>
          Phone Number
          <input
            type="number"
            value={generalInformationTwo.phoneNumber}
            onChange={handlePhoneNumber}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={generalInformationTwo.email}
            onChange={handleEmail}
          />
        </label>
        <button
          onClick={addGeneralInformationDetails}
          disabled={submitGeneralInformation}
        >
          Add Info
        </button>
      </>
    );
  }

  //General Information function ends here

  function GeneralInformationRender() {
    let reenderInformation = function () {
      setSubmitGeneralInformation(false);
      //setInfoSubmitted(false);
    };

    return (
      <>
        <h1>General Information</h1>
        {submitGeneralInformation ? (
          <p key={generalInformation.id}>
            Name: {generalInformation.name} Phone Number:{" "}
            {generalInformation.phoneNumber} Email: {generalInformation.email}
          </p>
        ) : (
          "Awaiting Upload"
        )}

        <button onClick={reenderInformation}>Reenter Information</button>
      </>
    );
  }

  function SchoolInformationEdit() {
    const [schoolInfoArray, setSchoolInfoArray] = useState([]);
    const [educationInfoArray, setEducationInfoArray] = useState([]);

    let tempInfoArray = [];
    let tempEducationArray = [];

    let submitNumber = function () {
      let numberOfSchools = parseInt(
        prompt("Enter Number Of Schools Attended")
      );

      for (let i = 0; i < numberOfSchools; i++) {
        tempInfoArray.push({
          id: crypto.randomUUID(),
          sn: "School Name",
          tos: "Title Of Study",
          dos: "Duration Of Study In Years",
          df: "Date Finished",
        });

        tempEducationArray.push({
          id: "",
          sn: "",
          tos: "",
          dos: "",
          df: "",
        });
      }

      setSchoolInfoArray(tempInfoArray);
      setEducationInfoArray(tempEducationArray);
    };

    let handleSchoolNameChange = function (e, index) {
      setEducationInfoArray([
        ...educationInfoArray,
        (educationInfoArray[index]["sn"] = e.target.value),
      ]);
    };

    let handleTitleOfStudyChange = function (e, index) {
      setEducationInfoArray([
        ...educationInfoArray,
        (educationInfoArray[index]["tos"] = e.target.value),
      ]);
    };

    let handleDurationOfStudyChange = function (e, index) {
      setEducationInfoArray([
        ...educationInfoArray,
        (educationInfoArray[index]["dos"] = e.target.value),
      ]);
    };

    let handleDateFinishedChange = function (e, index) {
      setEducationInfoArray([
        ...educationInfoArray,
        (educationInfoArray[index]["df"] = e.target.value),
      ]);
    };

    let submitEducationInfo = function () {
      let filteredArray = educationInfoArray.filter((info) => {
        return typeof info === "object";
      });

      setInformationEducation(filteredArray);

      //console.log(filteredArray);
    };

    return (
      <>
        <h2>{"Educational Experience version Two"}</h2>
        <button onClick={() => submitNumber()}>
          How Many Schools Did You Attend?
        </button>
        {schoolInfoArray.length > 0
          ? schoolInfoArray.map((info, index) => {
              return (
                <div className="schools-attended" key={info.id}>
                  <label>
                    {info.sn}
                    <input
                      type="text"
                      value={educationInfoArray[index]["sn"]}
                      onChange={(event) => handleSchoolNameChange(event, index)}
                    />
                  </label>
                  <label>
                    {info.tos}
                    <input
                      type="text"
                      value={educationInfoArray[index]["tos"]}
                      onChange={(event) =>
                        handleTitleOfStudyChange(event, index)
                      }
                    />
                  </label>
                  <label>
                    {info.dos}
                    <input
                      type="number"
                      value={educationInfoArray[index]["dos"]}
                      onChange={(event) =>
                        handleDurationOfStudyChange(event, index)
                      }
                    />
                  </label>
                  <label>
                    {info.df}
                    <input
                      type="date"
                      value={educationInfoArray[index]["df"]}
                      onChange={(event) =>
                        handleDateFinishedChange(event, index)
                      }
                    />
                  </label>
                </div>
              );
            })
          : "Nothing to Display Yet"}
        <button onClick={() => submitEducationInfo()}>
          Submit Education Information
        </button>
      </>
    );
  }

  function SchoolInformationRender() {
    return (
      <>
        <h1>School Information</h1>
        {informationEducation.length > 0
          ? informationEducation.map((info, index) => (
              <div key={index}>
                School Name: {info.sn} Title Of Study: {info.tos} Duration Of
                Study: {info.dos} Date Finished: {info.df}
              </div>
            ))
          : "No School Information To Display Yet"}
      </>
    );
  }

  function PracticalExperienceEdit() {
    const [companyInfoArray, setCompanyInfoArray] = useState([]);
    const [experienceInfoArray, setExperienceInfoArray] = useState([]);

    let tempArray = [];
    let tempExperienceArray = [];

    let submitCompanies = function () {
      let numberOfCompanies = parseInt(
        prompt("Enter Number Of Companies Worked For")
      );
      for (let i = 0; i < numberOfCompanies; i++) {
        tempArray.push({
          id: crypto.randomUUID(),
          cn: "Company Name",
          pt: "Position Title",
          mr: "Main Responsibilities",
          ws: "Worked Since",
          wu: "Worked Until",
        });

        tempExperienceArray.push({
          id: "",
          cn: "",
          pt: "",
          mr: "",
          ws: "",
          wu: "",
        });
      }

      setCompanyInfoArray(tempArray);
      setExperienceInfoArray(tempExperienceArray);
    };

    let handleCompanyNameChange = function (e, index) {
      setExperienceInfoArray([
        ...experienceInfoArray,
        (experienceInfoArray[index]["cn"] = e.target.value),
      ]);
    };

    let handlePositionTitleChange = function (e, index) {
      setExperienceInfoArray([
        ...experienceInfoArray,
        (experienceInfoArray[index]["pt"] = e.target.value),
      ]);
    };

    let handleMainResponsibilitiesChange = function (e, index) {
      setExperienceInfoArray([
        ...experienceInfoArray,
        (experienceInfoArray[index]["mr"] = e.target.value),
      ]);
    };

    let handleWorkedSinceChange = function (e, index) {
      setExperienceInfoArray([
        ...experienceInfoArray,
        (experienceInfoArray[index]["ws"] = e.target.value),
      ]);
    };

    let handleCWordedUntilChange = function (e, index) {
      setExperienceInfoArray([
        ...experienceInfoArray,
        (experienceInfoArray[index]["wu"] = e.target.value),
      ]);
    };

    let submitExperienceInformation = function () {
      let filteredArray = experienceInfoArray.filter((info) => {
        return typeof info === "object";
      });

      setInformationExperience(filteredArray);

      //console.log(filteredArray);
    };

    return (
      <>
        <h2>{"Practical Experience Version Two"}</h2>
        <button onClick={() => submitCompanies()}>
          How Many Companies Have You Worked For?
        </button>
        {companyInfoArray.length > 0
          ? companyInfoArray.map((info, index) => {
              return (
                <div key={info.id}>
                  <label>
                    {info.cn}
                    <input
                      type="text"
                      value={experienceInfoArray[index]["cn"]}
                      onChange={(event) =>
                        handleCompanyNameChange(event, index)
                      }
                    />
                  </label>
                  <label>
                    {info.pt}
                    <input
                      type="text"
                      value={experienceInfoArray[index]["pt"]}
                      onChange={(event) =>
                        handlePositionTitleChange(event, index)
                      }
                    />
                  </label>
                  <label>
                    {info.mr}
                    <textarea
                      value={experienceInfoArray[index]["mr"]}
                      onChange={(event) =>
                        handleMainResponsibilitiesChange(event, index)
                      }
                    ></textarea>
                  </label>
                  <label>
                    {info.ws}
                    <input
                      type="date"
                      value={experienceInfoArray[index]["ws"]}
                      onChange={(event) =>
                        handleWorkedSinceChange(event, index)
                      }
                    />
                  </label>
                  <label>
                    {info.wu}
                    <input
                      type="date"
                      value={experienceInfoArray[index]["wu"]}
                      onChange={(event) =>
                        handleCWordedUntilChange(event, index)
                      }
                    />
                  </label>
                </div>
              );
            })
          : "Nothing To Display Yet"}
        <button onClick={submitExperienceInformation}>
          Submit Experience Information
        </button>
      </>
    );
  }

  function PracticalExperienceRender() {
    return (
      <>
        <h1>Experience Information</h1>
        {informationExperience.length > 0
          ? informationExperience.map((info, index) => {
              return (
                <div key={index}>
                  Company Name: {info.cn} Main Responsibilities: {info.mr}{" "}
                  Position Title: {info.pt} Worked Since: {info.ws} Worked
                  Until: {info.wu}
                </div>
              );
            })
          : "No Experience Information To Display Yet"}
      </>
    );
  }

  return (
    <>
      {children}
      <GeneralInformation />
      <SchoolInformationEdit />
      <PracticalExperienceEdit />
      <GeneralInformationRender />
      <SchoolInformationRender />
      <PracticalExperienceRender />
    </>
  );
}

export default function CV() {
  return (
    <>
      <MainCurriculumVitaeDisplay />
    </>
  );
}
