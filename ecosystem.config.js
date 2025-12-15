module.exports = {
  apps: [
    {
      name: 'Next-development',
      cwd: '/var/www/html/development/Next',
      script: '/home/ubuntu/.nvm/versions/node/v20.19.6/bin/npm',
      args: 'run start',
      env: { PORT: 3000 }
    },
    {
      name: 'Next-test',
      cwd: '/var/www/html/test/Next',
      script: '/home/ubuntu/.nvm/versions/node/v20.19.6/bin/npm',
      args: 'run start',
      env: { PORT: 3001 }
    },
    {
      name: 'Next-stage',
      cwd: '/var/www/html/stage/Next',
      script: '/home/ubuntu/.nvm/versions/node/v20.19.6/bin/npm',
      args: 'run start',
      env: { PORT: 3002 }
    }
  ]
}
