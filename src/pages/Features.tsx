
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import InteractiveFeatureCard from "@/components/InteractiveFeatureCard";
import FeatureSection from "@/components/FeatureSection";
import { Upload, Activity, Bell, ArrowRight, BarChart3, Shield, Users, LineChart, Eye, Zap, BrainCircuit, AlertCircle, Cpu, Lock, Smartphone, Gauge, Clock, Database } from "lucide-react";

const Features = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-crowdai-blue to-crowdai-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the comprehensive capabilities of our crowd detection and analysis system.
          </p>
        </div>
      </section>
      
      {/* Interactive Feature Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InteractiveFeatureCard
              icon={<Upload className="h-6 w-6" />}
              title="Media Upload"
              description="Upload images or videos of crowds for detailed analysis and heatmap generation."
              onClick={() => navigate("/media-upload")}
            />
            
            <InteractiveFeatureCard
              icon={<Activity className="h-6 w-6" />}
              title="Heatmap Visualization"
              description="Advanced visualization of crowd density with customizable thresholds and alerts."
              onClick={() => navigate("/heatmap")}
            />
            
            <InteractiveFeatureCard
              icon={<Bell className="h-6 w-6" />}
              title="Alert System"
              description="Receive notifications when crowd density exceeds your specified thresholds."
              onClick={() => navigate("/dashboard")}
            />
          </div>
        </div>
      </section>
      
      {/* Features Sections */}
      <FeatureSection
        title="Real-Time Monitoring"
        description="Monitor crowd density and movement patterns in real-time with advanced computer vision."
        icon={<Eye className="h-8 w-8" />}
      >
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Live crowd density mapping with heat map visualization</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Directional flow analysis of crowd movement</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Automatic detection of unusually dense areas</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Multi-camera integration for comprehensive coverage</span>
          </li>
        </ul>
      </FeatureSection>
      
      <FeatureSection
        title="Advanced Analytics Dashboard"
        description="Access comprehensive analytics and visualizations to understand crowd behavior."
        icon={<BarChart3 className="h-8 w-8" />}
        reversed
      >
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Intuitive dashboard with customizable views</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Historical data comparison and trend analysis</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Exportable reports in multiple formats</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Custom KPIs and metrics configuration</span>
          </li>
        </ul>
      </FeatureSection>
      
      <FeatureSection
        title="AI-Powered Insights"
        description="Leverage machine learning algorithms that improve over time for increasingly accurate analytics."
        icon={<BrainCircuit className="h-8 w-8" />}
      >
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Behavioral pattern recognition and anomaly detection</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Continuous learning system that adapts to your venue</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Demographic insights (optional and privacy-compliant)</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Sentiment analysis for crowd mood estimation</span>
          </li>
        </ul>
      </FeatureSection>
      
      <FeatureSection
        title="Predictive Alerts"
        description="Receive proactive alerts when crowd conditions approach critical thresholds."
        icon={<AlertCircle className="h-8 w-8" />}
        reversed
      >
        <ul className="space-y-4 mb-6">
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Customizable alert thresholds based on venue capacity</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Multi-channel notifications (SMS, email, in-app)</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Escalation protocols for critical situations</span>
          </li>
          <li className="flex items-start">
            <span className="text-crowdai-blue mr-3">✓</span>
            <span>Predictive warnings based on trend analysis</span>
          </li>
        </ul>
      </FeatureSection>
      
      {/* Additional Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Additional Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our system includes a wide range of features designed to provide comprehensive crowd management solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Bell className="h-8 w-8 text-crowdai-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable Alerts</h3>
              <p className="text-gray-600">
                Create custom alert rules based on specific conditions or thresholds relevant to your venue.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Cpu className="h-8 w-8 text-crowdai-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Edge Computing</h3>
              <p className="text-gray-600">
                Process data on-site for faster response times and reduced bandwidth requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Lock className="h-8 w-8 text-crowdai-indigo mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Compliant</h3>
              <p className="text-gray-600">
                Built with privacy by design, ensuring compliance with GDPR and other privacy regulations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Smartphone className="h-8 w-8 text-crowdai-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Access</h3>
              <p className="text-gray-600">
                Monitor crowds and receive alerts on the go with our responsive mobile application.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Gauge className="h-8 w-8 text-crowdai-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
              <p className="text-gray-600">
                Track key performance indicators related to crowd management and operational efficiency.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="h-8 w-8 text-crowdai-indigo mb-4" />
              <h3 className="text-xl font-semibold mb-2">Historical Analysis</h3>
              <p className="text-gray-600">
                Access and analyze historical crowd data to identify patterns and optimize future operations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Database className="h-8 w-8 text-crowdai-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Integration</h3>
              <p className="text-gray-600">
                Integrate with existing systems through our comprehensive API and data connectors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-crowdai-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multi-User Access</h3>
              <p className="text-gray-600">
                Set different permission levels for various team members based on their roles.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Zap className="h-8 w-8 text-crowdai-indigo mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quick Deployment</h3>
              <p className="text-gray-600">
                Rapid setup process that gets your crowd detection system operational in minimal time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-crowdai-blue to-crowdai-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule a demo today to see CrowdAI's powerful features in action and discover how they can transform your crowd management approach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-block bg-white text-crowdai-blue hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Request a Demo
            </a>
            <a 
              href="/about/project" 
              className="inline-block bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Features;
