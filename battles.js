
/*********************************************************
 **		Battlesクラス
 **
 ** 注意
 ** button要素のonclickイベント内でグローバル変数「quest」を使用します
 ** これはBattlesクラスから呼び出されるBattleクラスの仕様によるものです。
 ** バッティングの可能性がある場合には変更してください。
 **
 *********************************************************/
let quest;/*onclickで使われます*/
const Battles = function(oElement,sTitle) {
	this.oElement = oElement;/*どのシーンでもelementは同じものを使う*/
	this.nScene = 0;
	this.title = sTitle;

	this.aQNumber = [ ];
	this.aId = [ ];
	this.aWords = [ ];
	this.aSound = [ ];
	this.aEnemy = [ ];
	this.aHero = [ ];
	this.aBG = [ ];
}
//Battles.prototype.store = function(sQNumber,sId,aWords,oSound,aEnemy,sHero,sBG) {
Battles.prototype.store = function(sQNumber,sId,aWords,oSound,aEnemy,aHero,sBG) {
	this.aQNumber.push(sQNumber);
	this.aId.push(sId);
	this.aWords.push(aWords);
	this.aSound.push(oSound);
	this.aEnemy.push(aEnemy);
//	this.aHero.push(sHero);
	this.aHero.push(aHero);
	this.aBG.push(sBG);
};
Battles.prototype.start = function() {
	if(this.aId.length != 0) this.change(0);
	else console.error('no contents! in Battles');
};
Battles.prototype.next = function() {
	if((this.nScene + 1) < this.aId.length) this.change(++this.nScene);
	else {
		console.error('次のコンテンツはありません。in Battles');
		document.getElementById('wordsans').innerText = '次の問題はありません。';
	}
};
Battles.prototype.previous = function() {
	if((this.nScene - 1) > 0) this.change(--this.nScene);
	else {
		console.error('これ以上前にもどれません。in Battles');
		eWordAns.innerText = 'これ以上前にもどれません';
	}
};
Battles.prototype.change = function(nScene) {
		this.oElement.title.innerText = this.title + this.aQNumber[nScene];
		/* quest...グローバルスコープ */
//		quest = new Battle('quest',this.aWords[nScene],this.oElement,this.aSound[nScene],this.aId[nScene],this.aEnemy[nScene],[this.aHero[nScene]],this.aBG[nScene]);
		quest = new Battle('quest',this.aWords[nScene],this.oElement,this.aSound[nScene],this.aId[nScene],this.aEnemy[nScene],this.aHero[nScene],this.aBG[nScene]);
			/*注意...heroは配列にして渡しています。(拡張するかもしれないから)*/
};
Object.defineProperty(Battles,'length',{get:()=>{return this.sId.length;},confiturable:false});


