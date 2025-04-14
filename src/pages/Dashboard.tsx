
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Dashboard = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectionResults, setDetectionResults] = useState<{
    count: number;
    density: number;
    densityLevel: "low" | "moderate" | "high";
  } | null>(null);

  const startLiveDetection = () => {
    setIsDetecting(true);
    
    // Simulate the detection process
    setTimeout(() => {
      // Random values for demonstration
      const count = Math.floor(Math.random() * 50) + 1;
      const density = Math.floor(Math.random() * 100);
      
      let densityLevel: "low" | "moderate" | "high";
      
      if (density < 30) {
        densityLevel = "low";
        toast({
          title: "Low Crowd Density Detected",
          description: "This area is not crowded. Kindly visit!",
          variant: "default",
        });
      } else if (density < 70) {
        densityLevel = "moderate";
        toast({
          title: "Moderate Crowd Density Detected",
          description: "This area has moderate crowds. You may visit.",
          variant: "default",
        });
      } else {
        densityLevel = "high";
        toast({
          title: "High Crowd Density Detected",
          description: "This area is very crowded. Don't visit!",
          variant: "destructive",
        });
      }

      setDetectionResults({
        count,
        density,
        densityLevel
      });
      
      setIsDetecting(false);
    }, 3000);
  };

  return (
    <>
      <NavBar />
      
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Live Crowd Detection</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-100 rounded-lg h-[400px] flex items-center justify-center">
            {isDetecting ? (
              <div className="flex flex-col items-center">
                <Loader2 className="h-12 w-12 text-crowdai-blue animate-spin" />
                <p className="mt-4 text-gray-600">Processing camera feed...</p>
              </div>
            ) : detectionResults ? (
              <div className="w-full h-full p-4">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0" style={{
                    background: `linear-gradient(to bottom, 
                      ${detectionResults.densityLevel === "high" ? "rgba(239, 68, 68, 0.7)" : 
                        detectionResults.densityLevel === "moderate" ? "rgba(245, 158, 11, 0.7)" : 
                        "rgba(34, 197, 94, 0.7)"}, 
                      transparent)`,
                  }}></div>
                  
                  {/* Simulated detection visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-bold text-2xl drop-shadow-lg">
                      {detectionResults.densityLevel === "high" ? "HIGH DENSITY" : 
                       detectionResults.densityLevel === "moderate" ? "MODERATE DENSITY" : 
                       "LOW DENSITY"}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No camera feed active</p>
                <Button onClick={startLiveDetection}>
                  Start Camera Detection
                </Button>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Detection Results</h2>
              
              {detectionResults ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">People Count</p>
                    <p className="text-2xl font-bold">{detectionResults.count}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Crowd Density</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-1">
                      <div 
                        className={`h-2.5 rounded-full ${
                          detectionResults.densityLevel === "high" ? "bg-red-500" : 
                          detectionResults.densityLevel === "moderate" ? "bg-amber-500" : "bg-green-500"
                        }`}
                        style={{ width: `${detectionResults.density}%` }}
                      ></div>
                    </div>
                    <p className="text-sm">{detectionResults.density}%</p>
                  </div>
                  
                  <Alert className={
                    detectionResults.densityLevel === "high" ? "border-red-500 bg-red-50" : 
                    detectionResults.densityLevel === "moderate" ? "border-amber-500 bg-amber-50" : 
                    "border-green-500 bg-green-50"
                  }>
                    <AlertTriangle className={
                      detectionResults.densityLevel === "high" ? "text-red-500" : 
                      detectionResults.densityLevel === "moderate" ? "text-amber-500" : 
                      "text-green-500"
                    } />
                    <AlertTitle>{
                      detectionResults.densityLevel === "high" ? "High Density Alert" : 
                      detectionResults.densityLevel === "moderate" ? "Moderate Density Notice" : 
                      "Low Density Information"
                    }</AlertTitle>
                    <AlertDescription>{
                      detectionResults.densityLevel === "high" ? "This area is very crowded. Don't visit!" : 
                      detectionResults.densityLevel === "moderate" ? "This area has moderate crowds. You may visit." : 
                      "This area is not crowded. Kindly visit!"
                    }</AlertDescription>
                  </Alert>
                </div>
              ) : (
                <p className="text-gray-500 italic">No detection data available</p>
              )}
            </div>
            
            <Button 
              onClick={startLiveDetection} 
              disabled={isDetecting}
              className="w-full"
            >
              {isDetecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {detectionResults ? "Run Detection Again" : "Start Detection"}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;
