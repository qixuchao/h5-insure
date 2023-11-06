# #!/bin/bash

# # 发布环境 Ship 上 配置 测试
# # DEPLOY_ENV="dev"
# # SELF_DEFINE=true 自定义链接
# # Ship 开发环境应用编排配置(测试), 可兼容非 SaaS 环境 后端应用ID/应用地址
# # GATEWAY_PROJECT_ID="1111"
# # 若不为自定义(如 ship), 否则在交付环境配置变量 API_GATEWAY
# if [ ! $SELF_DEFINE ]
# then
#   # 若 dev 环境 DEPLOY_ENV 变为 test, 则只用下面一行
#   # API_GATEWAY="http:\/\/$([ ${GATEWAY_PROJECT_ID} ] && echo "${GATEWAY_PROJECT_ID}-" || echo "")zat-planet-gateway.${DEPLOY_ENV}.za-tech.net"

#   # 若有 PROJECT_ID（ship 开发环境）
#   if [ $PROJECT_ID ]
#   then
#     # 修改: Ship 开发环境 -> 应用编排 -> 高级配置 -> 环境变量, 保存并生效后等待服务重启
#     # GATEWAY_PROJECT_ID 开发环境后端应用 ID
#     API_GATEWAY="http:\/\/$([ ${GATEWAY_PROJECT_ID} ] && echo "${GATEWAY_PROJECT_ID}-" || echo "")lian-planet-gateway.test.za-tech.net"
#     # 银保信生产环境单独处理
#   elif [ $DEPLOY_ENV = 'ybxk' ]
#   then
#     API_GATEWAY="http:\/\/zat-planet-gateway.ybv2.prd.za-ybx.net"
#   else
#     # test/pre/prd 环境
#     API_GATEWAY="http:\/\/zat-planet-gateway.${DEPLOY_ENV}.za-tech.net"
#   fi
# fi

# # replace
# sed -i "s|<API_GATEWAY>|${API_GATEWAY}|g" /etc/nginx/conf.d/nginx_app.conf

# # 更改nginx启动用户
# sed -i "s|user  nginx|user  root|g" /etc/nginx/nginx.conf

# # start
nginx -g "daemon off"\;
