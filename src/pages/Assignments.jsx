import useStore from '../store/useStore'

export default function Assignments() {
  const { courses } = useStore()
  
  const allAssignments = courses.flatMap(course => {
    const pending = course.assignments - course.completedAssignments
    return Array(pending).fill(null).map((_, index) => ({
      id: `${course.id}-${index}`,
      courseName: course.name,
      title: `Assignment ${course.completedAssignments + index + 1}`,
      dueDate: new Date(Date.now() + (index + 1) * 86400000).toLocaleDateString(),
      status: 'Pending'
    }))
  })

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Pending Assignments</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {allAssignments.map((assignment) => (
            <li key={assignment.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{assignment.courseName}</p>
                  <p className="text-lg font-semibold text-gray-900">{assignment.title}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Due Date</p>
                  <p className="text-sm font-medium text-gray-900">{assignment.dueDate}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}