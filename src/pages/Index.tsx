
import EnhancedNavbar from "@/components/EnhancedNavbar";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <EnhancedNavbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">All Projects</h1>
          {/* Project list would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for project cards */}
            <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
