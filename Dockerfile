FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/
WORKDIR /usr/share/nginx/html

EXPOSE 80
