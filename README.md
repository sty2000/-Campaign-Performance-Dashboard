# Campaign Performance Dashboard
## Introduction

This project is a Campaign Performance Dashboard built using Vue 3 and TypeScript. The dashboard allows users to view detailed metrics of various advertising campaigns.

## Features

- Display campaign details including impressions, clicks, applications, and costs.
- Select and view specific campaign details.
- Toggle dark mode for better user experience.

## Setup and Installation
There are two ways you can access this page.
### 1. GitHub Pages
Please access [this link](https://sty2000.github.io/Campaign-Performance-Dashboard/) to view the live application. The webpage is already deployed using GitHub Pages.

### 2. Build from source code
Follow these steps to set up and run the application:

1. **Clone the repository:**

    ```sh
     git clone https://github.com/sty2000/Campaign-Performance-Dashboard.git
    cd Campaign-Performance-Dashboard
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
   - Use the return button to go back to main menu.
   
2. **Toggling Dark Mode:**
   - Use the toggle button to switch between light and dark modes.

## Design Decisions

### Functional Components

- **CampaignDetails.vue:** This component displays detailed metrics of the selected campaign.
- **VacancyDropdown.vue:** This component provides a dropdown to select a campaign.
- **useCampaignData.ts:** This composable function handles fetching and managing campaign data.

### State Management
State management in this application is handled using Vue 3's Composition API. The state and logic are encapsulated within a custom composable function `useCampaignData`. This approach allows us to define reactive state variables and methods to manage the application's state in a modular and reusable manner. The key state variables managed include:

- `campaigns`: Stores the list of campaigns.
- `selectedVacancy`: Stores the currently selected vacancy.
- `selectedCampaign`: Stores the currently selected campaign details.
- `isDarkMode`: Manages the dark mode state of the application.

The composable function provides methods to update and manage these states, such as displaying selected campaign data, resetting selections, toggling dark mode, and fetching campaign data on component mount.

### Responsiveness

The application is designed to be fully responsive, ensuring a seamless user experience across various devices and screen sizes. You can access [this link](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fsty2000.github.io%2FCampaign-Performance-Dashboard%2F&width=1400&height=700) to test its responsiveness.

### Bootstrap

Bootstrap is integrated into the project to leverage its robust CSS framework for styling and layout. Additionally, Bootstrap's grid system is utilized to create flexible and responsive layouts.

## References
- [Dropdown Documentation](https://terryz.github.io/docs-vue3/dropdown/)
- [Vue 3 and TypeScript](https://blog.csdn.net/weixin_44510200/article/details/136896422)
- [An Introduction to Vue 3 and TypeScript](https://dev.to/tqbit/an-introduction-to-vue-3-and-typescript-getting-started-32ne)
- [Best Solution to Build a Vue 3 TS Vite Project](https://stackoverflow.com/questions/70243658/what-is-the-best-solution-to-build-a-vue3-ts-vite-project)
- [Create Your Own Dark Mode Toggle Component with Vue.js](https://dev.to/tqbit/create-your-own-dark-mode-toggle-component-with-vue-js-1284)
- [How to Implement Dark/Light Mode in Vue 3](https://stackoverflow.com/questions/76579547/how-to-implement-dark-light-mode-in-vue3)
- [GitHub Pages](https://pages.github.com/)


