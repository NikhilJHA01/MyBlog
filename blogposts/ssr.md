---
title: 'Server Side Rendering'
date: '2023-07-21'
---
**SSR** generates the full HTML content to be loaded in response to the user's request. The generated HTML content can also include data from external stores or datastore.

Fetch operations are also handled on the server.

With SSR every request is treated independently and will be processed as a new request by the server.


**PROS**

1.  Lesser javascript leads to quicker FCP and TTI.
2.  SEO enabled and advantages.

**CONS**

1.  Slow TTFB - since all processing takes place at the server, the response from the server may take extra time in one or more below scenarios -
    -   Multiple simultaneous users cause excess load on the server.
    -   Slow network
    -   Server code not optimized.