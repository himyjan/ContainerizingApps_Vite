# ### GLOBALS ###
# ARG BUN_VERSION='0.1.2'
# ARG GLIBC_VERSION='2.34-r0'


# ### GET ###
# FROM --platform=linux/arm64 alpine:latest as get

# # prepare environment
# WORKDIR /tmp
# RUN apk --update add curl unzip

# # get bun
# ARG BUN_VERSION
# RUN curl -LO https://github.com/oven-sh/bun/releases/download/bun-v${BUN_VERSION}/bun-linux-x64.zip && \
#     unzip bun-linux-x64.zip

# # get glibc
# ARG GLIBC_VERSION
# RUN curl -LO https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
#     curl -LO https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk


# ### IMAGE ###
# FROM --platform=linux/arm64 alpine:latest

# # prepare bun
# COPY --from=get /tmp/bun-linux-x64/bun /usr/local/bin

# # prepare glibc
# ARG GLIBC_VERSION
# COPY --from=get /tmp/sgerrand.rsa.pub /etc/apk/keys
# COPY --from=get /tmp/glibc-${GLIBC_VERSION}.apk /tmp

# # install and clean up
# RUN apk --no-cache add /tmp/glibc-${GLIBC_VERSION}.apk && \
#     rm /tmp/*

# Stage 1 - Build React App inside temporary Node container
FROM node:alpine as react-build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN cd /usr/src/app
COPY package.json ./
COPY . ./
RUN npm install
RUN npm rebuild esbuild
EXPOSE 3000
# RUN npm run dev

# Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=react-build /usr/src/app/build /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]
