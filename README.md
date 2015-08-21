# jquery.loadMask
jquery.loadMask用於網頁載入時，播放動畫

## Example Usage

### HTML

```html
<div id="loadMask"></div>
```

### jQuery

```js
$("#loadMask").loadMask();
```

or

```js
$("#loadMask").loadMask({
	image:'custom.gif', // 等待圖片URL,設為none可停用
	height: 190, // 圖片高度
	width: 190, // 圖片寬度
	bgcolor: '#FAFAD2', // 背景顏色
	timeout: 500, // 關閉遮罩時間
	speed: 1000 // 關閉動畫速度
});
```

## License

This plugin is available under [the MIT license](http://mths.be/mit).
