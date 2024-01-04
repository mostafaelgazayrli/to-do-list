# Daily Planner Application

## Overview

This is a simple daily planner application written in JavaScript, HTML, and CSS. The application allows users to schedule their tasks for the day and persist the data using local storage. The color of each time block dynamically changes based on the current time of day.

## Features

- **Dynamic Color Coding**: Each time block is color-coded to indicate whether it is in the past, present, or future based on the current time.

- **Save Functionality**: Users can enter and save tasks for each hour of the day, and the data is stored in local storage for persistence.

- **Scroll to Top**: The application includes a "scroll to top" button that becomes visible as the user scrolls down the page.

## Usage

1. Open the `index.html` file in a web browser.

2. The current day is displayed at the top, and each hour has an associated time block with a description field for tasks.

3. Enter your tasks for each hour and click the corresponding "Save" button to store the data in local storage.

4. The color of each time block updates dynamically based on the current time.

5. Use the "scroll to top" button for easier navigation.

## Dependencies

- [jQuery](https://jquery.com/): Used for DOM manipulation and event handling.

- [dayjs](https://day.js.org/): Used for working with dates and times.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/daily-planner.git
cd daily-planner
