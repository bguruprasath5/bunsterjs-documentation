# Introduction

BunsterJs is a Simple and Straight Forward API Framework for Bun, developed with a singular focus: to provide a high-performance, scalable, and developer-friendly environment for building web APIs. 

## Why BunsterJs?

- **🚀 High-Performance:** Built atop the Bun HTTP server and utilizing a radix tree router, BunsterJs offers unparalleled speed and efficiency.

- **🔒 Typed Input & Validation:** Say goodbye to manual validation and type-checking. BunsterJs comes with built-in Zod validation, enabling strongly-typed request bodies, query parameters, and more.

- **💎 Fast to Develop:** With features like validation, logging, JWT-based authentication, and more, BunsterJs is an all-in-one solution that accelerates your development cycle.


## Quick start

You need to have Bun installed to run Bunster.

For Windows users, you can use WSL or WSL2 to install Bun.
```bash
# Linux, MacOS and WSL 
curl -fsSL https://bun.sh/install | bash 

# NPM
npm install -g bun

# Homebrew
brew tap oven-sh/bun
brew install bun

# Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun

# Proto
proto install bun
```
Create a new project and install bunsterjs.

```bash
# Create an empty Bun project
bun init

# Install bunster
bun add bunsterjs
```

Let's write a simple api server.

```ts{4}
import { z } from "zod";
import { Bunster } from "bunsterjs";

const app = new Bunster();

app.get({
  path: "/",
  handler: (ctx) => ctx.sendJson({ msg: "Hi 👋 from bunster server 🔥"})
});

app.serve({
  port: 3000,
});
```

Start a development server by:

```bash
bun run serve
```

Open your browser and go to http://localhost:3000.

You should see your server is running.

Congrats! You've just created a new web api server with BunsterJs  🎉🎉🎉