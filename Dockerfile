FROM base-registry.zhonganinfo.com/env/node-ngx:11.10.1

COPY nginx_app.conf /etc/nginx/conf.d/

COPY start.sh /

RUN chmod a+x /start.sh

COPY ./dist /var/www/html

EXPOSE 8080

CMD ["/start.sh"]
