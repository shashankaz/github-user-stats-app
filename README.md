# GitHub User Stats App

A React application to fetch and display GitHub user statistics including repositories, followers, following, and other profile details. The application uses the GitHub API and the TanStack Query for data fetching.

## Features

- Fetch and display GitHub user details such as avatar, bio, location, blog, and account age.
- Display public repositories, followers, and following with options to view details in a modal.
- Responsive design with a dark theme similar to GitHub's UI.

## Technologies Used

- React
- TanStack Query (React Query)
- Axios
- CSS

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashankaz/github-user-stats-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd github-user-stats-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

### Building for Production

1. Build the app for production:
   ```bash
   npm run build
   ```

2. The output will be in the `dist` directory.

## Project Structure

```
.github-user-stats/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Modal.jsx
│   │   ├── SearchForm.jsx
│   │   └── UserCard.jsx
│   ├── utils/
│   │   ├── api.js
│   │   └── helpers.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

### Components

- `UserCard.jsx`: Displays user details.
- `SearchForm.jsx`: Handles user input and form submission.
- `Modal.jsx`: Displays modals for followers, following, and repositories.

### Utils

- `api.js`: Contains functions for fetching data from the GitHub API.
- `helpers.js`: Contains helper functions such as calculating account age.

### Main Files

- `App.jsx`: Main application component.
- `main.jsx`: Entry point for the React application.
- `App.css`: Styles for the application.
