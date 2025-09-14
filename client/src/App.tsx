import { createContext, useState, type Dispatch, type SetStateAction } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyAdmin from "./components/VerfyAdmin";
import Home from "./components/Home";
import ClickSpark from "./components/ClickSpark";

interface AuthType {
  author: boolean;
  setAuthor: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthType>({
  author: window.localStorage.getItem("author") === "authorized",
  setAuthor: () => { }
});

const App = () => {

  const [author, setAuthor] = useState<boolean>(
    window.localStorage.getItem("author") === "authorized"
  );

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/admin", element: <VerifyAdmin /> }
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClickSpark
        sparkColor="#FF6900"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <AuthContext.Provider value={{ author, setAuthor }}>
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </ClickSpark>
    </ThemeProvider>
  )
}

export default App;
