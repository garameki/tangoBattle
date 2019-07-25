/**********************************************************
 * 指定時間後に画像を切り替えます
 ** (Number) time : 秒 この時間経過後に表示する。
 ** (Number) posTB : Imageのプロパティーのうち(TOP,MIDDLE,BOTTOM)のどれか。親エレメント内における上下の位置
 ** (Number) posLR : ピクセル 親エレメントにおける左右の位置 プラスなら左から、マイナスなら右からの移動量を示す
 **********************************************************/
Image.TOP = 0;
Image.MIDDLE = 1;
Image.BOTTOM = 2;
Image.prototype.appearElement = function(sFilename,time,posTB,posLR) {	
	let nn,sTop,sLeft;

	if(posTB == Image.TOP) nn = 0;
	else if (posTB == Image.MIDDLE) nn = 0.5;
	else if(posTB == Image.BOTTOM) nn = 1.0;
	else console.error('\'posTB\' is not TOP,MIDDLE nor BOTTOM');

	let parentWidth = this.parentNode.offsetWidth;
	let parentHeight = this.parentNode.offsetHeight;
	const hogeFlag = setInterval(()=>{
		clearInterval(hogeFlag);
		this.onload = function() {
//			if(posLR < 0) sLeft = 'left:' + (parentWidth - this.width + posLR).toString() + 'px;';
//			else sLeft = 'left:' + posLR.toString() + 'px;';
			sLeft = 'left:' + posLR.toString() + 'px;';
			sTop = 'top:' + ((parentHeight - this.height) * nn).toString() + 'px;';
			this.style = 'opacity:1.0;position:relative;'+sTop+sLeft;
		}
		this.src = sFilename;
	},time * 1000);
};

/**********************************************************
 ** 指定した時間でフェードアウトします
 ** 0.1秒間隔で時間を指定できます
 ***********************************************************/
Image.prototype.disappear = function(time) {
	let height = this.height;
	let beforePosition = this.style.position;
	let beforeTop = this.style.top;
	let beforeLeft = this.style.left;
	let sPos = 'position:relative;';
	let threshold = time * 10;

	let count=0
	const hogeDisappear = setInterval(()=>{
		count++;
		if(count > threshold) {
			clearInterval(hogeDisappear);
		}
		this.style = 'opacity:'+((threshold - count)/threshold).toString()+';position:'+ beforePosition + ';top:' +beforeTop + ';left:' + beforeLeft + ';';
	},100);
};

/*********************************************************
 ** エレメントを左右に揺らします
 ** position:relativeにしますので、
 ** 呼び出し時にtopを指定してください
 ** element.parentNodeは<div>が好ましいです。<div>タグで囲んでおくことを推奨します。
 *********************************************************/
Image.prototype.vibrate = function(dTime) {
	const fugaVib = setTimeout(()=>{
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
				sLeft = 'left:' + beforeLeft +';';
				sTop = 'top:' + beforeTop + ';';
			} else {
				sLeft = 'left:' + Math.round(left + wide - Math.random()*wide*2).toString() + 'px;';
				sTop = 'top:' + Math.round(top + wide - Math.random()*wide * 2).toString() + 'px;';
				lr = false;
			}
			myself.style = 'position:relative;' + sLeft + sTop;
		},50);
	},dTime);
};

/*************************************************
 ** Image エレメントを往復させる
 ** あらかじめtopとleftを指定してから呼び出すこと
**************************************************/
Image.prototype.goback = function(xx,yy,time) {
	let sLeft='',sTop='';
	const div = 10;/*コマの数*/
	const beforeTop = this.style.top;
	const top = Number(beforeTop.match(/\-*\d+(?:\.\d+)*/)[0]);
	const ddy = yy / div;
	const beforeLeft = this.style.left;
	const left = Number(beforeLeft.match(/\-*\d+(?:\.\d+)*/)[0]);
	const ddx = xx / div;
	let count = 0;
	const myself = this;
	let hogeMove2;
	const hogeMove1 = setInterval(()=>{
		if(++count>div) {
			clearInterval(hogeMove1);
			count = 0;
			hogeMove2 = setInterval(()=>{
				if(++count>div) {
					clearInterval(hogeMove2);
					sLeft = 'left:' + beforeLeft + ';';
					sTop = 'top:' + beforeTop + ';';
				} else {
					sLeft = 'left:' +(Math.round(left + ddx * (div - count))).toString() + 'px;';
					sTop = 'top:' +(Math.round(top + ddy * (div - count))).toString() + 'px;';
				}
				myself.style = 'position:relative;' + sTop + ';' + sLeft;
			},time*1000/div);
		} else {
			sLeft = 'left:' + (Math.round(left + ddx * count)).toString() + 'px;';
			sTop = 'top:' + (Math.round(top + ddy * count)).toString() + 'px;';
		}
		myself.style = 'position:relative;' + sTop + sLeft;


	},time*1000/div);
};

