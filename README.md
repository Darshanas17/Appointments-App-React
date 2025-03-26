# Appointments App

## 🚀 Live Demo

[Click here to view the demo](https://Darshanas17.github.io/Appointments-App-React/)

## 📌 Overview

The **Appointments App** is a simple yet interactive React application that allows users to add, star, and filter their appointments efficiently. The app leverages React's state management to dynamically update the list of appointments and apply filters.


### ✅Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif" alt="appointments app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

## ✨ Features

- **Add Appointments:** Users can enter an appointment title and date, which will be added to the list.
- **Star Appointments:** Users can mark important appointments by clicking the star icon.
- **Filter Starred Appointments:** Users can filter and view only starred appointments.
- **Responsive Design:** The app is optimized for various screen sizes.

## 🛠️ Tech Stack

- **React.js** - Frontend UI
- **CSS** - Styling
- **date-fns** - Formatting dates

## ⚙️ Installation & Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Darshanas17/Appointments-App-React.git
   cd Appointments-App-React
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Application**
   ```bash
   npm start
   ```
4. Open the browser and visit `http://localhost:3000/` to see the app in action.

## 📁 Components Structure

The application consists of the following components:

- **Appointments** (`src/components/Appointments/`)
- **AppointmentItem** (`src/components/AppointmentItem/`)

## 🎯 Functionality

- The app starts with an empty list.
- Users can add new appointments using the input fields.
- Clicking on the **Star** icon marks an appointment as important.
- Clicking the **Starred** filter displays only starred appointments.

## 🎨 Design & Assets

- UI designed using **Roboto** font.
- Colors used:
  - `#9796f0` (Primary)
  - `#fbc7d4` (Accent)
  - `#171f46` (Text)
  - `#ffffff` (Background)
- Icons and images sourced from: [CCBP Assets](https://assets.ccbp.in/frontend/react-js/appointments-app/)

## 💡 Quick Tips

- Use `<input type="date" />` for date selection.
- Format dates using `format` from **date-fns**:
  ```js
  import { format } from "date-fns";
  console.log(format(new Date(2025, 2, 26), "dd MMMM yyyy, EEEE")); // 26 March 2025, Wednesday
  ```

## 👨‍💻 Author

**Darshan A S**

- [LinkedIn](https://www.linkedin.com/in/darshan-a-s/)
- [Portfolio](https://darshanas17.github.io/darshan-as-17-portfolio/)

## 📜 License

This project is licensed under the **MIT License**.
