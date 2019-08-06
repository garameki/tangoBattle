
const audioTaiatariM = new Audio();
audioTaiatariM.src = 'oto/taiatariM.mp3';
audioTaiatariM.playbackRate = 15.0;
const audioTaiatariD = new Audio();
audioTaiatariD.src = 'oto/rmahouD.mp3';
audioTaiatariD.volume = 0.3;
function taiatari() {
	audioTaiatariM.currentTime = 0;
	audioTaiatariM.play();
	setTimeout(()=>{
		audioTaiatariM.pause();
	},200);

	this.eE.goback(this.dist,0,0.1);
	this.eH.vibrate(100);
	const fuga = setTimeout(()=>{
		audioTaiatariD.currentTime = 0;
		audioTaiatariD.play();
	},100);
	const myself = this;
	const fugaScream = setTimeout(()=>{
		myself.hero.scream();
	},100);
	return 100;

};

const audioTaiatari = new Audio();
audioTaiatari.src = 'oto/taiatari.mp3';
audioTaiatari.playbackRate = 15.0;
function rtaiatari() {
	audioTaiatari.currentTime = 0;
	audioTaiatari.play();
	setTimeout(()=>{
		audioTaiatari.pause();
	},200);

	this.eH.goback(-this.dist,0,0.1);
	this.eE.vibrate(100);
	const fuga = setTimeout(()=>{
		audioTaiatariD.currentTime = 0;
		audioTaiatariD.play();
	},100);
	const myself = this;
	const fugaScream = setTimeout(()=>{
		myself.monster.scream();
	},100);
	return 100;

};

const audioRmahou = new Audio();
audioRmahou.src = 'oto/rmahou.mp3';
audioRmahou.volume = 0.5;
const audioRmahouD = new Audio();
audioRmahouD.src = 'oto/rmahouD.mp3';
function mahou() {
	audioRmahou.currentTime = 0;
	audioRmahou.play();
	const tt = 300;
	this.mE.appearElement(0,Canv.MIDDLE,100);
	this.mE.move(0,tt,this.dist,0);
	this.mE.puwa(200);
	this.mE.disappear(500,500);
	this.mE.move(600,0,-this.dist,0);
	this.eH.vibrate(tt);
	const myself = this;
	const fuga = setTimeout(()=>{
		audioRmahouD.currentTime = 0;
		audioRmahouD.play();
	},tt);
	const fugaScream = setTimeout(()=>{
		myself.hero.scream();
	},tt);
	return tt;
};

function rmahou() {
	audioRmahou.currentTime = 0;
	audioRmahou.play();
//	this.mH.appearElement(0,Canv.MIDDLE,1000);//100掛けてフェードイン
	const tt = 300;
	this.mH.move(0,tt,-this.dist,0);//0待ってから300掛けてthis.dist移動
	this.eH.goback(-100,-30,0.1);//0.1秒で行って帰る
	this.mH.puwa('#666666');//200の円を描く
//	this.mH.disappear(500,500);//500s後に500s掛けてフェードアウト
	this.mH.move(600,0,this.dist,0);//1000s後に500sかけて-this.dist動く
	this.eE.vibrate(tt);
	const myself = this;
	const fuga = setTimeout(()=>{
		audioRmahouD.currentTime = 0;
		audioRmahouD.play();
	},tt);
	const fugaScream = setTimeout(()=>{
		myself.monster.scream();
	},tt);
	return tt;
};
