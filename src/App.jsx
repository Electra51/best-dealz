import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { router } from "./Routes/Routes";
import { useEffect, useState } from "react";
import SplashScreen from "./components/Common/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
    const hasVisited = sessionStorage.getItem("dealora_visited");
    if (hasVisited) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("dealora_visited", "true");
  };
  return (
   <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className={showSplash ? "hidden" : ""}>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1a1a24',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)'
            }
          }}
        />
      </div>
    </>
  );
}

export default App;