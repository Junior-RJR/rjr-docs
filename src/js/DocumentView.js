import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/DocumentView.css';

function DocumentView() {
  const { image } = useParams();

  return (
    <div className="document-view-container">
      <img src={require(`../images/${image}`).default} alt={image} className="document-image" />
    </div>
  );
}

export default DocumentView;
