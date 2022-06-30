FROM base-registry.zhonganinfo.com/env/nginx:1.15.0

COPY nginx_app.conf /etc/nginx/conf.d/

COPY start.sh /

RUN chmod a+x /start.sh

COPY ./dist /root/app/dist/

EXPOSE 8080

CMD ["/start.sh"]
