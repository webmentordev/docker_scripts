# Introduction  
This project runs a Node.js Express API inside a container. When you send a POST request to the API with configurations, Express triggers Puppeteer to launch a Chrome browser in headless mode and keep a webpage open for 5 seconds (default). You can adjust this duration using the *alive* setting. Before closing the browser, you can also configure it to save a screenshot of the final full page.  

## Docker Container
The *Dockerfile* includes everything needed to build your own image with your custom configuration. The image size may exceed *1.93GB*. Here's how to run the container. I'll use my image name as an example, but you should replace it with your own if you've already built and stored it. The first command runs the container normally, while the second runs it with a persistent volume.
```
docker run -p 3000:3000 ahmertahir/puppeteer
```
```
docker run -p 8080:3000 -v screenshots:/screenshots ahmertahir/puppeteer
```

### Configuration  
In the following configuration, the *url* is required, while all other options are optional. Time settings are in *milliseconds*, so adjust them as needed. If you set the alive value higher than the default timeout, ensure the timeout is always at least 10 seconds higher for stability. You can't change the resolution at the moment; it is set to 1920x1080. All screenshots are saved in the *screenshots* folder, located in the project's root directory.
```
[Request]
POST - /run-puppeteer

[Headers]
Accept: application/json

[Body]
{
  "url": "https://youtube.com",  // Required
  "alive": 5000,                 // Optional, 5 seconds by default
  "screenshot": true,            // Optional, false by default
  "timeout": 120000              // Optional, default
}
```

## Protection  
```
* Ensure the URL is provided.
* If no URL is provided, a 400 error will be shown.
* All steps are logged in the console for easy debugging.
* The system waits up to 30 seconds for the page to load; otherwise, an error is thrown.
* If the page crashes or an error occurs, the browser will close gracefully.
* Page load waiting time is separate from the alive duration.
```

### Postman Testing  
If testing with Postman, enter the data in the raw body and set the type to JSON.