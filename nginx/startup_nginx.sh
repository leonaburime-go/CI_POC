#!/bin/bash

rm -rf /usr/share/nginx/html
cp -rf /docker_volumes/angular /usr/share/nginx/html

#nginx -g 'daemon off;'