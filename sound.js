
/* SOUNDの読み込み */
const aSword = new Audio();
aSword.src = 'oto/sword.mp3';/*正解の音*/
const aDamage = new Audio();
aDamage.src = 'oto/damage.mp3';/*不正解音*/
const aGong1 = new Audio();
aGong1.src = 'oto/gong.mp3';
const aGong2 = new Audio();
aGong2.src = 'oto/gong3.mp3';
const aDamageHime = new Audio();
aDamageHime.src = 'oto/abunai.mp3';
const aDamageChokobo = new Audio();
aDamageChokobo.src = 'oto/kaa.mp3';
const aDamageZonbie = new Audio();
aDamageZonbie.src = 'oto/zonbie.mp3';
aDamageZonbie.playbackRate = 2;

aGong1.volume = 0.2;
aGong2.volume = 0.2;
aDamage.volume = 0.5;
aSword.volume = 0.2;
aDamageHime.volume = 1;
aDamageChokobo.volume = 1;

/*各シーンのサウンドの設定*/
const oSound = {
	start:aGong1,
	end:aGong2
};

/*キャラの声*/
const oVoice = {
	scream:aDamage
};
const oVoiceHime = {
	scream:aDamageHime
};
const oVoiceZonbie = {
	scream:aDamageZonbie
};

