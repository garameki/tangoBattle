/************************************
 **
 ** htmlではじまる変数は *.html のscript内でグロ-バルに定義されています。
 **
 *************************************/


/*******************************************************************
 ** prototype chainを使うための関数
 **
 ** 	inherit(childClass,parentClass)でスーパークラスのprototypeを継承して
 ** 	parentClass.call(this[,...[,...]])でスーパークラスのコンストラクタを実行します
 *******************************************************************/
const inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
};




const Words = function(sVariable,contents,oElement,oSound,sDate,aEnemy,aHero) {
	if(!oElement.answer.isConnected) {
		console.error('答えを表示するエレメントがありません。');
	}
	if(!oElement.word.isConnected) {
		console.error('問題ボタンを表示するエレメントがありません。');
	}
	if(contents.length > 0) {
		/*音*/
		this.audioC = oSound.correct;
		this.audioI = oSound.incorrect;
		this.audioS = oSound.start;
		this.audioE = oSound.end;
		this.sD = sDate;

		this.sVariable = sVariable;
		this.eA = oElement.answer;
		this.eB = oElement.word;
		this.eL = oElement.list;
		this.contents = contents;

		this.eE = oElement.enemy;
		this.aE = aEnemy;/*[imgEnemy1,...,imgEnemyBoss]*/
		this.eH = oElement.hero;
		this.aH = aHero;
		
		/*this.contentsの場所*/
		this.ENG = 0;
		this.JAP = 1;
		this.LINK = 2;

		this.nNode = -1;/*マウスがクリックされているノードの絶対番号*/

		/*スコア読み込み*/
		if(!this._cookieCheck()) this._cookieReset();

		this.entries = this._getFromCookie();/*[ノード番号,スコア]*/
		
		this._buttonRandom();
		this._buttonList();

		this.thresholdScore = 1;/*全部がこのスコア以上になったらクリア*/

		/*敵の表示*/
		let count = 0;
		for(let ii=0;ii<this.entries.length;ii++) {
			if(this.entries[ii][1] < this.thresholdScore) {
				count++;
			} else {
				/*nothing*/
			}
		}
		if(count > 5) {
			this.eE.appearElement(this.aE[0],0,Image.MIDDLE,100);
			this.flagBoss = false;
		} else {
			this.eE.appearElement(this.aE[this.aE.length-1],0,Image.MIDDLE,100);
			this.flagBoss = true;
		}

		/*主人公の表示*/
		this.eH.appearElement(this.aH[0],0,Image.MIDDLE,-100);
	}

};
Words.prototype._button = function(num) {
	let sHtml = "errorが発生しました";
	if(num < this.contents.length) {
			sHtml = this._returnHTML(num);
			sHtml += '<br><button class="wordsButton" onclick="'+this.sVariable+'.correct();">正解</button><button class="wordsButton" style="left:50px;" onclick="'+this.sVariable+'.incorrect();">不正解</button><button class="wordsButton" style="left:300px;" onclick="'+this.sVariable+'.audioS.play();'+this.sVariable+'._cookieReset();'+this.sVariable+'._buttonList();'+this.sVariable+'._buttonRandom();'+this.sVariable+'.eE.appearElement('+this.sVariable+'.aE[0],0,Image.MIDDLE,100);'+this.sVariable+'.flagBoss=false;">スコアクリア</button>';

	} else {
		console.error('num = ',num,'this.contents.length = ',this.contents.length,98498);
	}
	this.eB.innerHTML = sHtml;
	document.getElementById('forVisible').style.visibility = 'hidden';
	const hogeVisible = setInterval(()=>{
		document.getElementById('forVisible').style.visibility = 'visible';
		clearInterval(hogeVisible);
	},800);

};
Words.prototype.setEnemy = function(sFilename) {
	const myself = this;
	this.eE.onload = function() {
		myself.eE.style = 'opacity:1.0;';
	};
	this.eE.src = sFilename;
}

