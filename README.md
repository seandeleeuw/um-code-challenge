# um-code-challenge
Code challenge for Ultimaker

## Disclaimer
All code is in the develop branch. I know the commits are far apart. Most of it was setting up my environment, including installing Vue and Vuetify, both of which threw several errors. All in all the actual development of the components took me around 3 hours. 

I have not been able to put the components into Storybook. It's a plugin which I've never used before, so I've got kind of a learning curve in that area. I've also been getting several errors that blocked me from verifying stories. As you can see in several commits, I've been trying to solve this over the course of several days this weekend. Errors that I ran in to included (but are not limited to): 'unexpected token' errors (in particular at the `.crossfade-image` style in the ImageCrossfader component, at the `:src`, and at the `<template>`, indicating that Storybook might not be playing well with Vue's SFC). After a while, I got to the point where my error was simply `Failed to mount component: template or render function not defined.` which baffled me. Then I managed to fix that and I got stuck at `Cannot read property 'dark' of undefined`. At the moment I don't have a solution for it.

For what it's worth, I hope you can look past that slight error (after all, Storybook seems easy enough to learn once I have an environment that runs it), and can appreciate the main attraction of the code: the actual components.

Of course, I would be happy to explain my choices and motivations in a second interview.

Regards, 
Sean de Leeuw
