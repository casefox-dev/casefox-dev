import { Search, FileText, Zap, Users } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">CaseFox</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Your AI-Powered Legal Ally</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Navigate Indian Law with confidence and precision using our intelligent legal research platform.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Explore CaseFox
          </button>
        </div>
      </header>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard
              icon={<Search className="w-8 h-8 text-blue-500" />}
              title="Intelligent Search"
              description="Find relevant cases with pinpoint accuracy, saving hours of manual research time."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-500" />}
              title="AI-Powered Insights"
              description="Gain invaluable legal perspectives on any scenario concerning Indian law."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8 text-blue-500" />}
              title="Efficient Drafting"
              description="Generate and review legal documents with AI assistance for improved accuracy."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-500" />}
              title="Tailored Solutions"
              description="Customizable platform that scales to meet the needs of your legal practice."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Future of Legal Services</h2>
          <p className="mb-8 max-w-2xl mx-auto">Join the legal innovation revolution. Let CaseFox be your trusted ally in navigating the complexities of Indian law.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-full transition duration-300 ease-in-out">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Have questions? We&apos;re here to help.</p>
          <p className="font-medium">hello@casefox.in</p>
        </div>
      </footer>
    </div>
  )
}