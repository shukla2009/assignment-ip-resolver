ip-resolver rest service
===

This repository provides a rest service to resolve location from ip

prerequsite
---
Node js and npm should be installed

steps to run:
---

```bash
$ git clone  https://github.com/shukla2009/assignment-ip-resolver.git
$ cd ip-resolver
$ npm install
$ npm start
```
test
---
`http://localhost:8082/ip/1.2.3.4` should give below response

```
ip: "1.2.3.4",
country_code: "US",
country_name: "United States",
region_code: "WA",
region_name: "Washington",
city: "Mukilteo",
zip_code: "98275",
time_zone: "America/Los_Angeles",
latitude: 47.913,
longitude: -122.3042,
metro_code: 819
```

build process
---
```bash
$ git clone https://github.com/shukla2009/assignment-ip-resolver.git
$ cd ip-resolver
$ npm install
$ zip/tar entire app make sure to create with build number
```