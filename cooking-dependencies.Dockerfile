FROM ubuntu:18.04
RUN apt-get update -y && apt-get install -y \ 
    git \
    curl \
    nodejs \
    npm \
    openjdk-8-jre
RUN mkdir -p /app
WORKDIR /app
RUN git clone https://github.com/Matty79/cooking-gitlab && npm i