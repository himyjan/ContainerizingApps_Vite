# FROM node:lts-alpine as builder
# WORKDIR /usr/src/app
# COPY . ./
# RUN npm install
# RUN npm run build
# FROM nginx:alpine
# COPY --from=builder /usr/src/app/dist /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 3000
# ENTRYPOINT ["nginx","-g","daemon off;"]



# Stage 1 - Build React App inside temporary Node container
FROM node:alpine as builder

WORKDIR /usr/src/app
COPY package.json /app
COPY . ./
RUN npm install
RUN npm rebuild esbuild
EXPOSE 3000
# RUN npm run dev

# Stage 2 - Deploy with NGNIX
# FROM nginx:latest

# COPY --from=builder /usr/src/app/dist /var/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 3000

# ENTRYPOINT ["nginx","-g","daemon off;"]
