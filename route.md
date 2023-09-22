# Routing

In BunsterJs, route is defined using method as a building block. You can create a route by calling
``.[method name]({ path, input?, handler, middlewares? })``
, and attaching it the instance of Bunster. 

For example, to create a GET route that responds with a greeting message, you can do:


```ts
new Bunster()
  .get({ path: '/', handler: (ctx) => ctx.sendJson({ msg: "Hello from BunsterJs!" }) })
  .serve({
    port: 8080
   });
```

This will start a server listening on port **8080**, and when a **GET** request is made to the root path **/**, it will respond with a JSON message.

## HTTP Methods
BunsterJs supports all the standard HTTP methods, making it easy to define routes for different types of requests. Here are some of the methods you can use:

- **get**
- **post**
- **put**
- **patch**
- **delete**

Just like the get method, you can use these to define routes in a similar fashion.

## URL Parameters
URL parameters allow you to capture values from the URL. For instance, if you want to capture a user's ID from the URL, you can define a route like this:

```ts
new Bunster()
  .get({ 
    path:'/user/:id', 
    handler: (ctx) => ctx.sendJson({ msg: `User ID is ${ctx.params.id}` }) 
  })
  .serve({
    port: 8080
   });
```

When this route is accessed, the value of id in the URL will be available in **ctx.params**, and you can use it in your handler function.

## Route Group

BunsterJs allows you to group routes together under a common base path using **BunsterRouteGroup**. This is particularly useful for organizing routes that share a common prefix.

Here's how to create a route group:

```ts
const userRouteGroup = new BunsterRouteGroup({
  basePath: "/user",
});

userRouteGroup.get({
  path: "/",
  handler: (ctx) => {
    return ctx.sendJson({ msg: "Hello from user route group" });
  },
});

new Bunster()
  .mount({ path: "/", routeGroup: userRouteGroup })
  .serve({ port: 3000 });
```
In this example, we create a route group with a base path of **/user**. We then define a GET route within this group. Finally, we **mount** this route group to the root path **/** of a new Bunster instance.


That's it! With BunsterJs, routing is as simple and straightforward as it gets, allowing you to focus on building your application logic.