import { ThemeProvider } from "@/components/theme-provider.jsx";
import LandingPage from "./pages/Landing-Page.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoginPage />
    </ThemeProvider>

  )
}

export default App;