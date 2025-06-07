/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images:{
    remotePatterns: [new URL("https://besa7ufnah4abpuy.public.blob.vercel-storage.com/**")]
  }
};

export default nextConfig;
