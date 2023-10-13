import React from 'react';

function ResumeButton() {
  const handleDownloadResume = () => {
    
    const resumePath = '/path/to/your/resume.pdf';

    const anchor = document.createElement('a');
    anchor.href = resumePath;
    anchor.download = 'your_resume.pdf'; 
    anchor.target = '_blank'; 
    anchor.click();

 
    anchor.remove();
  };

  return (
    <button className="Resume_Button" onClick={handleDownloadResume}>
      Download Resume
    </button>
  );
}

export default ResumeButton;
