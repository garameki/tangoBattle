
/*for QUESTION*/
const q1 = [
 ["directly","直接","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=ZD4jXY22K-SkmAWRt7joBQ&q=directory+meaning&oq=directory+meaning&gs_l=psy-ab.3..0i7i30j0j0i7i30l6.58249.59778..60810...0.0..0.256.1377.0j8j1......0....1..gws-wiz.......0i70i249j0i19j0i7i30i19.6n0QYjZaQtM"]
,["hear from A","Aから連絡をもらう",""]
,["historically","歴史的に","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=yjgjXbSGO7OWr7wP2_WJoAY&q=historically+meaning&oq=historically+meaning&gs_l=psy-ab.3...0.0..91...0.0..0.0.0.......0......gws-wiz.XAv8UrhHfG4"]
,["barely","かろうじて","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=xzwjXcyqK5TomAXg6pHwAw&q=barely+meaning&oq=barely+meaning&gs_l=psy-ab.3..0j0i7i30l7.21894.23678..24158...0.0..0.150.812.0j6......0....1..gws-wiz.......0i67j0i67i70i249j0i7i10i30j0i4j0i7i30i19j0i19.hOG7PyxT-1Y"]
,["previously","以前に","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=4DwjXaviO_HUmAXCz7KABg&q=previously+meaning&oq=previously+meaning&gs_l=psy-ab.3..0i7i30l8.16503.18791..19276...0.0..0.148.1189.0j10......0....1..gws-wiz.......0i13j0.VYNiigPYAxY"]
];

const q2 = [
["feature A","Aを出演させる","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=9DwjXdrWO46Lr7wPrrOgmA0&q=feature+meaning&oq=feature+meaning&gs_l=psy-ab.3..0j0i7i30l7.18498.20032..21536...0.0..0.142.884.0j7......0....1..gws-wiz.......0i67j0i7i30i19j0i13j0i19.h3qLRGvaU1o"]
,["delete A","Aを削除する",""]
,["monitor A","Aを監視する",""]
,["remind A","Aに思い起こさせる",""]
];

const q3 = [
 ["immediately","ただちに、すぐに","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=HD4jXd2vDeqKr7wP7pqQoAs&q=immediately+meaning&oq=immediately+meaning&gs_l=psy-ab.3..0i7i30l4j0j0i7i30l3.21722.26323..27323...0.0..0.156.2019.0j16......0....1..gws-wiz.......35i304i39i70i249j0i7i30i19j0i67j0i7i4i30j0i4j0i13.WVvSAIAiHA0"]
,["urgent","急を要する","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=OD4jXYGtGIeXr7wP6_yWuAM&q=urgent+meaning&oq=urgent+meaning&gs_l=psy-ab.3..0i7i30l5j0j0i7i30l2.17192.18138..18435...0.0..0.232.891.0j5j1......0....1..gws-wiz.......0i7i4i30j0i7i30i19j0i19j0i13.Au9Jm3mXAww"]
,["relative","相対的な、比較上の",""]
,["generous","心が広い、寛大な","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Sz4jXevAIo65mAXEzIvoDQ&q=generous+meaning&oq=generous+meaning&gs_l=psy-ab.3..0j0i7i30l2j0i7i10i30j0i7i30l4.22763.24312..24490...0.0..1.329.1530.0j4j3j1......0....1..gws-wiz.......0i13.ji_WPUK7oBc"]
,["cruel","残酷な","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Cz0jXeSLDuuVr7wP2cyHmAo&q=cruel+meaning&oq=cruel+meaning&gs_l=psy-ab.3..0i7i30l3j0j0i7i30l4.16124.17596..18168...0.0..0.149.635.0j5......0....1..gws-wiz.......0i7i30i19j0i13.re4oyB2dFxI"]
,["appointment","面会の約束"]
];

const q4 = [
 ["celebration","お祝い","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Hj0jXZHyCLCSr7wP7I2e6AE&q=celebration+meaning&oq=celebration+meaning&gs_l=psy-ab.3..0i7i30i19l7j0i19.15083.23448..24177...3.0..0.209.2436.0j17j1......0....1..gws-wiz.......0i7i10i30i19j0i13j0j0i67j0i7i4i30j0i7i30j0i7i4i30i19.QKPNmTblNjY"]
,["foundation","基礎、財団",""]
,["reflection","反映","https://www.google.com/search?q=reflection+meaning&rlz=1C1CHBD_jaJP787JP787&oq=reflection+meaning&aqs=chrome..69i57j0l5.6921j1j7&sourceid=chrome&ie=UTF-8"]
,["prediction","予言",""]
,["attend","参加する"]
];

