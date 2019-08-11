
/*各シーンのヒーローの画像*/
const tamanegi1 = new Monster('images/heroTamanegi1.png',[rtaiatari],[1],oVoice);
const tamanegi2 = new Monster('images/heroTamanegi2.png',[rtaiatari],[1],oVoice);
const tamanegi3 = new Monster('images/heroTamanegi3.png',[rtaiatari],[1],oVoice);
const aHeroSaidan = [
	tamanegi1,
	tamanegi2,
	tamanegi3
];
const senshi1 = 	new Monster('images/heroSenshi1.png',[rtaiatari,rken],[0.3,0.7],oVoice);
const monk = 		new Monster('images/heroMonk.png',[rtaiatari],[1],oVoice);
const shiro = 		new Monster('images/heroShiromadoushi.png',[rmahou,rmahou2],[0.5,0.5],oVoice);
const kuro = 		new Monster('images/heroKuromadoushi.png',[rmahou],[1],oVoice);
const sido = 		new Monster('images/heroSido.png',[rmahou],[1],oVoice);
const sarahime = 	new Monster('images/heroSarahime.png',[rmahou],[1],oVoiceHime);
const aHeroKanan = [
	senshi1,
	monk,
	tamanegi1,
	sido,
	sarahime,
	shiro,
	kuro
];
const kobito = new Monster('images/heroKobito.png',[rmahou],[1],oVoice);
const aHeroTozasu = [
	kobito
];
const desh = new Monster('images/heroDesh.png',[rmahou],[1],oVoice);
const aHeroNept = [
	tamanegi1,
	desh
];
const aHeroUmiFuyuu = [
	tamanegi1,
	desh
];
const chokobo = new Monster('images/heroChokobo.png',[rmahou],[1],oVoice);
const aHeroGurugan = [
	tamanegi1,
	desh,
	chokobo
];
const aHeroOen = [
	senshi1,
	monk,
	shiro,
	kuro
];
const senshi2 = new Monster('images/heroSenshi2.png',[rken],[1],oVoice);
const aHeroDowaf = [
	senshi2,
	monk,
	shiro,
	kuro
];
const aHeroSido = [
	sido
];
const eria = new Monster('images/heroEria.png',[rmahou2],[1],oVoice);
const aHeroEria = [
	eria
];
const aHeroMizu = [
	senshi2,
	monk,
	shiro,
	kuro,
	eria
];
