---
title: 'Progressive Hydration'
date: '2023-08-01'
---

**Hydration** is the concept of hydrating the dom nodes with all the javascript code.

Attaching all the JS handlers once the JS bundle has been loaded on the client side and then attaching all those to DOM nodes on the UI so that page becomes interactive.

The idea behind progressive hydration is to provide a great performance by activating your app in chunks. Any progressive hydration solution should also take into account how it will impact the overall user experience. You cannot have chunks of screen popping up one after the other but blocking any activity or user input on the chunks that have already loaded. Thus, the requirements for a holistic progressive hydration implementation are as follows.

1.  Allows usage of SSR for all components.
2.  Supports splitting of code into individual components or chunks.
3.  Supports client-side hydration of these chunks in a developer-defined sequence.
4.  Does not block user input on chunks that are already hydrated.
5.  Allows usage of some sort of loading indicator for chunks with deferred hydration.

**[React concurrent mode](https://reactjs.org/docs/concurrent-mode-patterns.html)**

**PROS**:

1.  **Promotes code-splitting**: Code-splitting is an integral part of progressive hydration because chunks of code need to be created for individual components that are lazy-loaded.
2.  **Allows on-demand loading for infrequently used parts of the page**: There may be components of the page that are mostly static, out of the viewport, and/or not required very often. Such components are ideal candidates for lazy loading. Hydration code for these components need not be sent when the page loads. Instead, they may be hydrated based on a trigger.
3.  **Reduces bundle size:** Code-splitting automatically results in a reduction of bundle size. Less code to execute on load helps reduce the time between FCP and TTI.