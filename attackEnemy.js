
function taiatari() {

	this.eE.goback(this.dist,0,0.1);
	this.eH.vibrate(0);
	this.audioI.currentTime = 0;
	this.audioI.play();

};

function mahou() {
	this.mE.appearElement(0,Canv.MIDDLE,100);
	this.mE.move(0,300,this.dist,0);
	this.mE.puwa(200);
	this.mE.disappear(500,500);
	this.mE.move(1000,500,-this.dist,0);
	const tt = 300;
	this.eH.vibrate(tt);
	const myself = this;
	const fuga = setTimeout(()=>{
		myself.audioI.currentTime = 0;
		myself.audioI.play();
	},tt);
};

function rmahou() {
	this.mH.appearElement(0,Canv.MIDDLE,100);//100掛けてフェードイン
	this.mH.move(0,300,-this.dist,0);//0待ってから300掛けてthis.dist移動
	this.mH.puwa(200);//200の円を描く
	this.mH.disappear(500,500);//500s後に500s掛けてフェードアウト
	this.mH.move(1000,500,this.dist,0);//1000s後に500sかけて-this.dist動く
	const tt = 300;
	this.eE.vibrate(tt);
	const myself = this;
	const fuga = setTimeout(()=>{
		myself.audioI.currentTime = 0;
		myself.audioI.play();
	},tt);
};