const q5 = [
 ["concept","概念",""]
,["whisper","ささやき",""]
,["deposit","頭金","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Nj0jXd_cPI_c0gT4p6iwCg&q=deposit+meaning&oq=deposit+meaning&gs_l=psy-ab.3..0j0i7i30l7.18137.19980..20216...0.0..0.147.886.0j7......0....1..gws-wiz.......0i7i30i19j0i13.4loUOiVW0iY"]
,["apology","謝罪","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=TD0jXenMAs2smAWe4bFQ&q=apology+meaning&oq=apology+meaning&gs_l=psy-ab.3..0i7i30l6j0j0i7i30.19084.21166..21923...0.0..0.168.975.0j7......0....1..gws-wiz.......0i67i70i249j0i4j0i7i30i19j0i19j0i13.Z241vAG5jxM"]
,["extra","追加の"]
,["explain","説明する"]
];

const q6 = [

 ["deceive A","Aを騙す(だます)",""]
,["establish A","Aを設立する","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Yz0jXcIM57KYBa79q6gO&q=establish+meaning&oq=establish+meaning&gs_l=psy-ab.3..0i7i30j0j0i7i30l6.24686.27161..27490...0.0..0.158.1399.0j11......0....1..gws-wiz.......0i67j0i13j0i7i30i19j0i7i4i30i19.g8uXZ5r27hU"]
,["endure A","Aに耐える","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=fz0jXce_B5HdmAXr9LzAAw&q=endure+meaning&oq=endure+meaning&gs_l=psy-ab.3..0i7i30l4j0j0i7i30l3.20807.23446..23878...0.0..0.185.936.0j7......0....1..gws-wiz.......0i30j0i19j0i8i7i30i19j0i8i7i10i30i19j0i13j0i8i7i30j0i13i70i249j0i13i30.EpQeZqp1uoM"]
,["dispose A","Aを配置する",""]
,["expensive","高価な",""]
];

const q7 = [
 ["statistics","統計","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=lz0jXeDFJ4K2mAXe6L6oAw&q=statistics+meaning&oq=statistics+meaning&gs_l=psy-ab.3..0j0i7i30l7.18204.21990..22698...0.0..0.163.1559.0j12......0....1..gws-wiz.......0i67j0i13j0i13i70i249j0i7i4i30j0i7i30i19.FIfQ3jjy5vk"]
,["compromise","妥協","https://www.google.com/search?q=compromise+meaning&rlz=1C1CHBD_jaJP787JP787&oq=compromise+meaning&aqs=chrome..69i57j0l5.5055j0j7&sourceid=chrome&ie=UTF-8"]
,["terminal","終着駅、端末",""]
,["product","製品",""]
,["sale","販売",""]
,["religion","宗教","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=rz0jXdbHAuGsmAWls6WIAQ&q=religion+meaning&oq=religion+meaning&gs_l=psy-ab.3..0i7i30l5j0j0i7i30l2.34184.41420..42370...3.0..0.168.1447.0j11......0....1..gws-wiz.......0i7i30i19j0i19i70i249j0i7i10i30i19j0i19j0i13j0i13i30.laelZLPRa4s"]
];