Words.prototype.correct = function() {
	/*正解ボタンを押したときの処理*/
	if(this.nNode != -1) {
		this._buttonRandom();
		this.audioI.pause();
		this.audioC.pause();
		this.audioC.currentTime = 0;
		this.audioC.play();
		let date = new Date();
		date.setFullYear(date.getFullYear()+1);
		let num = this._search(this.nNode);
		document.cookie = this.sVariable+this.sD+this.nNode.toString()+'='+(++this.entries[num][1]).toString()+';expire='+date.toUTCString();
		this.nNode = -1;
		this._buttonList();

		/*ファンファーレ*/
		let nEnemy=0;/*thresholdScore以下の数*/
		let flag = true;
		for(let ii=0;ii<this.entries.length;ii++) {
			if(this.entries[ii][1] < this.thresholdScore) {
				nEnemy++;
				flag = false;
			}
		}

		this.eE.vibrate();
		/*敵との距離*/
		const dist = this.eE.parentNode.offsetWidth - 200 - this.eE.width - this.eH.width;
		this.eH.move(-dist,0,0.1);
		if(flag) {
			/*戦闘終了*/
			this.audioE.play();
			this.eE.disappear(1.0);/*1秒で消える*/
			this.eE.appearElement('images/cleared.png',1.1,Image.MIDDLE,100);/*1.1秒後に出現*/
			const myself = this;
			const hogeJump1 = setInterval(()=>{
				clearInterval(hogeJump1);
				myself.eH.move(0,-100,0.1);
			},1100);
			const hogeJump2 = setInterval(()=>{
				clearInterval(hogeJump2);
				myself.eH.move(0,-100,0.1);
			},1350);
			const hogeJump3 = setInterval(()=>{
				clearInterval(hogeJump3);
				myself.eH.move(0,-100,0.1);
			},1600);
		} else {
			/*倒すかどうかの判定*/
			if(nEnemy > 5) {
				if(!this.flagBoss) {
					if(Math.random() > 0.7) {
						this.eE.disappear(1.0);
						/*次の敵出現*/
						let ii = Math.round(Math.random() * (this.aE.length-1)-0.5);
						let fname = this.aE[ii];
						this.eE.appearElement(fname,1.1,Image.MIDDLE,100);
					}
				}
			} else if(nEnemy == 5 && !this.flagBoss) {
				/*ラスボス登場*/
				this.flagBoss = true;
				this.eE.disappear(1.0);
				let fname = this.aE[this.aE.length-1];
				this.eE.appearElement(fname,1.1,Image.MIDDLE,100);
			}
		}



	} else {
		this.eA.innerHTML = '<span style="display:block;text-valign:top;font-size:20px;">答え合わせをしてください</span>';
		const hoge = setInterval(()=>{
			clearInterval(hoge);
			this.eA.innerHTML = '';
		},500);
	}
};
Words.prototype.incorrect = function() {
	if(this.nNode != -1) {
		this._buttonRandom();
		this.audioI.pause();
		this.audioC.pause();
		this.audioI.currentTime = 0;
		this.audioI.play();
		/*敵との距離*/
		const dist = this.eE.parentNode.offsetWidth - 200 - this.eE.width - this.eH.width;
		this.eE.move(dist,0,0.1);
		this.eH.vibrate();
		let date = new Date();
		date.setFullYear(date.getFullYear()+1);
		let num = this._search(this.nNode);
		document.cookie = this.sVariable+this.sD+this.nNode.toString()+'='+(--this.entries[num][1]).toString()+';expire='+date.toUTCString();
		this.nNode = -1;
		this._buttonList();
	} else {
		this.eA.innerHTML = '<span style="display:block;text-valign:top;font-size:20px;">答え合わせをしてください</span>';
		const hoge = setInterval(()=>{
			clearInterval(hoge);
			this.eA.innerHTML = '';
		},500);
	}
};
Words.prototype._search = function(nNum) {

	let num = -1;
	for(let ii=0;ii<this.entries.length;ii++) {
		if(this.entries[ii][0] == nNum) {
			num = ii;
			break;
		}
	}
	if(num == -1) console.error('can\'t find node No'+nNum.toString()+'in the "this.entries"',85221475555);
	return num;
};
Words.prototype._buttonRandom = function() {

	let ans=0;
	let nn=0;
	for(let ii=0;ii<this.contents.length;ii++) {
		if(this.entries[ii][1] < this.thresholdScore) {
			nn++;
		}
	}

	const max = nn*(nn+1)*(2*nn+1)/6;
	const pp = Math.round(Math.random() * max - 0.5);
	let sum = 0;
	for(let kk=1;kk<=nn;kk++) {
		sum += kk * kk;
		if(sum > pp) {
			ans = nn - kk;
			break;
		}
	}

	/************************************************************
	一様分布/
//	let ans = Math.round(Math.random() * nn - 0.5);
	**************************************************************/

	if(ans >= nn) console.error('ans=',ans,'Words.prototype._buttonRandom()');
	this._button(ans);
};
Words.prototype._getFromCookie = function() {
	/*スコア読み込み*/
	const cookie = document.cookie;
	const cookies = cookie.split(';');/*最後には;を付けないこと*/
	const regexp = new RegExp('^\\s*'+this.sVariable+this.sD+'(\\d+)');
	const ids = [ ];
	let id,num;
	for(let ii=0;ii<cookies.length;ii++) {
		id = cookies[ii].split('=');
		num = id[0].match(regexp);
		if(num) {
			ids.push([Number(num[1]),Number(id[1])]);
		}
	}
	return ids;
};
Words.prototype._cookieReset = function() {
	this._cookieClear();
	for(let ii=0;ii<this.contents.length;ii++) {
		document.cookie = this.sVariable+this.sD+ii.toString()+'=0;';
	}
	this.entries = [ ];
	for(let ii=0;ii<this.contents.length;ii++) {
		this.entries.push([ii,0]);
	}
};

