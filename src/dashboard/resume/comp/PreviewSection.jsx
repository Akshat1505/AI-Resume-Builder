import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import PersonalDetail from './Preview/PersonalDetail';

function PreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(Context);

  return (
    <div>
      {/* personal detail */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* summary */}

      {/* professional experience */}

      {/* education */}

      {/* skills */}
    </div>
  );
}

export default PreviewSection;