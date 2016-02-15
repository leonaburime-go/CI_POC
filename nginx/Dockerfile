FROM nginx

#Expose port 80
EXPOSE 80


#Start nginx server
#RUN service nginx start

COPY startup_nginx.sh /startup_nginx.sh
RUN chmod +x /startup_nginx.sh

#CMD ["/usr/bin/wc","--help"]
CMD ["/startup_nginx.sh"]

