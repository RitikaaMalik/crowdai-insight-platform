
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedText from "@/components/AnimatedText";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Shield, Users, LineChart, Eye, Zap, BrainCircuit } from "lucide-react";

const Index = () => {
  // Add a class to the body for the landing page
  useEffect(() => {
    document.body.classList.add('landing-page');
    
    return () => {
      document.body.classList.remove('landing-page');
    };
  }, []);

  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-crowdai-dark to-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 h-36"> {/* Fixed height for animated text container */}
            <AnimatedText
              texts={[
                {
                  text: <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-crowdai-blue to-crowdai-purple">Crowd Detection System</span> and Analysis</h1>,
                  className: "block"
                },
                {
                  text: <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">Monitor crowd density in real-time with advanced AI technology. Make data-driven decisions for safety and efficiency.</p>,
                  className: "block"
                }
              ]}
              interval={4000}
              fadeTime={800}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button className="bg-crowdai-blue hover:bg-blue-700 text-white px-6 py-6 rounded-md text-lg font-medium">
              Try Now
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-6 py-6 rounded-md text-lg font-medium">
              <Link to="/about/project">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our crowd detection system combines cutting-edge AI with intuitive interfaces to deliver actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Eye className="h-6 w-6" />}
              title="Real-Time Monitoring"
              description="Monitor crowd density and movement patterns in real-time with our advanced computer vision algorithms."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Analytics Dashboard"
              description="Access comprehensive analytics and visualizations to understand crowd behavior and make informed decisions."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Predictive Alerts"
              description="Receive proactive alerts when crowd conditions approach critical thresholds to prevent safety issues."
            />
            <FeatureCard
              icon={<BrainCircuit className="h-6 w-6" />}
              title="AI-Powered Insights"
              description="Leverage machine learning algorithms that improve over time to deliver increasingly accurate analytics."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-crowdai-blue text-crowdai-blue hover:bg-crowdai-blue/10">
              <Link to="/features">
                Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How CrowdAI Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system uses a simple but powerful approach to transform raw video feeds into actionable insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-crowdai-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crowdai-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">
                Connect your existing cameras or install our specialized sensors to capture high-quality video feeds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-crowdai-indigo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crowdai-indigo">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze the feeds in real-time, detecting crowd density, movement patterns, and anomalies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-crowdai-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-crowdai-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-600">
                Receive detailed analytics, alerts, and recommendations through our intuitive dashboard interface.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how CrowdAI has transformed operations for organizations across various sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              content="The CrowdAI system has completely transformed how we manage event security. The real-time alerts have helped us prevent several potential safety incidents."
              author="Sarah Johnson"
              role="Head of Security, Metro Events"
            />
            <TestimonialCard
              content="As a shopping mall manager, understanding customer flow patterns has always been challenging. CrowdAI provides insights that have helped us optimize store layouts and staffing."
              author="Michael Chen"
              role="Operations Director, Westside Mall"
            />
            <TestimonialCard
              content="The predictive analytics have been a game-changer for our transit system. We can now anticipate crowding before it happens and adjust our services accordingly."
              author="David Rodriguez"
              role="CTO, Urban Transport Authority"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-crowdai-blue text-crowdai-blue hover:bg-crowdai-blue/10">
              <Link to="/testimonial">
                Read More Testimonials <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-crowdai-blue to-crowdai-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Crowd Management?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join organizations around the world who are making data-driven decisions with CrowdAI's advanced crowd detection system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-crowdai-blue hover:bg-gray-100 px-6 py-6 rounded-md text-lg font-medium">
              Get Started Now
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white hover:bg-white/10 px-6 py-6 rounded-md text-lg font-medium">
              <Link to="/contact">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
