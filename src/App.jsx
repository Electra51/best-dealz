import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { router } from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}

export default App;