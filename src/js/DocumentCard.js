import React from 'react';
import { useNavigate } from 'react-router-dom'; // Alteração aqui
import '../css/DocumentCard.css';

function DocumentCard({ name, image }) {
  const navigate = useNavigate(); // Alteração aqui

  const handleClick = () => {
    navigate(`/document/${image}`); // Alteração aqui
  };

  return (
    <div className="document-card" onClick={handleClick}>
      <div className="document-name">{name}</div>
    </div>
  );
}

export default DocumentCard;
