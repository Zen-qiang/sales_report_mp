Component({
  properties: {
    positionBottom: Boolean, // 是否显示到底部
    area: {
      type: String,
      value: ''
    },
    currentStores: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    allStores: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  }
})