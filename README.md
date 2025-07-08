# Minimal NestJS Backend

A lightweight NestJS backend application with integrated CI/CD pipeline, Docker containerization, and SonarQube code quality analysis - designed for testing purposes.

## Features

- ✅ **Minimal NestJS Setup**: Basic application with health check endpoints
- 🐳 **Docker Integration**: Multi-stage Dockerfile for optimized production builds
- 🔄 **GitHub Actions CI/CD**: Automated testing, building, and deployment
- 📊 **SonarQube Integration**: Code quality analysis and coverage reporting
- 🧪 **Testing Suite**: Unit tests and E2E tests with Jest
- 🔒 **Security Scanning**: Trivy vulnerability scanner for Docker images
- 📦 **Container Registry**: Automated Docker image publishing to GitHub Container Registry

## Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Docker (optional, for containerization)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run start:dev
   ```

3. **Access the application**
   - Main endpoint: http://localhost:3000
   - Health check: http://localhost:3000/health
   - Version info: http://localhost:3000/version

### Available Scripts

```bash
# Development
npm run start:dev      # Start in watch mode
npm run start:debug    # Start in debug mode

# Building
npm run build          # Build for production
npm run start:prod     # Start production build

# Testing
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:e2e       # Run E2E tests

# Code Quality
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## Docker Usage

### Build Docker Image

```bash
docker build -t minimal-nestjs-backend .
```

### Run Container

```bash
docker run -p 3000:3000 minimal-nestjs-backend
```

### Using Docker Compose (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Then run:
```bash
docker-compose up
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. **Tests**: Runs linting, unit tests, and E2E tests
2. **Builds**: Creates production build
3. **Docker**: Builds and pushes multi-platform Docker images
4. **Security**: Scans for vulnerabilities with Trivy
5. **Quality**: Analyzes code with SonarQube (on main branch)

### Required Secrets

Configure these secrets in your GitHub repository:

- `SONAR_TOKEN`: SonarQube authentication token
- `SONAR_HOST_URL`: SonarQube server URL

### Container Registry

Docker images are automatically published to GitHub Container Registry:
```bash
ghcr.io/[username]/[repository]:latest
```

## SonarQube Setup

### Self-hosted SonarQube

1. **Run SonarQube with Docker**
   ```bash
   docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
   ```

2. **Create a project** in SonarQube UI
3. **Generate a token** for the project
4. **Add secrets** to GitHub repository settings

### SonarCloud (Alternative)

1. Go to [SonarCloud](https://sonarcloud.io)
2. Import your GitHub repository
3. Get the project key and token
4. Update `sonar-project.properties` with your project key

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Welcome message |
| GET    | `/health` | Health check with system info |
| GET    | `/version` | Application version info |

### Example Responses

**GET /**
```json
"Hello World! Minimal NestJS Backend is running."
```

**GET /health**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600.123,
  "environment": "production"
}
```

**GET /version**
```json
{
  "name": "minimal-nestjs-backend",
  "version": "1.0.0",
  "node": "v18.19.0"
}
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow
├── src/
│   ├── app.controller.ts       # Main controller
│   ├── app.controller.spec.ts  # Controller tests
│   ├── app.module.ts           # Root module
│   ├── app.service.ts          # Main service
│   └── main.ts                 # Application entry point
├── test/
│   ├── app.e2e-spec.ts         # E2E tests
│   └── jest-e2e.json           # E2E Jest config
├── Dockerfile                  # Multi-stage Docker build
├── .dockerignore              # Docker ignore file
├── sonar-project.properties   # SonarQube configuration
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── nest-cli.json              # NestJS CLI configuration
├── .eslintrc.js               # ESLint configuration
├── .prettierrc                # Prettier configuration
└── README.md                  # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the UNLICENSED License - see the package.json file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the GitHub Actions logs for CI/CD troubleshooting
- Review SonarQube reports for code quality insights 
