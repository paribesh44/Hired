import React from 'react'
import SkillContainer from '../../../components/SkillContainer'
import { IoStar } from "react-icons/io5";

import { IoStarOutline } from "react-icons/io5";

function AppliedSidePane(props) {
  console.log("sabai kam")
  console.log(props.appliedDetailedInformation)
  const nostar=50/10
  return (
    <div className='appliedsidepane-main'>
      
        <div className='applied-stars'>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStar/>
          <IoStarOutline/>
          <IoStarOutline/>
          <IoStarOutline/>

        </div>
        <div className="appliedstarheading">
            Percentage Match:
        </div>
        <div className='appliedstartext'>
        {props.percentage_match}%
        </div>
        <div className="appliedstarheading">
            Criterias Met:
        </div>
        <div>
          <SkillContainer name={props.appliedDetailedInformation.seeker.yearsOfExperience + " years experience"}/>
          <br/>
          <SkillContainer name={props.appliedDetailedInformation.seeker.education[0].qualification + " in CS"}/>
        </div>

        <div className="appliedstarheading">
            Skills:
            
        </div>
        <div>
          {props.appliedDetailedInformation.seeker.skills.map((val, key) => {
              return (
                <div>
                  <SkillContainer name={val}/>
                  <br/>
                </div>
              );
            })}
        </div>
    </div>
  )
}

export default AppliedSidePane
