# Spring Beans Visualized: View Your Beans at Runtime

Simple graph view on SpringFramework beans reported by [Spring Boot Actuator](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready) ```beans``` endpoint.

Shows in web-browser active beans and dependencies between them. Provides ability to filter and highlight beans.
Allows to dig deeper into your application.

![Screenshot application](/docs/img/app-screenshot-1.png)
*Bean dependency graph drown for actual SpringFramework application*

## Run application

* You should have running Spring Boot application with enabled Spring Boot Actuator ```beans``` endpoint.

* You may need to configure Spring Beans Visualized application by modifying constants in the ```app.js``` file. Most likely you have to setup your user/password and application host/port, probably Spring Boot Actuator endpoints base path.

* Get dependencies & start _Spring Beans Visualized_ application
```
npm install
node app.js
```
* Browse your application at ```http://localhost:3000```.

## Build and run application using Docker

To build and run the application using Docker run next shell commands at project folder:
```
docker build -t spring-beans-visualized:0.0.5 .
docker run spring-beans-visualized:0.0.5
```
Docker container has next configuration variables:
* ```CLIENT_APP_USER``` - optional Basic HTTP authentication username
* ```CLIENT_APP_PASSWORD``` - optional Basic HTTP authentication password
* ```CLIENT_APP_SCHEMA``` - actuator services schema type (possible options: ```'http'```, ```'https'```)
* ```CLIENT_APP_HOST``` - actuator services hostname (example: ```'localhost'```, ```'192.168.1.1'```)
* ```CLIENT_APP_PORT``` - actuator services port (usually ```'8080'```)
* ```CLIENT_APP_ACTUATOR_BASE_PATH``` - actuator contentPath (usually ```''```, could be: ```'/appName/actuator'```)
* ```SERVICE_PORT``` - on which port service starts (internal for Docker container, usually ```'3000'```)

## Inspiration & implementation

Heavily inspired by [Mike Bostock](https://bl.ocks.org/mbostock) [example](https://bl.ocks.org/mbostock/950642). Also this project is a continuation of [Monte](https://github.com/ndrew/monte) Master's Thesis done in 2013 by [ndrew](https://github.com/ndrew) and [aigor](https://github.com/aigor).

Based on [D3 library](https://d3js.org/), [Node.js](https://nodejs.org/en/), and [Express server](http://expressjs.com/).

License: [ISC](http://www.isc.org/downloads/software-support-policy/isc-license/)

## Plans for future improvements

* Add arrows to show ussage direction.
* Shorten bean names with package.
* More information about beans (singleton/prototype).
* Clustering by package, component type, etc.
* Multiple Spring contexts support.
* Do not reread bean definitions every time - cache it somehow.
* Better error handling.
