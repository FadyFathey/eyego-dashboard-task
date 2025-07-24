EyeGo AI Dashboard 🚀
<p align="center">
<img src="https://i0.wp.com/eyego.ai/wp-content/uploads/2023/12/cropped-eyego-logo-png-1-1.png?fit=810%2C935&ssl=1" alt="EyeGo Logo" width="150">
</p>

<p align="center">
A responsive and feature-rich dashboard application built with Next.js, TypeScript, and Firebase. It provides a user-friendly interface to manage and visualize user data, including authentication, a dynamic data table, and analytical charts.
</p>

<p align="center">
<a href="https://eyego-dashboard-task.vercel.app/signup"><strong>View Live Demo »</strong></a>
</p>

✨ Features
🔐 Authentication: Secure user authentication powered by Firebase (sign-up, login, logout, password reset).

🛡️ Protected Routes: Dashboard area is accessible only to authenticated users.

📊 Dynamic Data Table:

Displays user data in a clear and organized table.

Search: Real-time search to filter users by name.

Sorting: Sort data by name, role, or status.

Pagination: Easy navigation through large datasets.

💾 State Persistence: User preferences (search, sort, pagination) are saved to localStorage using Redux Toolkit.

📈 Data Visualization: Analytics page with a bar chart to visualize users per city, built with Recharts.

📱 Responsive Design: Fully responsive layout with a collapsible sidebar for a great experience on all devices.

🔔 Toast Notifications: User-friendly toast notifications for a better user experience.

🛠️ Tech Stack
<p align="left">
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
<img src="https://img.shields.io/badge/Recharts-8884d8?style=for-the-badge" alt="Recharts">
</p>

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18.0 or higher)

npm, yarn, or pnpm

Installation
Clone the repository:

git clone https://github.com/your-username/eyego-dashboard-task.git
cd eyego-dashboard-task

Install dependencies:

npm install
# or
yarn install
# or
pnpm install

Set up environment variables:

Create a .env.local file in the root of your project and add your Firebase project credentials:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_Messaginger_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

Run the development server:

npm run dev

Open http://localhost:3000 in your browser.

📂 Project Structure
eyego-dashboard-task/

public/ - Static assets

src/

app/ - Next.js App Router

api/ - API routes

dashboard/ - Protected dashboard routes

(auth)/ - Auth pages (login, signup)

layout.tsx - Root layout

components/ - Reusable React components

interfaces/ - TypeScript interfaces

lib/ - Firebase configuration

store/ - Redux Toolkit store

.env.local - Environment variables

next.config.ts - Next.js configuration

部署 (Deployment)
This application is ready to be deployed on Vercel.
