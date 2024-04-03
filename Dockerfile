# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.17.1

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
# ENV NODE_ENV production

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app .

USER app 

RUN npm i 

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run dev
