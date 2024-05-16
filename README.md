# React User List

This project is a simple React application that generates a list of users and displays them in a table. It uses the `react-virtuoso` library to efficiently render the list.

## Project Structure

- `App.tsx`: This is the main component of the application. It manages the state of the user list and handles the fetching of new users when the end of the list is reached. It also includes a button to randomly scroll through the list.
- `UserCard.tsx`: This component represents a single user in the list. It receives a user object as a prop and displays the user's ID and name in a table row.
- `user.ts`: This module exports a function to generate an array of user objects, and the type definition for a user object.
- `main.tsx`: This is the entry point of the application. It renders the `App` component into the root element of the HTML document.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/react-user-list.git
cd react-user-list
npm install
```
