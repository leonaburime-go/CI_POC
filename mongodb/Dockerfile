FROM mongo:latest

#Create log folder
RUN mkdir /logs
RUN touch /logs/mongodb.logs

#Copy the config folder into the same folder as the Mongo Daemon
COPY mongo.config /usr/bin/mongo.config


#Start the Mongo Daemon
WORKDIR /usr/bin
CMD ["./mongod", "--config", "mongo.config"]


#Expose the standard Mongo Port
EXPOSE 27017