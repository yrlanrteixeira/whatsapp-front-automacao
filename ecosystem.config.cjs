module.exports = {
  apps: [
    {
      name: "WppZig", // The name of your application
      script: "npx", // The command to start your app
      args: "serve -p 3000 -s dist", // Arguments to pass to the command
      autorestart: true,
      env: {
        NODE_ENV: "production", // Environment variable for production,
        REACT_APP_API_BASE_URL: "https://yrttech.com/api", // Enviroment variable for API url
      },
    },
  ],
};
