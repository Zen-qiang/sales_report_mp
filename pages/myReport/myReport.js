Page({
  data: {
    current: 0
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  }
})