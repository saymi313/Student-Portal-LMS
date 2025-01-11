import useStore from '../store/useStore'

export default function Courses() {
  const { courses } = useStore()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-500">
                  Assignments: {course.completedAssignments}/{course.assignments}
                </span>
                <span className={course.progress >= 75 ? 'text-green-600' : 'text-yellow-600'}>
                  {course.progress >= 75 ? 'On Track' : 'Needs Attention'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}