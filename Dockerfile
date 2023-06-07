# Build react client
# FROM node:alpine
FROM node:14.17.0-alpine

# ENV REACT_APP_API_URL http://localhost:3000
# ENV REACT_APP_EN_MODE DEVELOPMENT

# Working directory be app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

###  Installing dependencies
RUN npm install webpack-dev-server -g

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 8080

CMD ["npm","start"]


# FROM node:alpine
# WORKDIR /usr/src/app 
# COPY package*.json .
# RUN npm i -g webpack
# RUN npm i -g webpack-dev-server
# RUN npm i -g webpack-cli
# RUN npm i -g webpack-merge
# RUN npm install react-router-dom --save
# RUN npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
# RUN npm install
# COPY . .
# CMD ["npm", "start"]