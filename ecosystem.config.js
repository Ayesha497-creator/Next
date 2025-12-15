module.exports = {
  apps: [
    {
      name: 'Next-development',
      cwd: '/var/www/html/development/Next',
      script: 'npx',
      args: 'next start -p 3000',
      env: {
        PORT: 3000
      }
    },
    {
      name: 'Next-test',
      cwd: '/var/www/html/test/Next',
      script: 'npx',
      args: 'next start -p 3001',
      env: {
        PORT: 3001
      }
    },
    {
      name: 'Next-stage',
      cwd: '/var/www/html/stage/Next',
      script: 'npx',
      args: 'next start -p 3002',
      env: {
        PORT: 3002
      }
    }
  ]
}
