# Next.js Frontend for REST API with Express.js, PostgreSQL, and JWT Authentication

This is a Next.js frontend application that interacts with a REST  API project. The backend REST API provides user registration, login, and profile access functionality using Express.js, PostgreSQL for database storage, JWT (JSON Web Token) for authentication, and bcrypt for password hashing.

## Important Note

Please note that this is a frontend application that relies on the backend REST API for functionality. The backend REST API repository can be found here: [REST API with Express.js, PostgreSQL, JWT Authentication](https://github.com/MuhammadFauziHanif/widya_knowledge_test)

The REST API project includes the following features:
- User registration with email, name, gender, and password
- User login with email and password
- JWT authentication for protected routes
- Fetch user profile data

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- The backend REST API server is running and accessible. You can find setup instructions in the API repository mentioned above.

## Installation

1. Clone this repository (Frontend):

   ```bash
   git clone https://github.com/MuhammadFauziHanif/widya-nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd widya-nextjs
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Once you are inside your project directory, you can run the development server using npm run dev:

   ```bash
   npm run dev
   ```

5. Open your web browser and go to http://localhost:3000/ or the URL provided by the development server to view and interact with your Next.js application.

## Usage

This Next.js frontend allows you to interact with the backend REST API. Here's how to use it:

### Register Page

To register a new user, visit the register page:

```
http://localhost:3000
```

- Fill in the registration form with the required information.
- Click the "Create an account" button to submit the registration.

### Login Page

To log in as a registered user, visit the login page:

```
http://localhost:3000/login
```

- Provide your email and password.
- Click the "Login" button to log in.

### Protected Routes

After successful login, you can access protected routes, such as the user profile page:

```
http://localhost:3000/profile
```

## Deployment

The live deployment of this Next.js frontend can be accessed at: [widya-nextjs-production.up.railway.app](https://widya-nextjs-production.up.railway.app)

## Styling with Tailwind CSS and HyperUI

This application is styled using Tailwind CSS and the HyperUI library. You can customize the styles by modifying the Tailwind CSS configuration files and HyperUI components as needed.

## Acknowledgment and Credit

Images used in this application are sourced from the [Karir section](https://widyawicara.com/karir/) of the [Widya Wicara website](https://www.widyawicara.com/). We acknowledge and credit Widya Wicara as the copyright owner of these images.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.