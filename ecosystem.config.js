module.exports = {
  apps: [
    {
      name: 'Next-development',
      cwd: '/var/www/html/development/Next',
      script: 'npm',
      args: 'run start',
      env: { PORT: 3000 }
    },
    {
      name: 'Next-test',
      cwd: '/var/www/html/test/Next',
      script: 'npm',
      args: 'run start',
      env: { PORT: 3001 }
    },
    {
      name: 'Next-stage',
      cwd: '/var/www/html/stage/Next',
      script: 'npm',
      args: 'run start',
      env: { PORT: 3002 }
    }
  ]
}
