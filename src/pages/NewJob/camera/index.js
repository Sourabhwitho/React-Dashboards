import { useState,useCallback } from 'react';

import React, { useRef, useEffect } from 'react';

const useCamera = () => {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      setError(null);
    } catch (err) {
      setError(err);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  }, [stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return { stream, error, startCamera, stopCamera };
};

const Camera = () => {
  const { stream, error, startCamera, stopCamera } = useCamera();
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const toggleCamera = () => {
    if (isCameraOn) {
      stopCamera();
    } else {
      startCamera();
    }
    setIsCameraOn(prevState => !prevState);
  };

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
      <button onClick={toggleCamera}>
        {isCameraOn ? 'Stop Camera' : 'Start Camera'}
      </button>
    </div>
  );
};

export default Camera;
