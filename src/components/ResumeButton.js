import React from 'react';

function ResumeButton() {
  const handleDownloadResume = () => {
    // Replace this with the actual path to your resume file (e.g., PDF, DOCX, etc.)
    const resumePath = '/path/to/your/resume.pdf';

    // Create a temporary anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = resumePath;
    anchor.download = 'your_resume.pdf'; // Set the desired filename for the download
    anchor.target = '_blank'; // Open the download in a new tab
    anchor.click();

    // Clean up the temporary anchor element
    anchor.remove();
  };

  return (
    <button className="Resume_Button" onClick={handleDownloadResume}>
      Download Resume
    </button>
  );
}

export default ResumeButton;
