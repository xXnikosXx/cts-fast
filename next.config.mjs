import {} from "dotenv/config"

module.exports = {
  distDir: 'build',
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4
  }
};