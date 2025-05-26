This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

My R and D
1st install nextjs:
npx create-next-app@latest

app folder->
layout is a Structure of the website
page is a content of the website
app folder is the root folder
page.js is like index.js I mean root file
layout is a common file for all page

now create about us section
so create folder
app/about/page.js

then automatic if you hit
https://...../about then see the about section
if you want to create custom layout for about then creage layout.js

Now add Link
Normal Html we use in <a>
but here we use <Link>
Because
when we use <a>
then it go to this link with reload
but
Link without reload it can rander anypage

