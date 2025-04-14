
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Shield, Users, LineChart, BrainCircuit, Camera, Server, Lightbulb } from "lucide-react";

const AboutProject = () => {
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-crowdai-blue to-crowdai-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Project</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the technology and vision behind CrowdAI's advanced crowd detection and analysis system.
          </p>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-crowdai-dark">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-6">
              CrowdAI is an innovative crowd detection and analysis system that leverages advanced artificial intelligence and computer vision technologies to monitor crowd densities, movement patterns, and behaviors in real-time.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our system was born out of the need for more effective crowd management solutions across various sectors including public safety, event management, retail, transportation, and urban planning. By providing accurate, real-time data and predictive insights, we enable organizations to make informed decisions that enhance safety, optimize operations, and improve user experiences.
            </p>
            <p className="text-lg text-gray-700">
              Developed by a team of AI specialists, computer vision experts, and industry professionals, CrowdAI represents the cutting edge in crowd analytics technology. Our commitment to continuous improvement ensures that our system evolves alongside emerging technologies and changing customer needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-crowdai-blue">Advanced Computer Vision</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our system employs state-of-the-art computer vision algorithms that can accurately identify and track individuals within crowds, even in challenging lighting conditions or partially obscured views.
              </p>
              <p className="text-lg text-gray-700">
                These algorithms are capable of distinguishing between different types of movement patterns, detecting anomalies, and providing accurate crowd density measurements across various environments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
              <Camera className="h-32 w-32 text-crowdai-blue" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
              <BrainCircuit className="h-32 w-32 text-crowdai-purple" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-crowdai-purple">Machine Learning & AI</h3>
              <p className="text-lg text-gray-700 mb-4">
                At the core of CrowdAI is a sophisticated machine learning engine that continuously improves its accuracy through exposure to diverse crowd scenarios and feedback mechanisms.
              </p>
              <p className="text-lg text-gray-700">
                Our AI can predict potential crowding issues before they occur, allowing for proactive management rather than reactive responses. The system learns from historical patterns and adapts to the unique characteristics of each venue or location.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-crowdai-indigo">Real-Time Processing</h3>
              <p className="text-lg text-gray-700 mb-4">
                CrowdAI processes video feeds in real-time, delivering immediate insights without significant latency. This capability is essential for time-sensitive applications such as emergency response or dynamic crowd control.
              </p>
              <p className="text-lg text-gray-700">
                Our edge computing architecture allows for processing to occur close to the data source, reducing bandwidth requirements and enhancing system responsiveness even in environments with limited connectivity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
              <Server className="h-32 w-32 text-crowdai-indigo" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Applications & Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-blue/10 rounded-md flex items-center justify-center mb-4 text-crowdai-blue">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
              <p className="text-gray-700">
                Monitor public spaces to detect unusual crowd behaviors, excessive densities, or potential safety hazards. Alert security personnel to areas requiring immediate attention.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-purple/10 rounded-md flex items-center justify-center mb-4 text-crowdai-purple">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Event Management</h3>
              <p className="text-gray-700">
                Optimize entry points, concession placements, and staff allocation based on real-time crowd data. Enhance attendee experience by reducing wait times and congestion.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-indigo/10 rounded-md flex items-center justify-center mb-4 text-crowdai-indigo">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retail Analytics</h3>
              <p className="text-gray-700">
                Track customer movement patterns throughout stores to optimize product placements and staffing. Measure conversion rates based on foot traffic compared to purchases.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-blue/10 rounded-md flex items-center justify-center mb-4 text-crowdai-blue">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transportation Hubs</h3>
              <p className="text-gray-700">
                Monitor passenger flow through terminals, stations, and airports to optimize schedules, staffing, and facility usage based on real-time demand.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-purple/10 rounded-md flex items-center justify-center mb-4 text-crowdai-purple">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Urban Planning</h3>
              <p className="text-gray-700">
                Collect data on pedestrian movement patterns to inform city planning decisions, optimize public space design, and improve infrastructure for pedestrian safety.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-crowdai-indigo/10 rounded-md flex items-center justify-center mb-4 text-crowdai-indigo">
                <ArrowRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                Our flexible system can be tailored to meet the unique requirements of various industries and use cases not listed above. Contact us to discuss your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Vision Section */}
      <section className="py-16 bg-crowdai-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-lg mb-6">
              We are committed to continuous innovation and improvement of our crowd detection and analysis system. Our roadmap includes enhanced predictive capabilities, integration with IoT devices, and expanded applications across new sectors.
            </p>
            <p className="text-lg">
              As AI technology evolves, so will CrowdAI, maintaining its position at the forefront of crowd analytics technology while prioritizing privacy, accuracy, and actionable insights for our clients.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutProject;
