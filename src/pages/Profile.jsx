import useStore from '../store/useStore'

export default function Profile() {
  const { user } = useStore()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Student Profile</h2>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-primary-600 px-6 py-4">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-600">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="ml-6 text-white">
              <h3 className="text-2xl font-bold">{user.name}</h3>
              <p className="text-primary-100">{user.department}</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Roll Number</label>
                <p className="mt-1 text-lg text-gray-900">{user.rollNumber}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Enrollment Status</label>
                <span className="mt-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {user.enrollmentStatus}
                </span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Semester</label>
                <p className="mt-1 text-lg text-gray-900">{user.semester}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">CGPA</label>
                <p className="mt-1 text-lg text-gray-900">{user.cgpa}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Email</label>
                <p className="mt-1 text-lg text-gray-900">{user.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Contact Number</label>
                <p className="mt-1 text-lg text-gray-900">{user.contactNumber}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Address</label>
                <p className="mt-1 text-lg text-gray-900">{user.address}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500">Academic Year</label>
                <p className="mt-1 text-lg text-gray-900">{user.academicYear}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}