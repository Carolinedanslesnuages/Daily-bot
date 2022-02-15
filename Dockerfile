FROM node:14.15.0-slim


# Base dir /app
WORKDIR /app
COPY index.js .
COPY package.json .
RUN npm install

CMD [ "node", "index.js" ]
# Expose the listening port of your app
EXPOSE 8000
