# Stage 1 - Build React App inside temporary Node container
# FROM --platform=linux/amd64 ubuntu:latest

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
# RUN bun run ng build  --prod

# Stage 1 - Build React App inside temporary Node container
# FROM node:carbon-alpine as react-build
FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json /app
COPY . ./
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000
# RUN npm run dev

# Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=builder /usr/src/app/dist/angular-app /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]
