const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self' https://res.cloudinary.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' youtube.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com cdn.jsdelivr.net;
  prefetch-src 'self' disqus.com c.disquscdn.com;
  img-src * https://*.google-analytics.com https://*.googletagmanager.com blob: data:;
  connect-src * https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com;
  font-src 'self' fonts.gstatic.com cdn.jsdelivr.net;
  frame-src giscus.app https://www.youtube.com https://wakatime.com;
  object-src 'self' https://wakatime.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/software-development/ci-cd-flask-nextjs-docker',
        destination: '/blog/ci-cd-flask-nextjs-docker',
        permanent: true,
      },
      {
        source: '/random-notes/error-after-upgrade-openssl',
        destination: '/blog/error-after-upgrade-openssl',
        permanent: true,
      },
      {
        source: '/software-development/setup-flask-nextjs-app-with-docker',
        destination: 'blog/setup-flask-nextjs-application-with-docker',
        permanent: true,
      },
      {
        source: '/software-development/nextjs-contentful-app',
        destination: '/blog/nextjs-contentful-app',
        permanent: true,
      },
      {
        source: '/life/lesson-from-first-time-pte-exam',
        destination: '/blog/lesson-from-first-time-pte-exam',
        permanent: true,
      },
      {
        source: '/random-notes/officially-vim-user',
        destination: '/blog/officially-vim-user',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
