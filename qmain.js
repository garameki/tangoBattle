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


const prepareField = function(elementDiv) {
	const eBody = document.getElementsByTagName('body')[0]
	elementDiv.style.width = (eBody.offsetWidth - 0).toString() + 'px';
	elementDiv.style.height = '300px';
};



