import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, '..', '..', 'packages', 'ui', 'src', 'styles'),
    ],
  },
};

export default nextConfig;
