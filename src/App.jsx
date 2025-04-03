import { ThemeProvider } from "@/components/theme-provider.jsx";
import LandingPage from "./pages/Landing-Page.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LandingPage />
    </ThemeProvider>
  )
}

export default App;