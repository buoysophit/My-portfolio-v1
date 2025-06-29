"use client";
import React, { useState } from "react";
import { 
  CheckBadgeIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  BriefcaseIcon,
  ShieldCheckIcon,
  CalendarIcon,
  LinkIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";

interface Certificate {
  id: number;
  title: string;
  year: string;
  description: string;
  type: string;
  image: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  skills: string[];
  link?: string;
  isExternal?: boolean;
}

const certificates: Certificate[] = [
  { 
    id: 1, 
    title: "CCNA: Introduction to Networks", 
    year: "2023", 
    description: "Cisco verifies the earner of this badge successfully completed the CCNA: Introduction to Networks course and achieved this student level credential.", 
    type: "Education",
    image: "/assets/certificate/1.png",
    issuer: "Cisco",
    issuedDate: "Aug 31, 2023",
    credentialId: "e32e7008-b9df-4016-ace3-864d27511b43",
    skills: ["Ethernet", "IP connectivity", "IP services", "Network Fundamentals", "Switching"]
  },
  { 
    id: 2, 
    title: "CCNA: Enterprise Networking, Security, and Automation", 
    year: "2024", 
    description: "Cisco verifies the earner of this badge successfully completed the CCNA: Enterprise Networking course.", 
    type: "Education",
    image: "/assets/certificate/2.png",
    issuer: "Cisco",
    issuedDate: "Aug 6, 2024",
    credentialId: "f43e8109-c0ef-5027-bdf4-975d38622c54",
    skills: ["Enterprise Networking", "Security", "Automation"]
  },
  { 
    id: 3, 
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations", 
    year: "2024", 
    description: "AWS Academy Graduate - AWS Academy Cloud Foundations completion certificate.", 
    type: "Career",
    image: "/assets/certificate/3.png",
    issuer: "Amazon Web Services Training and Certification",
    issuedDate: "Dec 16, 2024",
    credentialId: "aws-clf-001-2024",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"]
  },
  { 
    id: 4, 
    title: "Certificate 4", 
    year: "2022", 
    description: "Description for Certificate 4", 
    type: "Award",
    image: "/assets/certificate/4.png",
    issuer: "Organization Name",
    issuedDate: "Dec 1, 2022",
    credentialId: "cert-004-2022",
    skills: ["Professional Development"]
  },
  { 
    id: 5, 
    title: "Certificate 5", 
    year: "2021", 
    description: "Description for Certificate 5", 
    type: "Education",
    image: "/assets/certificate/5.png",
    issuer: "Organization Name",
    issuedDate: "Nov 15, 2021",
    credentialId: "cert-005-2021",
    skills: ["Learning", "Development"]
  },
  { 
    id: 6, 
    title: "Certificate 6", 
    year: "2020", 
    description: "Description for Certificate 6", 
    type: "Career",
    image: "/assets/certificate/6.png",
    issuer: "Organization Name",
    issuedDate: "Oct 10, 2020",
    credentialId: "cert-006-2020",
    skills: ["Career Development"]
  },
  { 
    id: 8, 
    title: "TryHackMe Certificate", 
    year: "2025", 
    description: "Cybersecurity learning path completion certificate from TryHackMe", 
    type: "Cybersecurity",
    image: "https://tryhackme-badges.s3.amazonaws.com/bouysophit11.png",
    link: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-MR1UMYHXJZ.pdf",
    isExternal: true,
    issuer: "TryHackMe",
    issuedDate: "Jan 15, 2025",
    credentialId: "THM-MR1UMYHXJZ",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security"]
  },
];

const CertificatePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Education", "Career", "Award", "Cybersecurity"];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Award":
        return <TrophyIcon className="h-4 w-4 text-yellow-500" />;
      case "Education":
        return <AcademicCapIcon className="h-4 w-4 text-blue-500" />;
      case "Career":
        return <BriefcaseIcon className="h-4 w-4 text-purple-500" />;
      case "Cybersecurity":
        return <ShieldCheckIcon className="h-4 w-4 text-red-500" />;
      default:
        return <CheckBadgeIcon className="h-4 w-4 text-green-500" />;
    }
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const filteredCertificates = selectedCategory === "All" 
    ? certificates 
    : certificates.filter(cert => cert.type === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Certificates & Badges</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            A showcase of my professional certifications, achievements, and continuous learning journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedCategory === "All" 
                ? "bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500" 
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            <div className="text-3xl font-bold">{certificates.length}</div>
            <div className="opacity-70 text-sm">Total Certificates</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedCategory === "Award" 
                ? "bg-yellow-100 dark:bg-yellow-900 ring-2 ring-yellow-500" 
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
            onClick={() => setSelectedCategory("Award")}
          >
            <div className="text-3xl font-bold">
              {certificates.filter(c => c.type === "Award").length}
            </div>
            <div className="opacity-70 text-sm">Awards</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedCategory === "Education" 
                ? "bg-blue-100 dark:bg-blue-900 ring-2 ring-blue-500" 
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
            onClick={() => setSelectedCategory("Education")}
          >
            <div className="text-3xl font-bold">
              {certificates.filter(c => c.type === "Education").length}
            </div>
            <div className="opacity-70 text-sm">Education</div>
          </div>
          <div 
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedCategory === "Cybersecurity" 
                ? "bg-red-100 dark:bg-red-900 ring-2 ring-red-500" 
                : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
            }`}
            onClick={() => setSelectedCategory("Cybersecurity")}
          >
            <div className="text-3xl font-bold">
              {certificates.filter(c => c.type === "Cybersecurity").length}
            </div>
            <div className="opacity-70 text-sm">Cybersecurity</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4">
            {selectedCategory === "All" ? "All Certificates" : `${selectedCategory} Certificates`}
            <span className="text-sm opacity-70 ml-2">({filteredCertificates.length})</span>
          </h2>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <div 
              key={certificate.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg dark:shadow-gray-700/20 dark:hover:shadow-gray-700/30 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => openModal(certificate)}
            >
              {/* Badge Image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-8 flex items-center justify-center h-64">
                {certificate.isExternal ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="max-w-[140px] max-h-[140px] object-contain"
                  />
                ) : (
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={140}
                    height={140}
                    className="object-contain"
                  />
                )}
              </div>

              {/* Badge Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2 leading-6">
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 font-medium">
                  {certificate.issuer}
                </p>

                {/* Issue Date */}
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <span>Issued {certificate.issuedDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No certificates found in this category.
            </div>
          </div>
        )}

        {/* Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Badge Details</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Badge Image */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg">
                    {selectedCertificate.isExternal ? (
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="w-32 h-32 object-contain"
                      />
                    ) : (
                      <Image
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        width={128}
                        height={128}
                        className="object-contain"
                      />
                    )}
                  </div>
                </div>

                {/* Badge Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                {/* Badge Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Description</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Issuing Date</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{selectedCertificate.issuedDate}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Expiration Date</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">This credential does not expire</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">Credential ID</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">{selectedCertificate.credentialId}</p>
                  </div>

                  {selectedCertificate.skills && (
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Actions */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={closeModal}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    Close
                  </button>
                  <div className="flex gap-3">
                    {selectedCertificate.link && (
                      <a 
                        href={selectedCertificate.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        View Certificate
                      </a>
                    )}
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Share Badge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
