import React, { useState } from 'react';

const Configuration1 = () => {
  const [part, setPart] = useState('FIDUCIAL-1X2-FIDUCIAL1X2');
  const [feedRetryCount, setFeedRetryCount] = useState(3);
  const [pickRetryCount, setPickRetryCount] = useState(0);
  const [pickLocation, setPickLocation] = useState({ x: 0.000, y: 0.000, z: 0.000, rotation: 0.000 });
  const [actuatorFeed, setActuatorFeed] = useState(0.000);
  const [actuatorPostPick, setActuatorPostPick] = useState(0.000);
  const [moveBeforeFeed, setMoveBeforeFeed] = useState(false);

  const handleInputChange = (setter) => (e) => setter(parseFloat(e.target.value));

  return (
    <div className="configuration">
      {/* <div className="placement-header">Configuration</div> */}
      <div className="general-settings">
        <h2>General Settings</h2>
        <label>
          Part:
          <select value={part} onChange={(e) => setPart(e.target.value)}>
            <option>FIDUCIAL-1X2-FIDUCIAL1X2</option>
            {/* Add more options here if needed */}
          </select>
        </label>
        <label>
          Feed Retry Count:
          <input type="number" value={feedRetryCount} onChange={handleInputChange(setFeedRetryCount)} />
        </label>
        <label>
          Pick Retry Count:
          <input type="number" value={pickRetryCount} onChange={handleInputChange(setPickRetryCount)} />
        </label>
      </div>
      <div className="pick-location">
        <h2>Pick Location</h2>
        <label>
          X:
          <input type="number" value={pickLocation.x} onChange={(e) => setPickLocation({ ...pickLocation, x: parseFloat(e.target.value) })} />
        </label>
        <label>
          Y:
          <input type="number" value={pickLocation.y} onChange={(e) => setPickLocation({ ...pickLocation, y: parseFloat(e.target.value) })} />
        </label>
        <label>
          Z:
          <input type="number" value={pickLocation.z} onChange={(e) => setPickLocation({ ...pickLocation, z: parseFloat(e.target.value) })} />
        </label>
        <label>
          Rotation:
          <input type="number" value={pickLocation.rotation} onChange={(e) => setPickLocation({ ...pickLocation, rotation: parseFloat(e.target.value) })} />
        </label>
      </div>
      <div className="actuators">
        <h2>Actuators</h2>
        <div className="actuator">
          <label>
            Actuator (Feed):
            <select>
              {/* Add options for actuators here if needed */}
            </select>
          </label>
          <label>
            Actuator Value:
            <input type="number" value={actuatorFeed} onChange={handleInputChange(setActuatorFeed)} />
          </label>
          <button onClick={() => console.log('Test feed')}>Test feed</button>
        </div>
        <div className="actuator">
          <label>
            Actuator (Post Pick):
            <select>
              {/* Add options for actuators here if needed */}
            </select>
          </label>
          <label>
            Actuator Value:
            <input type="number" value={actuatorPostPick} onChange={handleInputChange(setActuatorPostPick)} />
          </label>
          <button onClick={() => console.log('Test post pick')}>Test post pick</button>
        </div>
        <label>
          Move before feed:
          <input type="checkbox" checked={moveBeforeFeed} onChange={(e) => setMoveBeforeFeed(e.target.checked)} />
        </label>
      </div>
      <button onClick={() => console.log('Reset')}>Reset</button>
      <button onClick={() => console.log('Apply')}>Apply</button>
    </div>
  );
};

export default Configuration1;