// converts images to WebP format

// next.config.js
/* module.exports = {
  images: {
    domains: ["images.tmdb.org"],
  },
}; */

// next.config.js
/* module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmdb.org",
        port: "",
        pathname: "/image./**",
      },
    ],
  },
}; */

/* const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}) */

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    minimumCacheTTL: 60,
    domains: ["image.tmdb.org"],
  },
};
