const people = 		new Monster('images/fuuinPeople1.png',[mahou,taiatari],[0.1,0.9],oVoiceZonbie);
/*祭壇の洞窟*/
const goblin = 		new Monster('images/saidanGoblin.png',[taiatari],[1],oVoiceZonbie);
const eyefang = 	new Monster('images/saidanEyefang.png',[taiatari],[1],oVoiceZonbie);
const kabancle = 	new Monster('images/saidanKabancle.png',[taiatari],[1],oVoiceZonbie);
const landturtle = 	new Monster('images/saidanLandturtle.png',[taiatari],[1],oVoiceZonbie);
const aEnemySaidan1 = [
	goblin
];
const aEnemySaidan2 = [
	eyefang,
	kabancle
];
const aEnemySaidanBoss = [
	landturtle
];
/*カズズの村*/
const kirabi =		new Monster('images/kasuzuKirabi.png',[taiatari],[1],oVoiceZonbie);
const weaurufu =	new Monster('images/kasuzuWeaurufu.png',[taiatari],[1],oVoiceZonbie);
const aEnemyKasuzu = [
	kirabi,
	weaurufu
];
/*サスーン城*/
const zonbi =	new Monster('images/sasunZonbi.png',[taiatari],[1],oVoiceZonbie);
const darkeye =	new Monster('images/sasunDarkeye.png',[taiatari],[1],oVoiceZonbie);
const aEnemySasun = [
	zonbi,
	darkeye
];
const grifon = new Monster('images/sasunGrifon.png',[taiatari],[1],oVoiceZonbie);
const aEnemySasunBoss = [
	grifon
];
/*封印の洞窟*/
const mami =		new Monster('images/fuuinMami.png',[taiatari],[1],oVoiceZonbie);
const sukeruton =	new Monster('images/fuuinSukeruton.png',[taiatari],[1],oVoiceZonbie);
const raruwai =		new Monster('images/fuuinRaruwai.png',[taiatari],[1],oVoiceZonbie);
const noroinodouka =	new Monster('images/fuuinNoroinodouka.png',[taiatari],[1],oVoiceZonbie);
const jin =		new Monster('images/fuuinJin.png',[taiatari,mahou],[0.5,0.5],oVoiceZonbie);
const aEnemyFuuin1 = [
	sukeruton,
	mami

];
const aEnemyFuuin2 = [
	raruwai,
	noroinodouka
];
const aEnemyFuuinBoss = [
	jin
];
/*バハムートの巣*/
const tori = 		new Monster('images/bahamutoTori.png',[taiatari],[1],oVoiceZonbie);
const rufu = 		new Monster('images/bahamutoRufu.png',[mahou],[1],oVoiceZonbie);
const bahamuto = 	new Monster('images/bahamuto.png',[mahou],[1],oVoiceZonbie);
const bahamuto2 = 	new Monster('images/bahamuto2.png',[mahou],[1],oVoiceZonbie);
const aEnemyBahamuto = [
	tori,
	rufu,
	people
];
const aEnemyBahamutoBoss1 = [
	bahamuto
];
const aEnemyBahamutoBoss2 = [
	bahamuto2
];
/*トーザスの抜け道*/
const dakufeisu =	new Monster('images/tozasuDakufeisu.png',[taiatari],[1],oVoiceZonbie);
const repurahon =	new Monster('images/tozasuRepurahon.png',[taiatari],[1],oVoiceZonbie);
const aEnemyTozasu = [
	dakufeisu,
	repurahon
];
/*ネプト神殿*/
const puti =		new Monster('images/neptPuti.png',[taiatari],[1],oVoiceZonbie);
const bloodworm =	new Monster('images/neptBloodworm.png',[taiatari],[1],oVoiceZonbie);
const riripatto =	new Monster('images/neptRiripatto.png',[taiatari],[1],oVoiceZonbie);
const wearatto =	new Monster('images/neptWearatto.png',[taiatari],[1],oVoiceZonbie);
const oonezumi = 	new Monster('images/neptOonezumi.png',[taiatari],[1],oVoiceZonbie);
const aEnemyNept = [
	bloodworm,
	puti,
	riripatto,
	wearatto
];
const aEnemyNeptBoss = [
	oonezumi
];
/*浮遊大陸の海*/
const sahagin = new Monster('images/umiSahagin.png',[taiatari],[1],oVoiceZonbie);
const kirafish = new Monster('images/umiKirafish.png',[taiatari],[1],oVoiceZonbie);
const sierementaru = new Monster('images/umiSierementaru.png',[taiatari],[1],oVoiceZonbie);
const aEnemyUmiFuyuu = [
	sahagin,
	kirafish,
	sierementaru
];
/*グルガン族付近*/
const aEnemyGurugan = [
	grifon
];
/*オーエンの塔*/
const bloodbad = new Monster('images/oenBloodbad.png',[taiatari],[1],oVoiceZonbie);
const ohishuki = new Monster('images/oenOhishuki.png',[taiatari],[1],oVoiceZonbie);
const putimeiji = new Monster('images/oenPutimeiji.png',[taiatari,mahou],[0.3,0.7],oVoiceZonbie);
const fajarugu = new Monster('images/oenFajarugu.png',[taiatari],[1],oVoiceZonbie);
const aEnemyOen = [
	bloodbad,
	ohishuki,
	putimeiji,
	fajarugu
];
const medhusa = new Monster('images/oenMedhusa.png',[taiatari,mahou],[0.5,0.5],oVoiceZonbie);
const aEnemyOenBoss = [
	medhusa
];
/*オーエンの塔の後の海*/
const tangi = new Monster('images/umiTangi.png',[taiatari],[1],oVoiceZonbie);
const aEnemyUmiOen = [
	sahagin,
	kirafish,
	sierementaru,
	tangi
];
/*ドワーフの洞窟*/
const  bomu = new Monster('images/dowafBomu.png',[taiatari],[1],oVoiceZonbie);
const  maman = new Monster('images/dowafMaman.png',[taiatari],[1],oVoiceZonbie);
const  shounyuuseki = new Monster('images/dowafShounyuuseki.png',[taiatari],[1],oVoiceZonbie);
const  manthikora = new Monster('images/dowafManthikora.png',[taiatari],[1],oVoiceZonbie);
const  gukko = new Monster('images/dowafGukko.png',[taiatari],[1],oVoiceZonbie);
const aEnemyDowaf = [
	bomu,
	maman,
	shounyuuseki,
	manthikora
];
const aEnemyDowafBoss = [
	gukko
];
/*炎の洞窟*/
const kurakotta  = new Monster('images/honoKurakotta.png',[taiatari],[1],oVoiceZonbie);
const saramanda  = new Monster('images/honoSaramanda.png',[taiatari],[1],oVoiceZonbie);
const aEnemyHono = [
	kurakotta
];
const aEnemyHonoBoss = [
	saramanda
];
/*炎の洞窟のあとの海*/
const aEnemyUmiHono = aEnemyUmiOen;
/*ハインの城*/
const demon = new Monster('images/hainDemon.png',[taiatari],[1],oVoiceZonbie);
const aEnemyHain = [
	demon
];
const ramia = new Monster('images/hainRamia.png',[taiatari],[1],oVoiceZonbie);
const farao = new Monster('images/hainFarao.png',[taiatari],[1],oVoiceZonbie);
const remuresu = new Monster('images/hainRemuresu.png',[taiatari],[1],oVoiceZonbie);
const aEnemyHain2 = [
	ramia,
	farao,
	remuresu
];
const hain = new Monster('images/hainHain.png',[taiatari],[1],oVoiceZonbie);
const aEnemyHainBoss = [
	hain
];
/*ハインの城の周り*/
const rinks = new Monster('images/hain2Rinks.png',[taiatari],[1],oVoiceZonbie);
const aEnemyHainField = [
	rinks,
	grifon
];
/*アーガス城の前と後の海*/
const aEnemyUmiAgasu = aEnemyUmiOen;
/*アーガス城*/
const  gorugon = new Monster('images/hain2Gorugon.png',[taiatari],[1],oVoiceZonbie);
const  furaiya = new Monster('images/hain2Furaiya.png',[taiatari],[1],oVoiceZonbie);
const aEnemyAgasuField = [
	gorugon,
	furaiya
];
/*水の神殿*/
const kokkatorisu = new Monster('images/mizuKokkatorisu.png',[taiatari],[1],oVoiceZonbie);
const agariareputo = new Monster('images/mizuAgariareputo.png',[taiatari],[1],oVoiceZonbie);
const ropa = new Monster('images/mizuRopa.png',[taiatari],[1],oVoiceZonbie);
const poizuntodo = new Monster('images/mizuPoizuntodo.png',[taiatari],[1],oVoiceZonbie);
const tuinheddo = new Monster('images/mizuTuinheddo.png',[taiatari],[1],oVoiceZonbie);
const kuraken = new Monster('images/mizuKuraken.png',[taiatari],[1],oVoiceZonbie);
const aEnemyMizu = [
	kokkatorisu,
	agariareputo,
	ropa,
	poizuntodo,
	tuinheddo
];
const aEnemyMizuBoss = [
	kuraken
];

