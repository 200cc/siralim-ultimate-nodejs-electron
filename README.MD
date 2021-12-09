# siralim-ultimate-nodejs-electron

## 关于
steam游戏[Siralim_Ultimate](https://store.steampowered.com/app/1289810/Siralim_Ultimate/)本地数据查询应用.  
基于nodejs开发, 使用electron打包为本地应用. 数据库使用sqlite3.  
数据来源于分享文档[Siralim Ultimate Compendium](https://docs.google.com/spreadsheets/d/1qvWwf1fNB5jN8bJ8dFGAVzC7scgDCoBO-hglwjTT4iY/edit#gid=0).  

## 开发环境
cnpm@7.0.0  
npm@6.14.14  
node@14.17.5  
npminstall@5.0.2

## 开发
运行`cnpm i`安装依赖.  
运行`.\node_modules\.bin\electron-rebuild.cmd`安装原生依赖(主要是针对在electron中使用sqlite3).  
`cnpm start` 运行应用.  
`cnpm run build` 打包应用.  
