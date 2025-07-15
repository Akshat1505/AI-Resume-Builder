import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import PersonalDetail from './Preview/PersonalDetail';
import Summary from './Preview/Summary';
import Experinece from './Preview/Experinece';
import Education from './Preview/Education';
import Skill from './Preview/Skill';

function PreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(Context);

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:resumeInfo?.themeColor
    }}>
      {/* personal detail */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* summary */}
      <Summary resumeInfo={resumeInfo}/>
      {/* professional experience */}
      <Experinece resumeInfo={resumeInfo}/>
      {/* education */}
      <Education resumeInfo={resumeInfo}/>
      {/* skills */}
      <Skill resumeInfo={resumeInfo}/>
    </div>
  );
}

export default PreviewSection;