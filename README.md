# TouristaTrek - Server Side

This server side is developed for the TouristaTrek website, your ultimate guide to exploring the diverse and vibrant region of Southeast Asia. The server handles backend operations, including user authentication, database interactions, and API integrations.

## Live Site URL
[TouristaTrek](https://inspiring-sprinkles-18cc70.netlify.app/)

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Heroku

## API Endpoints
### Authentication
- **Register User**
  - Endpoint: `/api/auth/register`
  - Method: `POST`
  - Description: Register a new user.
- **Login User**
  - Endpoint: `/api/auth/login`
  - Method: `POST`
  - Description: Login an existing user.

### Destinations
- **Get All Destinations**
  - Endpoint: `/api/destinations`
  - Method: `GET`
  - Description: Retrieve a list of all tourist destinations.
- **Get Destination by ID**
  - Endpoint: `/api/destinations/:id`
  - Method: `GET`
  - Description: Retrieve details of a specific destination by ID.
- **Add New Destination**
  - Endpoint: `/api/destinations`
  - Method: `POST`
  - Description: Add a new tourist destination.
- **Update Destination**
  - Endpoint: `/api/destinations/:id`
  - Method: `PUT`
  - Description: Update details of an existing destination.
- **Delete Destination**
  - Endpoint: `/api/destinations/:id`
  - Method: `DELETE`
  - Description: Delete a destination by ID.

### Booking
- **Get All Bookings**
  - Endpoint: `/api/bookings`
  - Method: `GET`
  - Description: Retrieve a list of all bookings.
- **Get Booking by ID**
  - Endpoint: `/api/bookings/:id`
  - Method: `GET`
  - Description: Retrieve details of a specific booking by ID.
- **Create Booking**
  - Endpoint: `/api/bookings`
  - Method: `POST`
  - Description: Create a new booking.
- **Update Booking**
  - Endpoint: `/api/bookings/:id`
  - Method: `PUT`
  - Description: Update details of an existing booking.
- **Delete Booking**
  - Endpoint: `/api/bookings/:id`
  - Method: `DELETE`
  - Description: Delete a booking by ID.

## How to Run Locally
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/touristatrek-server.git
for run this [sever side] run the command
[npm install]
[nodemon.index] in terminal
