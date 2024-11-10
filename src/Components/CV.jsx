import { useState } from "react";

function MainCurriculumVitaeDisplay() {
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

  const [showSchoolInformationEdit, setShowSchoolInformationEdit] =
    useState(true);

  const [showPracticalExperienceEdit, setShowPracticalExperienceEdit] =
    useState(true);

  const [showGeneralInformation, setShowGeneralInformation] = useState(true);

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

      setSubmitGeneralInformation(true);
      setGeneralInformation(generalInformationTwo);

      setShowGeneralInformation(false);
    };

    return (
      <div className="data-collect">
        <h2>General Information</h2>
        <label>
          Name:{" "}
          <input
            type="text"
            value={generalInformationTwo.name}
            onChange={handleName}
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            type="number"
            value={generalInformationTwo.phoneNumber}
            onChange={handlePhoneNumber}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            value={generalInformationTwo.email}
            onChange={handleEmail}
          />
        </label>
        <div>
          <button
            className="entry-submit-button"
            onClick={addGeneralInformationDetails}
            disabled={submitGeneralInformation}
          >
            Add Info
          </button>
        </div>
      </div>
    );
  }

  function GeneralInformationRender() {
    let reenterInformation = function () {
      setSubmitGeneralInformation(false);

      setShowGeneralInformation(true);
    };

    return (
      <div className="data-display">
        <h1>General Information</h1>
        {submitGeneralInformation ? (
          <div className="general-info-details" key={generalInformation.id}>
            <div>Name: {generalInformation.name}</div>
            <div>Phone Number: {generalInformation.phoneNumber}</div>
            <div>Email: {generalInformation.email}</div>
          </div>
        ) : (
          "Awaiting Upload"
        )}

        <div>
          <button className="entry-submit-button" onClick={reenterInformation}>
            Reenter Information
          </button>
        </div>
      </div>
    );
  }

  function SchoolInformationEdit() {
    const [schoolInfoArray, setSchoolInfoArray] = useState([]);
    const [educationInfoArray, setEducationInfoArray] = useState([]);
    const [schoolsAttended, setSchoolsAttended] = useState(0);
    const [showSchools, setShowSchools] = useState(false);

    let tempInfoArray = [];
    let tempEducationArray = [];

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
      setShowSchoolInformationEdit(false);
    };

    let schoolsAttendedChange = function (e) {
      let tempSchoolsAttended = e.target.value;
      setSchoolsAttended(tempSchoolsAttended);
    };

    let submitSchoolsAtttendedNumber = function () {
      let schoolsNo = schoolsAttended;

      for (let i = 0; i < schoolsNo; i++) {
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
      setShowSchools(true);
    };

    let reEnterSchools = function () {
      setShowSchools(false);
    };

    return (
      <div className="data-collect">
        <h2>{"Educational Experience"}</h2>

        {showSchools ? (
          <button className="number-button" onClick={reEnterSchools}>
            ReEnter School Number?
          </button>
        ) : (
          <>
            <label>
              How Many Schools Did You Attend?
              <input
                className="inside-number-input"
                type="number"
                value={schoolsAttended}
                onChange={schoolsAttendedChange}
              />
            </label>
            <button
              className="number-button"
              onClick={submitSchoolsAtttendedNumber}
            >
              Submit Schools Attended
            </button>
          </>
        )}

        {showSchools ? (
          schoolInfoArray.length > 0 ? (
            schoolInfoArray.map((info, index) => {
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
          ) : (
            <div className="red-div">You Have Selected Zero Schools</div>
          )
        ) : (
          <div className="red-div">Enter Number Of Schools</div>
        )}
        <div>
          <button
            className="entry-submit-button"
            onClick={() => submitEducationInfo()}
          >
            Submit Education Information
          </button>
        </div>
      </div>
    );
  }

  function SchoolInformationRender() {
    let reenterSchoolInformation = function () {
      setShowSchoolInformationEdit(true);
    };

    return (
      <div className="data-display">
        <h1>School Information</h1>
        <div className="school-details-titles">
          <div>School Name</div>
          <div>Title Of Study</div>
          <div>Duration Of Study</div>
          <div>Date Finished</div>
        </div>
        {informationEducation.length > 0 ? (
          informationEducation.map((info, index) => (
            <div className="school-info-details" key={index}>
              <div>{info.sn}</div>
              <div>{info.tos}</div>
              <div>{info.dos}</div>
              <div>{info.df}</div>
            </div>
          ))
        ) : (
          <div className="no-info-display">
            No School Information To Display Yet
          </div>
        )}

        <div>
          <button
            className="entry-submit-button"
            onClick={reenterSchoolInformation}
          >
            Reenter Information
          </button>
        </div>
      </div>
    );
  }

  function PracticalExperienceEdit() {
    const [companyInfoArray, setCompanyInfoArray] = useState([]);
    const [experienceInfoArray, setExperienceInfoArray] = useState([]);
    const [companiesNumber, setCompaniesNumber] = useState(0);
    const [showExperience, setShowExperience] = useState(false);

    let tempArray = [];
    let tempExperienceArray = [];

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
      setShowPracticalExperienceEdit(false);
    };

    let companiesNumberChange = function (e) {
      let noCompanies = e.target.value;
      setCompaniesNumber(noCompanies);
    };

    let submitCompaniesNumber = function () {
      let noOfComp = companiesNumber;

      for (let i = 0; i < noOfComp; i++) {
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
      setShowExperience(true);
    };

    let reEnterCompanies = function () {
      setShowExperience(false);
    };

    return (
      <div className="data-collect">
        <h2>{"Practical Experience"}</h2>

        {showExperience ? (
          <button className="number-button" onClick={reEnterCompanies}>
            ReEnter Number Of Companies Worked For?
          </button>
        ) : (
          <>
            <label>
              How Many Comapnies Have You Worked For?
              <input
                className="inside-number-input"
                value={companiesNumber}
                onChange={companiesNumberChange}
              />
            </label>

            <button className="number-button" onClick={submitCompaniesNumber}>
              Submit Number Of Companies Worked For
            </button>
          </>
        )}

        {showExperience ? (
          companyInfoArray.length > 0 ? (
            companyInfoArray.map((info, index) => {
              return (
                <div className="schools-attended" key={info.id}>
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
          ) : (
            <div className="red-div">You Have Entered Zero Companies</div>
          )
        ) : (
          <div className="red-div">
            Enter Number Of Companies You Have Worked For
          </div>
        )}
        <div>
          <button
            className="entry-submit-button"
            onClick={submitExperienceInformation}
          >
            Submit Experience Information
          </button>
        </div>
      </div>
    );
  }

  function PracticalExperienceRender() {
    let reenterExperienceInformation = function () {
      setShowPracticalExperienceEdit(true);
    };

    return (
      <div className="data-display">
        <h1>Experience Information</h1>
        <div className="experience-details-titles">
          <div>Company Name</div>
          <div>Main Responsibilities</div>
          <div>Position Title</div>
          <div>Worked Since</div>
          <div>Worked Until</div>
        </div>
        {informationExperience.length > 0 ? (
          informationExperience.map((info, index) => {
            return (
              <div className="experience-info-details" key={index}>
                <div>{info.cn}</div>
                <div>{info.mr}</div>
                <div>{info.pt}</div>
                <div>{info.ws}</div>
                <div>{info.wu}</div>
              </div>
            );
          })
        ) : (
          <div className="no-info-display">
            No Experience Information To Display Yet
          </div>
        )}

        <div>
          <button
            className="entry-submit-button"
            onClick={reenterExperienceInformation}
          >
            Reenter Information
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {showGeneralInformation ? (
        <GeneralInformation />
      ) : (
        <GeneralInformationRender />
      )}

      {showSchoolInformationEdit ? (
        <SchoolInformationEdit />
      ) : (
        <SchoolInformationRender />
      )}

      {showPracticalExperienceEdit ? (
        <PracticalExperienceEdit />
      ) : (
        <PracticalExperienceRender />
      )}
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
