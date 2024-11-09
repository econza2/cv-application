import { useState } from "react";
import { Fragment } from "react";

//let generalInformationArray = [];
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
    //generalInformationArray.push(generalInformation);
    setDisableButton(true);
  };

  //console.log(generalInformationArray);
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

function SchoolInformationEdit() {
  const [schoolInfoArray, setSchoolInfoArray] = useState([]);

  let tempArray = [];

  let submitNumber = function () {
    let numberOfSchools = parseInt(prompt("Enter Number Of Schools Attended"));
    for (let i = 0; i < numberOfSchools; i++) {
      tempArray.push({
        id: crypto.randomUUID(),
        sn: "School Name",
        tos: "Title Of Study",
        dos: "Duration Of Study In Years",
        df: "Date Finished",
      });
    }

    setSchoolInfoArray(tempArray);
  };

  return (
    <>
      <h2>{"Educational Experience version Two"}</h2>
      <button onClick={() => submitNumber()}>
        How Many Schools Did You Attend?
      </button>
      {schoolInfoArray.length > 0
        ? schoolInfoArray.map((info) => {
            return (
              <div className="schools-attended" key={info.id}>
                <label>
                  {info.sn}
                  <input type="text" />
                </label>
                <label>
                  {info.tos}
                  <input type="text" />
                </label>
                <label>
                  {info.dos}
                  <input type="number" />
                </label>
                <label>
                  {info.df}
                  <input type="date" />
                </label>
              </div>
            );
          })
        : "Nothing to Display Yet"}
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
  //let generalInformationArray = [];
  const [submitGeneralInformation, setSubmitGeneralInformation] =
    useState(false);

  const [generalInformation, setGeneralInformation] = useState({
    id: crypto.randomUUID(),
    name: "",
    phoneNumber: "",
    email: "",
  });

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
    let reenterInformation = function () {
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

        <button onClick={reenterInformation}>Reenter Information</button>
      </>
    );
  }

  return (
    <>
      {children}
      <GeneralInformation />
      <GeneralInformationRender />
    </>
  );
}

// function GeneralInformationRender() {
//   return (
//     <>
//       <h1>General Information</h1>
//       {generalInformationArray.length > 0
//         ? generalInformationArray.map((info) => {
//             <p key={info.id}>
//               {info.name} {info.phoneNumber} {info.email}
//             </p>;
//           })
//         : "Awaiting Upload"}
//     </>
//   );
// }

export default function CV() {
  return (
    <>
      <CurriculumVitae>
        <GeneralInformation />
        <SchoolInformation />
        <PracticalExperience />
        <SchoolInformationEdit />
      </CurriculumVitae>
      <MainCurriculumVitaeDisplay>
        {/* <GeneralInformationRender /> */}
      </MainCurriculumVitaeDisplay>
    </>
  );
}
