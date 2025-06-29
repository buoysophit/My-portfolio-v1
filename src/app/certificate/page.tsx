import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const certificates = [
  { id: 1, title: "Certificate 1", year: "2025", description: "Description for Certificate 1", type: "Award" },
  { id: 2, title: "Certificate 2", year: "2024", description: "Description for Certificate 2", type: "Education" },
  { id: 3, title: "Certificate 3", year: "2023", description: "Description for Certificate 3", type: "Career" },
  { id: 4, title: "Certificate 4", year: "2022", description: "Description for Certificate 4", type: "Award" },
  { id: 5, title: "Certificate 5", year: "2021", description: "Description for Certificate 5", type: "Education" },
];

const CertificatePage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-bold text-center mb-6 text-gradient">Certificates</h1>
      <p className="text-center text-lg text-gray-400 mb-8">A collection of my certifications and achievements</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <div key={certificate.id} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <CheckBadgeIcon className="h-6 w-6 text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-white">{certificate.title}</h2>
            </div>
            <p className="text-gray-400 text-sm mb-2">{certificate.year} • {certificate.type}</p>
            <p className="text-gray-300 text-sm">{certificate.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;
