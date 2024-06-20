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
  const [selectedDeviceId, setSelectedDeviceId] = useState(''); // Default to Show None

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleDeviceChange = async (event) => {
    const deviceId = event.target.value;
    setSelectedDeviceId(deviceId);
    
    if (deviceId) {
      await startCamera(deviceId);
    } else {
      stopCamera();
    }
  };

  return (
    <div className="camera-view">
      <div className="camera-header">Camera</div>
      <select onChange={handleDeviceChange} value={selectedDeviceId}>
        <option value="">Show None</option>
        {devices.map(device => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || `Camera ${device.deviceId}`}
          </option>
        ))}
      </select>
      <div className="camera-content">
      {!selectedDeviceId && <div className="fiducial" id="fid1">FID1</div>}
        {error && <div className="error">Error accessing camera: {error.message}</div>}
        <video ref={videoRef} autoPlay className="camera-video"></video>
        {selectedDeviceId && <div className="grid-overlay"></div>}
      </div>
    </div>
  );
};

export default Camera;
