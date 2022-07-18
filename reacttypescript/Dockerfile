# # Stage 1 - Build React App inside temporary Node container
# FROM ubuntu

# RUN apt-get update
# RUN apt-get upgrade -y
# RUN apt-get install -y curl unzip

# RUN curl https://bun.sh/install | bash

# ENV BUNPATH /root/.bun
# ENV PATH $BUNPATH/bin:$PATH

# ENV BUN_VERSION = $(eval bun -v)

# RUN mkdir /root/bun
# WORKDIR /root/bun

# COPY . ./
# RUN bun install
# RUN bun run-script build

# Stage 1 - Build React App inside temporary Node container
FROM node:alpine as react-build

WORKDIR /usr/src/app
COPY . ./
RUN npm install
RUN npm run-script build

# Stage 2 - Deploy with NGNIX
FROM nginx:latest

COPY --from=react-build /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]
