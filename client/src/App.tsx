import { createBrowserRouter, RouterProvider } from "react-router";

import { routes } from "./routes";

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
  },
});

function App() {
  return (
    <div className="font-notoSans">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
