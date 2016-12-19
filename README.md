# Spring Beans Visualized: View Your Beans at Runtime

Simple graph view on SpringFramework beans reported by [Spring Boot Actuator](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready) ```beans``` endpoint.

Shows in web-browser active beans and dependencies between them. Provides ability to filter and highlight beans.
Allows to dig deeper into your application.

![Screenshot application](/docs/img/app-screenshot-1.png)
*Bean dependency graph drown for actual SpringFramework application*

## Run application

* You should have running Spring Boot application with enabled Spring Boot Actuator ```beans``` endpoint.

* You may need to configure Spring Beans Visualized application by modifying constants in ```app.json``` file. Most likely you have to setup your user/password and application host/port, probably Spring Boot Actuator endpoints base path.

* Get dependencies & start Spring Beans Visualized application
```
npm install
node app.js
```
* Browse your application at ```http://localhost:3000```.

## Inspiration & implementation

Heavily inspired by [Mike Bostock](https://bl.ocks.org/mbostock) [example](https://bl.ocks.org/mbostock/950642). Also this project is a continuation of [Monte](https://github.com/ndrew/monte) Master's Thesis done in 2013 by [ndrew](https://github.com/ndrew) and [aigor](https://github.com/aigor).

Based on [D3 library](https://d3js.org/), [Node.js](https://nodejs.org/en/), and [Express server](http://expressjs.com/).

License: [ISC](http://www.isc.org/downloads/software-support-policy/isc-license/)

## Plans for future improvements

* Docker image support (build file for _Spring Beans Visualized_).
* Better error handling.
* More information about beans (singleton/prototype).
* Clustering by package, component type, etc.
* Multiple Spring contexts support.
