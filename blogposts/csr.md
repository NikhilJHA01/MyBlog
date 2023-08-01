---
title: 'Client Side Rendering'
date: '2023-07-20'
---
**Client Side Rendering** - in this, only the main index.html is passed from the server and all the other things like data-fetching, login, and routing are done on the client side.

The complexity of the app increases with a large amount of display data, data storage, large number of images.

This leads to an increase in Javascript bundles required to load the app. hence an increase in FCP ( First contentful paint ) and TTI ( Time to interactive)

**FCP**: It is the time from which the page starts loading to when **any** part of the page's content is rendered on the screen.

**TTI:** This metric measures the time from the initial page load to when its main resources have loaded and are capable of reliably responding to user input quickly

![CSR](/images/CSR.png)

**PROS**:

1.  CSR allows for a Single Page Application (SPA) that supports navigation without page refresh and provides a greater user experience.

2.  It allows developers to achieve a clear separation between client and server code.

**CONS**:

1.  Less SEO friendly.
2.  Slow FCP and TTI

**Improving CSR**: The main idea is to minimize the JS bundle and allow only the required resources to be loaded at respective moments

1.  Network optimization

2.  Asset optimization