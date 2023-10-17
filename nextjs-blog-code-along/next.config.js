const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      eng: {
        env: {
          mongodb_username: 'ionsticidev',
          mongodb_password: 'le7dFGV9QPqnN1up',
          mongodb_clustername: 'cluster0',
          mongodb_database: 'my-site-dev',
        },
      },
    };
  }

  return {
    env: {
      mongodb_username: 'ionsticidev',
      mongodb_password: 'le7dFGV9QPqnN1up',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