Words.prototype._cookieClear = function() {
	const date = new Date('1970/1/1');
	const ids = this._getFromCookie();
	for(let ii=0;ii<ids.length;ii++) {
		//document.cookie = ids[ii]+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		document.cookie = this.sVariable + this.sD + ids[ii][0]+'=;expires='+ date.toUTCString();
	}
	this.entries = [ ];

};
//Words.prototype._cookieClear = function() {
//	const ids = this._getFromCookie();
//	for(let ii=0;ii<ids.length;ii++) {
//		document.cookie = ids[ii]+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
//	}
//	this.entries = [ ];
//
//};
Words.prototype._cookieCheck = function() {
	/*scoreがNaNとかになってたらfalseを返す*/
	const ids = this._getFromCookie();
	const regexp = new RegExp('^\\d+$');
	let flag = true;
	if(ids.length != this.contents.length) {
		flag = false;
	} else {
		/*NaNのチェック*/
		for(let ii=0;ii<ids.length;ii++) {
			if(isNaN(ids[ii][1])) {
				flag = false;
				break;
			}
		}
	}
	return flag;
};
Words.prototype._returnHTML = function(ii) {
	return '<div id="forVisible"><button id="'+this.sVariable+this.entries[ii][0].toString()+'" style="font-size:25px;" onmouseout="if(document.activeElement.id == \''+this.sVariable+this.entries[ii][0].toString()+'\') {'+this.sVariable+'.eA.innerText=\'\';}" onmouseup="'+this.sVariable+'.eA.innerText=\'\';" onmousedown="'+this.sVariable+'.nNode='+this.entries[ii][0].toString()+';'+this.sVariable+'.eA.innerHTML=\''+this.contents[this.entries[ii][0]][this.JAP]+'\';">'+this.contents[this.entries[ii][0]][this.ENG]+'<span style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;'+this.entries[ii][1].toString()+'点</span></button><a class="otolink" href="'+this.contents[this.entries[ii][0]][this.LINK]+'">音</a></div>';
};
Words.prototype._buttonList = function() {
	/*worse順に並べて表示する*/
	let temp;
	let num = this.entries.length;
	for(let ii=0;ii<num-1;ii++) {
		for(let kk=ii+1;kk<num;kk++) {
			if(this.entries[ii][1] > this.entries[kk][1]) {
				temp = this.entries[ii];
				this.entries[ii] = this.entries[kk];
				this.entries[kk] = temp;
			}
		}
	}
	/*表示*/
	let sHtml = "";
	const doc = this.eL.contentDocument;
	for(let ii=0;ii<num;ii++) {
		sHtml += this._returnHTML(ii);
	}
	this.eL.innerHTML = sHtml;


};













/************************************************************************
 ** Dateオブジェクトをいろんな形で返す
 **
**************************************************************************/
const factoryDate = function(oDate) {
	const days = ["日","月","火","水","木","金","土","日"];
	const year = oDate.getFullYear().toString();
	const month = (oDate.getMonth() + 1).toString();
	const month_f = ('0' + (oDate.getMonth() + 1).toString()).slice(-2);
	const day1 = oDate.getDate().toString();
	const day1_f = ('0' + oDate.getDate().toString()).slice(-2);
	const day2 = days[oDate.getDay()];
	const dateInJapanese = year + '年' + month + '月' + day1 + '日（' + day2 + '）';
	const dateForFilename = year + '_' + month_f + '_' + day1_f;
	return {
		inJapanese:dateInJapanese,
		forFilename:dateForFilename
	};
};

const setGrade = function(element) {
	element.innerHTML = htmlGrade;
};



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
Image.prototype.vibrate = function() {
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
};

/*************************************************
 ** Image エレメントを往復させる
 ** あらかじめtopとleftを指定してから呼び出すこと
**************************************************/
Image.prototype.move = function(xx,yy,time) {
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

const prepareField = function(elementDiv) {
	const eBody = document.getElementsByTagName('body')[0]
	elementDiv.style.width = (eBody.offsetWidth - 0).toString() + 'px';
	elementDiv.style.height = '400px';
};
