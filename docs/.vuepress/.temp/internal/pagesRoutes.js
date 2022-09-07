import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-40a1d089","/components/card.html",{"title":""},["/components/card","/components/card.md"]],
  ["v-1020f180","/components/",{"title":""},["/components/index.html","/components/index.md"]],
  ["v-20d4de48","/components/progressCard.html",{"title":""},["/components/progressCard","/components/progressCard.md"]],
  ["v-10b49745","/pages/businessCard.html",{"title":""},["/pages/businessCard","/pages/businessCard.md"]],
  ["v-543c9d2e","/pages/custome.html",{"title":""},["/pages/custome","/pages/custome.md"]],
  ["v-166a2a94","/pages/home.html",{"title":""},["/pages/home","/pages/home.md"]],
  ["v-205f0335","/pages/moment.html",{"title":""},["/pages/moment","/pages/moment.md"]],
  ["v-c9bbfba2","/project/",{"title":""},["/project/index.html","/project/index.md"]],
  ["v-cf653e20","/project/member.html",{"title":""},["/project/member","/project/member.md"]],
  ["v-8fdaabe4","/project/rule.html",{"title":""},["/project/rule","/project/rule.md"]],
  ["v-812cc2a0","/project/version.html",{"title":""},["/project/version","/project/version.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-aaa5b068","/pages/activityVolume.html",{"title":""},["/pages/activityVolume","/pages/activityVolume.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
