const isTest = process.env.NODE_ENV === "test";

module.exports = {
  swcMinify: !isTest,
  webpack: (config, { isServer }) => {
    if (!isTest && isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
};
