import useStore from '../store/useStore'

export default function Dashboard() {
  const { courses, notifications } = useStore()
  
  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  const totalAssignments = courses.reduce((acc, course) => acc + course.assignments, 0)
  const completedAssignments = courses.reduce((acc, course) => acc + course.completedAssignments, 0)
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-primary-100 rounded-md flex items-center justify-center">
                  <span className="text-primary-600 text-xl font-semibold">{Math.round(overallProgress)}%</span>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-gray-900">Overall Progress</h3>
                <p className="text-sm text-gray-500">Across all courses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center">
                  <span className="text-green-600 text-xl font-semibold">{courses.length}</span>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-gray-900">Active Courses</h3>
                <p className="text-sm text-gray-500">Currently enrolled</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-yellow-100 rounded-md flex items-center justify-center">
                  <span className="text-yellow-600 text-xl font-semibold">{completedAssignments}/{totalAssignments}</span>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-gray-900">Assignments</h3>
                <p className="text-sm text-gray-500">Completed vs Total</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-red-100 rounded-md flex items-center justify-center">
                  <span className="text-red-600 text-xl font-semibold">{notifications.filter(n => !n.read).length}</span>
                </div>
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Unread updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Courses</h3>
          <div className="space-y-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{course.name}</h4>
                  <div className="mt-1 w-48 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-500">{course.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Notifications</h3>
          <div className="space-y-4">
            {notifications.slice(0, 3).map((notification) => (
              <div key={notification.id} className="flex items-start">
                <div className={`w-2 h-2 mt-2 rounded-full ${notification.read ? 'bg-gray-300' : 'bg-red-500'}`} />
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                  <p className="text-sm text-gray-500">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}