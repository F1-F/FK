/***************************************

懒人听书VIP
脚本作者：伟人
作者QQ:
更新时间：2023-06-17
问题反馈：QQ+5574****
作者忠告: 不要贩卖
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************


[rewrite_local]

^http[s]?:\/\/((shapi|hapi)(\.mting\.info)|(m\.lrts\.me)|(gzapi\.mting\.info))\/(app|yyting)\/(getVipPageData|userclient\/ClientGetUserInfo|usercenter\/ThirdPartyLogin).*$ url script-response-body https://raw.githubusercontent.com/F1-F/FK/main/lanren.js

[mitm]

hostname = *.mting.*,m.lrts.me,hapi.mting.info

***************************************/