const q8 = [
 ["formation","フォーメーション、編成",""]
,["currency","通貨、流通","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=2j0jXciAB4OkmAWq04mACg&q=currency+meaning&oq=currency+meaning&gs_l=psy-ab.3..0j0i7i30l7.34098.35602..36963...0.0..0.193.1121.0j8......0....1..gws-wiz.......0i7i4i30j0i7i30i19j0i7i4i30i19j0i19.fCEn5vHGbeo"]
,["envelope","封筒","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=_z0jXavYNqa2mAW6oJuIDw&q=envelope+meaning&oq=envelope+meaning&gs_l=psy-ab.3..0i7i30l6j0j0i7i30.24934.26795..27586...0.0..0.171.1124.0j8......0....1..gws-wiz.......0i67j0i4j0i13i70i249j0i19i70i249j0i7i10i30i19j0i7i30i19j0i7i10i30j0i7i10i30i19i70i249.aoKyzgy-JhA"]
,["quarrel","口論",""]
];
const q9 = [
 ["handle A and B at the same time","AとBを同時にこなす",""]
,["remove A","Aを取り除く",""]
,["excuse A from B","AをBの義務から免除する",""]
,["detect A","Aを検出する、Aを見つける",""]
,["quit A","Aを<ruby>辞<rt>や</rt></ruby>める"]
];
const q10 = [
 ["original","元の",""]
,["restore A","Aを修復する",""]
,["accompany A","Aに伴って起こる",""]
,["punish A","Aを罰する",""]
,["compare A with B","AをBと比較する",""]
,["in order to (do)","～するために"]
,["spend A","(お金などを)使う"]
,["original condition","もとの状態"]
];
const q11 = [
 ["from time to time","時々",""]
];
const q12 = [
 ["in demand","需要がある",""]
,["in common","共通の",""]
,["in advance","前もって",""]
,["in detail","詳細に",""]
];
const q13 = [
 ["stand out","目立つ",""]
,["crowd","群衆"]
,["stand over A","Aを監督する",""]
,["stand up","立ち上がる",""]
,["stand by","待機する、そばにいる",""]
,["bright","明るい"]
];
const q14 = [
 ["in the meantime","そうしている間に",""]
,["to some extent","ある程度",""]
,["at any cost","どんな犠牲を払ってでも",""]
,["on the contrary","それどころか",""]
,["repairman","修理人"]
];
const q15 = [
 ["come to (do)","～をするようになる",""]
];
const q16 = [
 ["lose face","面目を失う、(恥ずかしくて)人に顔を合わせられない",""]
,["client","顧客"] 
,["「失う」の活用","lose lost lost"]
,["badly","(副詞)下手に"]


];
const q17 = [
 ["responsibility","責任",""]
,["take on A","Aを引き受ける"] 
,["agree to (do)","~することに賛成する"] 
,["answer for A","Aの責任を負う",""]
,["rely on A","Aを頼る",""]
,["vote for A","Aに投票する",""]
,["insist on A","Aを主張する",""]
];
const q18 = [
 ["despite A","Aにもかかわらず",""]
, ["despire A","Aを派遣する",""]
,["take place","発生する、起こる、<ruby>催<rt>もよお</rt></ruby>される"] 
,["in spite of A","Aにもかかわらず",""]
,["spite","悪意"]
,["inside A","Aの内側で"]
];
const q19 = [
 ["lonely","さみしさ",""]
,["invite A over","Aを(こっちに来るように)誘う",""]
,["as planed","予定どうりに",""]
];
const q20 = [
 ["regret to (do)","残念ながら～する",""]
,["regret (do)ing","～したことを後悔する",""]
,["inform A of B","AにBについて知らせる",""]
];
const q21 = [
["although","～だが"]
,["varieties of banana","バナナの中におけるバナナの種類"]
,["type","型"]
,["however","しかし"]
,["not always","[部分否定]必ずしも～とは限らない、いつも～というわけではない"]
,["true","真実"]
,["until ～","～まで"]
,["fungus","真菌類、菌類"]
,["disease","病気","https://www.google.com/search?q=disease+meaning&rlz=1C1CHBD_jaJP787JP787&oq=disease+meaning&aqs=chrome..69i57j0l5.3869j1j7&sourceid=chrome&ie=UTF-8"]
,["company","会社"]
,["no longer","もはや...しない"]
,["instead","代わりに"]
,["in contrast with A","Aとは違って、Aとは対照的に"]
,["for instance","例えば=for example"]
,["instance","例、事実"]
,["unfortunately","運悪く"]
,["additionally","加えて"]
];
const q22 = [
["affect A","Aに影響を及ぼす"]
,["desease","病気"]
,["recently","最近"]
,["in part","部分,一部分,一部"]
,["reach","到達する、届く"]
,["luckily","幸いにも、運よく"]
,["nevertheless [/nɛvəðəˈlɛs/]","それにもかかわらず","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=Z2I4Xdr2Ha6Jr7wP3bCh8Ak&q=nevertheless+meaning&oq=nevertheless+meaning&gs_l=psy-ab.3..0i7i30l8.707318.710277..710357...0.0..0.153.1474.0j11......0....1..gws-wiz.......0i67j0i7i10i30j0i13j0i203j0i7i30i19.1vfJBlSkk4k&ved=0ahUKEwiaxp7c2c3jAhWuxIsBHV1YCJ4Q4dUDCAo&uact=5"]
,["expart","専門家、熟練者"]
,["in response to A [/ríspάns/]","Aに応じて、Aに呼応して","https://www.google.com/search?q=response+meaning&rlz=1C1CHBD_jaJP787JP787&oq=response+meaning&aqs=chrome..69i57j0l5.4659j1j7&sourceid=chrome&ie=UTF-8"]
,["replace A","Aを置き換える"]
,["as + 節","～のように"]
];
const q23 = [
["so that + 節","～するために"]
,["get sick","病気になる"]
,["however","しかし"]
,["worry","心配する"]
,["negative","負の、マイナスの、否定の"]
,["effect [/ifékt/]","効果"]
,["in this way","この方法で"]
,["therefore[/ðέərfɔ̀r/]","ゆえに"]
,["such [/sʌ́ʧ/]","このような、そのような"]
,["affect A","Aに影響を及ぼす"]
,["similar to A","Aに似ている"]
,["probably","多分、たぶん"]
,["confident [/kɔ́nfident/]","(形容詞)確信して"]
,["one day","いつの日にか"]
,["safe from A","Aから安全、Aから<ruby>免<rt>まぬが</rt></ruby>れて"]
];
const q24 = [
["sense","感覚"],
["benefit","恩恵"],
["sight","視覚"],
["hearing","聴覚"],
["smell","嗅覚"],
["taste","味覚"],
["touch","触覚"],
["tend to (do)","～する傾向がある"],
["just as ","同じように"],
["communication","意思疎通"],
["relationship","関係"],
["necessary","(形容詞)必要"],
["This should not be surprising.","これは驚くべきことではない。"],
["actually","(あなたはわからないかもしれないが、)実際には...、本当は...、"],
["develop A","Aを発達させる"],
["moreover","さらに"],
["evidence","証拠","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=YjI9Xdq-GMmC-QbLzrioBA&q=evidence+meaning&oq=evidence+meaning&gs_l=psy-ab.3..0j0i203l7.405669.410475..410595...1.0..0.144.2039.0j17......0....1..gws-wiz.......35i39i70i249j35i39j0i67j0i131i4j0i4j0i67i70i255j0i4i10.8zZGYeQsu8g&ved=0ahUKEwja97fQ8NbjAhVJQd4KHUsnDkUQ4dUDCAo&uact=5"],
["ability","能力、才能"],
["reduce A","Aを減らす"],
["anxiety","不安","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=_TM9XfDbMq2Xr7wP0aq14Ao&q=anxiety+meaning&oq=anxiety+meaning&gs_l=psy-ab.3..0i7i30l4j0i203j0i7i30j0i203j0i7i30.95812.98044..98972...0.0..0.146.903.0j7......0....1..gws-wiz.......0i67i70i249j0i4j0i13j0i7i30i19.TIQCutRtk2s&ved=0ahUKEwiwzs-U8tbjAhWty4sBHVFVDawQ4dUDCAo&uact=5"],
["heal","<ruby>癒<rt>いや</rt></ruby>す"],
];
const q25 = [
["for example","例えば"]
,["resercher","研究者"]
,["MRI(magnetic resonance imaging)","核磁気共鳴画像装置"]
,["exam A","Aを試す"]
,["brain","脳"]
,["receive","受ける"]
,["electric","電気的な"]
,["ankle","足首"]
,["relate to A","Aに関係する"]
,["fear [/fiə/","恐れ"]
,["active","活発な(act[動詞]の形容詞形)"]
,["feelの活用","feel felt felt"]
,["keepの活用","keep kept kept"]
,["feel","感じる"]
,["pain","痛み"]
,["drop","下がる"]
,["less ～","少しも～ない"]
,["even","～でさえ"]
,["stranger","他者"]
,["degree","度、程度"]
,["activity","活動(act[動詞]の名詞形)"]
,["but... also ...","...だけでなく...も"]
];
const q26_1 = [
["study","研究"]
,["efect","効果"]
,["look at A","Aを見る"]
,["massage","マッサージ"]
,["one A","あるA"]
,["cause A","Aを引き起こす"]
];
const q26_2 = [
["decrease[/díːkriːs/]","減少"]
,["increase[/íŋkriːs/]","増加","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=5FI_XdypGdTomAWR7qHgCQ&q=increase+meaning&oq=increase+meaning&gs_l=psy-ab.3..0i7i30l6j0i203j0i7i30.63716.65434..65732...0.0..0.149.1022.0j8......0....1..gws-wiz.......0i7i4i30j0i67j0i4j0j0i13j0i7i30i19j0i19.jeAcAFw031A&ved=0ahUKEwjcq9f099rjAhVUNKYKHRF3CJwQ4dUDCAo&uact=5"]
,["certain A","あるA"]
,["cytokine[sʌ́ɪtəkʌɪn]","(脳内物質の一種)サイトカイン"]
,["reason","理由"]
,["as usual","いつもどうりに"]
];
const q26_3 = [
["even so + 節","...といえども、(＝nevertheless ..., =in spite of ...)"]
,["badの活用","bad worse worst"]
,["to make matters worse","さらに悪いことに、"]
,["particularly","特に"]
,["helpful","役に立つ"]
,["suffer from A","(病気など)Aに悩む,Aに苦しむ"]
];
const q26_4 = [
["frequent","頻繁な,断続的な"]
,["autoimmune","自己免疫の","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=8lc_XenqJIv7-Qby1LFA&q=autoimmune+meaning&oq=autoimmune+meaning&gs_l=psy-ab.3..0i203l8.49265.51203..51305...0.0..0.138.970.0j8......0....1..gws-wiz.......35i39i70i255j0.zx6r_4cG5Xg&ved=0ahUKEwjpq-bd_NrjAhWLfd4KHXJqDAgQ4dUDCAo&uact=5"]
,["disorder","障がい","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=tlg_XdWQJsnX-Qat6JnwAQ&q=disorders+meaning&oq=disorders+meaning&gs_l=psy-ab.3..0i203l8.496279.498729..498866...0.0..0.165.1203.0j9......0....1..gws-wiz.......35i39i70i255j0i13.5sAZRrIdXQU&ved=0ahUKEwjVw6K7_drjAhXJa94KHS10Bh4Q4dUDCAo&uact=5"]
,["autoimmune disorder","自己免疫疾患(免疫が自分の体を攻撃する病気)"]
,["in response to A","Aに応じて、Aに答えて"]
,["treat A","Aを扱う"]
,["both A and B","AとB両方"]
,["mental","精神の(⇔physical)"]
,["physical","体の(⇔mental)、物質の、物理の"]
];


