#!/bin/bash
# DEPLOY_ENV=dev
# GATEWAY_PROJECT_ID=141604
if [ $DEPLOY_ENV = 'dev' ]
then
  # 修改: Ship 开发环境 -> 应用编排 -> 高级配置 -> 环境变量, 保存并生效后等待服务重启
  # GATEWAY_PROJECT_ID 开发环境后端应用 ID
  # GATEWAY_API_URL 开发环境后端应用地址
  # 优先级 GATEWAY_API_URL > GATEWAY_PROJECT_ID
  API_URL="$([ ${GATEWAY_API_URL} ] && echo ${GATEWAY_API_URL} || echo "http:\/\/$([ ${GATEWAY_PROJECT_ID} ] && echo "${GATEWAY_PROJECT_ID}-" || echo "")zat-planet-gateway.test.za-tech.net")"
  COMMANDER_URL="$([ ${COMMANDER_API_URL} ] && echo ${COMMANDER_API_URL} || echo "http:\/\/$([ ${COMMANDER_PROJECT_ID} ] && echo "${COMMANDER_PROJECT_ID}-" || echo "")aquarius-commander.test.za-tech.net")"
else
  # test/pre/prd 环境
  API_URL="http:\/\/zat-planet-gateway.${DEPLOY_ENV}.za-tech.net"
  COMMANDER_URL="http:\/\/aquarius-commander.${DEPLOY_ENV}.za-tech.net"
fi

# replace
sed -i "s/<API_URL>/${API_URL}/g" /etc/nginx/conf.d/nginx_app.conf
sed -i "s/<COMMANDER_URL>/${COMMANDER_URL}/g" /etc/nginx/conf.d/nginx_app.conf

# start
nginx -g "daemon off"\;
