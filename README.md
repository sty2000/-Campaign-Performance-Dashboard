# Campaign Performance Dashboard
## Introduction

This project is a Campaign Performance Dashboard built using Vue 3 and TypeScript. The dashboard allows users to view detailed metrics of various advertising campaigns.

## Features

- Display campaign details including impressions, clicks, applications, and costs.
- Select and view specific campaign details.
- Toggle dark mode for better user experience.

## Setup and Installation

Follow these steps to set up and run the application:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-repository/campaign-dashboard.git
    cd campaign-dashboard
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

4. **Open your browser:**

    Navigate to `http://localhost:5173` to view the application.

## Usage

1. **Viewing Campaigns:**
   - Use the dropdown to select a campaign and view its details.
   
2. **Toggling Dark Mode:**
   - Use the toggle button to switch between light and dark modes.

## Design Decisions

### Functional Components

- **CampaignDetails.vue:** This component displays detailed metrics of the selected campaign.
- **VacancyDropdown.vue:** This component provides a dropdown to select a campaign.
- **useCampaignData.ts:** This composable function handles fetching and managing campaign data.

### State Management

- Used Vue's `ref` for reactive state management within components and composables.

### Dark Mode

- Implemented a dark mode toggle that adds/removes a `dark-mode` class on the root element.

## Navigation

The application is straightforward to navigate:

- **Dropdown:** Select a campaign to view its details.
- **Details View:** Displays metrics and allows for switching between different campaigns.
- **Dark Mode Toggle:** Switch between light and dark themes for better visibility.
