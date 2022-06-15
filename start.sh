#!/bin/sh
if [ $DEPLOY_ENV = 'dev' ]
then
  sed -i "s,<api_url>,http:\/\/$([ $COMMANDER_PROJECT_ID ] && echo "$COMMANDER_PROJECT_ID-" || echo "")zat-aquarius-activity.test.za-tech.net," /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'test' ]
then
    sed -i 's,<api_url>,http://117949-zat-aquarius-activity.test.za-tech.net,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'pre' ]
then
  sed -i 's,<api_url>,http://117949-zat-aquarius-activity.test.za-tech.net,' /etc/nginx/conf.d/nginx_app.conf
elif [ $DEPLOY_ENV = 'prd' ]
then
  sed -i 's,<api_url>,http://aquarius-commander.prd.za-tech.net,' /etc/nginx/conf.d/nginx_app.conf
fi
nginx -g "daemon off"\; # 启动 nginx
