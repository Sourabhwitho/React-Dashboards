import React, { useState } from 'react';

const Configuration2 = () => {
  const [rotationInTape, setRotationInTape] = useState(-90.00);
  const [feedRetryCount, setFeedRetryCount] = useState(3);
  const [pickRetryCount, setPickRetryCount] = useState(0);
  const [tapeType, setTapeType] = useState('White Paper');
  const [tapeWidth, setTapeWidth] = useState(8.000);
  const [partPitch, setPartPitch] = useState(4.000);
  const [feedCount, setFeedCount] = useState(0);
  const [maxFeedCount, setMaxFeedCount] = useState(0);
  const [useVision, setUseVision] = useState(true);
  const [referenceHoleLocation, setReferenceHoleLocation] = useState({ x: 138.715, y: 88.244, z: 0.000 });
  const [nextHoleLocation, setNextHoleLocation] = useState({ x: 139.057, y: 84.226, z: 0.000 });

  return (
    <div className="configuration">
      {/* <div className="placement-header">Configuration</div> */}
      <div className="general-settings">
        <h2>General Settings</h2>
        <label>
          Part:
          <select>
            <option>R0805-1K</option>
            {/* Add more options here if needed */}
          </select>
        </label>
        <label>
          Rotation In Tape:
          <input type="number" value={rotationInTape} onChange={(e) => setRotationInTape(parseFloat(e.target.value))} />
        </label>
        <label>
          Feed Retry Count:
          <input type="number" value={feedRetryCount} onChange={(e) => setFeedRetryCount(parseInt(e.target.value))} />
        </label>
        <label>
          Pick Retry Count:
          <input type="number" value={pickRetryCount} onChange={(e) => setPickRetryCount(parseInt(e.target.value))} />
        </label>
      </div>
      <div className="tape-settings">
        <h2>Tape Settings</h2>
        <label>
          Tape Type:
          <select value={tapeType} onChange={(e) => setTapeType(e.target.value)}>
            <option>White Paper</option>
            {/* Add more options here if needed */}
          </select>
        </label>
        <label>
          Tape Width:
          <input type="number" value={tapeWidth} onChange={(e) => setTapeWidth(parseFloat(e.target.value))} />
        </label>
        <label>
          Part Pitch:
          <input type="number" value={partPitch} onChange={(e) => setPartPitch(parseFloat(e.target.value))} />
        </label>
        <label>
          Feed Count:
          <input type="number" value={feedCount} onChange={(e) => setFeedCount(parseInt(e.target.value))} />
        </label>
        <label>
          Max Feed Count:
          <input type="number" value={maxFeedCount} onChange={(e) => setMaxFeedCount(parseInt(e.target.value))} />
        </label>
        <button onClick={() => setMaxFeedCount(0)}>Reset</button>
      </div>
      <div className="vision">
        <h2>Vision</h2>
        <label>
          Use Vision?
          <input type="checkbox" checked={useVision} onChange={(e) => setUseVision(e.target.checked)} />
        </label>
        <button>Edit Pipeline</button>
        <button>Reset Pipeline</button>
      </div>
      <div className="locations">
        <h2>Locations</h2>
        <div>
          <h3>Reference Hole Location</h3>
          <label>
            X:
            <input type="number" value={referenceHoleLocation.x} onChange={(e) => setReferenceHoleLocation({ ...referenceHoleLocation, x: parseFloat(e.target.value) })} />
          </label>
          <label>
            Y:
            <input type="number" value={referenceHoleLocation.y} onChange={(e) => setReferenceHoleLocation({ ...referenceHoleLocation, y: parseFloat(e.target.value) })} />
          </label>
          <label>
            Z:
            <input type="number" value={referenceHoleLocation.z} onChange={(e) => setReferenceHoleLocation({ ...referenceHoleLocation, z: parseFloat(e.target.value) })} />
          </label>
        </div>
        <div>
          <h3>Next Hole Location</h3>
          <label>
            X:
            <input type="number" value={nextHoleLocation.x} onChange={(e) => setNextHoleLocation({ ...nextHoleLocation, x: parseFloat(e.target.value) })} />
          </label>
          <label>
            Y:
            <input type="number" value={nextHoleLocation.y} onChange={(e) => setNextHoleLocation({ ...nextHoleLocation, y: parseFloat(e.target.value) })} />
          </label>
          <label>
            Z:
            <input type="number" value={nextHoleLocation.z} onChange={(e) => setNextHoleLocation({ ...nextHoleLocation, z: parseFloat(e.target.value) })} />
          </label>
        </div>
      </div>
      <button onClick={() => console.log('Reset')}>Reset</button>
      <button onClick={() => console.log('Apply')}>Apply</button>
    </div>
  );
};

export default Configuration2;