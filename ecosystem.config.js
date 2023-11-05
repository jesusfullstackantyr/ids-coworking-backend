module.exports = {
    apps: [
      {
        name: 'AppPort3001',
        script: 'app.js',
        instances: 2,  // Puedes ajustar la cantidad de instancias según tus necesidades.
        exec_mode: 'cluster',  // Cambio a 'cluster' para aprovechar múltiples núcleos.
        env: {
          NODE_ENV: 'production',  // Puedes definir variables de entorno específicas.
          PORT: 3001,  // Puedes definir el puerto de la aplicación.
        },
      },
      {
        name: 'AppPort3002',
        script: 'app.js',
        instances: 2,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'production',
          PORT: 3002,
        },
      },
      {
        name: 'AppPort3003',
        script: 'app.js',
        instances: 2,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'production',
          PORT: 3003,
        },
      },
    ],
  };
  