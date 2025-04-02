import { ThemeProvider } from "@/components/theme-provider.jsx";
import { ModeToggle } from "@/components/mode-toggle.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen flex justify-center items-center bg-background">
        <ModeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App;