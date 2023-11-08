# TravelBuddy.io 🚗

A simple responsive React SPA for booking, providing, and exploring carpool and ride-sharing services!

### Technologies Used

[![Tech](https://skillicons.dev/icons?i=js,react,tailwind,firebase,nodejs,express,mongodb&theme=dark)](https://skillicons.dev)

### Features & Functionalities

- Discover all our services in the `Homepage` and click on the _view details_ button to view a specific service, or click the _show all_ button to browse all our services.
- The _show all_ button or the Navbar route link `All Services` takes you to the page where you can browse all services, search for specific services by name, or _view details_ for a certain service.
- The `Service Details` page is a protected route which means what only logged in users can view the service details and book a specific service through a modal form, if they want to.
- The manage bookings and services section of the website i.e. the dashboard is user protected, which means that it is only accessible in the navbar after a user logs in.
- In the dashboard are three routes:
  - `Add Services` where the user can add a service of their own, which is then posted to the All Services page, and can be booked by other users.
  - `Manage Services`: In this page, the user can edit information about their posted services or delete them entirely from the database.
  - The `My Schedules` page consists of two separate tables- one table shows all the services of other service providers which were booked by this user. And the other table shows all the services provided by the user, which have been booked by other people. Here, the user can also update the booking status from either of the three options: 'Pending', 'In Progress', and 'Completed'.
- Additionally, you have the option to view the website in dark mode to give your eyes some rest!

### Client Side Live Link:

[Firebase](https://travel-buddy-io.web.app/) : https://travel-buddy-io.web.app/
