FROM node:21.7.3 AS builder

WORKDIR /opt/web
COPY package.json ./
RUN npm install --silent

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build
RUN ls
####
FROM nginx:1.27.4
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]