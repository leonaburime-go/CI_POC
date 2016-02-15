FROM centos:latest

RUN mkdir /docker_volumes

COPY angular /docker_volumes/angular
COPY mongo_files /docker_volumes/mongo_files
COPY node_server /docker_volumes/node_server

VOLUME /docker_volumes
