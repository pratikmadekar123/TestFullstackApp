#Use a lightwight Node.js image
FROM node:alpine

#Set working directory inside the container
WORKDIR /app

#Copy package.json and install dependencies
COPY package*.json .
RUN npm install

#Copy the rest of the application code
COPY . .
EXPOSE 3000

#Expose the default nginx port

#Startt Nginx
CMD ["npm","run","dev"]

