import React from 'react';

const Error = () => {
  const wrapperStyle = {
    height: "100vh",
    overflow: "hidden", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fefae0",
    animation: "fadeIn 2s ease-in-out"
  };

  const imageStyle = {
    width: "90%",
    maxWidth: "1000px",
    borderRadius: "10px",
    marginTop:"50px",
    animation: "zoomIn 2s ease-in-out"
  };

  return (
    <div style={wrapperStyle}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }

          body {
            margin: 0;
            overflow: hidden; 
          }
        `}
      </style>

      <img
        style={imageStyle}
        src="https://elements-resized.envatousercontent.com/elements-cover-images/f1f5a09d-3534-4fbe-a30f-9b5f69d1c700?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=d47c991be84c0566c9b821cb16f5759074abb8437702af6b3f50ed99a721483b"
        alt="error"
      />
    </div>
  );
};

export default Error;
