import React, { useState } from 'react';

const BoardList = () => {

  const [fileType, setFileType] = useState('');
  const [fileName, setFileName] = useState('NA');
  const [boardDimensions, setBoardDimensions] = useState(null);
  const [placementData, setPlacementData] = useState([]);
  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }
  const handleImportClick = () => {
    document.getElementById('fileInput').click();
  };

  const resetState = () => {
    setBoardDimensions(null);
    setPlacementData([]);
  };

  const parseXML = (xml, fileName) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'application/xml');

    // Parse dimensions
    const dimensions = xmlDoc.getElementsByTagName('dimensions')[0];
    const length = dimensions.getAttribute('x');
    const width = dimensions.getAttribute('y');

    setBoardDimensions({ fileName, length, width, side: 'Top', x: 0, y: 0, z: 0, rot: 0, enabled: 'true' });

    // Parse placements
    const placements = Array.from(xmlDoc.getElementsByTagName('placement')).map((placement) => ({
      enabled: placement.getAttribute('enabled'),
      id: placement.getAttribute('id'),
      part: placement.getAttribute('part-id'),
      side: placement.getAttribute('side'),
      x: placement.getElementsByTagName('location')[0].getAttribute('x'),
      y: placement.getElementsByTagName('location')[0].getAttribute('y'),
      z: placement.getElementsByTagName('location')[0].getAttribute('z'),
      rot: placement.getElementsByTagName('location')[0].getAttribute('rotation'),
      type: placement.getAttribute('type'),
      errorHandling: placement.getElementsByTagName('error-handling')[0]?.textContent || 'alert',
    }));

    setPlacementData(placements);
  };

  const parseMNT_MNB = (mnt, extension, fileName) => {
    const lines = mnt.trim().split('\n');
    let boardSide = 'Top';
    let boardLength = 0;
    let boardWidth = 0;

    const firstLineWords = lines[0].split(/\s+/);
    const firstWord = firstLineWords[0].toLowerCase();
    if (firstWord.includes('ruler')) {
      boardLength = firstLineWords[1];
      boardWidth = firstLineWords[2];
      boardSide = firstWord.startsWith('bottom') ? 'Bottom' : 'Top';
      lines.shift();
    }

    setBoardDimensions({ fileName, length: boardLength, width: boardWidth, side: boardSide, x: 0, y: 0, z: 0, rot: 0, enabled: 'true' });

    const placements = lines.map(line => {
      const [id, x, y, rot, part] = line.split(/\s+/);
      return {
        enabled: 'true',
        id,
        part,
        side: boardSide,
        x: parseFloat(x),
        y: parseFloat(y),
        z: 0,
        rot: parseInt(rot, 10),
        type: 'placement',
        errorHandling: 'alert',
      };
    });

    setPlacementData(placements);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const fileExtension = file.name.split('.').pop().toLowerCase();
    setFileType(fileExtension);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      resetState(); // Reset state before parsing new file
      if (fileExtension === 'xml') {
        parseXML(contents, file.name);
      } else if (fileExtension === 'mnt' || fileExtension === 'mnb') {
        parseMNT_MNB(contents, fileExtension, file.name);
      } else {
        alert('Unsupported file format');
      }
    };
    reader.readAsText(file);
  };

  const PlacementControl = ({ data = [] }) => {
    return (
      <div className="placement-controls">
        <div className="placement-header">Placements</div>
        <table>
          <thead>
            <tr>
              <th>Enabled</th>
              <th>ID</th>
              <th>Part</th>
              <th>Side</th>
              <th>X</th>
              <th>Y</th>
              <th>Z</th>
              <th>Rot.</th>
              <th>Type</th>
              <th>Error Handling</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td><input type="checkbox" defaultChecked={row.enabled === "true"} /></td>
                <td>{row.id}</td>
                <td>{row.part}</td>
                <td>{row.side}</td>
                <td>{row.x}</td>
                <td>{row.y}</td>
                <td>{row.z}</td>
                <td>{row.rot}</td>
                <td>{row.type}</td>
                <td>{row.errorHandling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='total'>
    <div className="board-controls">
    <div className="controls-header">Boards</div>
    <button onClick={handleImportClick}>Import</button>
    <input
          type="file"
          accept=".xml,.mnt,.mnb"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />

      <div className="board-details">
        <table>
          <thead>
            <tr>
              <th>Boards</th>
              <th>Length</th>
              <th>Width</th>
              <th>Side</th>
              <th>X</th>
              <th>Y</th>
              <th>Z</th>
              <th>Rot.</th>
              <th>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {boardDimensions && (
              <tr>
                <td>{boardDimensions.fileName}</td>
                <td>{boardDimensions.length}</td>
                <td>{boardDimensions.width}</td>
                <td>{boardDimensions.side}</td>
                <td>{boardDimensions.x}</td>
                <td>{boardDimensions.y}</td>
                <td>{boardDimensions.z}</td>
                <td>{boardDimensions.rot}</td>
                <td><input type="checkbox" defaultChecked={boardDimensions.enabled === "true"} /></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
      <PlacementControl data={placementData} />
  </div>
  );
};

export default BoardList;
