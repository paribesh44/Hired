import React, { useEffect, useState } from "react";
import "./companyapplied.css";
import AppliedSummaryBlock from "./AppliedSummaryBlock";
import AppliedProfiletab from "./AppliedProfiletab";
import AppliedTabComponent from "./AppliedTabComponent";
import callAPI from "../../../utils/callAPI";

function DetailedCompanyApplied(props) {
  console.log(props);
  const [detailedapply, setdetailedapply] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/seeker/get_seeker/${props.user_id}`,
    });
    setdetailedapply(response_obj);
    console.log("single indiv data");
    console.log(props.user_id);
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
                  applieddate="2020-03-05"
                  availability="currently available"
                  experience={val.yearsOfExperience}
                  age={val.age}
                  contact={val.contactNumber}
                  type={true}
                  linkedinlink={val.linkedIn}
                  githublink={val.githubProfile}
                  websitelink={val.website}
                />

                <AppliedTabComponent />
                <AppliedProfiletab
                  about={val.write_about_you}
                  pskills={val.skills}
                  user_id={props.user_id}
                  job_post_id={props.job_post_id}
                  prole={["aaa", "vvv"]}
                  education={val.education}
                  experience={val.experience}
                  expected_max_salary={val.expected_max_salary}
                  expected_min_salary={val.expected_min_salary}
                  address={val.address}
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
