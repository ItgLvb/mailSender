FROM node:latest
RUN mkdir -p /opt/app
COPY ./ /opt/app
RUN cd /opt/app && npm install
CMD node /opt/app/bin/www.js