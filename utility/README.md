`$ node app.js`

访问 `http://localhost:3000/?q=alsotang`，完成。

## 题外话

如果直接访问 `http://localhost:3000/` 会抛错

![](https://raw.githubusercontent.com/alsotang/node-lessons/master/lesson2/3.png)

可以看到，这个错误是从 `crypto.js` 中抛出的。

这是因为，当我们不传入 `q` 参数时，`req.query.q` 取到的值是 `undefined`，`utility.md5` 直接使用了这个空值，导致下层的 `crypto` 抛错。

===================================================================
operation result:
TypeError: Cannot read property 'q' of undefined


Not yet been solved