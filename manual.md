## 罗蒙报数小程序开发手册

#### 页面

```javascript
[
  "pages/login/login", // 登陆
  "pages/todayAchievement/todayAchievement", // 今日业绩
  "pages/secondAchievement/secondAchievement", // 今日业绩二级页面
  "pages/shopInfo/shopInfo", // 门店信息
  "pages/shopRank/shopRank", // 门店排行
  "pages/myReport/myReport", // 我的报表
  "pages/logs/logs"
]
```

#### Storage

> 用户信息
> 用户登陆时保存

`sessionKey`
> 用于请求头
> 用户登陆时保存

#### API

> `getAchievementByDate` // 获取管理人员当天或某天业绩
```
//总金额
totalAmount
//总件数
totalPackage
//客单价  总金额/总单数
averageAmount
//客单件 总数量/总单数
averagePackage
//总金额幅度
totalAmountRange
//总件数幅度
totalPackageRange
//客单价幅度
averageAmountRange
//客单件幅度
averagePackageRange
```