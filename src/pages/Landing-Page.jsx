import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PenLine, BookOpen, Heart, Feather } from "lucide-react";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-hindi">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-slate-50 mb-6">
              काव्यधारा
            </h1>
            <p className="text-2xl text-slate-200 mb-8">
              अपनी कविताओं को लिखें, पढ़ें और साझा करें। हिंदी साहित्य की एक नई यात्रा।
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                लेखन शुरू करें
                <PenLine className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-slate-800/40 hover:bg-slate-800/60 text-white border-slate-600">
                और जानें
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24 bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
            <PenLine className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-slate-900">लिखें</h3>
            <p className="text-slate-600">
              अपनी भावनाओं को शब्दों में पिरोएं। हमारा एडिटर आपकी रचनात्मकता को नई ऊंचाइयों तक ले जाएगा।
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-slate-900">पढ़ें</h3>
            <p className="text-slate-600">
              हज़ारों कवियों की रचनाओं का आनंद लें। नई विचारधाराओं और कहानियों की खोज करें।
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-slate-200">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-slate-900">साझा करें</h3>
            <p className="text-slate-600">
              अपनी कविताओं को दुनिया के साथ साझा करें। प्रतिक्रियाएं प्राप्त करें और समुदाय से जुड़ें।
            </p>
          </Card>
        </div>
      </div>

      {/* Featured Poem Section */}
      <div className="bg-slate-100 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Feather className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-semibold mb-8 text-slate-900">आज की विशेष रचना</h2>
            <Card className="p-8 text-left border-slate-200">
              <p className="text-lg mb-4 leading-relaxed text-slate-800">
                "जीवन की राहों पर चलते हुए,<br />
                कभी थक कर रुक जाते हैं।<br />
                फिर नई उमंग से भर कर,<br />
                नए सपने बुन जाते हैं।"
              </p>
              <p className="text-right text-slate-600">- रमेश कुमार</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-slate-600">© 2025 काव्यधारा। सर्वाधिकार सुरक्षित।</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-600 hover:text-slate-900">नियम और शर्तें</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">गोपनीयता नीति</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">संपर्क करें</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;