module.exports = {
  apps: [
    {
      name: 'Craig Dashboard',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
