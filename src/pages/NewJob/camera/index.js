import { useState,useCallback } from 'react';

import React, { useRef, useEffect } from 'react';

const useCamera = () => {
  const [devices, setDevices] = useState([]);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  const listCameras = useCallback(async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
    } catch (err) {
      setError(err);
    }
  }, []);

  const startCamera = useCallback(async (deviceId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId } });
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
    listCameras();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [listCameras, stream]);

  return { devices, stream, error, startCamera, stopCamera };
};

const Camera = () => {
  const { devices, stream, error, startCamera, stopCamera } = useCamera();
  const videoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  const toggleCamera = async () => {
    if (isCameraOn) {
      stopCamera();
    } else {
      await startCamera(selectedDeviceId);
    }
    setIsCameraOn(prevState => !prevState);
  };

  return (
    <div className="camera-view">
      <div className="camera-header">Camera</div>
      <select onChange={handleDeviceChange} value={selectedDeviceId}>
        <option value="">Select Camera</option>
        {devices.map(device => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || `Camera ${device.deviceId}`}
          </option>
        ))}
      </select>
      <div className="camera-content">
        <div className="fiducial" id="fid1">FID1</div>
        {error && <div className="error">Error accessing camera: {error.message}</div>}
        <video ref={videoRef} autoPlay className="camera-video"></video>
      </div>
      <button onClick={toggleCamera} disabled={!selectedDeviceId}>
        {isCameraOn ? 'Stop Camera' : 'Start Camera'}
      </button>
    </div>
  );
};

export default Camera;
