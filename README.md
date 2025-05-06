# Simple Backend API

A simple Express.js backend API with enhanced features including health checks, CORS support, and logging.

## Features

- Express.js server running on port 80
- CORS support for cross-origin requests
- Request logging with Morgan
- Health check endpoint for monitoring
- Error handling middleware
- Environment variable configuration
- GitHub Actions workflow for automated deployment to Azure VM

## Setup

1. Clone the repository
2. Create a `.env` file in the root directory:
   ```
   PORT=80
   NODE_ENV=development
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### GET /sayHello
Returns a greeting message.

Response:
```json
{
    "message": "Hello User"
}
```

### GET /health
Returns the health status of the API.

Response:
```json
{
    "status": "healthy",
    "timestamp": "2024-03-21T12:00:00.000Z",
    "uptime": 123.45
}
```

## Deployment

The application is automatically deployed to an Azure VM using GitHub Actions when changes are pushed to the main branch.

### Required GitHub Secrets

The following secrets need to be configured in your GitHub repository:

- `VM_SSH_KEY`: SSH private key for authentication to the Azure VM
- `REPO_URL`: The URL of your private GitHub repository (for initial clone)

### Deployment Process

1. Code is pushed to the main branch
2. GitHub Actions workflow is triggered
3. Application is deployed to Azure VM (20.62.199.177)
4. PM2 process is restarted
5. Application is configured to start on system boot

### Manual Deployment Steps

If you need to deploy manually:

1. SSH into the VM:
   ```bash
   ssh azureuser@20.62.199.177
   ```

2. Navigate to the app directory:
   ```bash
   cd /home/azureuser/app
   ```

3. Pull latest changes:
   ```bash
   git pull origin main
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Restart the application:
   ```bash
   pm2 restart app
   ```

## Development

To run the application locally:

1. Make sure you have Node.js installed
2. Clone the repository
3. Create and configure the `.env` file
4. Install dependencies: `npm install`
5. Start the server: `npm start`
6. The API will be available at `http://localhost:80`

## Error Handling

The API includes global error handling that:
- Logs errors to the console
- Returns appropriate error responses
- Includes detailed error messages in development mode
- Hides sensitive error details in production mode 