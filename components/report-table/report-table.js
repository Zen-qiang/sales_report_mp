Component({
  properties: {
    reportData: {
      type: Object,
      value: {
        totalAmount: 0, // 总金额
        totalPackage: 0, // 总件数
        averageAmount: 0, // 客单价  总金额/总单数
        averagePackage: 0, // 客单件 总数量/总单数
        totalAmountRange: 0, // 总金额幅度
        totalPackageRange: 0, // 总件数幅度
        averageAmountRange: 0, // 客单价幅度
        averagePackageRange: 0 // 客单件幅度
      }
    }
  }
})