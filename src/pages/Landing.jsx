import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-6xl font-bold mb-4">FAST UNIVERSITY</h1>
          <h2 className="text-4xl font-semibold mb-6">ISLAMABAD</h2>
          <h3 className="text-2xl mb-8">Student Portal</h3>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <Link
            to="/dashboard"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
          >
            Student Login
          </Link>
        </div>
      </div>
    </div>
  )
}