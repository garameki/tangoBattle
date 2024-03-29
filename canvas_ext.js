const Canv = function(element) {
	this.element = element;
	this.ctx = element.getContext('2d');
};
Canv.prototype.puwa = function(time) {
	const myself = this;
	const maxRadius = 34;
	this.element.style.opacity = '1.0';
	if(time < maxRadius) time = maxRadius;
	const diffTime = time / maxRadius;
	this.ctx.fillStyle = 'magenta';
	let radius = 0;
	const hogePuwa = setInterval(()=>{
		radius++;
		myself.ctx.beginPath();
		myself.ctx.arc(34,34,radius,0,2*Math.PI);
		myself.ctx.fill();
		if(radius > maxRadius) clearInterval(hogePuwa);
	},diffTime);
};



/**********************************************************
 * 指定時間後に画像を切り替えます
 ** (Number) time : 秒 この時間経過後に表示する。
 ** (Number) posTB : Canvのプロパティーのうち(TOP,MIDDLE,BOTTOM)のどれか。親エレメント内における上下の位置
 ** (Number) posLR : ピクセル 親エレメントにおける左右の位置 プラスなら左から、マイナスなら右からの移動量を示す
 **********************************************************/
Canv.TOP = 0;
Canv.MIDDLE = 1;
Canv.BOTTOM = 2;
Canv.prototype.appearElement = function(time,posTB,posLR) {	
	let nn,sTop,sLeft;

	if(posTB == Canv.TOP) nn = 0;
	else if (posTB == Canv.MIDDLE) nn = 0.5;
	else if(posTB == Canv.BOTTOM) nn = 1.0;
	else console.error('\'posTB\' is not TOP,MIDDLE nor BOTTOM');

	let parentWidth = this.element.parentNode.offsetWidth;
	let parentHeight = this.element.parentNode.offsetHeight;
	const hogeFlag = setInterval(()=>{
		clearInterval(hogeFlag);
		sLeft = 'left:' + posLR.toString() + 'px;';
		sTop = 'top:' + ((parentHeight - this.element.height) * nn).toString() + 'px;';
		this.element.style = 'opacity:1.0;position:relative;' + sTop+sLeft;
	},time * 1000);
};

/**********************************************************
 ** 指定した時間でフェードアウトします
 ** 0.1秒間隔で時間を指定できます
 ** preTime ... 秒後に始める
 ** lenTime ... 秒で消す
 ***********************************************************/
Canv.prototype.disappear = function(preTime,lenTime) {
	const myself = this;
	let count=10
	const hogeDisappear1 = setTimeout(()=>{
		const hogeDisappear2 = setInterval(()=>{
			if(--count < 0) {
				clearInterval(hogeDisappear2);
				this.ctx.clearRect(0,0,68,68);
			}
			//this.style = 'opacity:'+((threshold - count)/threshold).toString()+';position:'+ beforePosition + ';top:' +beforeTop + ';left:' + beforeLeft + ';';
			myself.element.style.opacity = (count/10).toString();
			console.log('disappear');
		},lenTime/10);
	},preTime);
};

/*********************************************************
 ** エレメントを左右に揺らします
 ** position:relativeにしますので、
 ** 呼び出し時にtopを指定してください
 ** element.parentNodeは<div>が好ましいです。<div>タグで囲んでおくことを推奨します。
 *********************************************************/
Canv.prototype.vibrate = function() {
	const wide = 15;/*揺れ幅*/
	const beforeLeft = this.style.left;
	const left = Number(beforeLeft.match(/\-*\d+(?:\.\d+)*/)[0]);
	const beforeTop = this.style.top;
	const top = Number(beforeTop.match(/\-*\d+(?:\.\d+)*/)[0]);
	const height = this.height;
	let parentHeight = this.parentNode.offsetHeight;
	let sTop = 'top:'+ ((parentHeight - height)*0.5).toString() + 'px;';
	const sPos = 'position:relative;';
	let sLeft;
	let count = 0;
	const myself = this;
	const hogeVib = setInterval(()=>{
		count++;
		if(count > 10) {
			clearInterval(hogeVib);
			//sLeft = 'left:' + beforeLeft +';';
			//sTop = 'top:' + beforeTop + ';';
			sLeft = beforeLeft;
			sTop = beforeTop;
		} else {
			//sLeft = 'left:' + Math.round(left + wide - Math.random()*wide*2).toString() + 'px;';
			//sTop = 'top:' + Math.round(top + wide - Math.random()*wide * 2).toString() + 'px;';
			sLeft = Math.round(left + wide - Math.random()*wide*2).toString() + 'px';
			sTop = Math.round(top + wide - Math.random()*wide * 2).toString() + 'px';
			lr = false;
		}
		//没 myself.element.style = 'position:relative;' + sLeft + sTop;
		myself.element.style.position = 'relative';
		myself.element.style.left = sLeft;
		myself.element.style.top = sTop;
	},50);
};

/*************************************************
 ** Canv エレメントを往復させる
 ** あらかじめtopとleftを指定してから呼び出すこと
 ** xx ... x方向の移動距離
 ** yy ... y方向の移動距離
 ** lenTime ... かける時間
 ** diffTime ... 秒後に開始(*0.001)
**************************************************/
Canv.prototype.move = function(diffTime,lenTime,xx,yy) {
	const myself = this;
	let sLeft='',sTop='';
	const div = 10;/*コマの数*/
	let count = 0;
	const fugaMove = setTimeout(()=>{
		const beforeTop = this.element.style.top;
		const top = Number(beforeTop.match(/\-*\d+(?:\.\d+)*/)[0]);
		const ddy = yy / div;
		const beforeLeft = this.element.style.left;
		const left = Number(beforeLeft.match(/\-*\d+(?:\.\d+)*/)[0]);
		console.log('left=',left);
		const ddx = xx / div;
		const hogeMove = setInterval(()=>{
			if(++count >= div) clearInterval(hogeMove);
			sLeft = (Math.round(left + ddx * count)).toString() + 'px';
			sTop = (Math.round(top + ddy * count)).toString() + 'px';
			myself.element.style.position = 'relative';
			myself.element.style.top = sTop;
			myself.element.style.left = sLeft;
			console.log(count,sLeft);
		},lenTime/div);
	},diffTime);
};
