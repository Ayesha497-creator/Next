module.exports = {
  apps: [
    {
      name: 'Next-development',
      cwd: '/var/www/html/development/Next',
      script: 'npm',
      args: 'start',
    },
    {
      name: 'Next-test',
      cwd: '/var/www/html/test/Next',
      script: 'npm',
      args: 'start',
    },
    {
      name: 'Next-stage',
      cwd: '/var/www/html/stage/Next',
      script: 'npm',
      args: 'start',
    },
  ],
};
