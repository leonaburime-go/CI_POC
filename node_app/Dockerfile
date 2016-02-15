FROM node:argon

# Create app directory
#RUN mkdir -p /usr/src
#WORKDIR /usr/src

#Expose port to connect to 
EXPOSE 3001

#Copy and execute startup script
COPY startup_node.sh /startup_node.sh
RUN chmod +x /startup_node.sh
CMD ["/startup_node.sh"]





