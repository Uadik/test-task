import React from 'react';
import getComponent from '../../helpers/getComponent';

import './Grid.css';

const GridComponent = props => {
  const { metadata } = props.schema;
  return (
    <div>
      <div className="grid">
        <div className="row">
          {metadata.components.map((component, index) => {
            return getComponent(component, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
