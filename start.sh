#!/bin/bash
###
 # @Author: za-qixuchao qixuchao@zhongan.io
 # @Date: 2022-09-01 16:10:34
 # @LastEditors: za-qixuchao qixuchao@zhongan.io
 # @LastEditTime: 2022-09-23 19:38:02
 # @FilePath: /zat-planet-h5-cloud-insure/start.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
###
# PLANET_ENV=dev
# GATEWAY_PROJECT_ID=141604
if [ $PLANET_ENV = 'dev' ]
then
  # 修改: Ship 开发环境 -> 应用编排 -> 高级配置 -> 环境变量, 保存并生效后等待服务重启
  # GATEWAY_PROJECT_ID 开发环境后端应用 ID
  # GATEWAY_API_URL 开发环境后端应用地址
  # 优先级 GATEWAY_API_URL > GATEWAY_PROJECT_ID
  API_URL="$([ ${GATEWAY_API_URL} ] && echo ${GATEWAY_API_URL} || echo "http:\/\/$([ ${GATEWAY_PROJECT_ID} ] && echo "${GATEWAY_PROJECT_ID}-" || echo "")zat-planet-gateway.test.za-tech.net")"
  COMMANDER_URL="$([ ${COMMANDER_API_URL} ] && echo ${COMMANDER_API_URL} || echo "http:\/\/$([ ${COMMANDER_PROJECT_ID} ] && echo "${COMMANDER_PROJECT_ID}-" || echo "")aquarius-commander.test.za-tech.net")"
else
  # test/pre/prd 环境
  API_URL="http:\/\/zat-planet-gateway.${PLANET_ENV}.za-tech.net"
  COMMANDER_URL="http:\/\/aquarius-commander.${PLANET_ENV}.za-tech.net"
fi

# replace
sed -i "s/<API_URL>/${API_URL}/g" /etc/nginx/conf.d/nginx_app.conf
sed -i "s/<COMMANDER_URL>/${COMMANDER_URL}/g" /etc/nginx/conf.d/nginx_app.conf

# start
nginx -g "daemon off"\;
