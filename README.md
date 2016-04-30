# raziloBind - Examples - Hello World

A basic hello world app from the raziloBind website

## What does this do?

Well it says hellow world..... and lets you click a button, but more than this, it shows you how you can structure your apps, by creating an ES6 class as a bindable model and bind it to the dom in the class constructor, simple, clean and very cool.

I have not offered this as an npm module, as really it is the code you should be creating to pull your npm deps into, so download the zip if you want it, or just look at it, cause thats nice too.


## What Next?

So you have downloaded it, I would recommend running with docker, it's the bees knees, no really, once you go docker you will never go back! The docker file is there for you if oyu want to do this, it has the express server app here too to allow you to spawn it onto port 8080 of localhost.

You will need node, npm, grunt (global) to run this, you can do it via docker, it's nice and simple. Install docker, docker-compose (if you wish) and spawn a new container from the Dockerfile.

Once you have downloaded this, you will need to ensure all deps are loaded and then build your distributable. From the root dir...

```
npm install
```

If you do not have grunt installed locally...

```
npm install -g grunt
```

Then build and start express web server

```
grunt build
node ./server.js
```
