#!/bin/bash

#mkdir -p /usr/src/app
cp -rf /docker_volumes/node_server /usr/src/app
#cd /usr/src/app
node /usr/src/app/server.js
