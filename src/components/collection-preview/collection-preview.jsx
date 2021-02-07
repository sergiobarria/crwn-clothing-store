import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })
          .slice(0, 4)}
      </div>
    </div>
  );
};

export default CollectionPreview;
