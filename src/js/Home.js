import React from 'react';
import '../css/Home.css';
import DocumentCard from './DocumentCard';

const documents = [
  { name: 'CNH', image: 'cnh.png' },
  { name: 'Convênio Médico', image: 'convenio.png' }
];

function Home() {
  return (
    <div className="home-container">
      {documents.map((doc, index) => (
        <DocumentCard key={index} name={doc.name} image={doc.image} />
      ))}
    </div>
  );
}

export default Home;
