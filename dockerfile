# base image
FROM node:12.13.0-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]

EXPOSE 3000