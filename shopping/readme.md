let select = `carts[${index}].selected`
this.setData({
    [select]: !this.data.carts[index].selected
})

小程序 对数组修改的方法