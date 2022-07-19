# # Stage 1 - Build React App inside temporary Node container
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
# RUN bun run-script build

#docker build --no-cache . |  grep "Successfully built" | sed 's/Successfully built //g' | xargs -I{} docker run {}
# Stage 1 - Build React App inside temporary Node container
FROM node:node:16-slim as react-build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . ./
RUN npm install
RUN npm rebuild esbuild
EXPOSE 3000
RUN npm run dev

# Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=react-build /usr/src/app/build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]
