import React, { useEffect, useState } from "react";
import "./companyapplied.css";
import AppliedSummaryBlock from "./AppliedSummaryBlock";
import AppliedProfiletab from "./AppliedProfiletab";
import AppliedTabComponent from "./AppliedTabComponent";
import callAPI from "../../../utils/callAPI";

function DetailedCompanyApplied(props) {
  console.log(props);
  const [detailedapply, setdetailedapply] = useState(null);
  const [preferenceInfo, setPreferenceInfo] = useState("");

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/seeker/get_seeker/${props.seeker_id}`,
    });
    let response_obj2 = await callAPI({
      endpoint: `/preference/preference_infomation/${props.seeker_id}`,
    });

    setdetailedapply(response_obj);
    setPreferenceInfo(response_obj2);
    console.log("single indiv data");
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  if (detailedapply != null) {
    return (
      <div>
        {detailedapply.data.map((val, key) => (
          <div>
            <div className="title">
              Applied Employees
              <div className="applied-whole-box">
                <AppliedSummaryBlock
                  name={val.name}
                  post={props.job_position}
                  applieddate={props.appliedDetailedInformation.applied_date}
                  availability="currently available"
                  experience={val.yearsOfExperience}
                  age={val.age}
                  contact={val.contactNumber}
                  type={true}
                  linkedinlink={val.linkedIn}
                  githublink={val.githubProfile}
                  websitelink={val.website}
                  seeker_id={props.seeker_id}
                  job_post_id={props.job_post_id}
                  status={props.appliedDetailedInformation.status}
                />

                <AppliedTabComponent />
                <AppliedProfiletab
                  about={val.write_about_you}
                  pskills={val.skills}
                  user_id={props.seeker_id}
                  job_post_id={props.job_post_id}
                  prole={preferenceInfo.data.interested_jobs}
                  education={val.education}
                  experience={val.experience}
                  expected_max_salary={preferenceInfo.data.expected_max_salary}
                  expected_min_salary={preferenceInfo.data.expected_min_salary}
                  address={val.address}
                  coverletter={props.appliedDetailedInformation.coverletter}
                  cv = {props.appliedDetailedInformation.cv}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DetailedCompanyApplied;
