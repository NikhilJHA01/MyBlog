---
title: 'Incremental Static Generation'
date: '2023-07-26'
---

**Static Generation (SSG)** addresses most of the concerns of **SSR** and **CSR** but is suitable for rendering mostly static content. It poses limitations when the content to be rendered is dynamic or changing frequently.

The **Incremental Static Generation** (**iSSG**) pattern was introduced as an **upgrade** to SSG, to help solve the dynamic data problem and help static sites scale for large amounts of frequently changing data. **iSSG** allows you to update existing pages and add new ones by pre-rendering a subset of pages in the background even while fresh requests for pages are coming in.

Two important things in addition to SSG here :

1.  Provide a fallback mechanism until the new page is not available from the server.

2.  Provide revalidate attribute with a timeout so that stale contents not shown always.

**PROS**:

iSSG provides all the advantages of SSG and then some more. The following list covers them in detail.

1.  **Dynamic data**: The first advantage is obviously why iSSG was envisioned. Its ability to support dynamic data without a need to rebuild the site.
2.  **Speed**: iSSG is at least as fast as SSG because data retrieval and rendering still takes place in the background. There is little processing required on the client or the server.
3.  **Availability**: A fairly recent version of any page will always be available online for users to access. Even if the regeneration fails in the background, the old version remains unaltered.
4.  **Consistent**: As the regeneration takes place on the server one page at a time, the load on the database and the backend is low and performance is consistent. As a result, there are no spikes in latency.
5.  **Ease of Distribution**: Just like SSG sites, iSSG sites can also be distributed through a network of CDNs used to serve pre-rendered web pages.