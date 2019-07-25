/******************************************************************
 * (Image) img : たとえばimg = new Image();img.src='fighter.png';
 * (String) sFilename : ファイル名
 * [(Attack),...] : Attackのインスタンス
 * [(Number)] : アタックの出現確率 全て足して1にすwる
 ******************************************************************/
const Monster = function(sFilename,aAttack,aProbability) {
	this.fname = sFilename;
	this.aAttack = aAttack;
	this.aProbability = aProbability;
};
Monster.prototype.fname = void 0;/*外部からの参照用*/
Monster.prototype.attack = function(myself) {/*myselfとして、Battleインスタンスのthisを入れて下さい*/
	let flag = true;
	const nn = Math.random();
	const len = this.aProbability.length;
	const len2 = this.aAttack.length;
	let ii,sum = 0;
	if(len != len2) {
		console.error('数が違います',len,len2);
	} else {
		for(ii=0;ii<len;ii++) {
			sum += this.aProbability[ii];	
			if(sum >= nn) {
				flag = false;
				this.aAttack[ii].call(myself);/*attack.js内の関数をcall*/
				break;
			}
		}
		if(flag) console.error('どの攻撃も選択されませんでした。flag=',flag);

	}
};
	
	
