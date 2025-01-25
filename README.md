# React Native Authentication App

A simple React Native app with Login and Signup screens, featuring form validation, state management, and navigation. This app demonstrates a basic user authentication flow and includes a CI/CD pipeline for automated linting, testing, and building Android/iOS apps.

## Features

- **Authentication Screens**
  - Login screen with email and password fields
  - Signup screen with email, password, and confirm password fields

- **Form Validation**
  - Validates email format and password requirements
  - Password matching on the Signup screen

- **State Management**
  - Context API for managing user authentication state

- **Navigation**
  - React Navigation for screen-to-screen navigation

- **CI/CD Integration**
  - GitHub Actions pipeline for linting, testing, and building Android and iOS apps

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI installed globally:
  ```bash
  npm install -g expo-cli
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ReactNativeAuthApp.git
   cd ReactNativeAuthApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```

4. Launch the app:
   - Use Expo Go app to scan QR code (Android/iOS)
   - Press `a` for Android emulator
   - Press `i` for iOS emulator

## Project Structure

```
my-app/
├── components/    # Reusable UI components
├── context/       # Context API setup
└── App.js         # Main app entry point
```

## Scripts

- Start development server: 
  ```bash
  npm start
  ```
- Run linting: 
  ```bash
  npm run lint
  ```
- Run tests: 
  ```bash
  npm test
  ```

## CI/CD Pipeline

### Pipeline Details

1. **Triggers**
   - On every `push` or `pull_request` to `main` branch

2. **Jobs**
   - **Lint**: Ensures code quality using ESLint
   - **Test**: Executes unit tests using Jest
   - **Build**: Generates Android APK and iOS IPA files using Expo

## Dependencies

- **React Native**: Cross-platform app framework
- **Expo**: React Native development simplification
- **React Navigation**: Screen navigation
- **React Native Paper**: UI components
- **Context API**: Global state management

Install dependencies:
```bash
npm install
```

## Contributing

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to fork:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request

## License

MIT License
