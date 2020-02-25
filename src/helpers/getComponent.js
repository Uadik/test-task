import React from 'react';
import {
  GalleryComponent,
  GridComponent,
  RichTextComponent
} from '../components';

const getComponent = (component, index) => {
  switch (component.type) {
    case 'GalleryComponent': {
      return <GalleryComponent key={index} schema={component} />;
    }
    case 'GridComponent': {
      return <GridComponent key={index} schema={component} />;
    }
    case 'RichTextComponent': {
      return <RichTextComponent key={index} schema={component} />;
    }
    default: {
      return null;
    }
  }
};

export default getComponent;
