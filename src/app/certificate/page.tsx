import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { 
  CheckBadgeIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  BriefcaseIcon,
  ShieldCheckIcon,
  CalendarIcon,
  LinkIcon
} from "@heroicons/react/24/solid";

const BLUR_FADE_DELAY = 0.04;

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
    type: "Education",
    image: "/assets/certificate/3.png",
    issuer: "Amazon Web Services Training and Certification",
    issuedDate: "Dec 16, 2024",
    credentialId: "aws-clf-001-2024",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"]
  },
  { 
    id: 4, 
    title: "Professional Development Course", 
    year: "2022", 
    description: "Completion certificate for professional development and skill enhancement course", 
    type: "Education",
    image: "/assets/certificate/4.png",
    issuer: "Educational Institution",
    issuedDate: "Dec 1, 2022",
    credentialId: "cert-004-2022",
    skills: ["Professional Development", "Communication Skills"]
  },
  { 
    id: 5, 
    title: "Advanced Learning Certificate", 
    year: "2021", 
    description: "Certificate of completion for advanced learning and skill development course", 
    type: "Education",
    image: "/assets/certificate/5.png",
    issuer: "Educational Institution",
    issuedDate: "Nov 15, 2021",
    credentialId: "cert-005-2021",
    skills: ["Learning Strategies", "Skill Development"]
  },
  { 
    id: 6, 
    title: "Technical Training Certificate", 
    year: "2020", 
    description: "Certificate of completion for technical training and development program", 
    type: "Education",
    image: "/assets/certificate/6.png",
    issuer: "Training Institute",
    issuedDate: "Oct 10, 2020",
    credentialId: "cert-006-2020",
    skills: ["Technical Skills", "Problem Solving"]
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

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "Award":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Education":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Career":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Cybersecurity":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default:
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  }
};

export default function CertificatePage() {
  const categories = ["All", "Education", "Cybersecurity"];
  
  const certificatesByCategory = {
    Education: certificates.filter(cert => cert.type === "Education"),
    Cybersecurity: certificates.filter(cert => cert.type === "Cybersecurity"),
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      {/* Hero Section */}
      <section id="certificates-hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="flex flex-col space-y-4">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="font-bold text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Certificates & Achievements
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
                A showcase of my completed courses and learning achievements across various domains 
                including networking, cloud computing, and cybersecurity. Each certificate represents 
                my commitment to continuous learning and skill development.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="flex flex-wrap gap-3 mt-4">
                <Badge variant="secondary" className="text-sm">
                  <CheckBadgeIcon className="h-3 w-3 mr-1" />
                  {certificates.length} Certificates
                </Badge>
                <Badge variant="secondary" className="text-sm">Continuous Learning</Badge>
                <Badge variant="secondary" className="text-sm">Professional Development</Badge>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section id="certificate-stats">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">📊</span>
              Overview
            </h2>
          </BlurFade>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">{certificates.length}</div>
                  <div className="text-sm text-muted-foreground">Total Certificates</div>
                </CardContent>
              </Card>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-500">
                    {certificatesByCategory.Education.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Education & Training</div>
                </CardContent>
              </Card>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-red-500">
                    {certificatesByCategory.Cybersecurity.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Cybersecurity</div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* Recent Certificates */}
      <section id="recent-certificates">
        <div className="mx-auto w-full max-w-4xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              Recent Achievements
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates
              .sort((a, b) => new Date(b.issuedDate).getTime() - new Date(a.issuedDate).getTime())
              .slice(0, 4)
              .map((certificate, index) => (
                <BlurFade key={certificate.id} delay={BLUR_FADE_DELAY * (10 + index)}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                            {certificate.isExternal ? (
                              <Image
                                src={certificate.image}
                                alt={certificate.title}
                                width={48}
                                height={48}
                                className="object-contain"
                                unoptimized
                              />
                            ) : (
                              <Image
                                src={certificate.image}
                                alt={certificate.title}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {getTypeIcon(certificate.type)}
                            <Badge className={`text-xs ${getTypeBadgeColor(certificate.type)}`}>
                              {certificate.type}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-lg leading-tight mb-1">
                            {certificate.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {certificate.issuer}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <CalendarIcon className="h-3 w-3" />
                            {certificate.issuedDate}
                          </div>
                          {certificate.link && (
                            <div className="mt-3">
                              <a
                                href={certificate.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                              >
                                <LinkIcon className="h-3 w-3" />
                                View Certificate
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* All Certificates by Category */}
      <section id="all-certificates">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="font-bold text-3xl flex items-center gap-3">
              <span className="text-2xl">📜</span>
              All Certificates
            </h2>
          </BlurFade>

          {Object.entries(certificatesByCategory).map(([category, certs], categoryIndex) => {
            if (certs.length === 0) return null;
            
            return (
              <div key={category} className="space-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * (15 + categoryIndex)}>
                  <div className="flex items-center gap-3">
                    {getTypeIcon(category)}
                    <h3 className="text-2xl font-semibold">
                      {category}
                      <span className="text-sm text-muted-foreground ml-2">({certs.length})</span>
                    </h3>
                  </div>
                </BlurFade>

                <div className="space-y-4">
                  {certs.map((certificate, certIndex) => (
                    <BlurFade key={certificate.id} delay={BLUR_FADE_DELAY * (16 + categoryIndex * 2 + certIndex * 0.1)}>
                      <Card className="hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                                {certificate.isExternal ? (
                                  <Image
                                    src={certificate.image}
                                    alt={certificate.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                    unoptimized
                                  />
                                ) : (
                                  <Image
                                    src={certificate.image}
                                    alt={certificate.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-xl font-semibold">
                                  {certificate.title}
                                </h4>
                                <Badge className={`${getTypeBadgeColor(certificate.type)}`}>
                                  {certificate.year}
                                </Badge>
                              </div>
                              <p className="text-lg text-muted-foreground mb-2">
                                {certificate.issuer}
                              </p>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {certificate.description}
                              </p>
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CalendarIcon className="h-4 w-4" />
                                  Issued: {certificate.issuedDate}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <span className="font-medium">Credential ID:</span> {certificate.credentialId}
                                </div>
                                {certificate.skills && (
                                  <div className="flex flex-wrap gap-2">
                                    {certificate.skills.map((skill, skillIndex) => (
                                      <Badge key={skillIndex} variant="outline" className="text-xs">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                                {certificate.link && (
                                  <div>
                                    <a
                                      href={certificate.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                                    >
                                      <LinkIcon className="h-4 w-4" />
                                      View Certificate
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
