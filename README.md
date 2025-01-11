# FAST Islamabad Portal

The **FAST Islamabad Portal** is a modern, intuitive, and highly functional platform designed to enhance the educational experience for students at FAST-NUCES Islamabad. It provides seamless navigation, efficient state management, and visually appealing UI/UX to revamp the traditional student portals.

---

## Features

### Dashboard
- **Central Hub**: Access all relevant information in one place.
- **Course Management**:
  - Switch between 6-8 enrolled courses.
  - View detailed course materials.
- **Assignment Tracking**:
  - Track deadlines for active assignments.
  - Mark assignments as complete to dynamically update progress statistics.
- **Progress Monitoring**:
  - Monitor overall course completion percentages.
  - Visualize progress through interactive graphs and charts based on:
    - Course completion percentages.
    - Assignment progress.
    - Deadlines met/missed.
- **Personalized Insights**:
  - Display active assignments, pending deadlines, and recent announcements with badge notifications.

### State Management
- Powered by **Zustand** for efficient and scalable state management.
- Persistent State:
  - Automatically remembers the last visited course or assignment.
  - Dynamically updates course completion and progress in real-time.
  - Maintains navigation context during session restarts.

### Notifications
- **Announcements**:
  - Appear with badges for easy visibility.
  - Students can mark notifications as read while preserving navigation state.

### Navigation
- Built with **React Router DOM**:
  - Smooth transitions between sections:
    - Courses
    - Overview
    - Assignments
    - Progress Tracker
    - Profile
  - Nested routing for better organization.
  - Functional "Back" buttons and history tracking.

### UI/UX Design
- Designed with **Tailwind CSS** for responsive and customizable styling.
- Modern, clean, and interactive interface with icons and visual aids.
- Graphical representation of data for enhanced user understanding.

### Data Visualizations
- Various interactive charts and graphs (using libraries like Chart.js or Recharts):
  - **Progress Graphs**: Compare course progress visually.
  - **Assignment Completion Trends**: Monitor how assignments are completed over time.
  - **Upcoming Deadlines**: Visualize deadlines to prioritize tasks effectively.
  - **Performance Statistics**: Graphs based on grades and task completion.

---

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   https://github.com/saymi313/Student-Portal-LMS.git
   cd STUDENT PORTAL
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev

   