const q272829_1 = [
["raise money","募金する"]
,["a number of A","多くのA、数々のA"]
,["hockey","ホッケー(スポーツ)"]
,["equipment[/ɪkwípm(ə)nt/]","備品,装備"]
,["membership","会員であること"]
,["pay","(お金を)払う"]
];
const q272829_2 = [
["currently","現在、現在は、いまのところ"]
,["look for A","Aを探す"]
,["practice","練習"]
,["sign-up sheet","登録シート、エントリーシート、参加シート"]
,["hold A","Aを催す、Aを執り行う"]
,["put out an advertisement","広告を出す"]
];
const q272829_3 = [
["put out the light","灯りを消す"]
,["advertisement","広告"]
,["agree to -ing","～することに賛成する"]
,["discounte","(値段などを)割引する"]
,["payment","支払い(payの名詞形)"]
,["receive A","Aを受け取る"]
];
const q272829_4 = [
["fill out A","Aを書いて埋める"]
,["bringの活用","bring brought brought"]
,["ask A to (do)","Aに～させる"]
,["deadline","期限、締め切り"]
,["Sincerely,","(手紙の結びに使い)心から"]
,["expense","費用"]
];
const q272829_5 = [
["advertise A","Aを広告する、Aをコマーシャルする"]
,["allow A to (do)","Aが～するのを許す"]
,["donate A","Aを寄付する,Aを<ruby>贈与<rt>ぞうよ</rt></ruby>する"]
,["attend A","Aに参加する"]
];
const q30 = [
["allow A to (do)","Aが～するのを許す"]
,["device [/-s/]","1.装置、2.工夫"]
,["devise [/-z/]","Aを発明する、Aを工夫する"]
,["disabled","形 身体障碍者の、体の不自由な"]
,["freely","自由に"]
,["Swedish","スウェーデンの"]
,["come up with A","(「Aを持って上まで来る」から) Aを提示する、Aを持ち出してくる、Aに追いつく"]
];
const q31 = [
["movement","動き (ある動詞の名詞形)"]
,["fix A","Aを固定する"]
,["stare at A","Aをじっと見る"]
,["lead to A","結果としてA(という状態)になる"]
,["develop A","Aを発展させる"]
,["involve (doing)","(必然的に、当然の結果として)～することになる"]
,["intend to (do)","～するつもりである"]
,["tend to (do)","～する傾向がある"]
,["accident","偶然"]
];
const q32 = [
["although + 節","～だが"]
,["attractive","魅力的な、人を惹きつける"]
,["in particular","特に、とりわけ(=particularly)"]
,["extremely","すこぶる、とても"]
,["traditional","伝統的な"]
,["at the same time","同時に"]
,["find it difficult to (do)","～することは難しいとわかる"]
];
const q33 = [
["at present","現在は"]
,["main","主な、主要な"]
,["cheap","(価格などが)安い"]
,["meanwhile","そうしている間に (in the meantime)"]
,["relatives","親類、親戚"]
,["relative","比較上の、相対的な"]
,["Not only does + 節, but + 節","～するだけでなく～もする。"]
,["contact A","Aと連絡を取る"]
,["employment [/-oi-/]","雇用"]
,["opportunity [/-tju-/]","機会"]
,["sense","意味"]
,["in this sense","この意味において"]
,["technology","技術"]
,["development","発展"]
,["lead A","Aを先導する"]
,["advantage [/-van-/]","有利な点、長所"]
,["purpose","目的"]
,["dangerous","危険な"]
,["site","(ネット上の)サイト、場所"]
];
const q34 = [
["preserve A","Aを保存する"]
,["ancient","古代の"]
,["Egypt","エジプト"]
,["mummy","ミイラ"]
,["～ as well","～も"]
,["culture","文化,教養"]
,["on purpose","わざと、わざわざ"]
,["by chance","偶然に"]
,["dryness","乾燥"]
,["extreme","極度の、ものすごい"]
,["region","地方、地帯"]
,["desert","砂漠"]
,["env<span class='red'>i</span>ronment","環境","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=JFxLXaaGKYnU0gTA7avIDw&q=environment+meaning&oq=environment+meaning&gs_l=psy-ab.3..0i203j0i7i30l7.250219.252077..252259...0.0..0.219.1557.0j10j1......0....1..gws-wiz.......0i7i30i19.yot9pj-oZeQ&ved=&uact=5"]
,["environm<span class='red'>e</span>ntal","環境の","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=IV1LXffHGYaImAXE5pHIDg&q=environmental+meaning&oq=environmental+meaning&gs_l=psy-ab.3..0i203j0i7i30l7.40404.41443..42961...0.0..0.127.251.0j2......0....1..gws-wiz.......35i304i39.YKvO0Uh0daU&ved=&uact=5"]
,["condition","条件"]
,["naturally","自然に"]
,["certain A","あるA"]
,["spread","広まる"]
,["as a result of A","Aの結果として"]
];
const q35 = [
["climate [/kláimət/]","気候"]
,["mean that + 節","～を意味する"]
,["exceptionally","例外的に、並外れて"]
,["preserve A","Aを保存する"]
,["skin","皮膚"]
,["clothes [/klóuz/]","着るもの、衣服"]
,["over 3000","3000を越える"]
,["characteristic","特徴"]
,["surpising","驚くべき"]
,["as though + 節","まるで～であるよう"]
,["as if + 節","まるで～であるよう"]
,["discover A","Aを発見する"]
,["blond","(髪が)金色の"]
,["beard[/bíərd/]","あごひげ"]
,["wear A","Aを身につける"]
,["Greece","ギリシャ"]
,["ancient","古代の"]
//ǽάɔ́ʌ́ə́έáèìòùɔ̀ʌ̀ə̀ὲὰæ̀éέɔ́óíúɑɑæaɑəʌɛɔoeiuɵɵð
,["dramatically [/drəmátikli/]","劇的に","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=kFtLXZj7KauQr7wPn5GBoAo&q=dramatically+meaning&oq=dramatically+meaning&gs_l=psy-ab.3..0i7i30j0i203j0i7i30l6.143136.147067..147375...1.0..0.117.543.0j5....1..0....1..gws-wiz.......0i13j0i13i30.1P_W8znDbXM&ved=&uact=5"]
,["dramatic [/drəmátic/]","[形] 劇的な","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=altLXYuaGo6kmAXYlJPYBA&q=dramatic+meaning&oq=dramatic+meaning&gs_l=psy-ab.3..0i7i30l5j0i203j0i7i30l2.35727.37316..37502...0.0..0.193.1090.0j8......0....1..gws-wiz.......0.jvGlwV-RtJ4&ved=&uact=5"]
,["originally","もともと"]
,["appearance","①出現、姿を現すこと、②外観"]
,["thick","厚い"]
,["heavy","重い"]
,["wearの活用","wear wore worn"]
,["currently","現在のところ"]
,["different from A","Aとは異なる、Aと違う"]
,["feet","(長さの単位)フィート"]
,["tall","背の高さ"]
,["unlike A","前置詞 Aと似ていない、Aと同じでない"]
,["unlike anything","何ひとつ似ていない"]
,["instead","代わりに"]
,["Celtic","ケルトの、ケルト人の","https://www.google.com/search?q=celtic+meaning&rlz=1C1CHBD_jaJP787JP787&oq=celtic+meaning&aqs=chrome.0.0l6.3695j1j7&sourceid=chrome&ie=UTF-8"]
];
const q36 = [
["theory","理論、説"]
,["as to A","Aについて、Aに関して"]
,["end up in A","Aに入って終わる"]
,["development","発展"]
,["accurate[/ǽkjurit/]","正確な"]
//ǽάɔ́ʌ́ə́έáèìòùɔ̀ʌ̀ə̀ὲὰæ̀//éέ//ɔ́ó//íú//ɑɑæaɑəʌɛɔoeiu//ɵɵðʃʒʦʧʤʣŋθθθ𝜃		
,["analyze A [/<span class='red'>á</span>n(ə)lʌɪz/]","Aを分析する","https://www.google.com/search?q=analyze+meaning&rlz=1C1CHBD_jaJP787JP787&oq=analyze+meaning&aqs=chrome..69i57j0l5.3762j1j4&sourceid=chrome&ie=UTF-8"]
,["suggest A [/səʤést/]","①Aを提案する、②(物が)Aを暗示する、Aを示唆する"]
,["ancestor [/<span class='red'>á</span>nsɛstə/]","先祖","https://www.google.com/search?rlz=1C1CHBD_jaJP787JP787&ei=IVhLXcrRM6rFmAX_sZ7gBg&q=ancestor+meaning&oq=ancestor+meaning&gs_l=psy-ab.3..0i7i30l8.837207.839271..839579...0.0..0.149.995.0j8......0....1..gws-wiz.......0i67i70i249j0i4j0i203j0i7i30i19.yj5y4rIFL1s&ved=&uact=5"]
,["With + 節 ","～につれて、～と同時に"]
,["a variety of A","様々なAたち (Aは複数形)"]
,["Middle East","中東"]
,["North","北"]
,["South","南"]
,["West","西"]
,["East","東"]
,["Indus Valley","インダス渓谷(インダス文明発祥の地)"]
,["Pakistan","パキスタン"]
,["later","その後、<ruby>後<rt>のち</rt></ruby>に"]
];
const q3738 = [
["professor","博士"]
,["Pennsylvania [/pɛnsəlv<span class='red'>έ</span>iniə/]","ペンシルバニア州","https://www.youtube.com/watch?v=VF8qux32WpA"]
,["for many years","何年間も"]
,["believe A","Aを信じる"]
,["settle","定住する"]
,["settler","(初期の)入植者 [開墾して、入植する人]"]
,["reach A","Aに到達する"]
,["according to A","Aによると、"]
,["civilization [/sɪvɪlʌɪz<span class='red'>é</span>ɪʃ(ə)n/]","文明","https://www.google.com/search?q=civilization+meaning&rlz=1C1CHBD_jaJP787JP787&oq=civilization+meaning&aqs=chrome.0.69i59j0l5.3462j1j7&sourceid=chrome&ie=UTF-8"]
,["influence A","Aに影響を与える"]
,["influence","影響"]
,["responsible","[形] 原因である"]
,["B is responsible for A.","BはAという状態の原因である。,BがAという状態を招いている。"]
,["statement","記述、陳述、述べること"]
,["following","[形] 次に続く"]
,["exhibition [/ɛksɪb<span class='red'>í</span>ʃ(ə)n/]","展覧会","https://www.google.com/search?q=exhibition+meaning&rlz=1C1CHBD_jaJP787JP787&oq=exhibition+meaning&aqs=chrome.0.69i59j0l5.5071j1j7&sourceid=chrome&ie=UTF-8"]
];
