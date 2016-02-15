#!/bin/sh

if [ ! -f /etc/nginx/nginx.conf ]
then
    cp -r /etc/nginx.default/* /etc/nginx
fi

NGINX=/usr/sbin/nginx

# show Version and compile config
$NGINX -V

# test config
#$NGINX -t

$NGINX -g "daemon off;"

#/bin/zsh

#Changes by Leon
rm -rf /usr/share/nginx/html/index.html
cp -rf /docker_volumes/angular/* /usr/share/nginx/html/
