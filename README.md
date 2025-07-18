# Dr.Tiles - Business Website

This project is a full-stack web application built to help a friend in Australia streamline his business quote requests. The platform allows users to submit detailed quote inquiries, which are then handled by an automated backend. It includes a modern frontend using Vite + React + Tailwind, and a custom-built backend using Node.js.

<img src="Cover.png" alt="Project Cover" />

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

Built as a real-world solution for a business in Australia, this project allows customers to submit quote requests for services through an easy-to-use UI. On submission, the data is passed to the backend server which triggers an email delivery workflow to notify the business owner.

---

## Tech Stack

### ⚙️ Frontend:
- React (Vite)
- TypeScript
- Tailwind CSS

### 🔧 Backend:
- Node.js
- Nodemailer (for email functionality)
- dotenv (for managing secrets)

---

## Folder Structure

``` 
project-root/
├── server/ # Backend Node.js service
│ ├── index.js # Main server logic
│ ├── .env # Environment variables
│ └── send_email.js # Email service handler
│
├── src/ # Frontend Vite + React + Tailwind
│ ├── App.tsx
│ ├── main.tsx
│ └── components/ # UI components
│
├── Cover.png # Project cover image
├── .gitignore
├── README.md
└── package.json
```

---

## Features

- Responsive React UI using Tailwind CSS
- Email form that sends structured quote requests to a specified inbox
- Secure backend using Node.js and environment variables
- Organized codebase for production-readiness
- Easily deployable on Render (backend) and Netlify (frontend)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SAMBHAV-240/Dr.Tiles.git
cd Dr.Tiles
```
# Install frontend dependencies
```
cd src
npm install
```

# Install backend dependencies
```
cd ../server
npm install
```

# Usage
Start the backend:
```
cd server
node index.js
```

# Start the frontend:
```
cd src
npm run dev
```

Frontend: http://localhost:5173

Backend: http://localhost:5000

---

## Deployment
This project is deployed using:

### Frontend: Netlify

### Backend: Render

Each service is configured to automatically deploy from GitHub.

---

## Contributing
If you'd like to contribute, fork the repo and submit a pull request. Bug fixes, feature ideas, and improvements are all welcome.

---

## License
This project is licensed under the MIT License.

---

## Contact
Sambhav  
GitHub: SAMBHAV-240  
Email: sambhavmangla240@email.com






