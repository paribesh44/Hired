import React from 'react'
import SkillContainer from '../../../components/SkillContainer'
import { IoStar } from "react-icons/io5";

import { IoStarOutline } from "react-icons/io5";

function AppliedSidePane() {
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
        50%
        </div>
        <div className="appliedstarheading">
            Criterias Met:
        </div>
        <div>
          <SkillContainer name="4 years experience"/>
          <br/>
          <SkillContainer name="Undergraduate in CS"/>
        </div>

        <div className="appliedstarheading">
            Skills:
            
        </div>
        <div>
          <SkillContainer name="PhotoShop"/>
          <br/>
          <SkillContainer name="Illustrator"/>
          <br/>
          <SkillContainer name="Blender"/>
        </div>
    </div>
  )
}

export default AppliedSidePane