/*下の海*/
//const  = new Monster('images/.png',[taiatari],[1],oVoiceZonbie);
const  kerupi = new Monster('images/umi2Kerupi.png',[taiatari],[1],oVoiceZonbie);
const  ogurohai = new Monster('images/umi2Ogurohai.png',[taiatari],[1],oVoiceZonbie);
const  satujinyadokari = new Monster('images/umi2Satujinyadokari.png',[taiatari],[1],oVoiceZonbie);
const aEnemyUmi2 = [
	kerupi,
	ogurohai,
	satujinyadokari
];
/*海底洞窟*/
const  desukuro = new Monster('images/kaiteiDesukuro.png',[taiatari],[1],oVoiceZonbie);
const  ita = new Monster('images/kaiteiIta.png',[taiatari],[1],oVoiceZonbie);
const  doragonzonbi = new Monster('images/kaiteiDoragonzonbi.png',[taiatari],[1],oVoiceZonbie);
const  egiru = new Monster('images/kaiteiEgiru.png',[taiatari],[1],oVoiceZonbie);
const  peryuton = new Monster('images/kaiteiPeryuton.png',[taiatari],[1],oVoiceZonbie);
const aEnemyKaitei = [
	desukuro,
	ita,
	doragonzonbi,
	egiru
];
const aEnemyKaiteiBoss = [
	peryuton
];


