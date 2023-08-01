---
title: 'Static Generation'
date: '2023-07-23'
---
CSR - High JS bundles leading to higher FCP, LCP, TTI

SSR - leading to more TTFB

SSG/ Static site rendering aims to solve the above problems by pre-rendering the content at build time.


Static HTML files are generated AOT for the part of the application where a user can navigate to the application.

These files could be stored on the Server or CDN.

PROS:

1.  Faster FCP, LCP, TTI.
2.  Faster TTFB as HTML files are already pre-renderer and as well as cached.
3.  SEO Friendly.

CONS:

1.  Maintaining a large number of HTML files can be challenging.

2.  **Dynamic Content:** An SSG site needs to be built and redeployed every time the content changes. The content displayed may be stale if the site has not been built and deployed after any content change. This makes SSG unsuitable for highly dynamic content, such as large websites or applications. For example, one new blog post should not require a rebuild for all existing pages. Thus, SSG on its own is not enough for rendering large websites or applications.

3.  This is only suitable for sites that have static content like Blog SIte.