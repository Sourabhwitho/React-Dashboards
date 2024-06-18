// import React from 'react';

// const Camera = () => {
//   return (
//     <div className="camera-view">
//             <div className="camera-header">Camera</div>
//             <select>
//               <option>Show None</option>
//               <option>Camera: Top (Head: H1)</option>
//               <option>Camera: Bottom</option>
//             </select>
//             <div className="camera-content">
//               <div className="fiducial" id="fid1">FID1</div>
//             </div>
//           </div>
//   );
// };

// export default Camera;

import { useState } from 'react';

import React, { useRef, useEffect } from 'react';

const useCamera = () => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
      } catch (err) {
        setError(err);
      }
    };

    getCameraStream();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return { stream, error };
};

const Camera = () => {
  const { stream, error } = useCamera();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="camera-view">
      <div className="camera-header">Camera</div>
      <select>
        <option>Show None</option>
        <option>Camera: Top (Head: H1)</option>
        <option>Camera: Bottom</option>
      </select>
      <div className="camera-content">
        <div className="fiducial" id="fid1">FID1</div>
        {error && <div className="error">Error accessing camera: {error.message}</div>}
        <video ref={videoRef} autoPlay className="camera-video"></video>
      </div>
    </div>
  );
};

export default Camera;
