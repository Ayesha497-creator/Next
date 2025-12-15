module.exports = {
  apps: [
    {
      name: 'Next-development',       // changed from Next-main
      cwd: '/var/www/html/development/Next',
      script: 'npm',
      args: 'start',
      env: { NODE_ENV: 'production', PORT: 3000 }
    },
    {
      name: 'Next-test',
      cwd: '/var/www/html/test/Next',
      script: 'npm',
      args: 'start',
      env: { NODE_ENV: 'production', PORT: 3001 }
    },
    {
      name: 'Next-stage',
      cwd: '/var/www/html/stage/Next',
      script: 'npm',
      args: 'start',
      env: { NODE_ENV: 'production', PORT: 3002 }
    }
  ]
};
