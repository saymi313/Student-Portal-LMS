import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "Usairam Saeed",
        rollNumber: "2024-SE-101",
        enrollmentStatus: "Active",
        department: "Software Engineering",
        semester: "Spring 2024",
        email: "usairam.saeed@university.edu",
        contactNumber: "+92-300-1234567",
        address: "Islamabad, Pakistan",
        academicYear: "2024",
        cgpa: "3.85"
      },
      
      semesterData: [
        { semester: "Fall 2022", cgpa: 3.7 },
        { semester: "Spring 2023", cgpa: 3.8 },
        { semester: "Fall 2023", cgpa: 3.85 },
        { semester: "Spring 2024", cgpa: 3.9 }
      ],
      
      courses: [
        {
          id: 1,
          name: "Software Engineering",
          progress: 75,
          assignments: 10,
          completedAssignments: 7,
          grades: {
            midterm: 85,
            quizzes: 78,
            assignments: 88,
            final: 82
          }
        },
        {
          id: 2,
          name: "Database Systems",
          progress: 65,
          assignments: 8,
          completedAssignments: 5,
          grades: {
            midterm: 76,
            quizzes: 82,
            assignments: 79,
            final: 80
          }
        },
        {
          id: 3,
          name: "Web Technologies",
          progress: 90,
          assignments: 12,
          completedAssignments: 11,
          grades: {
            midterm: 92,
            quizzes: 88,
            assignments: 95,
            final: 90
          }
        },
        {
          id: 4,
          name: "Operating Systems",
          progress: 45,
          assignments: 6,
          completedAssignments: 2,
          grades: {
            midterm: 72,
            quizzes: 68,
            assignments: 75,
            final: 0
          }
        },
        {
          id: 5,
          name: "Computer Networks",
          progress: 80,
          assignments: 8,
          completedAssignments: 6,
          grades: {
            midterm: 88,
            quizzes: 85,
            assignments: 82,
            final: 86
          }
        },
        {
          id: 6,
          name: "Artificial Intelligence",
          progress: 60,
          assignments: 10,
          completedAssignments: 5,
          grades: {
            midterm: 78,
            quizzes: 72,
            assignments: 80,
            final: 0
          }
        }
      ],
      
      notifications: [
        {
          id: 1,
          title: "Assignment Due",
          message: "Database Systems assignment due in 2 days",
          read: false,
          date: "2024-03-20",
        },
        {
          id: 2,
          title: "Quiz Announcement",
          message: "Web Technologies quiz scheduled for next week",
          read: false,
          date: "2024-03-19",
        },
        {
          id: 3,
          title: "Course Material Update",
          message: "New lecture notes available for Software Engineering",
          read: true,
          date: "2024-03-18",
        }
      ],
      
      markNotificationAsRead: (notificationId) =>
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, read: true }
              : notification
          ),
        })),
        
      updateCourseProgress: (courseId, progress) =>
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === courseId
              ? { ...course, progress }
              : course
          ),
        })),
    }),
    {
      name: 'student-portal-storage',
    }
  )
)

export default useStore