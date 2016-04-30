FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add and Install
ADD ./assets /usr/src/app/assets
ADD ./views /usr/src/app/views
ADD ./package.json /usr/src/app/package.json
ADD ./server.js /usr/src/app/server.js

# Install Deps
RUN npm install --production

EXPOSE 8080
CMD ["npm", "start"]
