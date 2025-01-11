import { useState } from 'react'
import useStore from '../store/useStore'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'

const progressTypes = [
  { value: 'overview', label: 'Overview' },
  { value: 'cgpa', label: 'CGPA History' },
  { value: 'assignments', label: 'Assignments Progress' },
  { value: 'grades', label: 'Course Grades' }
]

export default function Progress() {
  const { courses, semesterData } = useStore()
  const [selectedView, setSelectedView] = useState('overview')
  
  const overallProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  const totalAssignments = courses.reduce((acc, course) => acc + course.assignments, 0)
  const completedAssignments = courses.reduce((acc, course) => acc + course.completedAssignments, 0)

  const renderCGPAChart = () => (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">CGPA Progress</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={semesterData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis domain={[0, 4]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cgpa" stroke="#0284c7" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )

  const renderAssignmentsChart = () => (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Assignments Status</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={courses}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completedAssignments" name="Completed" fill="#0284c7" />
            <Bar dataKey="assignments" name="Total" fill="#bae6fd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )

  const renderGradesChart = () => (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Course Performance</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={courses.map(course => ({
            name: course.name,
            midterm: course.grades.midterm,
            quizzes: course.grades.quizzes,
            assignments: course.grades.assignments,
            final: course.grades.final || 0
          }))}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[0, 100]} />
            <Radar name="Midterm" dataKey="midterm" stroke="#0284c7" fill="#0284c7" fillOpacity={0.6} />
            <Radar name="Quizzes" dataKey="quizzes" stroke="#7dd3fc" fill="#7dd3fc" fillOpacity={0.6} />
            <Radar name="Assignments" dataKey="assignments" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
            <Radar name="Final" dataKey="final" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Overall Progress</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary-600">
                {Math.round(overallProgress)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
            <div
              style={{ width: `${overallProgress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Assignments</h3>
        <div className="text-center">
          <p className="text-3xl font-bold text-primary-600">
            {completedAssignments}/{totalAssignments}
          </p>
          <p className="text-sm text-gray-500 mt-2">Assignments Completed</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Course Status</h3>
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{course.name}</span>
                <span className="text-gray-900 font-medium">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-primary-600 h-1 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Progress Tracker</h2>
        <select
          value={selectedView}
          onChange={(e) => setSelectedView(e.target.value)}
          className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          {progressTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      
      {selectedView === 'overview' && renderOverview()}
      {selectedView === 'cgpa' && renderCGPAChart()}
      {selectedView === 'assignments' && renderAssignmentsChart()}
      {selectedView === 'grades' && renderGradesChart()}
    </div>
  )
}