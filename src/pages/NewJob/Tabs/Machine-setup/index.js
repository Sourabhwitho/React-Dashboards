import React, { useState } from 'react';

const Machinesetup = () => {
    const TreeNode = ({ node, isRoot }) => {
        const [expanded, setExpanded] = useState(isRoot);
      
        const handleToggle = () => {
          setExpanded(!expanded);
        };
      
        return (
          <div className="tree-node">
            <div onClick={handleToggle} className="node-label">
              {node.children && (
                <span className="expand-icon">{expanded ? '▼' : '▶'}</span>
              )}
              {node.label}
            </div>
            {expanded && node.children && (
              <div className="children">
                {node.children.map((child, index) => (
                  <TreeNode key={index} node={child} isRoot={false}/>
                ))}
              </div>
            )}
          </div>
        );
      };
      
      const treeData = {
        label: 'ReferenceMachine',
        children: [
          {
            label: 'Axes',
            children: [
              { label: 'ReferenceControllerAxis x' },
              { label: 'ReferenceControllerAxis y' },
              { label: 'ReferenceVirtualAxis zTop' },
              { label: 'ReferenceVirtualAxis rotationTop' },
              { label: 'ReferenceControllerAxis zN1' },
              { label: 'ReferenceControllerAxis rotationN1' },
            ],
          },
          { label: 'Signalers'},
          { label: 'Feeders',
          children: [
            { label: 'ReferenceStripFeeder Upper Strips - 1' },
            { label: 'ReferenceStripFeeder Upper Strips - 2' },
            { label: 'ReferenceStripFeeder Upper Strips - 3' },
            { label: 'ReferenceStripFeeder Upper Strips - 4' },
            { label: 'ReferenceStripFeeder Lower Strips - 1' },
            { label: 'ReferenceStripFeeder Lower Strips - 2' },
            { label: 'ReferenceStripFeeder Lower Strips - 3' },
            { label: 'ReferenceStripFeeder Lower Strips - 4' },
          ],
           },
          { label: 'Heads' ,
          children: [
            { label: 'ReferenceHead H1' },
          ],
          },
          { label: 'Nozzle Tips',
          children: [
            { label: 'ReferenceNozzleTip NT1' ,
            children: [
              { label: 'Nozzles',
              children: [
                { label: 'ReferenceNozzle N1' },
              ],
               },
              { label: 'Cameras',
              children: [
                { label: 'ImageCamera Top' },
              ],
               },
              { label: 'Actuators' ,
              children: [
                { label: 'ReferenceActuator LIGHT_TOP' },
                { label: 'ReferenceActuator PUMP' },
                { label: 'ReferenceActuator A1' },
              ],
              },
            ],
            },
          ],
           },
          { label: 'Cameras',
          children: [
            { label: 'SimulatedUpCamera Bottom' },
          ],
           },
          { label: 'Actuators' ,
          children: [
            { label: 'ReferenceActuator LIGHT_BOTTOM' },
          ],
          },
          { label: 'Drivers' ,
          children: [
            { label: 'NullDriver NullDriver' },
          ],
          },
          { label: 'Job Processors',
          children: [
            { label: 'ReferencePnpJobProcessor' },
          ],
           },
          { label: 'Vision' ,
          children: [
            { label: 'Bottom Vision' },
            { label: 'Fiducal Locator' },
          ],
          },
        ],
      };
  return (
    <div className="machinesetup">
      <TreeNode node={treeData} isRoot={true}/>
    </div>
  );
};

export default Machinesetup;