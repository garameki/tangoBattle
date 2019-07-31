
const Battle = function(sVariable,contents,oElement,oSound,sDate,aEnemy,aHero,sBG) {
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
//		this.aE = aEnemy;/*[imgEnemy1,...,imgEnemyBoss]*/
		this.aE = aEnemy;/*[Monster,Monster,....]*/
		this.eH = oElement.hero;
		this.aH = aHero;
		/*魔法用エレメント*/
		this.eME = oElement.mahouEnemy;
		this.eMH = oElement.mahouHero;
		this.eME.width = '68';
		this.eME.height = '68';
		this.mE = new Canv(this.eME);
		this.mH = new Canv(this.eMH);
		
		/*配列this.contentsの場所*/
		this.ENG = 0;
		this.JAP = 1;
		this.LINK = 2;

		/*バックグラウンド画像表示*/
		oElement.battleField.style.backgroundImage = 'url('+sBG+')';


		this.nNode = -1;/*マウスがクリックされているノードの絶対番号*/

		/*スコア読み込み*/
		if(!this._cookieCheck()) this._cookieReset();

		this.entries = this._getFromCookie();/*[ノード番号,スコア]*/
		
		this._buttonRandom();
		this._buttonList();

		this.thresholdScore = 1;/*全部がこのスコア以上になったらクリア*/

		/*敵の表示*/
		const nnE = Math.round(Math.random()*(this.aE.length)-0.5);
		this.monster = this.aE[nnE];
		this.eE.appearElement(this.monster.fname,0,Image.MIDDLE,100);
		this.mE.appearElement(0,Canv.MIDDLE,100);

		/*主人公の表示*/
		const nnH = Math.round(Math.random()*(this.aH.length)-0.5);
		this.hero = this.aH[nnH];
		this.eH.appearElement(this.hero.fname,0,Image.MIDDLE,-100);
		this.mH.appearElement(0,Canv.MIDDLE,100);

	}

};
Battle.prototype._button = function(num) {
	let sHtml = "errorが発生しました";
	if(num < this.contents.length) {
			sHtml = this._returnHTML(num);
			sHtml += '<br><button class="wordsButton" onclick="'+this.sVariable+'.correct();">正解</button><button class="wordsButton" style="left:50px;" onclick="'+this.sVariable+'.incorrect();">不正解</button><br><button class="wordsButton" style="left:300px;margin-top:30px;" onclick="'+this.sVariable+'.audioS.play();'+this.sVariable+'._cookieReset();'+this.sVariable+'._buttonList();'+this.sVariable+'._buttonRandom();'+this.sVariable+'.monster = '+this.sVariable+'.aE[Math.round(Math.random()*'+this.sVariable+'.aE.length -0.5)];'+this.sVariable+'.eE.appearElement('+this.sVariable+'.monster.fname,0,Image.MIDDLE,100);">スコアクリア</button>';
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
Battle.prototype.setEnemy = function(sFilename) {
	const myself = this;
	this.eE.onload = function() {
		myself.eE.style = 'opacity:1.0;';
	};
	this.eE.src = sFilename;
}

Battle.prototype.correct = function() {
	/*正解ボタンを押したときの処理*/
	if(this.nNode != -1) {
		/* ボタンとリストを消す */
		document.getElementById('forVisible').style.visibility = 'hidden';
		this.eL.innerHTML = '';
		this.audioI.pause();
		this.audioC.pause();
		this.audioC.currentTime = 0;
		this.audioC.play();
		let date = new Date();
		date.setFullYear(date.getFullYear()+1);
		let num = this._search(this.nNode);
		document.cookie = this.sVariable+this.sD+this.nNode.toString()+'='+(++this.entries[num][1]).toString()+';expire='+date.toUTCString();
		this.nNode = -1;

		/*ファンファーレ*/
		let nEnemy=0;/*thresholdScore以下の数*/
		let flag = true;
		for(let ii=0;ii<this.entries.length;ii++) {
			if(this.entries[ii][1] < this.thresholdScore) {
				nEnemy++;
				flag = false;
			}
		}

		this.eE.vibrate(0);
		/*敵との距離*/
		//const dist = this.eE.parentNode.offsetWidth - 200 - this.eE.width - this.eH.width;
		this.dist = this.eE.parentNode.offsetWidth - 200 - this.eE.width - this.eH.width;/*call内で使う*/
//		this.eH.goback(-dist,0,0.1);
		this.hero.attack(this);
		if(flag) {
			/*セクションのすべての単語をマスター*/
			/*一匹やっつけた*/
			this.audioE.play();
			this.eE.disappear(1.0);/*1秒で消える*/
//			this.eE.appearElement('images/cleared.png',1.1,Image.MIDDLE,100);/*1.1秒後に出現*/
			/*ジャンプ*/
			const myself = this;
			const hogeJump1 = setInterval(()=>{
				clearInterval(hogeJump1);
				myself.eH.goback(0,-100,0.1);
			},1100);
			const hogeJump2 = setInterval(()=>{
				clearInterval(hogeJump2);
				myself.eH.goback(0,-100,0.1);
			},1350);
			const hogeJump3 = setInterval(()=>{
				clearInterval(hogeJump3);
				myself.eH.goback(0,-100,0.1);
			},1600);
			
			/*次の敵*/
			const hogeNextEnemy = setInterval(()=>{
				clearInterval(hogeNextEnemy);
				battles.next();
			},1600);
		} else {
			this._buttonRandom();
			this._buttonList();
		}


	} else {
		this.eA.innerHTML = '<span style="display:block;text-valign:top;font-size:20px;">答え合わせをしてください</span>';
		const hoge = setInterval(()=>{
			clearInterval(hoge);
			this.eA.innerHTML = '';
		},500);
	}
};
Battle.prototype.incorrect = function() {
	const myself = this;
	if(this.nNode != -1) {
		this._buttonRandom();
		this.audioI.pause();
		this.audioC.pause();
		/*敵の攻撃*/
		this.dist = this.eE.parentNode.offsetWidth - 200 - this.eE.width - this.eH.width;/*call内で使う*/
		this.monster.attack(this);
		/*cookie処理*/
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
Battle.prototype._search = function(nNum) {

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
Battle.prototype._buttonRandom = function() {

	const len = this.contents.length;
	let ii,nnn,min=1000,max=-1000;
	for(ii=0;ii<len;ii++) {
		nnn = this.entries[ii][1];
		if(min > nnn) min = nnn;
		if(max < nnn) max = nnn;
	}
//	console.log('min=',min,'max=',max);
	let value,sum=0;
	const aLineups = [ ];
	for(ii=0;ii<len;ii++) {
		value = max - this.entries[ii][1] + 1;
		sum += value * value;
		aLineups.push(sum);
	}
//	console.log('sum=',sum);
	const nRnd = Math.round(Math.random() * sum);
//	console.log('nRnd=',nRnd);
	for(ii=0;ii<len;ii++) {
//		console.log('aLineups[',ii,']=',aLineups[ii],this.contents[this.entries[ii][0]][0]);
		if(aLineups[ii] >= nRnd) break;
	}
	const ans = ii;
//	console.log('ans=',ans);

	/************************************************************
	一様分布/
//	let ans = Math.round(Math.random() * nn - 0.5);
	**************************************************************/

	if(ans >= len) console.error('ans=',ans,'Battle.prototype._buttonRandom()');
	this._button(ans);
};
Battle.prototype._getFromCookie = function() {
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
Battle.prototype._cookieReset = function() {
	this._cookieClear();
	for(let ii=0;ii<this.contents.length;ii++) {
		document.cookie = this.sVariable+this.sD+ii.toString()+'=0;';
	}
	this.entries = [ ];
	for(let ii=0;ii<this.contents.length;ii++) {
		this.entries.push([ii,0]);
	}
};

Battle.prototype._cookieClear = function() {
	const date = new Date('1970/1/1');
	const ids = this._getFromCookie();
	for(let ii=0;ii<ids.length;ii++) {
		//document.cookie = ids[ii]+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		document.cookie = this.sVariable + this.sD + ids[ii][0]+'=;expires='+ date.toUTCString();
	}
	this.entries = [ ];

};
//Battle.prototype._cookieClear = function() {
//	const ids = this._getFromCookie();
//	for(let ii=0;ii<ids.length;ii++) {
//		document.cookie = ids[ii]+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
//	}
//	this.entries = [ ];
//
//};
Battle.prototype._cookieCheck = function() {
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
Battle.prototype._returnHTML = function(ii) {
	return '<div id="forVisible"><button id="'+this.sVariable+this.entries[ii][0].toString()+'" style="font-size:25px;" onmouseout="if(document.activeElement.id == \''+this.sVariable+this.entries[ii][0].toString()+'\') {'+this.sVariable+'.eA.innerText=\'\';}" onmouseup="'+this.sVariable+'.eA.innerText=\'\';" onmousedown="'+this.sVariable+'.nNode='+this.entries[ii][0].toString()+';'+this.sVariable+'.eA.innerHTML=\''+this.contents[this.entries[ii][0]][this.JAP]+'\';">'+this.contents[this.entries[ii][0]][this.ENG]+'<span style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;'+this.entries[ii][1].toString()+'点</span></button><a class="otolink" target="pronounciation" href="'+this.contents[this.entries[ii][0]][this.LINK]+'">音</a></div>';
};
Battle.prototype._buttonList = function() {
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

