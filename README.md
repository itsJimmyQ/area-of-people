# Frontend assignment for the position of Frontend Developer at Area of People

## Goal

We are building a site for listing popular NPM libraries. The end-user would be a developer who wants to learn more about commonly used libraries and see some details about them.

We explicitly left the expected end result a bit vague so you can show us your creativity and skills.

We are most interested in how you structure your code and how you make it a nice user experience.

Please spend no more than 2-3 hours on this assigment.

Do not worry about automated tests.

## Technical details

This project contains a standard React application setup with Typescript and TailwindCSS.

### Use of external libraries

You have the freedom to use any library or tool you want to achieve the goal. The only requirement is that the project should be a React application. Pull in any libraries you prefer to use and see fit. 

You are also free to modify any part of the project setup if you feel like it.

### Data

The API for getting the library data is integrated into the frontend using MockServiceWorker. You don't need to start it manually, it starts when you run the frontend application. As a simple test you can run `fetch('/libraries')` in the browser console to see the response.

You can access the Typescript types for these endpoints from `src/api/types.ts` file.

List endpoint:

- `GET /libraries` - returns a list of libraries
- `GET /libraries?search=...` - returns a list of libraries that match the search query

Details endpoint:

- `GET /libraries/:id` - returns the details for the library with the given ID

## Achievements

- [ ] Fetch the list of NPM libraries from the API and display them in a list

  _Again, feel free to pull in any library you want to use for fetching the data_

- [ ] When clicking an item, display more details about the library

  _Details are fetched from the API by library ID._

- [ ] Include a graph for the downloads for the last seven days for a library

  _You can use any library you want to display the graph. The data for the graph is available in the library details response._

- [ ] Implement a search functionality to filter the list of libraries

### Bonus points

- [ ] Nice UX / UI
- [ ] Think about loading states / error handling
- [ ] Graph has hover states to show the day and number of downloads
- [ ] Transitions/animations
- [ ] Good component structure
