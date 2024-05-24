import React from 'react';

const Camera = () => {
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
            </div>
          </div>
  );
};

export default Camera;
