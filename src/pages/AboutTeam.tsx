
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  email: string;
  image?: string;
  linkedin?: string;
  github?: string;
}

const TeamMember = ({ name, role, bio, email, image, linkedin, github }: TeamMemberProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-48 bg-gradient-to-r from-crowdai-blue to-crowdai-purple flex items-center justify-center">
      {image ? (
        <img src={image} alt={name} className="h-32 w-32 rounded-full border-4 border-white" />
      ) : (
        <div className="h-32 w-32 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-crowdai-blue">
          {name.charAt(0)}
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-crowdai-blue mb-3">{role}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex space-x-3">
        <a href={`mailto:${email}`} className="text-gray-500 hover:text-crowdai-blue">
          <Mail className="h-5 w-5" />
        </a>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-crowdai-blue">
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-crowdai-blue">
            <Github className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const AboutTeam = () => {
  // Sample team data - replace with actual team information
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Johnson",
      role: "Project Lead & AI Specialist",
      bio: "Alex has over 10 years of experience in AI and machine learning, specializing in computer vision applications. He leads the overall development and strategic direction of CrowdAI.",
      email: "alex.johnson@crowdai.com",
      linkedin: "https://linkedin.com/in/alexjohnson"
    },
    {
      name: "Sophia Chen",
      role: "Computer Vision Engineer",
      bio: "Sophia is an expert in computer vision algorithms with a Ph.D. in Computer Science. She designs and optimizes the core detection models used in the CrowdAI system.",
      email: "sophia.chen@crowdai.com",
      github: "https://github.com/sophiachen"
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Developer",
      bio: "Marcus specializes in scalable backend systems and real-time data processing. He ensures CrowdAI can handle massive data volumes with minimal latency.",
      email: "marcus.rodriguez@crowdai.com",
      github: "https://github.com/marcusrod"
    },
    {
      name: "Priya Patel",
      role: "UX/UI Designer",
      bio: "Priya creates intuitive interfaces that make complex analytics accessible. Her design approach focuses on clarity and actionable insights for users of all technical levels.",
      email: "priya.patel@crowdai.com",
      linkedin: "https://linkedin.com/in/priyapatel"
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      bio: "David applies statistical methods and predictive modeling to enhance the accuracy of crowd analysis. He specializes in pattern recognition and anomaly detection.",
      email: "david.kim@crowdai.com",
      github: "https://github.com/davidkim"
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      bio: "Emma bridges the gap between technical development and client needs. She ensures CrowdAI delivers practical solutions to real-world crowd management challenges.",
      email: "emma.williams@crowdai.com",
      linkedin: "https://linkedin.com/in/emmawilliams"
    }
  ];

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-crowdai-purple to-crowdai-indigo text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The brilliant minds behind CrowdAI's innovative crowd detection and analysis system.
          </p>
        </div>
      </section>
      
      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Experts</h2>
            <p className="text-lg text-gray-700">
              CrowdAI brings together a diverse team of specialists in artificial intelligence, computer vision, software development, and industry-specific expertise. We're united by a passion for creating technology that enhances public safety and improves operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about AI, computer vision, and creating technology that makes a difference. Check out our open positions or send us your resume.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-crowdai-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutTeam;
