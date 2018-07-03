# Enterprise Cloud Native for SME - Node.js Service

Simple Node.js demo service for the Cloud Native Night with SquareScale.

https://www.meetup.com/de-DE/cloud-native-muc/

## Building and Running

```
$ npm install
$ npm start
```

## Containerizing

```
$ docker build -t cloud-native-muc-sqsc-nodejs:1.0 .
$ docker run -it -p 8080:8080 cloud-native-muc-sqsc-nodejs:1.0
```
