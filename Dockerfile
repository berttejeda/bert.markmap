FROM nginx:latest

COPY etc/nginx/conf.d/* /etc/nginx/conf.d/

COPY . /usr/share/nginx/html

RUN rm -rf /usr/share/nginx/html/etc