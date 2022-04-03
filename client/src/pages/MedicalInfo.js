import React, { useEffect, useContext, useRef, useState } from "react";
import FormContainer from "../components/ui/FormContainer";
import Message from "../components/utilities/Message";
import UserContext from "../store/users-context";

function MedicalInfo() {

  //  App State Context
  const userAppContext = useContext(UserContext)
  const {errorMsg, successMsg} = userAppContext

  //  Local State 
  const {loading, setLoading} = useState(true)

  let medicalConditions = [];
  let medicationHistory = [];
  let checkboxReferences = [];

  // @TODO Refactor Create A Cleaner Way To Handle Using Local State / An Array Of Check Values / Map out array in return statement and create multiple checkboxes within the map function from the array list count 

  //    Medical Conditions
  let abdominalPain = useRef();
  let facialPain = useRef();
  let cancerRelatedPain = useRef();
  let headache = useRef();
  let multipleSclerosis = useRef();
  let backNeckPain = useRef();
  // @TODO If clicked on disable all checks within medical conditions array
  let medicalCondtionsNone = useRef();

  //    Mental History
  let mentalHistory = useRef();

  //    Medication History 
  let kidneyProblems = useRef()
  let liverProblems = useRef()
  // @TODO If clicked on disable all checks within medication history array
  let medicationHistoryNone = useRef()

  //    Consent 
  let newsUpdates = useRef()
  let tosAgreement = useRef()

  useEffect(() => {

  }, [errorMsg, successMsg])
  
  const unCheck = (e) => {
      checkboxReferences.forEach((reference, index) => {
          reference.current.checked = false
      })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredMedicalConditions = medicalConditions;
    const enteredMentalHistory = mentalHistory.current.value;
    const enteredMedicationHistory = medicationHistory;
    const enteredNewsUpdateConsent = newsUpdates.current.checked = true ? newsUpdates.current.value : false;
    const enteredTosAgreement = tosAgreement.current.value

    const userMedicalInformationSurveyPayload = {
        medicalConditions: enteredMedicalConditions,
        mentalHistory: enteredMentalHistory,
        medicalHistory: enteredMedicationHistory,
        newsUpdate: enteredNewsUpdateConsent,
        privacyPolicy: enteredTosAgreement,
        customerId: 1
    }

    //  Make A Call To The Api 
    userAppContext.userRegisterMedicalInfo(userMedicalInformationSurveyPayload)

    // Clear Out Form 
    unCheck()
    mentalHistory.current.value = '';
    newsUpdates.current.value = '';
    tosAgreement.current.value = '';
    
  };

  if(successMsg){
    return(
      <section className="container mt-4">
        <h1 className="text-center">Thank You For Your Submission!</h1>
      </section>
    )
  }

  return (
    <FormContainer>
      {errorMsg && <Message variant={'danger'}>{errorMsg}</Message>}
      <h2 className="text-center my-4">Medical Information Survey</h2>
      {/* @TODO Add Message Component Here */}
      <form onSubmit={submitHandler}>
        <div className="my-4">
          <div>
            <h4 className="text-decoration-underline"> Medical Conditions</h4>
            <label className="form-label mb-4">
              Do you have one of the following conditions that you are hoping to
              discuss Medical Cannabis treatment for?
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Abdominal Pain"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(abdominalPain);
              }}
              ref={abdominalPain}
            />
            <label className="form-check-label">Abdominal pain</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Facial Pain"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(facialPain);
              }}
              ref={facialPain}
            />
            <label className="form-check-label">Facial pain</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Cancer-related pain"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(cancerRelatedPain);
              }}
              ref={cancerRelatedPain}
            />
            <label className="form-check-label">Cancer-related pain</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Headache"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(headache);
              }}
              ref={headache}
            />
            <label className="form-check-label">Headache</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Multiple Sclerosis"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(multipleSclerosis);
              }}
              ref={multipleSclerosis}
            />
            <label className="form-check-label">Multiple Sclerosis</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="Back and neck pain"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(backNeckPain);
              }}
              ref={backNeckPain}
            />
            <label className="form-check-label">Back and neck pain</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="none"
              onChange={(e) => {
                medicalConditions.push(e.target.value);
                checkboxReferences.push(medicalCondtionsNone);
              }}
              ref={medicalCondtionsNone}
            />
            <label className="form-check-label">None</label>
          </div>
          <hr />

          <div>
            <h4 className="text-decoration-underline">Mental History</h4>
            <label className="form-label mb-4">
              Have you ever had an episode of schizophrenia and/or psychosis?
            </label>
          </div>
          
          <select className="form-select" aria-label="Default select example" ref={mentalHistory}>
          <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <hr />

          <div>
            <h4 className="text-decoration-underline">Medication History</h4>
            <label className="form-label mb-4">
              Have you ever had any medical problems regarding your:?
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="kidney"
              onChange={(e) => {
                medicationHistory.push(e.target.value);
                checkboxReferences.push(kidneyProblems);
              }}
              ref={kidneyProblems}
            />
            <label className="form-check-label">Kidney</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="liver"
              onChange={(e) => {
                medicationHistory.push(e.target.value);
                checkboxReferences.push(liverProblems);
              }}
              ref={liverProblems}
            />
            <label className="form-check-label">Liver</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="none"
              onChange={(e) => {
                medicationHistory.push(e.target.value);
                checkboxReferences.push(medicationHistoryNone);
              }}
              ref={medicationHistoryNone}
            />
            <label className="form-check-label">None</label>
          </div>
          <hr />

          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="true"
              onChange={(e) => {
                checkboxReferences.push(newsUpdates);
              }}
              ref={newsUpdates}
            />
            <label className="form-check-label">I want to receive updates about my care from Leva Clinic as well as latest pain management
news (Optional)</label>
          </div>
          {/* Used HTML 5 required, @TODO - Refactor and allow component to check if checked and provide msg if NOT*/}
          <div className="form-check form-check-inline">
            <input
              className="form-check-input checkbox"
              type="checkbox"
              value="true"
              onChange={(e) => {
                checkboxReferences.push(tosAgreement);
              }}
              ref={tosAgreement}
              required
            />
            <label className="form-check-label">By submitting this form, you agree to Leva Clinic privacy policy and terms and conditions.</label>
          </div>
        </div>
        <button type="submit" className="btn bg-primary text-white">
          Submit
        </button>
      </form>
    </FormContainer>
  );


}

export default MedicalInfo;
