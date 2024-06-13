import React, { useState } from 'react';
import Configuration1 from './Feeder-Configuration1';
import Configuration2 from './Feeder-Configuration2';

const Machinesetup = () => {
  const [activejob,setactivejob]=useState(0);
  const dosomething = (index)=>{
    setactivejob(index);
  }

    const leafNodeActions = {
      'ReferenceControllerAxis x': () => dosomething(1),
      'ReferenceControllerAxis y': () => dosomething(1),
      'ReferenceVirtualAxis zTop': () => dosomething(1),
      'ReferenceVirtualAxis rotationTop': () => dosomething(1),
      'ReferenceControllerAxis zN1': () => dosomething(1),
      'ReferenceControllerAxis rotationN1': () => dosomething(1),
      'ReferenceStripFeeder Upper Strips - 1': () => dosomething(1),
      'ReferenceStripFeeder Upper Strips - 2': () => dosomething(1),
      'ReferenceStripFeeder Upper Strips - 3': () => dosomething(1),
      'ReferenceStripFeeder Upper Strips - 4': () => dosomething(1),
      'ReferenceStripFeeder Lower Strips - 1': () => dosomething(1),
      'ReferenceStripFeeder Lower Strips - 2': () => dosomething(1),
      'ReferenceStripFeeder Lower Strips - 3': () => dosomething(1),
      'ReferenceStripFeeder Lower Strips - 4': () => dosomething(1),
      'ReferenceAutoFeeder ReferenceAutoFeeder': () => dosomething(2),
      'ReferenceTrayFeeder ReferenceTrayFeeder': () => dosomething(2),
      'ReferenceHead H1': () => alert('Action for ReferenceHead H1'),
      'ReferenceNozzle N1': () => alert('Action for ReferenceNozzle N1'),
      'ImageCamera Top': () => alert('Action for ImageCamera Top'),
      'ReferenceActuator LIGHT_TOP': () => alert('Action for ReferenceActuator LIGHT_TOP'),
      'ReferenceActuator PUMP': () => alert('Action for ReferenceActuator PUMP'),
      'ReferenceActuator A1': () => alert('Action for ReferenceActuator A1'),
      'SimulatedUpCamera Bottom': () => alert('Action for SimulatedUpCamera Bottom'),
      'ReferenceActuator LIGHT_BOTTOM': () => alert('Action for ReferenceActuator LIGHT_BOTTOM'),
      'NullDriver NullDriver': () => alert('Action for NullDriver NullDriver'),
      'ReferencePnpJobProcessor': () => alert('Action for ReferencePnpJobProcessor'),
      'Bottom Vision': () => alert('Action for Bottom Vision'),
      'Fiducal Locator': () => alert('Action for Fiducal Locator'),
  };

  const handleNodeClick = (node) => {
    handleToggle(node.label);
      if (!node.children) {
          const action = leafNodeActions[node.label];
          if (action) {
              action();
          } else {
              console.warn(`No action defined for leaf node: ${node.label}`);
          }
      }
  };


  const [expandedNodes, setExpandedNodes] = useState({ReferenceMachine: true});

  const handleToggle = (nodeLabel) => {
      setExpandedNodes((prevExpandedNodes) => ({
          ...prevExpandedNodes,
          [nodeLabel]: !prevExpandedNodes[nodeLabel],
      }));
  };

  const TreeNode = ({ node, isRoot }) => {
      const isExpanded = expandedNodes[node.label];

      return (
          <div className="tree-node">
              <div onClick={() => handleNodeClick(node)} className="node-label">
                  {node.children && (
                      <span onClick={(e) => { e.stopPropagation(); handleToggle(node.label); }} className="expand-icon">
                          {isExpanded ? '▼' : '▶'}
                      </span>
                  )}
                  {node.label}
              </div>
              {isExpanded && node.children && (
                  <div className="children">
                      {node.children.map((child, index) => (
                          <TreeNode key={index} node={child} isRoot={false} />
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
          { label: 'Signalers' },
          {
              label: 'Feeders',
              children: [
                  { label: 'ReferenceStripFeeder Upper Strips - 1' },
                  { label: 'ReferenceStripFeeder Upper Strips - 2' },
                  { label: 'ReferenceStripFeeder Upper Strips - 3' },
                  { label: 'ReferenceStripFeeder Upper Strips - 4' },
                  { label: 'ReferenceStripFeeder Lower Strips - 1' },
                  { label: 'ReferenceStripFeeder Lower Strips - 2' },
                  { label: 'ReferenceStripFeeder Lower Strips - 3' },
                  { label: 'ReferenceStripFeeder Lower Strips - 4' },
                  { label: 'ReferenceAutoFeeder ReferenceAutoFeeder' },
                  { label: 'ReferenceTrayFeeder ReferenceTrayFeeder' },
              ],
          },
          {
              label: 'Heads',
              children: [
                  { label: 'ReferenceHead H1' },
              ],
          },
          {
              label: 'Nozzle Tips',
              children: [
                  {
                      label: 'ReferenceNozzleTip NT1',
                      children: [
                          {
                              label: 'Nozzles',
                              children: [
                                  { label: 'ReferenceNozzle N1' },
                              ],
                          },
                          {
                              label: 'Cameras',
                              children: [
                                  { label: 'ImageCamera Top' },
                              ],
                          },
                          {
                              label: 'Actuators',
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
          {
              label: 'Cameras',
              children: [
                  { label: 'SimulatedUpCamera Bottom' },
              ],
          },
          {
              label: 'Actuators',
              children: [
                  { label: 'ReferenceActuator LIGHT_BOTTOM' },
              ],
          },
          {
              label: 'Drivers',
              children: [
                  { label: 'NullDriver NullDriver' },
              ],
          },
          {
              label: 'Job Processors',
              children: [
                  { label: 'ReferencePnpJobProcessor' },
              ],
          },
          {
              label: 'Vision',
              children: [
                  { label: 'Bottom Vision' },
                  { label: 'Fiducal Locator' },
              ],
          },
      ],
  };


    return (
        <div className="machinesetup">
            <div className='top-panel'>
                <TreeNode node={treeData} isRoot={true}/>
            </div>
            <div className="placement-header">Configuration</div>
            <div className={`bottom-panel ${activejob===0 ? '' : 'hide'}`}>
                
            </div>
            <div className={`bottom-panel ${activejob===1 ? '' : 'hide'}`}>
                <Configuration1/>
            </div>
            <div className={`bottom-panel ${activejob===2 ? '' : 'hide'}`}>
                <Configuration2/>
            </div>
        </div>
    );
};

export default Machinesetup;
