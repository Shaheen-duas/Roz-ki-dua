// Roz ki Dua — poori app ka logic

// Aaj ka Amal — roz ek practical Islamic amal, rotate hote hue
const AAJ_KA_AMAL = [
  "Aaj kisi ko salaam karo jisse aap pehchaante nahi.",
  "Aaj 100 baar Astaghfirullah padho.",
  "Aaj apne maa-baap se pyaar se baat karo.",
  "Aaj ek gareeb ko khana khilao ya sadqa do.",
  "Aaj Surah Al-Kahf ka kuch hissa padho (juma ke din poori padhna sunnat hai).",
  "Aaj kisi rishtedaar se rabta karo jisse bahut din se baat nahi hui.",
  "Aaj sote waqt Ayatul Kursi padho.",
  "Aaj namaz waqt par padhne ki koshish karo.",
  "Aaj kisi ki madad karo bina kisi wajah ke.",
  "Aaj 33 baar SubhanAllah, 33 baar Alhamdulillah, 34 baar Allahu Akbar padho.",
  "Aaj apne gusse par qaboo rakhne ki koshish karo.",
  "Aaj Quran ki kam se kam ek ayat ka tarjuma padh kar samjho.",
  "Aaj kisi ko muskurakar dekho — muskurana bhi sadqa hai.",
  "Aaj khana khane se pehle aur baad mein dua padhna na bhoolo.",
  "Aaj apne bhai-behno ke saath sabr se pesh aao.",
  "Aaj Durood Sharif kam se kam 10 baar padho.",
  "Aaj kisi zaroormand ki khamoshi se madad karo.",
  "Aaj apni zubaan se ghibat (buraayi) na karo.",
  "Aaj ghar se nikalte waqt dua padhna na bhoolo.",
  "Aaj Surah Al-Mulk raat ko sone se pehle padho.",
  "Aaj kisi bimaar ki iyadat (khairiyat) poocho.",
  "Aaj apne kaam ko Bismillah keh kar shuru karo.",
  "Aaj thoda waqt nikaal kar Quran ki tilawat sunno.",
  "Aaj apne se choton ke saath narmi se pesh aao.",
  "Aaj apni ghalti par Allah se maafi maango, dil se.",
];

function getTodaysAmal(dayOffset) {
  const day = getDayOfYear(dayOffset);
  return AAJ_KA_AMAL[day % AAJ_KA_AMAL.length];
}

// Aaj Ka Ayat — chhoti, powerful Quranic ayatein rotation ke liye
const AAJ_KI_AYAT = [
  { ref: "2:286", ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", tr: "Laa yukallifullaahu nafsan illaa wus'ahaa", hi: "Allah kisi jaan par uski taaqat se zyada bojh nahi daalta.", en: "Allah does not burden a soul beyond what it can bear." },
  { ref: "94:5-6", ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", tr: "Fa-inna ma'al-'usri yusraa", hi: "Beshak mushkil ke saath aasani hai.", en: "So indeed, with hardship comes ease." },
  { ref: "3:139", ar: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ", tr: "Wa laa tahinoo wa laa tahzanoo wa antumul-a'lawn", hi: "Himmat mat haaro, gham mat karo, tum hi ghalib rahoge agar imaan wale ho.", en: "Do not weaken and do not grieve, for you will be superior if you are believers." },
  { ref: "13:28", ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", tr: "Alaa bidhikrillaahi tatma'innul-quloob", hi: "Sun lo, Allah ke zikr se hi dilon ko sukoon milta hai.", en: "Unquestionably, by the remembrance of Allah hearts are assured." },
  { ref: "39:53", ar: "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ", tr: "Laa taqnatoo min rahmatillaah", hi: "Allah ki rehmat se maayoos mat ho.", en: "Do not despair of the mercy of Allah." },
  { ref: "65:3", ar: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", tr: "Wa man yatawakkal 'alallaahi fahuwa hasbuh", hi: "Jo Allah par bharosa kare, Allah uske liye kaafi hai.", en: "And whoever relies upon Allah - He is sufficient for him." },
  { ref: "2:153", ar: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", tr: "Innallaaha ma'as-saabireen", hi: "Beshak Allah sabr karne walon ke saath hai.", en: "Indeed, Allah is with the patient." },
  { ref: "29:69", ar: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا", tr: "Walladheena jaahadoo feenaa lanahdiyannahum subulanaa", hi: "Jo log hamare raaste mein koshish karte hain, hum unhe zaroor apni raah dikhate hain.", en: "And those who strive for Us - We will surely guide them to Our ways." },
  { ref: "20:25-26", ar: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي", tr: "Rabbish-rah lee sadree wa yassir lee amree", hi: "Ae Rab, mera seena khol de aur mera kaam aasan kar de.", en: "My Lord, expand for me my breast and ease for me my task." },
  { ref: "2:152", ar: "فَاذْكُرُونِي أَذْكُرْكُمْ", tr: "Fadhkuroonee adhkurkum", hi: "Tum mujhe yaad karo, main tumhe yaad karunga.", en: "So remember Me; I will remember you." },
  { ref: "3:26", ar: "بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", tr: "Biyadikal-khayr, innaka 'alaa kulli shay'in qadeer", hi: "Saari khair tere hi haath mein hai, beshak tu har cheez par qaadir hai.", en: "In Your hand is all good. Indeed, You are over all things competent." },
  { ref: "16:97", ar: "مَنْ عَمِلَ صَالِحًا مِنْ ذَكَرٍ أَوْ أُنْثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً", tr: "Man 'amila saalihan min dhakarin aw unthaa wa huwa mu'minun falanuhyiyannahu hayaatan tayyibah", hi: "Jo bhi nek amal kare, mard ho ya aurat, imaan ke saath, hum use zaroor achhi zindagi denge.", en: "Whoever does righteousness, whether male or female, while a believer - We will surely cause him to live a good life." },
  { ref: "3:173", ar: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ", tr: "Hasbunallaahu wa ni'mal-wakeel", hi: "Allah hamare liye kaafi hai aur wo behtareen kaarsaaz hai.", en: "Sufficient for us is Allah, and He is the best Disposer of affairs." },
  { ref: "35:15", ar: "يَا أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ", tr: "Yaa ayyuhan-naasu antumul-fuqaraa'u ilallaah", hi: "Ae logon, tum sab Allah ke mohtaaj ho.", en: "O mankind, you are those in need of Allah." },
  { ref: "2:216", ar: "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ", tr: "Wa 'asaa an takrahoo shay'an wa huwa khayrun lakum", hi: "Ho sakta hai tum kisi cheez ko naapasand karo jabki wo tumhare liye behtar ho.", en: "Perhaps you dislike a thing which is good for you." },
  { ref: "24:35", ar: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", tr: "Allaahu nooru samaawaati wal-ard", hi: "Allah aasmaanon aur zameen ka noor hai.", en: "Allah is the Light of the heavens and the earth." },
  { ref: "3:159", ar: "وَشَاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ", tr: "Wa shaawirhum fil-amri fa-idhaa 'azamta fatawakkal 'alallaah", hi: "Maamlon mein mashwara karo, phir jab iraada pakka kar lo to Allah par bharosa karo.", en: "Consult them in the matter, and when you have decided, then rely upon Allah." },
  { ref: "17:23-24", ar: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا", tr: "Wa qadaa rabbuka allaa ta'budoo illaa iyyaahu wa bilwaalidayni ihsaanaa", hi: "Tere Rab ne hukm diya hai ke uske siwa kisi ki ibaadat na karo, aur maa-baap ke saath achhaai karo.", en: "Your Lord has decreed that you worship none but Him, and to parents, good treatment." },
  { ref: "49:13", ar: "إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ", tr: "Inna akramakum 'indallaahi atqaakum", hi: "Allah ke nazdeek tum mein sabse ba-izzat wo hai jo sabse zyada taqwa wala ho.", en: "Indeed, the most noble of you in the sight of Allah is the most righteous of you." },
  { ref: "21:87", ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tr: "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen", hi: "Tere siwa koi mabood nahi, tu pak hai, beshak main zaalimon mein se tha.", en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
  { ref: "94:1", ar: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", tr: "Alam nashrah laka sadrak", hi: "Kya humne tera seena kushaada nahi kar diya?", en: "Did We not expand for you your breast?" },
  { ref: "103:1-3", ar: "وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", tr: "Wal-'asr, innal-insaana lafee khusr, illal-ladheena aamanoo wa 'amilus-saalihaat", hi: "Zamane ki qasam, beshak insaan ghaate mein hai, siwaye un logon ke jo imaan laaye aur nek amal kiye.", en: "By time, indeed mankind is in loss, except those who believe and do righteous deeds." },
  { ref: "2:45", ar: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", tr: "Wasta'eenoo bis-sabri was-salaah", hi: "Sabr aur namaz se madad maango.", en: "Seek help through patience and prayer." },
  { ref: "3:8", ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", tr: "Rabbanaa laa tuzigh quloobanaa ba'da idh hadaytanaa", hi: "Ae hamare Rab, hidayat dene ke baad hamare dilon ko tedha na kar.", en: "Our Lord, let not our hearts deviate after You have guided us." },
  { ref: "7:156", ar: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", tr: "Wa rahmatee wasi'at kulla shay'", hi: "Meri rehmat har cheez ko ghere hue hai.", en: "My mercy encompasses all things." },
  { ref: "9:40", ar: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", tr: "Laa tahzan innallaaha ma'anaa", hi: "Gham na kar, beshak Allah hamare saath hai.", en: "Do not grieve; indeed Allah is with us." },
  { ref: "12:87", ar: "لَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ", tr: "Laa tay'asoo mir-rawhillaah", hi: "Allah ki rehmat se maayoos na ho.", en: "Do not despair of relief from Allah." },
  { ref: "14:7", ar: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ", tr: "La-in shakartum la-azeedannakum", hi: "Agar tum shukar karoge to main tumhe zaroor aur zyada dunga.", en: "If you are grateful, I will surely increase you." },
  { ref: "16:128", ar: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا", tr: "Innallaaha ma'al-ladheenat-taqaw", hi: "Beshak Allah un logon ke saath hai jo taqwa ikhtiyaar karte hain.", en: "Indeed, Allah is with those who fear Him." },
  { ref: "30:21", ar: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا", tr: "Wa min aayaatihi an khalaqa lakum min anfusikum azwaajan litaskunoo ilayhaa", hi: "Uski nishaaniyon mein se ye hai ke usne tumhare liye tumhi mein se jode banaye, taake tum unse sukoon paao.", en: "And of His signs is that He created for you mates from among yourselves that you may find tranquility in them." },
  { ref: "41:34", ar: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ", tr: "Idfa' billatee hiya ahsan", hi: "Buraai ko us tareeke se door kar jo sabse achha ho.", en: "Repel evil by that which is best." },
  { ref: "42:19", ar: "اللَّهُ لَطِيفٌ بِعِبَادِهِ", tr: "Allaahu lateefun bi'ibaadih", hi: "Allah apne bandon par bahut meharbaan hai.", en: "Allah is Subtle and Kind to His servants." },
  { ref: "47:7", ar: "إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ", tr: "In tansurullaaha yansurkum", hi: "Agar tum Allah (ke deen) ki madad karoge to wo tumhari madad karega.", en: "If you support Allah, He will support you." },
  { ref: "49:10", ar: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ", tr: "Innamal-mu'minoona ikhwah", hi: "Momin toh aapas mein bhai bhai hain.", en: "The believers are but brothers." },
  { ref: "57:4", ar: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنْتُمْ", tr: "Wa huwa ma'akum ayna maa kuntum", hi: "Aur wo tumhare saath hai, tum jahan bhi ho.", en: "And He is with you wherever you are." },
  { ref: "58:11", ar: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ", tr: "Yarfa'illaahul-ladheena aamanoo minkum walladheena ootul-'ilma darajaat", hi: "Allah tum mein se imaan walon ko aur ilm walon ko darje buland karta hai.", en: "Allah will raise those who have believed among you and those who were given knowledge, by degrees." },
  { ref: "65:2-3", ar: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", tr: "Wa may-yattaqillaaha yaj'al lahu makhrajan wa yarzuqhu min haythu laa yahtasib", hi: "Jo Allah se darta hai, wo uske liye raasta nikaal deta hai, aur use waha se rizq deta hai jahan se uska gumaan bhi nahi hota.", en: "Whoever fears Allah, He will make for him a way out and provide for him from where he does not expect." },
  { ref: "76:3", ar: "إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا", tr: "Innaa hadaynaahus-sabeela immaa shaakiran wa immaa kafooraa", hi: "Humne usse raasta dikha diya, chahe wo shukar guzaar bane ya na-shukra.", en: "Indeed, We guided him to the way, be he grateful or ungrateful." },
  { ref: "33:23", ar: "مِنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ", tr: "Minal-mu'mineena rijaalun sadaqoo maa 'aahadullaaha 'alayh", hi: "Momino mein aise log hain jinhone Allah se kiya wada sach kar dikhaya.", en: "Among the believers are men true to what they promised Allah." },
  { ref: "28:77", ar: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ", tr: "Wabtaghi feemaa aataakallaahud-daaral-aakhirah", hi: "Jo Allah ne tujhe diya hai usmein aakhirat ka ghar talaash kar.", en: "But seek, through that which Allah has given you, the home of the Hereafter." },
  { ref: "2:186", ar: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", tr: "Wa idhaa sa-alaka 'ibaadee 'annee fa-innee qareeb", hi: "Aur jab mere bande mere baare mein tujhse poochein, to (keh do) main qareeb hoon.", en: "And when My servants ask you concerning Me, indeed I am near." },
  { ref: "2:255", ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", tr: "Allaahu laa ilaaha illaa huwal-hayyul-qayyoom", hi: "Allah, uske siwa koi mabood nahi, wo hamesha zinda aur qaayam rehne wala hai.", en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence." },
  { ref: "3:103", ar: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا", tr: "Wa'tasimoo bihablillaahi jamee'an wa laa tafarraqoo", hi: "Sab milkar Allah ki rassi ko mazbooti se pakdo aur firqon mein na batto.", en: "And hold firmly to the rope of Allah all together and do not become divided." },
  { ref: "4:36", ar: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا", tr: "Wa'budullaaha wa laa tushrikoo bihee shay-aa", hi: "Aur Allah ki ibaadat karo aur uske saath kisi ko shareek na karo.", en: "Worship Allah and associate nothing with Him." },
  { ref: "5:2", ar: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ", tr: "Wa ta'aawanoo 'alal-birri wat-taqwaa", hi: "Neki aur taqwa ke kaamon mein ek doosre ki madad karo.", en: "And cooperate in righteousness and piety." },
  { ref: "6:59", ar: "وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ", tr: "Wa 'indahu mafaatihul-ghaybi laa ya'lamuhaa illaa huwa", hi: "Ghaib ki chaabiyaan usi ke paas hain, unhe uske siwa koi nahi jaanta.", en: "And with Him are the keys of the unseen; none knows them except Him." },
  { ref: "7:26", ar: "وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ", tr: "Wa libaasut-taqwaa dhaalika khayr", hi: "Aur taqwa ka libaas, yehi sabse behtar hai.", en: "But the clothing of righteousness - that is best." },
  { ref: "7:199", ar: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ", tr: "Khudhil-'afwa wa-mur bil-'urfi wa a'rid 'anil-jaahileen", hi: "Maafi ka rasta ikhtiyaar kar, achhi baat ka hukm de, aur jaahilon se munh phair le.", en: "Take what is given freely, enjoin what is good, and turn away from the ignorant." },
  { ref: "8:2", ar: "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ", tr: "Innamal-mu'minoonal-ladheena idhaa dhukirallaahu wajilat quloobuhum", hi: "Momin toh wahi hain jinke dil Allah ka zikr hone par kaanp uthte hain.", en: "The believers are only those who, when Allah is mentioned, their hearts become fearful." },
  { ref: "10:57", ar: "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُمْ مَوْعِظَةٌ مِنْ رَبِّكُمْ", tr: "Yaa ayyuhan-naasu qad jaa-atkum maw'izatun mir-rabbikum", hi: "Ae logon, tumhare paas tumhare Rab ki taraf se naseehat aa chuki hai.", en: "O mankind, there has come to you instruction from your Lord." },
  { ref: "11:114", ar: "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ", tr: "Innal-hasanaati yudh-hibnas-sayyi-aat", hi: "Beshak neki buraiyon ko mita deti hai.", en: "Indeed, good deeds do away with misdeeds." },
  { ref: "13:11", ar: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ", tr: "Innallaaha laa yughayyiru maa biqawmin hattaa yughayyiroo maa bi-anfusihim", hi: "Beshak Allah kisi qaum ki halat nahi badalta jab tak wo khud apni halat na badlein.", en: "Indeed, Allah will not change the condition of a people until they change what is in themselves." },
  { ref: "15:9", ar: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ", tr: "Innaa nahnu nazzalnadh-dhikra wa innaa lahoo lahaafizoon", hi: "Humne hi ye Quran naazil kiya hai, aur hum hi iski hifazat karne wale hain.", en: "Indeed, it is We who sent down the message, and indeed, We will guard it." },
  { ref: "16:90", ar: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ", tr: "Innallaaha ya-muru bil-'adli wal-ihsaan", hi: "Beshak Allah insaaf aur ehsaan ka hukm deta hai.", en: "Indeed, Allah orders justice and good conduct." },
  { ref: "17:70", ar: "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ", tr: "Wa laqad karramnaa banee aadam", hi: "Aur beshak humne Aadam ki aulaad ko izzat bakshi hai.", en: "And We have certainly honored the children of Adam." },
  { ref: "18:46", ar: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ", tr: "Al-maalu wal-banoona zeenatul-hayaatid-dunyaa wal-baaqiyaatus-saalihaatu khayr", hi: "Maal aur aulaad duniya ki zindagi ki raunak hain, lekin baaqi rehne wale nek amal hi sabse behtar hain.", en: "Wealth and children are adornment of worldly life, but the enduring good deeds are better." },
  { ref: "20:114", ar: "وَقُلْ رَبِّ زِدْنِي عِلْمًا", tr: "Wa qur-rabbi zidnee 'ilmaa", hi: "Aur kaho: Ae mere Rab, mera ilm aur badha de.", en: "And say, My Lord, increase me in knowledge." },
  { ref: "21:107", ar: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ", tr: "Wa maa arsalnaaka illaa rahmatal-lil-'aalameen", hi: "Aur humne tujhe saare jahaanon ke liye rehmat banakar bheja hai.", en: "And We have not sent you except as a mercy to the worlds." },
  { ref: "24:22", ar: "وَلْيَعْفُوا وَلْيَصْفَحُوا أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ", tr: "Wal-ya'foo wal-yasfahoo, alaa tuhibboona ay-yaghfirallaahu lakum", hi: "Maaf kar dein aur darguzar karein, kya tum nahi chahte ke Allah tumhe maaf kare?", en: "Let them pardon and overlook. Would you not like that Allah should forgive you?" },
  { ref: "25:63", ar: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا", tr: "Wa 'ibaadur-rahmaanil-ladheena yamshoona 'alal-ardi hawnaa", hi: "Rahman ke bande wo hain jo zameen par aajizi se chalte hain.", en: "And the servants of the Most Merciful are those who walk upon the earth easily." },
  { ref: "27:40", ar: "وَمَنْ شَكَرَ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ", tr: "Wa man shakara fa-innamaa yashkuru linafsih", hi: "Aur jo shukar kare, wo apne hi liye shukar karta hai.", en: "And whoever is grateful is grateful for the benefit of himself." },
  { ref: "29:45", ar: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ", tr: "Innas-salaata tanhaa 'anil-fahshaa-i wal-munkar", hi: "Beshak namaz bad-kaari aur burai se rokti hai.", en: "Indeed, prayer prohibits immorality and wrongdoing." },
  { ref: "31:14", ar: "وَوَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ", tr: "Wa wassaynal-insaana biwaalidayh", hi: "Humne insaan ko uske maa-baap ke saath achhaai ki naseehat ki.", en: "And We have enjoined upon man goodness to his parents." },
  { ref: "31:17", ar: "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ", tr: "Yaa bunayya aqimis-salaata wa-mur bil-ma'roof", hi: "Ae mere bete, namaz qaayam kar aur nek kaam ka hukm de.", en: "O my son, establish prayer and enjoin what is right." },
  { ref: "33:41", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا", tr: "Yaa ayyuhal-ladheena aamanudh-kurullaaha dhikran katheeraa", hi: "Ae imaan walon, Allah ka bahut zyada zikr karo.", en: "O you who believe, remember Allah with much remembrance." },
  { ref: "33:70", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا", tr: "Yaa ayyuhal-ladheena aamanuttaqullaaha wa qooloo qawlan sadeedaa", hi: "Ae imaan walon, Allah se daro aur seedhi baat kaho.", en: "O you who believe, fear Allah and speak words of appropriate justice." },
  { ref: "34:39", ar: "وَمَا أَنْفَقْتُمْ مِنْ شَيْءٍ فَهُوَ يُخْلِفُهُ", tr: "Wa maa anfaqtum min shay-in fahuwa yukhlifuh", hi: "Aur jo bhi tum kharch karo, Allah uski jagah aur de deta hai.", en: "And whatever you spend, He will replace it." },
  { ref: "35:10", ar: "مَنْ كَانَ يُرِيدُ الْعِزَّةَ فَلِلَّهِ الْعِزَّةُ جَمِيعًا", tr: "Man kaana yureedul-'izzata falillaahil-'izzatu jamee'aa", hi: "Jo izzat chahta hai, toh saari izzat Allah ke liye hai.", en: "Whoever desires honor - to Allah belongs all honor." },
  { ref: "39:9", ar: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ", tr: "Qul hal yastawil-ladheena ya'lamoona walladheena laa ya'lamoon", hi: "Kaho: kya jaanne wale aur na jaanne wale barabar ho sakte hain?", en: "Say, Are those who know equal to those who do not know?" },
  { ref: "45:13", ar: "وَسَخَّرَ لَكُمْ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", tr: "Wa sakhkhara lakum maa fis-samaawaati wa maa fil-ard", hi: "Aur usne tumhare liye jo aasmaanon mein aur zameen mein hai, sab tabaa kar diya.", en: "And He has subjected to you whatever is in the heavens and whatever is on the earth." },
  { ref: "49:11", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِنْ قَوْمٍ", tr: "Yaa ayyuhal-ladheena aamanoo laa yaskhar qawmun min qawm", hi: "Ae imaan walon, koi qaum kisi doosri qaum ka mazaak na uda-e.", en: "O you who believe, let not a people ridicule another people." },
  { ref: "49:12", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ", tr: "Yaa ayyuhal-ladheena aamanujtaniboo katheeram-minaz-zann", hi: "Ae imaan walon, zyada tar gumaanon se bacho.", en: "O you who believe, avoid much suspicion." },
  { ref: "50:16", ar: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ", tr: "Wa nahnu aqrabu ilayhi min hablil-wareed", hi: "Aur hum uski shah-rag se bhi zyada uske qareeb hain.", en: "And We are closer to him than his jugular vein." },
  { ref: "51:56", ar: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ", tr: "Wa maa khalaqtul-jinna wal-insa illaa liya'budoon", hi: "Maine jinnon aur insaanon ko sirf apni ibaadat ke liye paida kiya hai.", en: "And I did not create the jinn and mankind except to worship Me." },
  { ref: "53:39", ar: "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ", tr: "Wa an laysa lil-insaani illaa maa sa'aa", hi: "Aur ye ke insaan ko wahi milta hai jiski wo koshish karta hai.", en: "And that there is not for man except that for which he strives." },
  { ref: "55:60", ar: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ", tr: "Hal jazaa-ul-ihsaani illal-ihsaan", hi: "Kya achhaai ka badla achhaai ke siwa kuch aur hai?", en: "Is the reward for good but good?" },
  { ref: "59:18", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنْظُرْ نَفْسٌ مَا قَدَّمَتْ لِغَدٍ", tr: "Yaa ayyuhal-ladheena aamanuttaqullaaha wal-tanzur nafsum-maa qaddamat lighad", hi: "Ae imaan walon, Allah se daro, aur har jaan dekhe ke usne kal ke liye kya bheja hai.", en: "O you who believe, fear Allah. And let every soul look to what it has put forth for tomorrow." },
  { ref: "61:8", ar: "يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ", tr: "Yureedoona liyutfi-oo noorallaahi bi-afwaahihim wallaahu mutimmu noorih", hi: "Wo chahte hain ke Allah ka noor apne muhon se bujha dein, jabki Allah apna noor poora karke rahega.", en: "They want to extinguish the light of Allah with their mouths, but Allah will perfect His light." },
  { ref: "94:6", ar: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", tr: "Inna ma'al-'usri yusraa", hi: "Beshak mushkil ke saath aasani hai.", en: "Indeed, with hardship comes ease." },
];

function getTodaysAyat(dayOffset) {
  const day = getDayOfYear(dayOffset);
  return AAJ_KI_AYAT[day % AAJ_KI_AYAT.length];
}

// Popular chhoti Surahon ka Roman Hindi-Urdu tarjuma (ayat number ke hisaab se)
const SURAH_HI_TRANSLATIONS = {
  1: {
    1: "Allah ke naam se jo bada meherbaan, nihaayat rehem karne wala hai.",
    2: "Sab tareef Allah ke liye hai jo saare jahaanon ka Rab hai.",
    3: "Jo bada meherbaan, nihaayat rehem karne wala hai.",
    4: "Jo badle ke din ka maalik hai.",
    5: "Hum sirf teri hi ibaadat karte hain aur sirf tujhi se madad maangte hain.",
    6: "Humein seedha raasta dikha.",
    7: "Un logon ka raasta jin par tune inaam kiya, na ki un ka jin par gazab hua aur na hi bhatke huon ka.",
  },
  112: {
    1: "Kaho, woh Allah ek hai.",
    2: "Allah beniyaz hai (kisi ka mohtaaj nahi, sabki zaroorat poori karne wala).",
    3: "Na usne kisi ko janam diya, na woh kisi se paida hua.",
    4: "Aur na koi uske barabar hai.",
  },
  113: {
    1: "Kaho, main subah ke Rab ki panaah maangta hoon.",
    2: "Har us cheez ke sharr se jo usne paida ki.",
    3: "Aur andheri raat ke sharr se jab woh chha jaaye.",
    4: "Aur girhon mein phoonkne waaliyon ke sharr se.",
    5: "Aur hasad karne wale ke sharr se jab woh hasad kare.",
  },
  114: {
    1: "Kaho, main logon ke Rab ki panaah maangta hoon.",
    2: "Logon ke Baadshah ki.",
    3: "Logon ke Ma'bood ki.",
    4: "Us waswase daalne wale ke sharr se jo chhup jaata hai.",
    5: "Jo logon ke dilon mein waswase daalta hai.",
    6: "Chahe woh jinnaat mein se ho ya insaanon mein se.",
  },
  108: {
    1: "Beshak humne tujhe Kausar ata kiya.",
    2: "Pas apne Rab ke liye namaz padh aur qurbani kar.",
    3: "Beshak tera dushman hi be-naam-o-nishaan rahega.",
  },
  103: {
    1: "Zamane ki qasam.",
    2: "Beshak insaan ghaate mein hai.",
    3: "Siwaye un logon ke jo iman laaye, nek amal kiye, ek dusre ko haq ki naseehat ki, aur sabr ki naseehat ki.",
  },
  107: {
    1: "Kya tune us shakhs ko dekha jo deen ko jhutlata hai?",
    2: "Yehi wo hai jo yateem ko dhakkay deta hai.",
    3: "Aur miskeen ko khana khilane ki targheeb nahi deta.",
    4: "Pas afsos hai un namaziyon par.",
    5: "Jo apni namaz se ghaflat karte hain.",
    6: "Jo dikhawa karte hain.",
    7: "Aur maamooli cheezein (madad) dene se rok dete hain.",
  },
  109: {
    1: "Kaho, ae kaafiro.",
    2: "Main un ki ibaadat nahi karta jinki tum ibaadat karte ho.",
    3: "Aur na tum us ki ibaadat karte ho jis ki main ibaadat karta hoon.",
    4: "Aur na main un ki ibaadat karunga jin ki tum ibaadat karte rahe ho.",
    5: "Aur na tum us ki ibaadat karoge jis ki main ibaadat karta hoon.",
    6: "Tumhare liye tumhara deen aur mere liye mera deen.",
  },
  110: {
    1: "Jab Allah ki madad aur fatah aa jaaye.",
    2: "Aur tu dekhe ki log Allah ke deen mein fauj dar fauj daakhil ho rahe hain.",
    3: "Toh apne Rab ki hamd ke saath tasbeeh kar aur usse maghfirat maang, beshak woh bahut tauba qubool karne wala hai.",
  },
  111: {
    1: "Abu Lahab ke dono haath tabaah hon, aur woh khud bhi tabaah ho.",
    2: "Na uska maal us ke kaam aaya, aur na uski kamai.",
    3: "Ankareeb woh bhadakti hui aag mein jaayega.",
    4: "Aur uski biwi bhi, jo lakadiyaan dhone waali hai.",
    5: "Uski gardan mein khajoor ki chhaal ki rassi hogi.",
  },
};

// Quran mein aayi hui duayein — har ek ke saath Surah:Ayat ka reference.
const POOLS = {
  subah: [
    { tag: "SURAH AL-BAQARAH", ref: "2:201", ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", tr: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaaban-naar", hi: "Ae hamare Rab, humein duniya mein bhalai de aur aakhirat mein bhi bhalai de, aur humein dozakh ke azaab se bacha.", en: "O our Lord, give us good in this world and good in the Hereafter, and save us from the punishment of the Fire." },
    { tag: "SURAH IBRAHIM", ref: "14:40-41", person: "Ibrahim", ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ", tr: "Rabbij'alnee muqeemas-salaati wa min dhurriyyatee rabbanaa wa taqabbal du'aa'", hi: "Ae mere Rab, mujhe aur meri aulaad ko namaz qaayam karne wala bana, aur ae hamare Rab, meri dua qubool farma.", en: "My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, accept my supplication." },
    { tag: "SURAH TAHA", ref: "20:25-28", person: "Musa", ar: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", tr: "Rabbish-rah lee sadree wa yassir lee amree wahlul 'uqdatan min lisaanee yafqahoo qawlee", hi: "Ae mere Rab, mera seena khol de, mera kaam aasaan kar de, aur meri zabaan ki girah khol de taaki log meri baat samajh sakein.", en: "My Lord, expand for me my chest, ease my task, and untie the knot from my tongue that they may understand my speech." },
    { tag: "SURAH AL-FURQAN", ref: "25:74", ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", tr: "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyaatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa", hi: "Ae hamare Rab, hamein hamari biwiyon aur aulaad se aankhon ki thandak ata farma, aur humein parhezgaron ka imaam bana.", en: "Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous." },
    { tag: "SURAH ASH-SHU'ARA", ref: "26:83-85", person: "Ibrahim", ar: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ وَاجْعَلْ لِي لِسَانَ صِدْقٍ فِي الْآخِرِينَ", tr: "Rabbi hab lee hukman wa alhiqnee bis-saaliheen, waj'al lee lisaana sidqin fil-aakhireen", hi: "Ae mere Rab, mujhe hikmat ata farma aur mujhe nek logon mein shaamil kar, aur baad mein aane walon mein meri sachi yaad qaayam kar.", en: "My Lord, grant me wisdom and join me with the righteous, and grant me a truthful mention among later generations." },
    { tag: "SURAH AN-NAML", ref: "27:19", person: "Sulaiman", ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ", tr: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya", hi: "Ae mere Rab, mujhe taufeeq de ki main teri us naimat ka shukar adaa karoon jo tune mujh par ki hai.", en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me." },
    { tag: "SURAH AL-QASAS", ref: "28:24", person: "Musa", ar: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", tr: "Rabbi innee limaa anzalta ilayya min khayrin faqeer", hi: "Ae mere Rab, jo bhalai tu mujh par utaare, main uska mohtaaj hoon.", en: "My Lord, indeed I am, for whatever good You send down to me, in need." },
    { tag: "SURAH AL-BAQARAH", ref: "2:286", ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا", tr: "Rabbanaa laa tu'aakhidhnaa in naseenaa aw akhta'naa", hi: "Ae hamare Rab, agar hum bhool jayein ya galti karein toh humein pakad mat.", en: "Our Lord, do not impose blame upon us if we forget or make a mistake." },
    { tag: "SURAH AL-BAQARAH", ref: "2:127", person: "Ibrahim", ar: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ", tr: "Rabbanaa taqabbal minnaa innaka antas-samee'ul-'aleem", hi: "Ae hamare Rab, hamse ye qubool farma, beshak tu hi sab sunne wala, sab jaanne wala hai.", en: "Our Lord, accept this from us. Indeed, You are the Hearing, the Knowing." },
    { tag: "SURAH AL-A'RAF", ref: "7:126", ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", tr: "Rabbanaa afrigh 'alaynaa sabran wa tawaffanaa muslimeen", hi: "Ae hamare Rab, hum par sabr utaar, aur hamein Musalman hi maut de.", en: "Our Lord, pour upon us patience and let us die as Muslims." },
    { tag: "SURAH AL-ISRA", ref: "17:80", person: "Nabi Muhammad", ar: "رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ", tr: "Rabbi adkhilnee mudkhala sidqin wa akhrijnee mukhraja sidq", hi: "Ae mere Rab, mujhe sachai ke saath dakhil kar aur sachai ke saath nikaal.", en: "My Lord, cause me to enter a sound entrance and to exit a sound exit." },
    { tag: "SURAH AL-KAHF (ASHAB-E-KAHF)", ref: "18:10", person: "Ashab-e-Kahf", ar: "رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", tr: "Rabbanaa aatinaa min ladunka rahmatan wa hayyi' lanaa min amrinaa rashadaa", hi: "Ae hamare Rab, hamein apni khaas rehmat ata farma, aur hamare kaam mein hidayat ki raah aasaan kar.", en: "Our Lord, grant us mercy from Yourself and prepare for us right guidance in our affair." },
    { tag: "SURAH AL-ANBIYA (DUA-E-ZAKARIYYA)", ref: "21:89", person: "Zakariyya", ar: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ", tr: "Rabbi laa tadharnee fardan wa anta khayrul-waaritheen", hi: "Ae mere Rab, mujhe akela na chhod, tu sab se behtar waris hai.", en: "My Lord, do not leave me alone, and You are the best of inheritors." },
    { tag: "SURAH AL-QASAS (DUA-E-MUSA)", ref: "28:16", person: "Musa", ar: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", tr: "Rabbi innee zalamtu nafsee faghfir lee", hi: "Ae mere Rab, maine apni jaan par zulm kiya hai, mujhe maaf kar de.", en: "My Lord, indeed I have wronged myself, so forgive me." },
    { tag: "SURAH AL-AHQAF", ref: "46:15", ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ", tr: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya wa 'alaa waalidayya", hi: "Ae mere Rab, mujhe taufeeq de ki main teri us naimat ka shukar adaa karoon jo tune mujh par aur mere maa-baap par ki hai.", en: "My Lord, enable me to be grateful for Your favor which You bestowed upon me and upon my parents." },
    { tag: "SURAH AAL-E-IMRAN (DUA-E-ZAKARIYYA)", ref: "3:38", person: "Zakariyya", ar: "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً", tr: "Rabbi hab lee min ladunka dhurriyyatan tayyibah", hi: "Ae mere Rab, mujhe apni taraf se paak aulaad ata farma.", en: "My Lord, grant me from Yourself a good offspring." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:194", ar: "رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ", tr: "Rabbanaa wa aatinaa maa wa'adtanaa 'alaa rusulika wa laa tukhzinaa yawmal-qiyaamah", hi: "Ae hamare Rab, hamein woh de jiska wada tune apne Rasoolon ke zariye kiya, aur Qayamat ke din humein ruswa na kar.", en: "Our Lord, give us what You promised us through Your messengers, and do not disgrace us on the Day of Resurrection." },
    { tag: "SURAH AL-MAIDAH", ref: "5:83", ar: "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ", tr: "Rabbanaa aamannaa faktubnaa ma'ash-shaahideen", hi: "Ae hamare Rab, hum iman laaye, toh humein gawaahi dene walon mein likh le.", en: "Our Lord, we have believed, so register us among the witnesses." },
    { tag: "SURAH AL-A'RAF", ref: "7:47", ar: "رَبَّنَا لَا تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ", tr: "Rabbanaa laa taj'alnaa ma'al-qawmiz-zaalimeen", hi: "Ae hamare Rab, humein zaalim logon ke saath shaamil na kar.", en: "Our Lord, do not place us with the wrongdoing people." },
    { tag: "SURAH YUSUF", ref: "12:101", person: "Yusuf", ar: "تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ", tr: "Tawaffanee musliman wa alhiqnee bis-saaliheen", hi: "Mujhe Musalman hi maut de, aur mujhe nek logon mein shaamil kar.", en: "Cause me to die as a Muslim and join me with the righteous." },
    { tag: "SURAH AL-MU'MINUN", ref: "23:109", ar: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ", tr: "Rabbanaa aamannaa faghfir lanaa warhamnaa wa anta khayrur-raahimeen", hi: "Ae hamare Rab, hum iman laaye, toh humein maaf kar aur reham kar, tu sab se behtar reham karne wala hai.", en: "Our Lord, we have believed, so forgive us and have mercy upon us, and You are the best of the merciful." },
    { tag: "SURAH SAD (DUA-E-SULAIMAN)", ref: "38:35", person: "Sulaiman", ar: "رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَا يَنْبَغِي لِأَحَدٍ مِنْ بَعْدِي", tr: "Rabbighfir lee wa hab lee mulkan laa yanbaghee li-ahadin min ba'dee", hi: "Ae mere Rab, mujhe maaf kar de, aur mujhe aisi badshahat ata farma jo mere baad kisi aur ko naseeb na ho.", en: "My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me." },
  ],
  shaam: [
    { tag: "SURAH AAL-E-IMRAN", ref: "3:8", ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً", tr: "Rabbanaa laa tuzigh quloobanaa ba'da idh hadaytanaa wa hab lanaa min ladunka rahmah", hi: "Ae hamare Rab, hidayat dene ke baad hamare dilon ko na bhatka, aur humein apni khaas rehmat ata farma.", en: "Our Lord, let not our hearts deviate after You have guided us, and grant us mercy from Yourself." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:147", ar: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا", tr: "Rabbanaghfir lanaa dhunoobanaa wa israafanaa fee amrinaa wa thabbit aqdaamanaa", hi: "Ae hamare Rab, hamare gunaah aur hamari zyaadti maaf kar, aur hamare qadam jamaa de.", en: "Our Lord, forgive us our sins and our excess in our affair, and plant firmly our feet." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:191", ar: "رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ", tr: "Rabbanaa maa khalaqta haadhaa baatilan subhaanaka faqinaa 'adhaaban-naar", hi: "Ae hamare Rab, tune ye sab bekaar nahi banaya, tu paak hai, humein dozakh ke azaab se bacha.", en: "Our Lord, You did not create this without purpose; exalted are You, so protect us from the punishment of the Fire." },
    { tag: "SURAH AL-MU'MINUN", ref: "23:29", person: "Nuh", ar: "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ", tr: "Rabbi anzilnee munzalan mubaarakan wa anta khayrul-munzileen", hi: "Ae mere Rab, mujhe barkat wali jagah utaar, tu sab se behtar utarne wala hai.", en: "My Lord, cause me to land at a blessed landing place, and You are the best to accommodate." },
    { tag: "SURAH AL-MU'MINUN", ref: "23:97-98", ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ", tr: "Rabbi a'oodhu bika min hamazaatish-shayaateen, wa a'oodhu bika rabbi an yahdhuroon", hi: "Ae mere Rab, main shayateen ke waswason se teri panaah maangta hoon, aur ye bhi ki wo mere paas aayein.", en: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You lest they come near me." },
    { tag: "SURAH ASH-SHU'ARA", ref: "26:78-80", person: "Ibrahim", ar: "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", tr: "Alladhee khalaqanee fahuwa yahdeen, walladhee huwa yut'imunee wa yasqeen, wa idhaa maridtu fahuwa yashfeen", hi: "Woh jisne mujhe banaya, wahi meri hidayat karta hai, aur wahi mujhe khilaata aur pilaata hai, aur jab main bimaar hota hoon toh wahi shifa deta hai.", en: "He who created me, and He guides me. It is He who feeds me and gives me drink, and when I am ill, He cures me." },
    { tag: "SURAH AN-NAML", ref: "27:15", person: "Dawud aur Sulaiman", ar: "الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا عَلَىٰ كَثِيرٍ مِنْ عِبَادِهِ الْمُؤْمِنِينَ", tr: "Alhamdulillaahil-ladhee faddalanaa 'alaa katheerin min 'ibaadihil-mu'mineen", hi: "Sab tareef Allah ke liye jisne humein apne bahut se momin bandon par fazeelat di.", en: "Praise be to Allah who has favored us over many of His believing servants." },
    { tag: "SURAH AL-BAQARAH", ref: "2:286", ar: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا", tr: "Rabbanaa wa laa tahmil 'alaynaa isran kamaa hamaltahoo 'alal-ladheena min qablinaa", hi: "Ae hamare Rab, hum par woh bojh na daal jo tune hamse pehle logon par daala tha.", en: "Our Lord, do not burden us as You burdened those before us." },
    { tag: "SURAH AL-BAQARAH", ref: "2:128", person: "Ibrahim", ar: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ", tr: "Rabbanaa waj'alnaa muslimayni laka wa min dhurriyyatinaa ummatan muslimatan lak", hi: "Ae hamare Rab, humein apna farmaanbardar bana, aur hamari aulaad mein se bhi ek ummat aisi bana jo teri farmaanbardar ho.", en: "Our Lord, make us submissive to You and from our descendants a community submissive to You." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:16", ar: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ", tr: "Rabbanaa innanaa aamannaa faghfir lanaa dhunoobanaa wa qinaa 'adhaaban-naar", hi: "Ae hamare Rab, hum iman laaye, toh hamare gunaah maaf kar aur hamein dozakh ke azaab se bacha.", en: "Our Lord, we have believed, so forgive us our sins and protect us from the punishment of the Fire." },
    { tag: "SURAH AL-A'RAF (DUA-E-MUSA)", ref: "7:151", person: "Musa", ar: "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ", tr: "Rabbighfir lee wa li-akhee wa adkhilnaa fee rahmatik", hi: "Ae mere Rab, mujhe aur mere bhai ko maaf kar de, aur humein apni rehmat mein daakhil kar.", en: "My Lord, forgive me and my brother, and admit us into Your mercy." },
    { tag: "SURAH AL-FURQAN", ref: "25:65", ar: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا", tr: "Rabbanas-rif 'annaa 'adhaaba jahannama inna 'adhaabahaa kaana gharaamaa", hi: "Ae hamare Rab, humse jahannam ka azaab door kar de, beshak uska azaab bahut sakht hai.", en: "Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering." },
    { tag: "SURAH AL-QASAS", ref: "28:21", person: "Musa", ar: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", tr: "Rabbi najjinee minal-qawmiz-zaalimeen", hi: "Ae mere Rab, mujhe zaalim logon se bacha.", en: "My Lord, save me from the wrongdoing people." },
    { tag: "SURAH AL-MU'MIN", ref: "40:8", ar: "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدْتَهُمْ", tr: "Rabbanaa wa adkhilhum jannaati 'adninil-latee wa'adtahum", hi: "Ae hamare Rab, unhe un Jannaton mein daakhil kar jinka tune unse wada kiya tha.", en: "Our Lord, admit them to gardens of perpetual residence which You have promised them." },
    { tag: "SURAH AT-TAHRIM", ref: "66:8", ar: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", tr: "Rabbanaa atmim lanaa nooranaa waghfir lanaa innaka 'alaa kulli shay'in qadeer", hi: "Ae hamare Rab, hamara noor poora kar de aur humein maaf kar de, beshak tu har cheez par qaadir hai.", en: "Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent." },
    { tag: "SURAH AN-NISA", ref: "4:75", ar: "رَبَّنَا أَخْرِجْنَا مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا", tr: "Rabbanaa akhrijnaa min haadhihil-qaryatiz-zaalimi ahluhaa", hi: "Ae hamare Rab, humein is basti se nikaal jiske log zaalim hain.", en: "Our Lord, remove us from this city whose people are oppressors." },
    { tag: "SURAH AL-A'RAF", ref: "7:89", person: "Shu'aib", ar: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنْتَ خَيْرُ الْفَاتِحِينَ", tr: "Rabbanaf-tah baynanaa wa bayna qawminaa bil-haqqi wa anta khayrul-faatiheen", hi: "Ae hamare Rab, hamare aur hamari qaum ke darmiyan haq ke saath faisla kar, tu sab se behtar faisla karne wala hai.", en: "Our Lord, decide between us and our people in truth, and You are the best of those who decide." },
    { tag: "SURAH YUSUF", ref: "12:33", person: "Yusuf", ar: "رَبِّ السِّجْنُ أَحَبُّ إِلَيَّ مِمَّا يَدْعُونَنِي إِلَيْهِ", tr: "Rabbis-sijnu ahabbu ilayya mimmaa yad'oonanee ilayh", hi: "Ae mere Rab, qaid mujhe us se zyada pasand hai jiski taraf ye log mujhe bula rahe hain.", en: "My Lord, prison is more beloved to me than that to which they invite me." },
    { tag: "SURAH AL-BAQARAH (DUA-E-IBRAHIM)", ref: "2:126", person: "Ibrahim", ar: "رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ", tr: "Rabbij'al haadhaa baladan aaminan warzuq ahlahoo minath-thamaraat", hi: "Ae mere Rab, ise ek amn wala shehar bana, aur uske logon ko phalon se rizq de.", en: "My Lord, make this a secure city and provide its people with fruits." },
    { tag: "SURAH AL-MUMTAHINA", ref: "60:4", person: "Ibrahim", ar: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ الْمَصِيرُ", tr: "Rabbanaa 'alayka tawakkalnaa wa ilaykal-maseer", hi: "Ae hamare Rab, humne tujh par bharosa kiya, aur tujhi ki taraf lautna hai.", en: "Our Lord, upon You we have relied, and to You is the return." },
    { tag: "SURAH AL-ANBIYA", ref: "21:112", person: "Nabi Muhammad", ar: "رَبِّ احْكُمْ بِالْحَقِّ", tr: "Rabbih-kum bil-haqq", hi: "Ae mere Rab, haq ke saath faisla farma.", en: "My Lord, judge in truth." },
    { tag: "SURAH MARYAM (DUA-E-ZAKARIYYA)", ref: "19:4", person: "Zakariyya", ar: "رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا", tr: "Rabbi innee wahanal-'azmu minnee wash-ta'alar-ra'su shaybaa", hi: "Ae mere Rab, meri haddiyaan kamzor ho gayi hain aur sar budhape se safed ho gaya hai.", en: "My Lord, indeed my bones have weakened, and my head has filled with white hair." },
    { tag: "SURAH AT-TAHRIM (BIWI-E-FIR'AUN)", ref: "66:11", person: "Asiya (Biwi-e-Fir'aun)", ar: "رَبِّ ابْنِ لِي عِنْدَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِنْ فِرْعَوْنَ وَعَمَلِهِ", tr: "Rabbib-nee lee 'indaka baytan fil-jannati wa najjinee min Fir'awna wa 'amalih", hi: "Ae mere Rab, mere liye apne paas Jannat mein ek ghar bana, aur mujhe Firaun aur uske kaam se bacha.", en: "My Lord, build for me near You a house in Paradise and save me from Pharaoh and his deeds." },
  ],
  raat: [
    { tag: "SURAH AL-ANBIYA (DUA-E-YUNUS)", ref: "21:87", person: "Yunus", ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tr: "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen", hi: "Tere siwa koi mabood nahi, tu paak hai, beshak main zaalimon mein se tha.", en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
    { tag: "SURAH IBRAHIM", ref: "14:35", person: "Ibrahim", ar: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَنْ نَعْبُدَ الْأَصْنَامَ", tr: "Rabbij'al haadhal-balada aaminan wajnubnee wa baniyya an na'budal-asnaam", hi: "Ae mere Rab, is shehar ko amn wala bana, aur mujhe aur meri aulaad ko buton ki pooja se bacha.", en: "My Lord, make this city one of peace, and keep me and my sons away from worshipping idols." },
    { tag: "SURAH AL-FATIHA", ref: "1:6-7", ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", tr: "Ihdinas-siraatal-mustaqeem, siraatal-ladheena an'amta 'alayhim", hi: "Humein seedhe raaste ki hidayat de, un logon ka raasta jin par tune inaam kiya.", en: "Guide us to the straight path, the path of those upon whom You have bestowed favor." },
    { tag: "SURAH AL-MUMTAHINA", ref: "60:5", ar: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا", tr: "Rabbanaa laa taj'alnaa fitnatan lilladheena kafaroo waghfir lanaa rabbanaa", hi: "Ae hamare Rab, humein kaafiron ke liye aazmaish na bana, aur humein maaf kar de, ae hamare Rab.", en: "Our Lord, make us not a trial for the wrongdoing people, and forgive us, our Lord." },
    { tag: "SURAH AL-HASHR", ref: "59:10", ar: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا", tr: "Rabbanaghfir lanaa wa li-ikhwaaninal-ladheena sabaqoonaa bil-eemaani wa laa taj'al fee quloobinaa ghillal-lilladheena aamanoo", hi: "Ae hamare Rab, humein aur hamare un bhaiyon ko maaf kar jo iman mein humse pehle guzre, aur hamare dilon mein imaan walon ke liye koi kina na rakh.", en: "Our Lord, forgive us and our brothers who preceded us in faith, and put not in our hearts resentment toward believers." },
    { tag: "SURAH NUH", ref: "71:28", person: "Nuh", ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ", tr: "Rabbighfir lee wa liwaalidayya wa liman dakhala baytiya mu'minan wa lil-mu'mineena wal-mu'minaat", hi: "Ae mere Rab, mujhe, mere maa-baap ko, aur jo momin hokar mere ghar mein aaye usko, aur sab momin mardon aur auraton ko maaf kar de.", en: "My Lord, forgive me and my parents and whoever enters my house as a believer, and the believing men and women." },
    { tag: "SURAH AL-A'RAF", ref: "7:23", person: "Adam", ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", tr: "Rabbanaa zalamnaa anfusanaa wa illam taghfir lanaa wa tarhamnaa lanakoonanna minal-khaasireen", hi: "Ae hamare Rab, humne apni jaan par zulm kiya, agar tu maaf na kare aur reham na kare toh hum ghaate mein rehne walon mein se ho jayenge.", en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy, we will be among the losers." },
    { tag: "SURAH AL-BAQARAH", ref: "2:250", ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", tr: "Rabbanaa afrigh 'alaynaa sabran wa thabbit aqdaamanaa wansurnaa 'alal-qawmil-kaafireen", hi: "Ae hamare Rab, hum par sabr utaar, hamare qadam jamaa de, aur hamari madad kar.", en: "Our Lord, pour upon us patience and plant firmly our feet and give us victory." },
    { tag: "SURAH YUNUS", ref: "10:85-86", ar: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ", tr: "Rabbanaa laa taj'alnaa fitnatan lil-qawmiz-zaalimeen wa najjinaa birahmatika minal-qawmil-kaafireen", hi: "Ae hamare Rab, humein zaalim logon ke liye aazmaish na bana, aur apni rehmat se humein kaafiron se bacha.", en: "Our Lord, make us not a trial for the wrongdoing people, and save us by Your mercy from the disbelieving people." },
    { tag: "SURAH AL-ISRA (MAA-BAAP KE LIYE)", ref: "17:24", person: "Nabi Muhammad", ar: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", tr: "Rabbir-hamhumaa kamaa rabbayaanee sagheeraa", hi: "Ae mere Rab, unn dono (maa-baap) par reham kar jaise unhone bachpan mein meri parvarish ki.", en: "My Lord, have mercy upon them as they brought me up when I was small." },
    { tag: "SURAH AL-ANBIYA (DUA-E-AYYUB)", ref: "21:83", person: "Ayyub", ar: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ", tr: "Annee massaniyad-durru wa anta arhamur-raahimeen", hi: "Mujhe taklif pahunchi hai, aur tu sab se zyada reham karne wala hai.", en: "Adversity has touched me, and You are the Most Merciful of the merciful." },
    { tag: "SURAH AL-ANKABUT (DUA-E-LUT)", ref: "29:30", person: "Lut", ar: "رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ", tr: "Rabbin-surnee 'alal-qawmil-mufsideen", hi: "Ae mere Rab, mujhe fasaad phailaane walon ke khilaaf madad de.", en: "My Lord, support me against the corrupting people." },
    { tag: "SURAH AS-SAFFAT (DUA-E-IBRAHIM)", ref: "37:100", person: "Ibrahim", ar: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ", tr: "Rabbi hab lee minas-saaliheen", hi: "Ae mere Rab, mujhe nek aulaad ata farma.", en: "My Lord, grant me [a child] from among the righteous." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:53", person: "Hawariyyun", ar: "رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ", tr: "Rabbanaa aamannaa bimaa anzalta wattaba'nar-rasoola faktubnaa ma'ash-shaahideen", hi: "Ae hamare Rab, hum us par iman laaye jo tune utaara aur humne Rasul ki pairavi ki, toh humein gawaahi dene walon mein likh le.", en: "Our Lord, we have believed in what You revealed and followed the messenger, so register us among the witnesses." },
    { tag: "SURAH AL-A'RAF", ref: "7:155-156", person: "Musa", ar: "أَنْتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الْغَافِرِينَ", tr: "Anta waliyyunaa faghfir lanaa warhamnaa wa anta khayrul-ghaafireen", hi: "Tu hi hamara madadgaar hai, toh humein maaf kar aur reham kar, tu sab se behtar maaf karne wala hai.", en: "You are our protector, so forgive us and have mercy upon us, and You are the best of forgivers." },
    { tag: "SURAH AL-AN'AM", ref: "6:162-163", person: "Nabi Muhammad", ar: "إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ", tr: "Inna salaatee wa nusukee wa mahyaaya wa mamaatee lillaahi rabbil-'aalameen", hi: "Beshak meri namaz, meri qurbani, mera jeena aur mera marna sab Allah, jo saari duniya ka Rab hai, usi ke liye hai.", en: "Indeed, my prayer, my rites, my living and my dying are for Allah, Lord of the worlds." },
    { tag: "SURAH ASH-SHU'ARA (DUA-E-LUT)", ref: "26:169", person: "Lut", ar: "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ", tr: "Rabbi najjinee wa ahlee mimmaa ya'maloon", hi: "Ae mere Rab, mujhe aur mere gharwalon ko unke buray kaamon se bacha.", en: "My Lord, save me and my family from what they do." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:9", ar: "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ", tr: "Rabbanaa innaka jaami'un-naasi liyawmin laa rayba feeh", hi: "Ae hamare Rab, beshak tu sab logon ko us din jama karne wala hai jisme koi shak nahi.", en: "Our Lord, surely You will gather mankind for a Day about which there is no doubt." },
    { tag: "SURAH GHAFIR", ref: "40:11", ar: "رَبَّنَا أَمَتَّنَا اثْنَتَيْنِ وَأَحْيَيْتَنَا اثْنَتَيْنِ فَاعْتَرَفْنَا بِذُنُوبِنَا فَهَلْ إِلَىٰ خُرُوجٍ مِنْ سَبِيلٍ", tr: "Rabbanaa amattanath-natayni wa ahyaytanath-natayni fa'tarafnaa bidhunoobinaa fahal ilaa khuroojin min sabeel", hi: "Ae hamare Rab, tune humein do baar maut di aur do baar zindagi di, humne apne gunahon ka iqraar kar liya — kya (yahan se) niklne ka koi raasta hai?", en: "Our Lord, You have made us die twice and have given us life twice, and we have confessed our sins. Is there any way out?" },
    { tag: "SURAH AL-BAQARAH", ref: "2:286", ar: "وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", tr: "Wa'fu 'annaa waghfir lanaa warhamnaa anta mawlaanaa fansurnaa 'alal-qawmil-kaafireen", hi: "Aur humein maaf kar de, aur humein bakhsh de, aur hum par reham kar, tu hi hamara maula hai, toh kaafiron ke muqaable mein hamari madad kar.", en: "Pardon us, forgive us, and have mercy upon us. You are our protector, so give us victory over the disbelieving people." },
    { tag: "SURAH AL-A'RAF", ref: "7:150", person: "Musa", ar: "رَبِّ اغْفِرْ لِي وَلِأَخِي وَلَا تُشْمِتْ بِنَا الْأَعْدَاءَ", tr: "Rabbighfir lee wa li-akhee wa laa tushmit binal-a'daa'", hi: "Ae mere Rab, mujhe aur mere bhai ko maaf kar de, aur hamare dushmanon ko hum par khush hone ka mauqa na de.", en: "My Lord, forgive me and my brother and admit us into Your mercy, and do not let our enemies gloat over us." },
  ],
};

// Teeno waqt ki duayein ek saath — ab koi category tabs nahi, seedha ek list
// Nabi Muhammad (SAW) ki khud sikhayi hui duayein — Hadith se (Sahih Bukhari/Muslim)
const HADITH_DUAS = [
  { tag: "SAYYIDUL ISTIGHFAR", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ", tr: "Allahumma anta Rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk", hi: "Ae Allah, tu mera Rab hai, tere siwa koi mabood nahi, tune mujhe banaya aur main tera banda hoon.", en: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant." },
  { tag: "SONE SE PEHLE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", tr: "Bismika Allahumma amootu wa ahyaa", hi: "Ae Allah, tere hi naam se main marta hoon aur jeeta hoon.", en: "In Your name, O Allah, I die and I live." },
  { tag: "NEEND SE UTHNE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", tr: "Alhamdulillaahil-ladhee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor", hi: "Sab tareef Allah ke liye jisne humein maut jaisi neend ke baad zinda kiya, aur usi ki taraf lautna hai.", en: "All praise is for Allah who gave us life after having taken it from us, and to Him is the return." },
  { tag: "GHAR SE NIKALTE WAQT KI DUA", ref: "Tirmidhi", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", tr: "Bismillahi tawakkaltu 'alallahi wa laa hawla wa laa quwwata illaa billah", hi: "Allah ke naam se, maine Allah par bharosa kiya, aur Allah ke siwa koi taaqat nahi.", en: "In the name of Allah, I place my trust in Allah, there is no power except with Allah." },
  { tag: "KHANA KHANE SE PEHLE KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ", tr: "Bismillah", hi: "Allah ke naam se.", en: "In the name of Allah." },
  { tag: "KHANA KHANE KE BAAD KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", tr: "Alhamdulillaahil-ladhee at'amanee haadhaa wa razaqaneehi min ghayri hawlin minnee wa laa quwwah", hi: "Sab tareef Allah ke liye jisne mujhe ye khana khilaaya, bina meri kisi taaqat ke.", en: "Praise be to Allah who fed me this and provided it without any power or might from myself." },
  { tag: "GUSSA THANDA KARNE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", tr: "A'oodhu billaahi minash-shaytaanir-rajeem", hi: "Main Allah ki panaah maangta hoon shaitaan mardood se.", en: "I seek refuge in Allah from Satan, the accursed." },
  { tag: "PARESHANI KE WAQT KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ", tr: "Hasbiyallaahu laa ilaaha illaa huwa 'alayhi tawakkalt", hi: "Allah hi mere liye kaafi hai, uske siwa koi mabood nahi, maine usi par bharosa kiya.", en: "Allah is sufficient for me, there is no deity except Him, upon Him I have relied." },
  { tag: "MASJID MEIN DAAKHIL HONE KI DUA", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", tr: "Allahummaf-tah lee abwaaba rahmatik", hi: "Ae Allah, mere liye apni rehmat ke darwaaze khol de.", en: "O Allah, open for me the doors of Your mercy." },
  { tag: "SAFAR KI DUA", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", tr: "Subhaanal-ladhee sakhkhara lanaa haadhaa wa maa kunnaa lahoo muqrineen", hi: "Paak hai woh Allah jisne is sawari ko hamare kaabu mein kar diya, warna hum khud isko qaabu mein nahi la sakte the.", en: "Glory to Him who has made this subject to us, and we could not have accomplished it by ourselves." },
  { tag: "BEEMARI MEIN SHIFA KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي", tr: "Allahumma Rabban-naasi adhhibil-ba'sa ishfi antash-Shaafee", hi: "Ae Allah, logon ke Rab, taklif door kar de, tu hi shifa dene wala hai.", en: "O Allah, Lord of mankind, remove the affliction and grant healing, for You are the Healer." },
  { tag: "GUNAAH KI MAAFI KI DUA", ref: "Sunan Tirmidhi", person: "Nabi Muhammad", ar: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", tr: "Astaghfirullaahal-'Azeemal-ladhee laa ilaaha illaa huwal-Hayyul-Qayyoomu wa atoobu ilayh", hi: "Main Allah Ta'ala se maafi maangta hoon jiske siwa koi mabood nahi, jo hamesha zinda aur qaayam hai, aur main uski taraf tauba karta hoon.", en: "I seek forgiveness from Allah, the Mighty, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him." },
  { tag: "TOILET JAANE SE PEHLE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ", tr: "Allahumma innee a'oodhu bika minal-khubthi wal-khabaa'ith", hi: "Ae Allah, main tujh se napaak jinnaat (nar aur maada) se panaah maangta hoon.", en: "O Allah, I seek refuge in You from male and female devils." },
  { tag: "TOILET SE NIKALNE KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "غُفْرَانَكَ", tr: "Ghufraanak", hi: "Ae Allah, main teri maghfirat chahta hoon.", en: "O Allah, I seek Your forgiveness." },
  { tag: "WUDU SHURU KARNE SE PEHLE", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ", tr: "Bismillah", hi: "Allah ke naam se.", en: "In the name of Allah." },
  { tag: "WUDU KE BAAD KI DUA", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ", tr: "Ashhadu al-laa ilaaha illallaahu wa ashhadu anna Muhammadan 'abduhu wa rasooluh", hi: "Main gawaahi deta hoon ke Allah ke siwa koi mabood nahi, aur main gawaahi deta hoon ke Muhammad (SAW) uske bande aur Rasool hain.", en: "I bear witness that there is no deity except Allah, and I bear witness that Muhammad is His servant and Messenger." },
  { tag: "NAYA KAPDA PEHNTE WAQT KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ", tr: "Allahumma lakal-hamdu anta kasawtaneehi as'aluka khayrahu wa khayra maa suni'a lah", hi: "Ae Allah, sab tareef teri hai, tune hi mujhe ye kapda pehnaya, main tujh se iski khubi aur iske faayde ka sawaal karta hoon.", en: "O Allah, all praise is for You. You have clothed me with this; I ask You for its goodness and the goodness for which it was made." },
  { tag: "CHHEENK AANE PAR KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "الْحَمْدُ لِلَّهِ", tr: "Alhamdulillah", hi: "Sab tareef Allah ke liye hai. (Sunne wala jawab de: Yarhamukallah — Allah tujh par reham kare)", en: "All praise is for Allah. (The listener replies: Yarhamuk-Allah — May Allah have mercy on you)" },
  { tag: "GHAR MEIN DAAKHIL HONE KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا", tr: "Bismillaahi walajnaa wa bismillaahi kharajnaa wa 'alaa Rabbinaa tawakkalnaa", hi: "Allah ke naam se hum ghar mein daakhil huye, aur Allah ke naam se nikle, aur apne Rab par bharosa kiya.", en: "In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we rely." },
  { tag: "GAADI/SAWARI MEIN BAITHTE WAQT", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ وَالْحَمْدُ لِلَّهِ", tr: "Bismillaahir-Rahmaanir-Raheem, walhamdu lillaah", hi: "Allah ke naam se jo bada meharbaan, nihaayat reham karne wala hai, aur sab tareef Allah ke liye hai.", en: "In the name of Allah, the Most Gracious, the Most Merciful, and all praise is for Allah." },
];

const ALL_DUAS = [...POOLS.subah, ...POOLS.shaam, ...POOLS.raat, ...HADITH_DUAS];

// ---------- Rohani Ilaj: existing authentic duas organized by need/theme ----------
const ROHANI_ILAJ = [
  {
    id: "sabr",
    icon: "🕊️",
    title: "Sabr aur Sukoon",
    desc: "Musibat aur pareshani mein sabr ke liye duayein",
    duas: [
      { tag: "SURAH AL-A'RAF", ref: "7:126", ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", tr: "Rabbanaa afrigh 'alaynaa sabran wa tawaffanaa muslimeen", hi: "Ae hamare Rab, hum par sabr utaar, aur hamein Musalman hi maut de.", en: "Our Lord, pour upon us patience and let us die as Muslims." },
      { tag: "SURAH AL-BAQARAH", ref: "2:250", ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", tr: "Rabbanaa afrigh 'alaynaa sabran wa thabbit aqdaamanaa wansurnaa 'alal-qawmil-kaafireen", hi: "Ae hamare Rab, hum par sabr utaar, hamare qadam jamaa de, aur hamari madad kar.", en: "Our Lord, pour upon us patience and plant firmly our feet and give us victory." },
      { tag: "PARESHANI KE WAQT KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ", tr: "Hasbiyallaahu laa ilaaha illaa huwa 'alayhi tawakkalt", hi: "Allah hi mere liye kaafi hai, uske siwa koi mabood nahi, maine usi par bharosa kiya.", en: "Allah is sufficient for me, there is no deity except Him, upon Him I have relied." },
      { tag: "SURAH AL-A'RAF (DUA-E-MUSA)", ref: "7:155-156", person: "Musa", ar: "أَنْتَ وَلِيُّنَا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الْغَافِرِينَ", tr: "Anta waliyyunaa faghfir lanaa warhamnaa wa anta khayrul-ghaafireen", hi: "Tu hi hamara madadgaar hai, toh humein maaf kar aur reham kar, tu sab se behtar maaf karne wala hai.", en: "You are our Protector, so forgive us and have mercy upon us; You are the best of forgivers." },
    ],
  },
  {
    id: "pareshani",
    icon: "🌤️",
    title: "Pareshani se Nijaat",
    desc: "Museebat aur takleef mein madad ke liye duayein",
    duas: [
      { tag: "SURAH AL-ANBIYA (DUA-E-AYYUB)", ref: "21:83", person: "Ayyub", ar: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ", tr: "Annee massaniyad-durru wa anta arhamur-raahimeen", hi: "Mujhe taklif pahunchi hai, aur tu sab se zyada reham karne wala hai.", en: "Adversity has touched me, and You are the Most Merciful of the merciful." },
      { tag: "SURAH AL-ANBIYA (DUA-E-YUNUS)", ref: "21:87", person: "Yunus", ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tr: "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen", hi: "Tere siwa koi mabood nahi, tu paak hai, beshak main zaalimon mein se tha.", en: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." },
      { tag: "SURAH AL-QASAS", ref: "28:24", person: "Musa", ar: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", tr: "Rabbi innee limaa anzalta ilayya min khayrin faqeer", hi: "Ae mere Rab, jo bhalai tu mujh par utaare, main uska mohtaaj hoon.", en: "My Lord, indeed I am, for whatever good You send down to me, in need." },
    ],
  },
  {
    id: "shifa",
    icon: "🤲",
    title: "Bimari mein Shifa",
    desc: "Sehat aur shifa ke liye duayein",
    duas: [
      { tag: "BEEMARI MEIN SHIFA KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي", tr: "Allahumma Rabban-naasi adhhibil-ba'sa ishfi antash-Shaafee", hi: "Ae Allah, logon ke Rab, taklif door kar de, tu hi shifa dene wala hai.", en: "O Allah, Lord of mankind, remove the affliction and grant healing, for You are the Healer." },
      { tag: "SURAH ASH-SHU'ARA", ref: "26:78-80", person: "Ibrahim", ar: "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", tr: "Alladhee khalaqanee fahuwa yahdeen, walladhee huwa yut'imunee wa yasqeen, wa idhaa maridtu fahuwa yashfeen", hi: "Woh jisne mujhe banaya, wahi meri hidayat karta hai, aur wahi mujhe khilaata aur pilaata hai, aur jab main bimaar hota hoon toh wahi shifa deta hai.", en: "He who created me, and He guides me. It is He who feeds me and gives me drink, and when I am ill, He cures me." },
    ],
  },
  {
    id: "hifazat",
    icon: "🛡️",
    title: "Hifazat aur Suraksha",
    desc: "Safar, ghar aur roz-marra ki hifazat ke liye duayein",
    duas: [
      { tag: "GHAR SE NIKALTE WAQT KI DUA", ref: "Tirmidhi", person: "Nabi Muhammad", ar: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", tr: "Bismillahi tawakkaltu 'alallahi wa laa hawla wa laa quwwata illaa billah", hi: "Allah ke naam se, maine Allah par bharosa kiya, aur Allah ke siwa koi taaqat nahi.", en: "In the name of Allah, I place my trust in Allah, there is no power except with Allah." },
      { tag: "SAFAR KI DUA", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ", tr: "Subhaanal-ladhee sakhkhara lanaa haadhaa wa maa kunnaa lahoo muqrineen", hi: "Paak hai woh Allah jisne is sawari ko hamare kaabu mein kar diya, warna hum khud isko qaabu mein nahi la sakte the.", en: "Glory to Him who has made this subject to us, and we could not have accomplished it by ourselves." },
      { tag: "SURAH AL-MU'MINUN", ref: "23:97-98", ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ", tr: "Rabbi a'oodhu bika min hamazaatish-shayaateen, wa a'oodhu bika rabbi an yahdhuroon", hi: "Ae mere Rab, main shayateen ke waswason se teri panaah maangta hoon, aur ye bhi ki wo mere paas aayein.", en: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You lest they come near me." },
    ],
  },
  {
    id: "maghfirat",
    icon: "🌙",
    title: "Gunahon ki Maghfirat",
    desc: "Tauba aur maafi maangne ke liye duayein",
    duas: [
      { tag: "SAYYIDUL ISTIGHFAR", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ", tr: "Allahumma anta Rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk", hi: "Ae Allah, tu mera Rab hai, tere siwa koi mabood nahi, tune mujhe banaya aur main tera banda hoon.", en: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant." },
      { tag: "GUNAAH KI MAAFI KI DUA", ref: "Sunan Tirmidhi", person: "Nabi Muhammad", ar: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", tr: "Astaghfirullaahal-'Azeemal-ladhee laa ilaaha illaa huwal-Hayyul-Qayyoomu wa atoobu ilayh", hi: "Main Allah Ta'ala se maafi maangta hoon jiske siwa koi mabood nahi, jo hamesha zinda aur qaayam hai, aur main uski taraf tauba karta hoon.", en: "I seek forgiveness from Allah, the Mighty, besides whom there is no deity, the Ever-Living, the Sustainer, and I repent to Him." },
      { tag: "SURAH AL-QASAS (DUA-E-MUSA)", ref: "28:16", person: "Musa", ar: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", tr: "Rabbi innee zalamtu nafsee faghfir lee", hi: "Ae mere Rab, maine apni jaan par zulm kiya hai, mujhe maaf kar de.", en: "My Lord, indeed I have wronged myself, so forgive me." },
      { tag: "SURAH AL-A'RAF (DUA-E-ADAM)", ref: "7:23", person: "Adam", ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", tr: "Rabbanaa zalamnaa anfusanaa wa il-lam taghfir lanaa wa tarhamnaa lanakoonanna minal-khaasireen", hi: "Ae hamare Rab, humne apni jaan par zulm kiya, agar tu maaf na kare aur hum par reham na kare toh hum zaroor nuqsaan uthaane walon mein se ho jaayenge.", en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers." },
    ],
  },
  {
    id: "gussa",
    icon: "💭",
    title: "Gussa aur Waswase",
    desc: "Gussa thanda karne aur shaitani waswason se bachne ki duayein",
    duas: [
      { tag: "GUSSA THANDA KARNE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", tr: "A'oodhu billaahi minash-shaytaanir-rajeem", hi: "Main Allah ki panaah maangta hoon shaitaan mardood se.", en: "I seek refuge in Allah from Satan, the accursed." },
      { tag: "SURAH AL-MU'MINUN", ref: "23:97-98", ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ", tr: "Rabbi a'oodhu bika min hamazaatish-shayaateen, wa a'oodhu bika rabbi an yahdhuroon", hi: "Ae mere Rab, main shayateen ke waswason se teri panaah maangta hoon, aur ye bhi ki wo mere paas aayein.", en: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You lest they come near me." },
    ],
  },
  {
    id: "ilm",
    icon: "📖",
    title: "Ilm aur Aasaani",
    desc: "Samajh, ilm aur kaam aasaan hone ke liye duayein",
    duas: [
      { tag: "SURAH TAHA", ref: "20:25-28", person: "Musa", ar: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", tr: "Rabbish-rah lee sadree wa yassir lee amree wahlul 'uqdatan min lisaanee yafqahoo qawlee", hi: "Ae mere Rab, mera seena khol de, mera kaam aasaan kar de, aur meri zabaan ki girah khol de taaki log meri baat samajh sakein.", en: "My Lord, expand for me my chest, ease my task, and untie the knot from my tongue that they may understand my speech." },
      { tag: "SURAH AN-NAML", ref: "27:19", person: "Sulaiman", ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ", tr: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya", hi: "Ae mere Rab, mujhe taufeeq de ki main teri us naimat ka shukar adaa karoon jo tune mujh par ki hai.", en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me." },
    ],
  },
  {
    id: "aulad",
    icon: "👨‍👩‍👧",
    title: "Aulad aur Ghar Waalon ke Liye",
    desc: "Nek aulad aur ghar waalon ki bhalai ki duayein",
    duas: [
      { tag: "SURAH AAL-E-IMRAN (DUA-E-ZAKARIYYA)", ref: "3:38", person: "Zakariyya", ar: "رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً", tr: "Rabbi hab lee min ladunka dhurriyyatan tayyibah", hi: "Ae mere Rab, mujhe apni taraf se paak aulaad ata farma.", en: "My Lord, grant me from Yourself a good offspring." },
      { tag: "SURAH AL-FURQAN", ref: "25:74", ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", tr: "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyaatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa", hi: "Ae hamare Rab, hamein hamari biwiyon aur aulaad se aankhon ki thandak ata farma, aur humein parhezgaron ka imaam bana.", en: "Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous." },
      { tag: "SURAH AL-ISRA (MAA-BAAP KE LIYE)", ref: "17:24", person: "Nabi Muhammad", ar: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا", tr: "Rabbir-hamhumaa kamaa rabbayaanee sagheeraa", hi: "Ae mere Rab, unn dono (maa-baap) par reham kar jaise unhone bachpan mein meri parvarish ki.", en: "My Lord, have mercy upon them as they brought me up when I was small." },
    ],
  },
  {
    id: "shukr",
    icon: "🌾",
    title: "Shukr Ada Karna",
    desc: "Allah ki naimaton ka shukar ada karne ki duayein",
    duas: [
      { tag: "SURAH AL-AHQAF", ref: "46:15", ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ", tr: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya", hi: "Ae mere Rab, mujhe taufeeq de ki main teri us naimat ka shukar adaa karoon jo tune mujh par ki hai.", en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me." },
      { tag: "KHANA KHANE KE BAAD KI DUA", ref: "Sunan Abu Dawood", person: "Nabi Muhammad", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَٰذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", tr: "Alhamdu lillaahil-ladhee at'amanee haadhaa wa razaqaneehi min ghayri hawlin minnee wa laa quwwah", hi: "Sab tareef Allah ke liye jisne mujhe ye khana khilaaya, bina meri kisi taaqat ya koshish ke.", en: "Praise be to Allah who fed me this and provided it for me without any might or power on my part." },
      { tag: "NEEND SE UTHNE KI DUA", ref: "Sahih Bukhari", person: "Nabi Muhammad", ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", tr: "Alhamdu lillaahil-ladhee ahyaanaa ba'da maa amaatanaa wa ilayhin-nushoor", hi: "Sab tareef Allah ke liye jisne humein maut jaisi neend ke baad zinda kiya, aur usi ki taraf lautna hai.", en: "Praise be to Allah who gave us life after having caused us to die, and to Him is the return." },
    ],
  },
  {
    id: "naya-aaghaaz",
    icon: "🌱",
    title: "Naya Aaghaaz aur Bharosa",
    desc: "Nayi shuruaat, safar aur Allah par tawakkul ki duayein",
    duas: [
      { tag: "SURAH AL-BAQARAH (DUA-E-IBRAHIM)", ref: "2:126", person: "Ibrahim", ar: "رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ", tr: "Rabbij'al haadhaa baladan aaminan warzuq ahlahoo minath-thamaraat", hi: "Ae mere Rab, ise ek amn wala shehar bana, aur uske logon ko phalon se rizq de.", en: "My Lord, make this a secure city and provide its people with fruits." },
      { tag: "SURAH AL-MUMTAHINA", ref: "60:4", person: "Ibrahim", ar: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ", tr: "Rabbanaa 'alayka tawakkalnaa wa ilayka anabnaa wa ilaykal-maseer", hi: "Ae hamare Rab, humne tujh par bharosa kiya, aur tujhi ki taraf lautna hai, aur tujhi ki taraf hamein jaana hai.", en: "Our Lord, upon You we have relied, and to You we have returned, and to You is the final destination." },
      { tag: "MASJID MEIN DAAKHIL HONE KI DUA", ref: "Sahih Muslim", person: "Nabi Muhammad", ar: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", tr: "Allahummaf-tah lee abwaaba rahmatik", hi: "Ae Allah, mere liye apni rehmat ke darwaaze khol de.", en: "O Allah, open for me the doors of Your mercy." },
    ],
  },
];

// ---------- Tasbih (dhikr) list ----------
const TASBIH_LIST = [
  { id: "subhanallah", ar: "سُبْحَانَ اللّٰهِ", translit: "SubhanAllah", en: "Glory be to Allah", meaning: "Allah pak hai har aib se", target: 33 },
  { id: "alhamdulillah", ar: "الْحَمْدُ لِلّٰهِ", translit: "Alhamdulillah", en: "All praise is due to Allah", meaning: "Saari tareef Allah ke liye", target: 33 },
  { id: "allahuakbar", ar: "اللّٰهُ أَكْبَرُ", translit: "Allahu Akbar", en: "Allah is the Greatest", meaning: "Allah sabse bada hai", target: 34 },
  { id: "lailaha", ar: "لَا إِلٰهَ إِلَّا اللّٰهُ", translit: "Laa ilaaha illallah", en: "There is no god but Allah", meaning: "Allah ke siwa koi ibadat ke laayak nahi", target: 100 },
  { id: "astaghfirullah", ar: "أَسْتَغْفِرُ اللّٰهَ", translit: "Astaghfirullah", en: "I seek forgiveness from Allah", meaning: "Main Allah se maghfirat maangta/maangti hoon", target: 100 },
  { id: "subhanallahi-wa-bihamdihi", ar: "سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ", translit: "SubhanAllahi wa bihamdihi", en: "Glory be to Allah, and praise be to Him", meaning: "Allah pak hai, aur usi ki tareef ke saath", target: 100 },
  { id: "subhanallahil-azeem", ar: "سُبْحَانَ اللّٰهِ الْعَظِيمِ", translit: "SubhanAllahil Azeem", en: "Glory be to Allah, the Magnificent", meaning: "Allah pak hai jo azeem hai", target: 100 },
  { id: "la-hawla", ar: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ", translit: "Laa hawla wa laa quwwata illa billah", en: "There is no power nor strength except with Allah", meaning: "Koi taaqat nahi Allah ke siwa", target: 100 },
  { id: "hasbunallah", ar: "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ", translit: "Hasbunallahu wa ni'mal wakeel", en: "Allah is sufficient for us, and He is the best disposer of affairs", meaning: "Allah humare liye kaafi hai, wo behtareen kaarsaaz hai", target: 100 },
  { id: "rabbighfirli", ar: "رَبِّ اغْفِرْ لِي", translit: "Rabbighfir lee", en: "My Lord, forgive me", meaning: "Ae mere Rab, mujhe bakhsh de", target: 100 },
  { id: "durood", ar: "اللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ", translit: "Allahumma salli ala Muhammad", en: "O Allah, send blessings upon Muhammad", meaning: "Ae Allah, Muhammad (ﷺ) par rehmat nazil farma", target: 100 },
  { id: "la-ilaha-illa-anta", ar: "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", translit: "Laa ilaaha illa anta subhanaka innee kuntu minaz zaalimeen", en: "There is no god but You, glory be to You, I have indeed been of the wrongdoers", meaning: "Tere siwa koi ma'bood nahi, tu pak hai, main hi zaalim tha", target: 33 },
  { id: "rabbi-zidni-ilma", ar: "رَبِّ زِدْنِي عِلْمًا", translit: "Rabbi zidnee ilma", en: "My Lord, increase me in knowledge", meaning: "Ae mere Rab, mera ilm barha de", target: 33 },
  { id: "yaa-hayyu-yaa-qayyum", ar: "يَا حَيُّ يَا قَيُّومُ", translit: "Yaa Hayyu yaa Qayyum", en: "O Ever-Living, O Sustainer", meaning: "Ae Zinda, ae Qaayam rehne wale", target: 100 },
  { id: "subhana-rabbiyal-azeem", ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ", translit: "Subhana Rabbiyal Azeem", en: "Glory be to my Lord, the Magnificent (ruku)", meaning: "Mera Rab pak hai jo azeem hai (ruku ki tasbih)", target: 33 },
  { id: "subhana-rabbiyal-ala", ar: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ", translit: "Subhana Rabbiyal A'laa", en: "Glory be to my Lord, the Most High (sajdah)", meaning: "Mera Rab pak hai jo sabse buland hai (sajda ki tasbih)", target: 33 },
  { id: "rabbana-atina", ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً", translit: "Rabbana aatina fid-dunya hasanatan wa fil aakhirati hasanah", en: "Our Lord, give us good in this world and good in the Hereafter", meaning: "Ae Rab, humein duniya aur aakhirat me bhalaai de", target: 10 },
  { id: "la-ilaha-illallahu-wahdahu", ar: "لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ", translit: "Laa ilaaha illallahu wahdahu laa shareeka lah", en: "There is no god but Allah alone, with no partner", meaning: "Allah ke siwa koi ma'bood nahi, wo akela hai, uska koi shareek nahi", target: 100 },
  { id: "yaa-rahman-yaa-raheem", ar: "يَا رَحْمَٰنُ يَا رَحِيمُ", translit: "Yaa Rahmaanu yaa Raheem", en: "O Most Merciful, O Most Compassionate", meaning: "Ae Rahman, ae Raheem", target: 100 },
  { id: "innalillahi", ar: "إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", translit: "Inna lillahi wa inna ilayhi raji'oon", en: "Indeed we belong to Allah, and indeed to Him we will return", meaning: "Hum Allah ke hain aur usi ki taraf lautne wale hain", target: 10 },
];

// ---------- state ----------
function updateStreak() {
  const todayStr = new Date().toDateString();
  const lastVisit = localStorage.getItem("roz_last_visit");
  let streak = parseInt(localStorage.getItem("roz_streak") || "0", 10);

  if (lastVisit !== todayStr) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = lastVisit === yesterday ? streak + 1 : 1;
    localStorage.setItem("roz_last_visit", todayStr);
    localStorage.setItem("roz_streak", String(streak));
  }
  return streak;
}

let state = {
  dayOffset: 0,
  view: "home", // home | saved | search | about | surah | tasbih | ilaj
  searchQuery: "",
  selectedSurah: null,
  selectedIlaj: null,
  savedIds: JSON.parse(localStorage.getItem("roz_saved") || "{}"),
  likedIds: JSON.parse(localStorage.getItem("roz_liked") || "{}"),
  pinnedIds: JSON.parse(localStorage.getItem("roz_pinned") || "{}"),
  tasbihId: localStorage.getItem("roz_tasbih_current") || "subhanallah",
  tasbihCounts: JSON.parse(localStorage.getItem("roz_tasbih_counts") || "{}"),
  langPref: localStorage.getItem("roz_lang_pref") || "hi",
  reciter: localStorage.getItem("roz_reciter") || "ar.alafasy",
  namazTimings: null,
  namazLoading: false,
  namazError: null,
  streakCount: updateStreak(),
};

function shareApp() {
  const modal = document.getElementById("shareModal");
  if (modal) modal.classList.remove("hidden");
}

function closeShareModal() {
  const modal = document.getElementById("shareModal");
  if (modal) modal.classList.add("hidden");
}

function shareToWhatsapp() {
  const shareUrl = "https://shaheen-duas.github.io/Roz-ki-dua/";
  const shareText = "Roz ki Dua — har din Quran aur Hadith se nayi duayein, Arabic, English aur Hindi tarjuma ke saath. Ek baar zaroor try karein:";
  const waText = encodeURIComponent(`${shareText}\n${shareUrl}`);
  window.open(`https://wa.me/?text=${waText}`, "_blank");
  closeShareModal();
}

function shareToFacebook() {
  const shareUrl = "https://shaheen-duas.github.io/Roz-ki-dua/";
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  closeShareModal();
}

// ---------- Roz Reminder ----------
let reminderTimeoutId = null;

// ---------- Namaz waqt par notification ----------
let namazNotifTimeouts = [];

function getNamazNotifSettings() {
  return JSON.parse(localStorage.getItem("roz_namaz_notif") || '{"enabled":false}');
}

function toggleNamazNotif(enabled) {
  const settings = getNamazNotifSettings();
  if (enabled) {
    if (!("Notification" in window)) {
      alert("Aapka browser notifications support nahi karta.");
      return;
    }
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        settings.enabled = true;
        localStorage.setItem("roz_namaz_notif", JSON.stringify(settings));
        scheduleNamazNotifications();
      } else {
        settings.enabled = false;
        localStorage.setItem("roz_namaz_notif", JSON.stringify(settings));
      }
      render();
    });
  } else {
    settings.enabled = false;
    localStorage.setItem("roz_namaz_notif", JSON.stringify(settings));
    namazNotifTimeouts.forEach((id) => clearTimeout(id));
    namazNotifTimeouts = [];
    render();
  }
}

function scheduleNamazNotifications() {
  namazNotifTimeouts.forEach((id) => clearTimeout(id));
  namazNotifTimeouts = [];

  const settings = getNamazNotifSettings();
  if (!settings.enabled || Notification.permission !== "granted" || !state.namazTimings) return;

  const t = state.namazTimings;
  const prayers = [
    { name: "Fajr", time: t.Fajr },
    { name: "Zuhr", time: t.Dhuhr },
    { name: "Asr", time: t.Asr },
    { name: "Maghrib", time: t.Maghrib },
    { name: "Isha", time: t.Isha },
  ];

  const now = new Date();
  prayers.forEach((p) => {
    const clean = (p.time || "").split(" ")[0];
    const [h, m] = clean.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return;
    const fireAt = new Date();
    fireAt.setHours(h, m, 0, 0);
    if (fireAt <= now) return; // aaj ka waqt guzar chuka
    const msUntil = fireAt.getTime() - now.getTime();
    const id = setTimeout(() => {
      try {
        new Notification("🕌 Namaz Ka Waqt", {
          body: `${p.name} ka waqt ho gaya hai.`,
          icon: "icon-192.png",
        });
      } catch (e) {}
    }, msUntil);
    namazNotifTimeouts.push(id);
  });
}

function getReminderSettings() {
  return JSON.parse(localStorage.getItem("roz_reminder") || '{"enabled":false,"hour":20,"minute":0}');
}

function saveReminderSettings(settings) {
  localStorage.setItem("roz_reminder", JSON.stringify(settings));
}

function scheduleNextReminder() {
  if (reminderTimeoutId) {
    clearTimeout(reminderTimeoutId);
    reminderTimeoutId = null;
  }
  const settings = getReminderSettings();
  if (!settings.enabled || Notification.permission !== "granted") return;

  const now = new Date();
  const next = new Date();
  next.setHours(settings.hour, settings.minute, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);
  const msUntil = next.getTime() - now.getTime();

  reminderTimeoutId = setTimeout(() => {
    try {
      const pool = allDuasFlat();
      const pick = pool[Math.floor(Math.random() * pool.length)];
      const body = pick ? `"${pick.hi}"\n— aaj ki duayein bhi padh lein 🤲` : "Aaj ki duayein padhi? Ek minute nikaalein aur padh lein 🤲";
      new Notification("Roz ki Dua", {
        body,
        icon: "icon-192.png",
      });
    } catch (e) {}
    scheduleNextReminder();
  }, msUntil);
}

function toggleReminder(enabled) {
  const settings = getReminderSettings();
  if (enabled) {
    if (!("Notification" in window)) {
      alert("Aapka browser notifications support nahi karta.");
      return;
    }
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        settings.enabled = true;
        saveReminderSettings(settings);
        scheduleNextReminder();
      } else {
        settings.enabled = false;
        saveReminderSettings(settings);
      }
      render();
    });
  } else {
    settings.enabled = false;
    saveReminderSettings(settings);
    if (reminderTimeoutId) clearTimeout(reminderTimeoutId);
    render();
  }
}

function updateReminderTime(hour, minute) {
  const settings = getReminderSettings();
  settings.hour = parseInt(hour, 10);
  settings.minute = parseInt(minute, 10);
  saveReminderSettings(settings);
  if (settings.enabled) scheduleNextReminder();
}


function setReciter(edition) {
  state.reciter = edition;
  localStorage.setItem("roz_reciter", edition);
  render();
}

function setLangPref(lang) {
  state.langPref = lang;
  localStorage.setItem("roz_lang_pref", lang);
  const ob = document.getElementById("onboarding");
  if (ob) ob.classList.add("hidden");
  render();
}

function saveTasbihState() {
  localStorage.setItem("roz_tasbih_current", state.tasbihId);
  localStorage.setItem("roz_tasbih_counts", JSON.stringify(state.tasbihCounts));
}

function tasbihTap() {
  const cur = state.tasbihCounts[state.tasbihId] || 0;
  state.tasbihCounts[state.tasbihId] = cur + 1;
  saveTasbihState();
  render();
}

function tasbihReset() {
  state.tasbihCounts[state.tasbihId] = 0;
  saveTasbihState();
  render();
}

function tasbihChange(id) {
  state.tasbihId = id;
  saveTasbihState();
  render();
}

function renderTasbihView() {
  const options = TASBIH_LIST.map(
    (t) => `<option value="${t.id}" ${t.id === state.tasbihId ? "selected" : ""}>${t.translit}</option>`
  ).join("");
  const current = TASBIH_LIST.find((t) => t.id === state.tasbihId) || TASBIH_LIST[0];
  const count = state.tasbihCounts[current.id] || 0;
  const likeId = `tasbih-${current.id}`;
  const isLiked = !!state.likedIds[likeId];
  return `
    <select class="tasbih-select" onchange="tasbihChange(this.value)">${options}</select>
    <div style="display:flex; justify-content:center; margin-bottom:6px;">
      <button class="icon-btn" onclick="toggleLike('${likeId}')">${isLiked ? "❤️" : "🤍"}</button>
    </div>
    <div class="tasbih-arabic">${current.ar}</div>
    <div class="tasbih-translit">${current.translit}</div>
    <div class="tasbih-en">${current.en}</div>
    ${state.langPref === "hi" ? `<div class="tasbih-meaning">${current.meaning}</div>` : ""}
    <div class="tasbih-count-wrap">
      <div class="tasbih-count">${count}</div>
      <div class="tasbih-target">Target: ${current.target}</div>
    </div>
    <button class="tasbih-tap-btn" onclick="tasbihTap()">Tap karein</button>
    <div class="tasbih-actions">
      <button class="tasbih-reset-btn" onclick="tasbihReset()">↺ Reset</button>
    </div>
  `;
}

function saveState() {
  localStorage.setItem("roz_saved", JSON.stringify(state.savedIds));
  localStorage.setItem("roz_liked", JSON.stringify(state.likedIds));
}


// ---------- helpers ----------
function getDayOfYear(offset) {
  const now = new Date(Date.now() + offset * 86400000);
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / 86400000);
}

function getTodaysThree(pool, slotOffset, day) {
  const n = pool.length;
  const startIdx = (day + slotOffset) % n;
  const picks = [];
  for (let i = 0; i < 5; i++) {
    const idx = (startIdx + i * 3) % n;
    picks.push({ ...pool[idx], _originalIndex: idx });
  }
  return picks;
}

function allDuasFlat() {
  return ALL_DUAS.map((d, i) => ({ ...d, id: `dua-${d.tag}-${i}` }));
}

// ---------- rendering ----------
function duaCardHTML(dua) {
  const isSaved = !!state.savedIds[dua.id];
  const isLiked = !!state.likedIds[dua.id];
  const isPinned = !!state.pinnedIds[dua.id];
  return `
  <div class="dua-card" data-id="${dua.id}">
    <div class="dua-top">
      <div class="dua-tagwrap">
        <span class="dua-tag">${dua.tag}</span>
        ${dua.ref ? `<span class="dua-ref">${dua.ref.includes(":") ? "Quran " + dua.ref : dua.ref}</span>` : ""}
        ${dua.person ? `<span class="dua-person">👤 ${dua.person}</span>` : ""}
      </div>
      <div class="dua-actions">
        <button class="icon-btn" onclick="toggleLike('${dua.id}')">${isLiked ? "❤️" : "🤍"}</button>
        <button class="icon-btn ${isSaved ? "icon-btn-active" : ""}" onclick="toggleSave('${dua.id}')">📑</button>
        <button class="icon-btn ${isPinned ? "icon-btn-active" : ""}" onclick="togglePin('${dua.id}')" title="Kal bhi yaad dilao">📌</button>
        <button class="play-btn" onclick="togglePlay(this, '${dua.id}')">▶</button>
        <button class="icon-btn" style="color:#7C6A46" onclick="toggleShare(this)">↗️</button>
      </div>
    </div>
    <div class="progress-wrap" style="display:none;"><div class="progress-bar"></div></div>
    <div class="dua-ar">${dua.ar}</div>
    <div class="dua-tr">${dua.tr}</div>
    <div class="dua-en">${dua.en}</div>
    ${state.langPref === "hi" ? `<div class="dua-hi">${dua.hi}</div>` : ""}
    <div class="share-panel">
      <div class="share-ar">${dua.ar}</div>
      <div class="share-hi">${dua.hi.length > 70 ? dua.hi.slice(0, 70) + "…" : dua.hi}</div>
      <div class="share-brand">ROZ KI DUA</div>
      <div class="share-buttons">
        <button class="share-wa" onclick="shareWhatsApp('${dua.id}')">WhatsApp</button>
        <button class="share-img" onclick="shareDuaAsImage('${dua.id}', this)">Image save</button>
      </div>
    </div>
  </div>`;
}

// Surah:Ayat reference se asli recitation audio ka URL nikaalta hai
// (alquran.cloud API — Mishary Alafasy ki recitation, poora Quran cover karta hai)
async function getAudioUrl(ref) {
  if (!ref || ref === "hadees") return null;
  const match = ref.match(/^(\d+):(\d+)/); // pehli ayat leta hai agar range ho (jaise 14:40-41)
  if (!match) return null;
  const surah = match[1];
  const ayah = match[2];
  try {
    const res = await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/${state.reciter}`);
    const json = await res.json();
    return json && json.data && json.data.audio ? json.data.audio : null;
  } catch (e) {
    return null;
  }
}

let currentAudio = null;

async function togglePlay(btn, duaId) {
  const wrap = btn.closest(".dua-card").querySelector(".progress-wrap");
  const bar = wrap.querySelector(".progress-bar");

  // agar already chal raha hai, toh rok do
  if (btn.classList.contains("playing")) {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    btn.classList.remove("playing");
    btn.textContent = "▶";
    wrap.style.display = "none";
    return;
  }

  // koi aur dua chal rahi ho toh use pehle rok do
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  document.querySelectorAll(".play-btn.playing").forEach((b) => {
    b.classList.remove("playing");
    b.textContent = "▶";
    b.closest(".dua-card").querySelector(".progress-wrap").style.display = "none";
  });

  const dua = allDuasFlat().find((d) => d.id === duaId);
  if (!dua) return;

  // loading state dikhao jab tak audio link fetch ho raha hai
  btn.textContent = "…";
  const url = await getAudioUrl(dua.ref);
  if (!url) {
    btn.textContent = "▶";
    alert("Maaf kijiye, is dua ki audio abhi available nahi hai.");
    return;
  }

  btn.classList.add("playing");
  btn.textContent = "❚❚";
  wrap.style.display = "block";
  bar.style.width = "0%";

  const audio = new Audio(url);
  currentAudio = audio;

  audio.ontimeupdate = () => {
    if (audio.duration) {
      bar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    }
  };
  audio.onended = () => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
    wrap.style.display = "none";
    bar.style.width = "0%";
    currentAudio = null;
  };
  audio.onerror = () => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
    wrap.style.display = "none";
    currentAudio = null;
    alert("Audio load nahi ho payi.\nURL: " + url + "\nInternet connection check karein.");
  };

  audio.play().catch((err) => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
    wrap.style.display = "none";
    alert("Play nahi ho paya: " + err.message);
  });
}

function toggleShare(btn) {
  const panel = btn.closest(".dua-card").querySelector(".share-panel");
  panel.classList.toggle("open");
}

function shareWhatsApp(duaId) {
  const dua = allDuasFlat().find((d) => d.id === duaId);
  if (!dua) return;
  const text = encodeURIComponent(`${dua.ar}\n\n${dua.hi}\n\n— Roz ki Dua app`);
  window.open(`https://wa.me/?text=${text}`, "_blank");
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function shareDuaAsImage(duaId, btn) {
  const dua = allDuasFlat().find((d) => d.id === duaId);
  if (!dua) return;

  const origLabel = btn ? btn.textContent : null;
  if (btn) btn.textContent = "Taiyaar ho raha hai…";

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.load('700 34px Amiri');
      await document.fonts.load('600 15px Inter');
      await document.fonts.load('600 13px Fraunces');
      await document.fonts.ready;
    }

    const W = 900, PAD = 70;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    const ctx = canvas.getContext("2d");

    // pehle text wrap kar ke total height nikaalte hain
    ctx.font = "34px Amiri";
    ctx.direction = "rtl";
    const arLines = wrapCanvasText(ctx, dua.ar, W - PAD * 2);

    ctx.font = "600 22px Inter";
    ctx.direction = "ltr";
    const hiLines = wrapCanvasText(ctx, dua.hi, W - PAD * 2);

    const topPad = 110, arLineH = 58, gapMid = 46, hiLineH = 34, bottomPad = 140;
    const H = topPad + arLines.length * arLineH + gapMid + hiLines.length * hiLineH + bottomPad;
    canvas.height = H;

    // background gradient — app ke theme jaisa
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#1B2A3A");
    bg.addColorStop(1, "#24384a");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // border
    ctx.strokeStyle = "rgba(201,161,90,0.35)";
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 24, W - 48, H - 48);

    // top eyebrow
    ctx.fillStyle = "#C9A15A";
    ctx.font = "600 15px Inter";
    ctx.textAlign = "center";
    ctx.direction = "ltr";
    const eyebrow = dua.ref ? `${dua.tag || ""}  •  ${dua.ref}` : (dua.tag || "");
    ctx.fillText(eyebrow.toUpperCase(), W / 2, 68);

    // Arabic text
    ctx.fillStyle = "#FDFBF6";
    ctx.font = "34px Amiri";
    ctx.direction = "rtl";
    let y = topPad + 20;
    for (const line of arLines) {
      ctx.fillText(line, W / 2, y);
      y += arLineH;
    }

    y += gapMid - arLineH + 10;

    // Hindi tarjuma
    ctx.fillStyle = "#C9A15A";
    ctx.font = "600 22px Inter";
    ctx.direction = "ltr";
    for (const line of hiLines) {
      ctx.fillText(line, W / 2, y);
      y += hiLineH;
    }

    // brand footer
    ctx.fillStyle = "#7B8C99";
    ctx.font = "600 16px Inter";
    ctx.fillText("📿  ROZ KI DUA", W / 2, H - 60);

    canvas.toBlob(async (blob) => {
      if (!blob) {
        if (btn) btn.textContent = origLabel;
        return;
      }
      const file = new File([blob], "roz-ki-dua.png", { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Roz ki Dua",
            text: "Roz ki Dua app se ek dua",
          });
        } catch (e) {
          // user ne cancel kiya ho sakta hai — kuch na karein
        }
      } else {
        // fallback: image download karwa dein
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "roz-ki-dua.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      if (btn) btn.textContent = origLabel;
    }, "image/png");
  } catch (err) {
    if (btn) btn.textContent = origLabel;
    alert("Image banane mein dikkat aayi. Dobara koshish karein.");
  }
}

function toggleLike(id) {
  state.likedIds[id] = !state.likedIds[id];
  saveState();
  render();
}
function toggleSave(id) {
  state.savedIds[id] = !state.savedIds[id];
  saveState();
  render();
}

function togglePin(id) {
  state.pinnedIds[id] = !state.pinnedIds[id];
  if (!state.pinnedIds[id]) delete state.pinnedIds[id];
  localStorage.setItem("roz_pinned", JSON.stringify(state.pinnedIds));
  render();
}

function nextDay() {
  state.dayOffset += 1;
  render();
}

function setView(view) {
  if (view !== "surah" && surahScrollHandler) {
    window.removeEventListener("scroll", surahScrollHandler);
    surahScrollHandler = null;
  }
  state.view = view;
  render();
}

function getRecentSearches() {
  return JSON.parse(localStorage.getItem("roz_recent_searches") || "[]");
}

function saveRecentSearch(q) {
  if (!q || q.trim().length < 2) return;
  let recent = getRecentSearches().filter((s) => s.toLowerCase() !== q.toLowerCase());
  recent.unshift(q.trim());
  recent = recent.slice(0, 6);
  localStorage.setItem("roz_recent_searches", JSON.stringify(recent));
}

function clearRecentSearches() {
  localStorage.removeItem("roz_recent_searches");
  renderMainContent();
}

function runRecentSearch(q) {
  document.getElementById("searchInput").value = q;
  state.searchQuery = q;
  renderMainContent();
}

let searchSaveTimer = null;
function onSearch(val) {
  state.searchQuery = val;
  renderMainContent();
  if (searchSaveTimer) clearTimeout(searchSaveTimer);
  searchSaveTimer = setTimeout(() => saveRecentSearch(val), 1200);
}

// ---------- Surahein ----------
// Mashhoor Surahein — poora text live fetch hota hai (trusted Quran database se)
const ASMA_UL_HUSNA = [
  { n: "Ar-Rahman", ar: "الرَّحْمَٰن", hi: "Bahut meharbaan, sabko rizq dene wala" },
  { n: "Ar-Raheem", ar: "الرَّحِيم", hi: "Nihayat reham karne wala (imaan walon par khaas)" },
  { n: "Al-Malik", ar: "الْمَلِك", hi: "Haqeeqi Baadshah, sab kuch uski milkiyat hai" },
  { n: "Al-Quddus", ar: "الْقُدُّوس", hi: "Har aib aur kami se pak zaat" },
  { n: "As-Salam", ar: "السَّلَام", hi: "Salamati dene wala, har khaami se paak" },
  { n: "Al-Mu'min", ar: "الْمُؤْمِن", hi: "Aman aur bharosa dene wala" },
  { n: "Al-Muhaymin", ar: "الْمُهَيْمِن", hi: "Har cheez ka nigehbaan aur muhafiz" },
  { n: "Al-Aziz", ar: "الْعَزِيز", hi: "Sab par ghaalib, bemisaal izzat wala" },
  { n: "Al-Jabbar", ar: "الْجَبَّار", hi: "Zor-aazma, tooti hui cheezon ko theek karne wala" },
  { n: "Al-Mutakabbir", ar: "الْمُتَكَبِّر", hi: "Buzurgi aur azmat wala, sabse bada" },
  { n: "Al-Khaliq", ar: "الْخَالِق", hi: "Har cheez ko paida karne wala" },
  { n: "Al-Bari'", ar: "الْبَارِئ", hi: "Bina kisi namune ke cheezein banane wala" },
  { n: "Al-Musawwir", ar: "الْمُصَوِّر", hi: "Har cheez ki shakal-surat banane wala" },
  { n: "Al-Ghaffar", ar: "الْغَفَّار", hi: "Baar baar gunah maaf karne wala" },
  { n: "Al-Qahhar", ar: "الْقَهَّار", hi: "Sab par ghaalib, dabane wala" },
  { n: "Al-Wahhab", ar: "الْوَهَّاب", hi: "Bina maange bhi khoob dene wala" },
  { n: "Ar-Razzaq", ar: "الرَّزَّاق", hi: "Sabko rizq pahunchane wala" },
  { n: "Al-Fattah", ar: "الْفَتَّاح", hi: "Faisle aur kaamyabi ke darwaaze kholne wala" },
  { n: "Al-'Alim", ar: "الْعَلِيم", hi: "Har cheez ka poora ilm rakhne wala" },
  { n: "Al-Qabid", ar: "الْقَابِض", hi: "Rizq ko tang karne wala (hikmat se)" },
  { n: "Al-Basit", ar: "الْبَاسِط", hi: "Rizq ko farakh (wasee) karne wala" },
  { n: "Al-Khafid", ar: "الْخَافِض", hi: "Zaalimon ko past karne wala" },
  { n: "Ar-Rafi'", ar: "الرَّافِع", hi: "Nek logon ka darja buland karne wala" },
  { n: "Al-Mu'izz", ar: "الْمُعِزّ", hi: "Jise chahe izzat dene wala" },
  { n: "Al-Muzill", ar: "الْمُذِلّ", hi: "Jise chahe zillat dene wala" },
  { n: "As-Sami'", ar: "السَّمِيع", hi: "Sab kuch sunne wala" },
  { n: "Al-Basir", ar: "الْبَصِير", hi: "Sab kuch dekhne wala" },
  { n: "Al-Hakam", ar: "الْحَكَم", hi: "Aakhri aur haqq faisla karne wala" },
  { n: "Al-'Adl", ar: "الْعَدْل", hi: "Poora poora insaaf karne wala" },
  { n: "Al-Latif", ar: "اللَّطِيف", hi: "Bareek-been aur meharbaan, chhoti chhoti baat samajhne wala" },
  { n: "Al-Khabir", ar: "الْخَبِير", hi: "Har poshida baat se poori tarah waaqif" },
  { n: "Al-Halim", ar: "الْحَلِيم", hi: "Burdbaar, gunahon ke bawajood jaldi azaab na karne wala" },
  { n: "Al-'Azim", ar: "الْعَظِيم", hi: "Sabse azeem, jiski shaan sabse buland hai" },
  { n: "Al-Ghafur", ar: "الْغَفُور", hi: "Baar baar bakshne wala" },
  { n: "Ash-Shakur", ar: "الشَّكُور", hi: "Thodi neki ka bhi bada badla dene wala" },
  { n: "Al-'Ali", ar: "الْعَلِيّ", hi: "Sab se buland zaat" },
  { n: "Al-Kabir", ar: "الْكَبِير", hi: "Sab se bada, azmat wala" },
  { n: "Al-Hafiz", ar: "الْحَفِيظ", hi: "Har cheez ki hifazat karne wala" },
  { n: "Al-Muqit", ar: "الْمُقِيت", hi: "Sabko khuraak/rizq pahunchane wala" },
  { n: "Al-Hasib", ar: "الْحَسِيب", hi: "Sab ka hisaab lene wala, kaafi ho jaane wala" },
  { n: "Al-Jalil", ar: "الْجَلِيل", hi: "Buzurgi aur shaan wala" },
  { n: "Al-Karim", ar: "الْكَرِيم", hi: "Bahut karam karne wala, be-hisaab dene wala" },
  { n: "Ar-Raqib", ar: "الرَّقِيب", hi: "Har cheez par nigraani rakhne wala" },
  { n: "Al-Mujib", ar: "الْمُجِيب", hi: "Duaayein qubool karne wala" },
  { n: "Al-Wasi'", ar: "الْوَاسِع", hi: "Jiski rehmat aur ilm har cheez ko ghere hue hai" },
  { n: "Al-Hakim", ar: "الْحَكِيم", hi: "Poori hikmat wala, har kaam maqsad ke saath" },
  { n: "Al-Wadud", ar: "الْوَدُود", hi: "Apne bandon se mohabbat karne wala" },
  { n: "Al-Majid", ar: "الْمَجِيد", hi: "Buzurgi aur karam mein sab se bada" },
  { n: "Al-Ba'ith", ar: "الْبَاعِث", hi: "Qayamat ke din sabko dobara zinda karne wala" },
  { n: "Ash-Shahid", ar: "الشَّهِيد", hi: "Har cheez ka gawah, kabhi ghaib na hone wala" },
  { n: "Al-Haqq", ar: "الْحَقّ", hi: "Haqeeqi zaat, jiska wajood aur baat sach hai" },
  { n: "Al-Wakil", ar: "الْوَكِيل", hi: "Bharosa karne walon ka kaam banane wala" },
  { n: "Al-Qawiyy", ar: "الْقَوِيّ", hi: "Sab se zyada taaqatwar" },
  { n: "Al-Matin", ar: "الْمَتِين", hi: "Bahut mazboot, jiski taaqat kabhi kam nahi hoti" },
  { n: "Al-Waliyy", ar: "الْوَلِيّ", hi: "Momino ka dost aur madadgar" },
  { n: "Al-Hamid", ar: "الْحَمِيد", hi: "Har haal mein tareef ke laayak" },
  { n: "Al-Muhsi", ar: "الْمُحْصِي", hi: "Har cheez ko ginne wala, kuch bhi uski nazar se chhupa nahi" },
  { n: "Al-Mubdi'", ar: "الْمُبْدِئ", hi: "Sab se pehle paida karne wala" },
  { n: "Al-Mu'id", ar: "الْمُعِيد", hi: "Dobara paida karne wala (Qayamat ke din)" },
  { n: "Al-Muhyi", ar: "الْمُحْيِي", hi: "Zindagi ata karne wala" },
  { n: "Al-Mumit", ar: "الْمُمِيت", hi: "Maut dene wala" },
  { n: "Al-Hayy", ar: "الْحَيّ", hi: "Hamesha se zinda, kabhi na marne wala" },
  { n: "Al-Qayyum", ar: "الْقَيُّوم", hi: "Khud se qaayam, sab kuch usi ke sahaare qaayam hai" },
  { n: "Al-Wajid", ar: "الْوَاجِد", hi: "Jo kisi ka mohtaaj nahi, sab kuch pane wala" },
  { n: "Al-Majid (Maajid)", ar: "الْمَاجِد", hi: "Buzurgi aur shaan wala" },
  { n: "Al-Wahid", ar: "الْوَاحِد", hi: "Akela, koi shareek nahi" },
  { n: "Al-Ahad", ar: "الْأَحَد", hi: "Ek hi, bilkul yakta zaat" },
  { n: "As-Samad", ar: "الصَّمَد", hi: "Bereniyaz, jiski sabko zaroorat hai" },
  { n: "Al-Qadir", ar: "الْقَادِر", hi: "Har cheez par qudrat rakhne wala" },
  { n: "Al-Muqtadir", ar: "الْمُقْتَدِر", hi: "Poori taaqat ka maalik, har cheez par ghaalib" },
  { n: "Al-Muqaddim", ar: "الْمُقَدِّم", hi: "Jise chahe aage badhane wala" },
  { n: "Al-Mu'akhkhir", ar: "الْمُؤَخِّر", hi: "Jise chahe peeche karne wala" },
  { n: "Al-Awwal", ar: "الْأَوَّل", hi: "Sab se pehle, jiska koi shuru nahi" },
  { n: "Al-Akhir", ar: "الْآخِر", hi: "Sab ke baad, jiska koi ant nahi" },
  { n: "Az-Zahir", ar: "الظَّاهِر", hi: "Har cheez mein zaahir, uski nishaaniyaan har taraf hain" },
  { n: "Al-Batin", ar: "الْبَاطِن", hi: "Poshida, jiski zaat aankhon se nazar nahi aati" },
  { n: "Al-Wali", ar: "الْوَالِي", hi: "Kaayanaat ka intezaam karne wala" },
  { n: "Al-Muta'ali", ar: "الْمُتَعَالِي", hi: "Har cheez se buland aur pak" },
  { n: "Al-Barr", ar: "الْبَرّ", hi: "Bahut neki aur ehsaan karne wala" },
  { n: "At-Tawwab", ar: "التَّوَّاب", hi: "Tauba qubool karne wala" },
  { n: "Al-Muntaqim", ar: "الْمُنْتَقِم", hi: "Zaalimon se badla lene wala" },
  { n: "Al-'Afuww", ar: "الْعَفُوّ", hi: "Gunahon ko mitane wala, khoob maaf karne wala" },
  { n: "Ar-Ra'uf", ar: "الرَّؤُوف", hi: "Nihayat naram-dil aur shafqat karne wala" },
  { n: "Malik-ul-Mulk", ar: "مَالِكُ الْمُلْك", hi: "Saari kaaynaat ka asli Maalik" },
  { n: "Dhul-Jalali-wal-Ikram", ar: "ذُو الْجَلَالِ وَالْإِكْرَام", hi: "Buzurgi aur karam dono ka maalik" },
  { n: "Al-Muqsit", ar: "الْمُقْسِط", hi: "Poora insaaf karne wala" },
  { n: "Al-Jami'", ar: "الْجَامِع", hi: "Qayamat ke din sabko ikattha karne wala" },
  { n: "Al-Ghani", ar: "الْغَنِيّ", hi: "Bilkul be-niyaaz, kisi ka mohtaaj nahi" },
  { n: "Al-Mughni", ar: "الْمُغْنِي", hi: "Jise chahe maaldaar bana dene wala" },
  { n: "Al-Mani'", ar: "الْمَانِع", hi: "Jise chahe kisi cheez se roke rakhne wala" },
  { n: "Ad-Darr", ar: "الضَّار", hi: "Hikmat se nuqsaan pahunchane wala" },
  { n: "An-Nafi'", ar: "النَّافِع", hi: "Faayda pahunchane wala" },
  { n: "An-Nur", ar: "النُّور", hi: "Noor, jiski roshni se kaayanaat munawwar hai" },
  { n: "Al-Hadi", ar: "الْهَادِي", hi: "Seedhi raah dikhane wala" },
  { n: "Al-Badi'", ar: "الْبَدِيع", hi: "Bina kisi namune ke ajeeb-o-ghareeb cheezein banane wala" },
  { n: "Al-Baqi", ar: "الْبَاقِي", hi: "Hamesha baaqi rehne wala, kabhi fana na hone wala" },
  { n: "Al-Warith", ar: "الْوَارِث", hi: "Sab kuch fana hone ke baad baaqi rehne wala, asli waaris" },
  { n: "Ar-Rashid", ar: "الرَّشِيد", hi: "Sahi raasta dikhane wala rahnuma" },
  { n: "As-Sabur", ar: "الصَّبُور", hi: "Nihayat sabr karne wala" },
];

const SURAH_LIST = [
  { number: 1, name: "Al-Fatiha", nameAr: "الفاتحة", ayahs: 7 },
  { number: 18, name: "Al-Kahf", nameAr: "الكهف", ayahs: 110 },
  { number: 32, name: "As-Sajdah", nameAr: "السجدة", ayahs: 30 },
  { number: 36, name: "Yaseen", nameAr: "يس", ayahs: 83 },
  { number: 56, name: "Al-Waqiah", nameAr: "الواقعة", ayahs: 96 },
  { number: 67, name: "Al-Mulk", nameAr: "الملك", ayahs: 30 },
  { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", ayahs: 4 },
  { number: 113, name: "Al-Falaq", nameAr: "الفلق", ayahs: 5 },
  { number: 114, name: "An-Nas", nameAr: "الناس", ayahs: 6 },
];

// ---------- Hifz Tracker ----------
function getHifzList() {
  return JSON.parse(localStorage.getItem("roz_hifz") || "{}");
}

function toggleHifz(surahNumber, event) {
  event.stopPropagation();
  const hifz = getHifzList();
  hifz[surahNumber] = !hifz[surahNumber];
  if (!hifz[surahNumber]) delete hifz[surahNumber];
  localStorage.setItem("roz_hifz", JSON.stringify(hifz));
  renderMainContent();
}

let surahCache = {}; // number -> ayahs array, taaki dobara fetch na karna pade

async function openSurah(number) {
  state.selectedSurah = number;
  state.view = "surah";
  render();

  if (surahCache[number]) return; // already loaded hai

  const container = document.getElementById("mainContent");
  container.innerHTML = `<div class="loading-text">Surah load ho rahi hai…</div>`;

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/editions/quran-simple,en.sahih,en.transliteration`);
    const json = await res.json();
    const arabicAyahs = json.data[0].ayahs;
    const enAyahs = json.data[1].ayahs;
    const trAyahs = json.data[2] ? json.data[2].ayahs : [];
    surahCache[number] = arabicAyahs.map((a, i) => ({
      numberInSurah: a.numberInSurah,
      ar: a.text,
      en: enAyahs[i] ? enAyahs[i].text : "",
      tr: trAyahs[i] ? trAyahs[i].text : "",
      globalNumber: a.number,
    }));
  } catch (e) {
    surahCache[number] = null; // error hone par null rakho
  }
  renderMainContent();
}

function backToSurahList() {
  state.selectedSurah = null;
  if (surahScrollHandler) {
    window.removeEventListener("scroll", surahScrollHandler);
    surahScrollHandler = null;
  }
  renderMainContent();
}

function getMoodPickerHTML() {
  const moods = [
    { emoji: "😔", label: "Pareshaan", ilajId: "pareshani" },
    { emoji: "😢", label: "Dukhi", ilajId: "sabr" },
    { emoji: "🙏", label: "Shukrguzaar", ilajId: "shukr" },
    { emoji: "😠", label: "Gussa", ilajId: "gussa" },
    { emoji: "🤒", label: "Bimaar", ilajId: "shifa" },
    { emoji: "🌱", label: "Naya Aaghaaz", ilajId: "naya-aaghaaz" },
  ];
  return `
    <div class="mood-section">
      <div class="mood-label">Aaj Kaisa Mehsoos Ho Raha Hai?</div>
      <div class="mood-row">
        ${moods
          .map(
            (m) => `
          <button class="mood-btn" onclick="setView('ilaj'); openIlajCategory('${m.ilajId}');">
            <div class="mood-icon">${m.emoji}</div>
            <div class="mood-text">${m.label}</div>
          </button>`
          )
          .join("")}
      </div>
    </div>`;
}

function openIlajCategory(id) {
  state.selectedIlaj = id;
  renderMainContent();
}

function backToIlajList() {
  state.selectedIlaj = null;
  renderMainContent();
}

// ---------- Namaz ke Waqt ----------
function requestNamazTimes() {
  state.namazError = null;
  state.namazLoading = true;
  render();

  if (!navigator.geolocation) {
    state.namazLoading = false;
    state.namazError = "Is browser mein location support nahi hai.";
    render();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      localStorage.setItem("roz_namaz_lat", lat);
      localStorage.setItem("roz_namaz_lon", lon);
      fetchNamazTimes(lat, lon);
    },
    () => {
      state.namazLoading = false;
      state.namazError = "Location access nahi mil paayi. Settings mein jaakar location permission on karein.";
      render();
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function fetchNamazTimes(lat, lon) {
  const todayKey = new Date().toISOString().slice(0, 10);
  const cacheKey = "roz_namaz_cache";
  const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
  if (cached && cached.date === todayKey && cached.lat === lat && cached.lon === lon) {
    state.namazLoading = false;
    state.namazTimings = cached.timings;
    render();
    scheduleNamazNotifications();
    return;
  }

  fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
    .then((res) => res.json())
    .then((data) => {
      state.namazLoading = false;
      if (data && data.data && data.data.timings) {
        state.namazTimings = data.data.timings;
        localStorage.setItem(cacheKey, JSON.stringify({ date: todayKey, lat, lon, timings: data.data.timings }));
      } else {
        state.namazError = "Namaz ke waqt nahi mil paaye, dobara koshish karein.";
      }
      render();
      scheduleNamazNotifications();
    })
    .catch(() => {
      state.namazLoading = false;
      state.namazError = "Internet connection check karein aur dobara koshish karein.";
      render();
    });
}

function to12Hour(timeStr) {
  if (!timeStr) return "";
  const clean = timeStr.split(" ")[0]; // strip timezone suffix if present
  const [hStr, mStr] = clean.split(":");
  let h = parseInt(hStr, 10);
  const m = mStr;
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m} ${ampm}`;
}

// Tahajjud ka koi fixed waqt nahi hota — raat ka aakhri tihai hissa hota hai.
// Andaaza: Maghrib (aaj) se agle din ke Fajr tak ki raat ko 3 hisson mein baant kar aakhri hissa.
function calcTahajjudWindow(maghribStr, fajrStr) {
  if (!maghribStr || !fajrStr) return null;
  const cleanM = maghribStr.split(" ")[0];
  const cleanF = fajrStr.split(" ")[0];
  const [mh, mm] = cleanM.split(":").map(Number);
  const [fh, fm] = cleanF.split(":").map(Number);

  const nightStart = new Date();
  nightStart.setHours(mh, mm, 0, 0);

  const nightEnd = new Date();
  nightEnd.setDate(nightEnd.getDate() + 1);
  nightEnd.setHours(fh, fm, 0, 0);

  const durationMs = nightEnd - nightStart;
  if (durationMs <= 0) return null;

  const lastThirdStart = new Date(nightStart.getTime() + durationMs * (2 / 3));

  const fmt = (d) => {
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${ampm}`;
  };

  return `${fmt(lastThirdStart)} – ${fmt(nightEnd)}`;
}

// ---------- Theme (dark/light) ----------
function applyTheme(theme) {
  const app = document.getElementById("app");
  const btn = document.getElementById("themeToggleBtn");
  if (!app) return;
  if (theme === "light") {
    app.classList.add("light-theme");
    if (btn) btn.textContent = "☀️";
  } else {
    app.classList.remove("light-theme");
    if (btn) btn.textContent = "🌙";
  }
}

function toggleTheme() {
  const current = localStorage.getItem("roz_theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("roz_theme", next);
  applyTheme(next);
}

// ---------- Streak milestone celebration ----------
const STREAK_MILESTONES = [3, 7, 21, 30, 50, 100, 200, 365];

function checkStreakMilestone() {
  const celebrated = JSON.parse(localStorage.getItem("roz_celebrated_milestones") || "[]");
  if (STREAK_MILESTONES.includes(state.streakCount) && !celebrated.includes(state.streakCount)) {
    celebrated.push(state.streakCount);
    localStorage.setItem("roz_celebrated_milestones", JSON.stringify(celebrated));
    openStreakModal(state.streakCount);
  }
}

function openStreakModal(days) {
  const modal = document.getElementById("streakModal");
  const textEl = document.getElementById("streakModalText");
  if (!modal) return;
  textEl.textContent = `🔥 ${days} din ka silsila! MashaAllah, aise hi jaari rakhein.`;
  modal.classList.remove("hidden");
}

function closeStreakModal() {
  const modal = document.getElementById("streakModal");
  if (modal) modal.classList.add("hidden");
}

async function shareStreakImage() {
  const days = state.streakCount;
  const W = 900, H = 700;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#1B2A3A");
  bg.addColorStop(1, "#24384a");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(201,161,90,0.35)";
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  ctx.textAlign = "center";
  ctx.fillStyle = "#C9A15A";
  ctx.font = "600 20px Inter, sans-serif";
  ctx.fillText("ROZ KI DUA", W / 2, 100);

  ctx.font = "140px Inter, sans-serif";
  ctx.fillText("🔥", W / 2, 320);

  ctx.fillStyle = "#FDFBF6";
  ctx.font = "700 60px Inter, sans-serif";
  ctx.fillText(`${days} Din Ka Silsila`, W / 2, 420);

  ctx.fillStyle = "#C9A15A";
  ctx.font = "600 24px Inter, sans-serif";
  ctx.fillText("MashaAllah! Roz duayein padhi ja rahi hain", W / 2, 480);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], "roz-ki-dua-streak.png", { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "Roz ki Dua", text: `${days} din ka silsila!` });
      } catch (e) {}
    } else {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "roz-ki-dua-streak.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, "image/png");
}

// ---------- Voice Search ----------
function startVoiceSearch() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  const btn = document.getElementById("voiceSearchBtn");
  if (!SpeechRec) {
    alert("Is browser mein voice search available nahi hai.");
    return;
  }
  const recognition = new SpeechRec();
  recognition.lang = "hi-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  if (btn) btn.classList.add("listening");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = transcript;
      onSearch(transcript);
    }
  };
  recognition.onerror = () => {
    if (btn) btn.classList.remove("listening");
  };
  recognition.onend = () => {
    if (btn) btn.classList.remove("listening");
  };
  recognition.start();
}


// ---------- Roza (fasting) tracker ----------
function getRozaDays() {
  return JSON.parse(localStorage.getItem("roz_roza_days") || "{}");
}

function toggleRozaToday() {
  const days = getRozaDays();
  const todayKey = new Date().toDateString();
  if (days[todayKey]) {
    delete days[todayKey];
  } else {
    days[todayKey] = true;
  }
  localStorage.setItem("roz_roza_days", JSON.stringify(days));
  render();
}

function getRozaTotalDays() {
  return Object.keys(getRozaDays()).length;
}

function getRozaTrackerHTML() {
  const ramadanDay = getRamadanDay();
  if (ramadanDay === null) return "";
  const todayDone = !!getRozaDays()[new Date().toDateString()];
  const totalRoze = getRozaTotalDays();
  return `
    <div class="sadaqah-row" onclick="toggleRozaToday()" style="border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; margin-top:4px;">
      <span>${todayDone ? "✅" : "⬜"} Aaj roza rakha?</span>
      <span class="sadaqah-days">${totalRoze} roze</span>
    </div>`;
}


// ---------- Isaal-e-Sawab Reminder ----------
function getIsaalSawabList() {
  return JSON.parse(localStorage.getItem("roz_isaal_sawab") || "[]");
}

function addIsaalSawab() {
  const nameInput = document.getElementById("isaalName");
  const dateInput = document.getElementById("isaalDate");
  const name = nameInput.value.trim();
  const dateVal = dateInput.value;
  if (!name || !dateVal) {
    alert("Naam aur tareekh dono bharein.");
    return;
  }
  const [, month, day] = dateVal.split("-");
  const list = getIsaalSawabList();
  list.push({ id: Date.now().toString(), name, day: parseInt(day, 10), month: parseInt(month, 10) });
  localStorage.setItem("roz_isaal_sawab", JSON.stringify(list));
  nameInput.value = "";
  dateInput.value = "";
  render();
}

function removeIsaalSawab(id) {
  const list = getIsaalSawabList().filter((p) => p.id !== id);
  localStorage.setItem("roz_isaal_sawab", JSON.stringify(list));
  render();
}

function getIsaalSawabManageHTML() {
  const list = getIsaalSawabList();
  return `
    <div class="about-label" style="margin-top:16px;">Isaal-e-Sawab Reminder</div>
    <div class="about-sub" style="margin-bottom:10px;">Guzre huye apno ka naam aur tareekh save karein — unki barsi par aapko Surah Yaseen padhne ka reminder aayega.</div>
    ${list
      .map(
        (p) => `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.05); border-radius:10px; padding:10px 12px; margin-bottom:6px;">
        <span style="font-size:13px; color:#1B2A3A; font-weight:600;">${p.name} — ${String(p.day).padStart(2, "0")}/${String(p.month).padStart(2, "0")}</span>
        <button class="icon-btn" onclick="removeIsaalSawab('${p.id}')">🗑️</button>
      </div>`
      )
      .join("")}
    <input type="text" id="isaalName" class="zakat-input" placeholder="Naam (jaise: Ammi, Dada)" style="margin-bottom:8px;">
    <input type="date" id="isaalDate" class="zakat-input" style="margin-bottom:8px;">
    <button class="lang-toggle-btn" onclick="addIsaalSawab()">➕ Add Karein</button>`;
}

function getIsaalSawabBannerHTML() {
  const now = new Date();
  const todayDay = now.getDate();
  const todayMonth = now.getMonth() + 1;
  const matches = getIsaalSawabList().filter((p) => p.day === todayDay && p.month === todayMonth);
  if (matches.length === 0) return "";
  return `
    <div class="jumma-banner">
      <div class="jumma-title">🤲 Isaal-e-Sawab</div>
      <div class="jumma-text">Aaj ${matches.map((m) => m.name).join(", ")} ke liye Surah Yaseen padhein — sawab unki rooh tak pahunchega.</div>
      <button class="jumma-btn" onclick="openSurah(36)">Surah Yaseen Padhein</button>
    </div>`;
}


const NAMAZ_LOG_PRAYERS = ["Fajr", "Zuhr", "Asr", "Maghrib", "Isha"];

function getNamazLog() {
  return JSON.parse(localStorage.getItem("roz_namaz_log") || "{}");
}

function toggleNamazDone(prayerKey) {
  const log = getNamazLog();
  const todayKey = new Date().toISOString().slice(0, 10);
  if (!log[todayKey]) log[todayKey] = {};
  log[todayKey][prayerKey] = !log[todayKey][prayerKey];
  localStorage.setItem("roz_namaz_log", JSON.stringify(log));
  render();
}

function getNamazCalendarHTML() {
  const log = getNamazLog();
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const monthName = now.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  const todayDate = now.getDate();

  let cells = "";
  for (let i = 0; i < firstDayOfWeek; i++) cells += `<div class="namaz-cal-cell empty"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayLog = log[dateKey] || {};
    const doneCount = NAMAZ_LOG_PRAYERS.filter((p) => dayLog[p]).length;
    let fillClass = "";
    if (doneCount === 5) fillClass = "full";
    else if (doneCount > 0) fillClass = "partial";
    const isToday = d === todayDate ? "today" : "";
    cells += `<div class="namaz-cal-cell ${fillClass} ${isToday}"><span>${d}</span></div>`;
  }

  return `
    <div class="namaz-cal-wrap">
      <div class="namaz-cal-title">${monthName}</div>
      <div class="namaz-cal-grid namaz-cal-labels">
        <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
      </div>
      <div class="namaz-cal-grid">${cells}</div>
      <div class="namaz-cal-legend">
        <span><i class="namaz-cal-dot full"></i> Sab 5 namaz</span>
        <span><i class="namaz-cal-dot partial"></i> Kuch namaz</span>
      </div>
    </div>`;
}


const NIYYAT_DATA = {
  Fajr: { rakat: 2, ar: "فجر", hi: "Fajr" },
  Zuhr: { rakat: 4, ar: "ظهر", hi: "Zuhr" },
  Asr: { rakat: 4, ar: "عصر", hi: "Asr" },
  Maghrib: { rakat: 3, ar: "مغرب", hi: "Maghrib" },
  Isha: { rakat: 4, ar: "عشاء", hi: "Isha" },
};

function openNiyyatModal(prayerKey) {
  const d = NIYYAT_DATA[prayerKey];
  if (!d) return;
  const modal = document.getElementById("niyyatModal");
  const body = document.getElementById("niyyatModalBody");
  body.innerHTML = `
    <div class="dua-ar" style="text-align:center; direction:rtl;">
      نَوَيْتُ أَنْ أُصَلِّيَ لِلّٰهِ تَعَالَىٰ ${d.rakat === 2 ? "رَكْعَتَيْ" : "رَكَعَاتِ"} صَلَاةِ ${d.ar} الْفَرْضِ مُسْتَقْبِلَ الْقِبْلَةِ، اللّٰهُ أَكْبَرُ
    </div>
    <div class="dua-tr" style="text-align:center; margin:10px 0;">Nawaitu an usalliya lillaahi ta'aalaa ${d.rakat} raka'aati salaati ${d.hi} al-fardhi mustaqbilal-qiblati, Allaahu Akbar</div>
    <div class="dua-hi" style="text-align:center;">Maine niyyat ki ke main Allah Ta'ala ke liye ${d.rakat} rakat ${d.hi} ki farz namaz, qibla ki taraf rukh karke ada karta/karti hoon. Allah sabse bada hai.</div>
    <div class="zakat-hint" style="text-align:center; margin-top:14px;">Yaad rahe: asal niyyat dil ka iraada hai — zubaan se ye alfaaz kehna zaroori nahi, sirf madad ke liye hai.</div>`;
  document.getElementById("niyyatModal").classList.remove("hidden");
}

function closeNiyyatModal() {
  document.getElementById("niyyatModal").classList.add("hidden");
}

// ---------- Istikhara Guide ----------
function openIstikharaModal() {
  document.getElementById("istikharaModal").classList.remove("hidden");
}

function closeIstikharaModal() {
  document.getElementById("istikharaModal").classList.add("hidden");
}


let zakatNisabBasis = "silver";

function setZakatNisabBasis(basis) {
  zakatNisabBasis = basis;
  renderMainContent();
}

function renderZakatView() {
  return `
    <div class="zakat-card">
      <div class="zakat-label">Cash / Bank Balance (₹)</div>
      <input type="number" id="zkCash" class="zakat-input" placeholder="0" inputmode="decimal">

      <div class="zakat-label">Sona (Gold) — Wazan (gram)</div>
      <input type="number" id="zkGoldWt" class="zakat-input" placeholder="0" inputmode="decimal">
      <div class="zakat-label">Sone ka Aaj ka Rate (₹ per gram)</div>
      <input type="number" id="zkGoldRate" class="zakat-input" placeholder="jaise 7500" inputmode="decimal">
      <div class="zakat-hint">Google karke "aaj gold rate per gram" check kar lein</div>

      <div class="zakat-label">Chandi (Silver) — Wazan (gram)</div>
      <input type="number" id="zkSilverWt" class="zakat-input" placeholder="0" inputmode="decimal">
      <div class="zakat-label">Chandi ka Aaj ka Rate (₹ per gram)</div>
      <input type="number" id="zkSilverRate" class="zakat-input" placeholder="jaise 90" inputmode="decimal">

      <div class="zakat-label">Business/Trade ka Maal (₹)</div>
      <input type="number" id="zkBusiness" class="zakat-input" placeholder="0" inputmode="decimal">

      <div class="zakat-label">Doosron se Milne Waala Paisa (₹)</div>
      <input type="number" id="zkReceivable" class="zakat-input" placeholder="0" inputmode="decimal">

      <div class="zakat-label">Aapka Karza/Loan (₹) — ye minus hoga</div>
      <input type="number" id="zkDebt" class="zakat-input" placeholder="0" inputmode="decimal">

      <div class="zakat-label">Nisab Kis Se Naapein?</div>
      <div class="zakat-nisab-row">
        <button class="zakat-nisab-btn ${zakatNisabBasis === "silver" ? "active" : ""}" onclick="setZakatNisabBasis('silver')">Chandi (ehtiyaat wala)</button>
        <button class="zakat-nisab-btn ${zakatNisabBasis === "gold" ? "active" : ""}" onclick="setZakatNisabBasis('gold')">Sona</button>
      </div>
      <div class="zakat-hint">Chandi ka nisab kam hota hai, isliye zyada ehtiyaat ke liye ise chuna jaata hai.</div>

      <button class="zakat-calc-btn" onclick="calculateZakat()">Zakat Calculate Karein</button>
      <div id="zakatResultBox"></div>
      <div class="zakat-disclaimer">Ye ek andaza hai. Sahi aur mukammal hisaab ke liye kisi qaabil Aalim se mashwara zaroor karein.</div>
    </div>`;
}

function calculateZakat() {
  const num = (id) => parseFloat(document.getElementById(id).value) || 0;

  const cash = num("zkCash");
  const goldWt = num("zkGoldWt");
  const goldRate = num("zkGoldRate");
  const silverWt = num("zkSilverWt");
  const silverRate = num("zkSilverRate");
  const business = num("zkBusiness");
  const receivable = num("zkReceivable");
  const debt = num("zkDebt");

  const goldValue = goldWt * goldRate;
  const silverValue = silverWt * silverRate;
  const totalWealth = cash + goldValue + silverValue + business + receivable - debt;

  const NISAB_GOLD_GRAMS = 87.48;
  const NISAB_SILVER_GRAMS = 612.36;
  const nisabValue = zakatNisabBasis === "gold" ? NISAB_GOLD_GRAMS * goldRate : NISAB_SILVER_GRAMS * silverRate;

  const box = document.getElementById("zakatResultBox");
  if (!nisabValue || nisabValue <= 0) {
    box.innerHTML = `<div class="zakat-result not-due"><div class="zakat-result-text">Nisab calculate karne ke liye ${zakatNisabBasis === "gold" ? "sone" : "chandi"} ka rate bharein.</div></div>`;
    return;
  }

  if (totalWealth >= nisabValue) {
    const zakat = totalWealth * 0.025;
    box.innerHTML = `
      <div class="zakat-result due">
        <div class="zakat-result-amount">₹${zakat.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</div>
        <div class="zakat-result-text">Aapki Zakat (kul maal ka 2.5%)</div>
      </div>`;
  } else {
    box.innerHTML = `
      <div class="zakat-result not-due">
        <div class="zakat-result-amount">Zakat Farz Nahi</div>
        <div class="zakat-result-text">Aapka kul maal nisab (₹${Math.round(nisabValue).toLocaleString("en-IN")}) se kam hai</div>
      </div>`;
  }
}


let surahScrollHandler = null;
let surahScrollTimer = null;

function getSurahProgress() {
  return JSON.parse(localStorage.getItem("roz_surah_progress") || "{}");
}

function saveSurahProgress(surahNumber, ayahNumber) {
  const progress = getSurahProgress();
  progress[surahNumber] = ayahNumber;
  localStorage.setItem("roz_surah_progress", JSON.stringify(progress));
}

function attachSurahScrollTracker(surahNumber) {
  if (surahScrollHandler) window.removeEventListener("scroll", surahScrollHandler);

  surahScrollHandler = () => {
    if (surahScrollTimer) clearTimeout(surahScrollTimer);
    surahScrollTimer = setTimeout(() => {
      const cards = document.querySelectorAll('[id^="ayah-block-"]');
      let closestNum = null;
      let closestDist = Infinity;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top - 90);
        if (dist < closestDist) {
          closestDist = dist;
          closestNum = card.id.replace("ayah-block-", "");
        }
      });
      if (closestNum) saveSurahProgress(surahNumber, parseInt(closestNum, 10));
    }, 400);
  };
  window.addEventListener("scroll", surahScrollHandler);
}

function maybeShowResumeBanner(surahNumber) {
  const progress = getSurahProgress();
  const savedAyah = progress[surahNumber];
  if (!savedAyah || savedAyah <= 1) return;

  const container = document.getElementById("mainContent");
  const banner = document.createElement("div");
  banner.className = "jumma-banner";
  banner.style.marginBottom = "14px";
  banner.innerHTML = `
    <div class="jumma-title">📍 Pichli baar ka nishaan</div>
    <div class="jumma-text">Aap Ayat ${savedAyah} tak padh chuke hain</div>
    <button class="jumma-btn" onclick="scrollToAyah(${savedAyah})">Wahin se Jaari Rakhein</button>`;
  container.prepend(banner);
}

function scrollToAyah(ayahNumber) {
  const el = document.getElementById(`ayah-block-${ayahNumber}`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}


function applyFontScale() {
  const pct = parseInt(localStorage.getItem("roz_font_scale") || "100", 10);
  document.documentElement.style.setProperty("--ar-font-scale", pct / 100);
  const label = document.getElementById("fontSizeLabel");
  if (label) label.textContent = `${pct}%`;
}

function adjustFontSize(deltaPct) {
  let pct = parseInt(localStorage.getItem("roz_font_scale") || "100", 10);
  pct = Math.min(160, Math.max(70, pct + deltaPct * 5));
  localStorage.setItem("roz_font_scale", String(pct));
  applyFontScale();
}

// ---------- Backup / Restore ----------
function exportBackup() {
  const backup = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("roz_")) {
      backup[key] = localStorage.getItem(key);
    }
  }
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "roz-ki-dua-backup.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      Object.keys(data).forEach((key) => {
        if (key.startsWith("roz_")) {
          localStorage.setItem(key, data[key]);
        }
      });
      alert("Backup wapas aa gaya! App reload ho rahi hai…");
      location.reload();
    } catch (err) {
      alert("Ye file sahi backup nahi lagti. Dobara koshish karein.");
    }
  };
  reader.readAsText(file);
}


function updateOfflineBanner() {
  const el = document.getElementById("offlineBanner");
  if (!el) return;
  el.style.display = navigator.onLine ? "none" : "flex";
}

window.addEventListener("online", updateOfflineBanner);
window.addEventListener("offline", updateOfflineBanner);

function getSadaqahDays() {
  return JSON.parse(localStorage.getItem("roz_sadaqah_days") || "{}");
}

function toggleSadaqahToday() {
  const days = getSadaqahDays();
  const todayKey = new Date().toDateString();
  if (days[todayKey]) {
    delete days[todayKey];
  } else {
    days[todayKey] = true;
  }
  localStorage.setItem("roz_sadaqah_days", JSON.stringify(days));
  render();
}

function getSadaqahTotalDays() {
  return Object.keys(getSadaqahDays()).length;
}

function getProgressSummaryHTML() {
  const savedCount = Object.values(state.savedIds).filter(Boolean).length;
  const likedCount = Object.values(state.likedIds).filter(Boolean).length;
  const tasbihTotal = Object.values(state.tasbihCounts).reduce((sum, n) => sum + (n || 0), 0);
  const sadaqahDays = getSadaqahTotalDays();
  const todayDone = !!getSadaqahDays()[new Date().toDateString()];

  return `
    <div class="progress-card">
      <div class="progress-title">🌟 Ab Tak Ka Safar</div>
      <div class="progress-grid">
        <div class="progress-item"><div class="progress-num">${state.streakCount}</div><div class="progress-label">Din ka silsila</div></div>
        <div class="progress-item"><div class="progress-num">${savedCount}</div><div class="progress-label">Mehfooz duayein</div></div>
        <div class="progress-item"><div class="progress-num">${likedCount}</div><div class="progress-label">Pasandeeda duayein</div></div>
        <div class="progress-item"><div class="progress-num">${tasbihTotal}</div><div class="progress-label">Tasbih (kul)</div></div>
      </div>
      <div class="sadaqah-row" onclick="toggleSadaqahToday()">
        <span>${todayDone ? "✅" : "⬜"} Aaj sadaqah diya?</span>
        <span class="sadaqah-days">${sadaqahDays} din</span>
      </div>
    </div>`;
}


let qiblaOrientationHandler = null;

function calcQiblaBearing(lat, lon) {
  const kaabaLat = (21.4225 * Math.PI) / 180;
  const kaabaLon = (39.8262 * Math.PI) / 180;
  const φ1 = (lat * Math.PI) / 180;
  const λ1 = (lon * Math.PI) / 180;
  const y = Math.sin(kaabaLon - λ1) * Math.cos(kaabaLat);
  const x = Math.cos(φ1) * Math.sin(kaabaLat) - Math.sin(φ1) * Math.cos(kaabaLat) * Math.cos(kaabaLon - λ1);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

function openQiblaModal() {
  const modal = document.getElementById("qiblaModal");
  const statusEl = document.getElementById("qiblaStatus");
  if (!modal) return;
  modal.classList.remove("hidden");
  statusEl.textContent = "Aapki location maloom ki jaa rahi hai…";

  if (!navigator.geolocation) {
    statusEl.textContent = "Is device par location available nahi hai.";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const qiblaBearing = calcQiblaBearing(pos.coords.latitude, pos.coords.longitude);
      startQiblaCompass(qiblaBearing);
    },
    () => {
      statusEl.textContent = "Location ki ijazat nahi mili. Settings mein jaakar ijazat dein.";
    }
  );
}

function startQiblaCompass(qiblaBearing) {
  const statusEl = document.getElementById("qiblaStatus");
  const needle = document.getElementById("qiblaNeedle");

  const handler = (event) => {
    let heading = null;
    if (typeof event.webkitCompassHeading === "number") {
      heading = event.webkitCompassHeading; // iOS — already true north
    } else if (event.alpha !== null && event.absolute) {
      heading = 360 - event.alpha;
    } else if (event.alpha !== null) {
      heading = 360 - event.alpha; // andaazan, agar absolute na mile
    }
    if (heading === null) return;
    const rotation = qiblaBearing - heading;
    if (needle) needle.style.transform = `rotate(${rotation}deg)`;
    statusEl.textContent = "Kaaba icon Qibla ki taraf ishaara kar raha hai";
  };

  qiblaOrientationHandler = handler;

  const startListening = () => {
    if ("ondeviceorientationabsolute" in window) {
      window.addEventListener("deviceorientationabsolute", handler, true);
    } else {
      window.addEventListener("deviceorientation", handler, true);
    }
  };

  if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
    // iOS 13+ — permission maangni padti hai
    DeviceOrientationEvent.requestPermission()
      .then((res) => {
        if (res === "granted") {
          startListening();
        } else {
          statusEl.textContent = "Compass ki ijazat nahi mili.";
        }
      })
      .catch(() => {
        statusEl.textContent = "Is device par compass available nahi hai.";
      });
  } else if (window.DeviceOrientationEvent) {
    startListening();
  } else {
    statusEl.textContent = "Is device mein compass sensor nahi mila.";
  }
}

function closeQiblaModal() {
  const modal = document.getElementById("qiblaModal");
  if (modal) modal.classList.add("hidden");
  if (qiblaOrientationHandler) {
    window.removeEventListener("deviceorientationabsolute", qiblaOrientationHandler, true);
    window.removeEventListener("deviceorientation", qiblaOrientationHandler, true);
    qiblaOrientationHandler = null;
  }
}

function renderAsmaView() {
  const day = getDayOfYear(0);
  const highlightIdx = day % ASMA_UL_HUSNA.length;

  const highlightCard = `
    <div class="amal-card" style="text-align:center;">
      <div class="amal-label">✨ AAJ KA NAAM</div>
      <div style="font-family:'Amiri',serif; font-size:32px; color:#FDFBF6; margin:8px 0;">${ASMA_UL_HUSNA[highlightIdx].ar}</div>
      <div style="color:#E9C97C; font-weight:700; font-size:16px; margin-bottom:4px;">${ASMA_UL_HUSNA[highlightIdx].n}</div>
      <div class="amal-text">${ASMA_UL_HUSNA[highlightIdx].hi}</div>
    </div>`;

  const grid = `
    <div class="asma-grid">
      ${ASMA_UL_HUSNA.map(
        (name, i) => `
        <div class="asma-card">
          <div class="asma-num">${i + 1}</div>
          <div class="asma-ar">${name.ar}</div>
          <div class="asma-name">${name.n}</div>
          <div class="asma-meaning">${name.hi}</div>
        </div>`
      ).join("")}
    </div>`;

  return highlightCard + grid;
}

function renderNamazView() {
  if (!state.namazTimings) {
    return `
      <div class="namaz-wrap">
        <div class="namaz-status">
          ${state.namazLoading ? "Namaz ke waqt nikaale jaa rahe hain…" : (state.namazError || "Apni location ke hisaab se aaj ki namaz ke waqt dekhne ke liye location ki ijazat dein.")}
        </div>
        <button class="namaz-enable-btn" onclick="requestNamazTimes()" ${state.namazLoading ? "disabled" : ""}>Namaz ke Waqt Dekhein</button>
      </div>
    `;
  }

  const t = state.namazTimings;
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayLog = getNamazLog()[todayKey] || {};
  const rows = [
    { key: "Fajr", name: "Fajr", time: to12Hour(t.Fajr), rakat: "2 Sunnat + 2 Farz" },
    { key: null, name: "Sunrise", time: to12Hour(t.Sunrise), rakat: "(Namaz nahi — sirf waqt ka nishaan)" },
    { key: "Zuhr", name: "Zuhr", time: to12Hour(t.Dhuhr), rakat: "4 Sunnat + 4 Farz + 2 Sunnat + 2 Nafl" },
    { key: "Asr", name: "Asr", time: to12Hour(t.Asr), rakat: "4 Sunnat + 4 Farz" },
    { key: "Maghrib", name: "Maghrib", time: to12Hour(t.Maghrib), rakat: "3 Farz + 2 Sunnat + 2 Nafl" },
    { key: "Isha", name: "Isha", time: to12Hour(t.Isha), rakat: "4 Sunnat + 4 Farz + 2 Sunnat + 2 Nafl + 3 Wajib + 2 Nafl" },
    { key: null, name: "Tahajjud", time: calcTahajjudWindow(t.Maghrib, t.Fajr) || "—", rakat: "8 Rakat Nafl (2-2 karke) — Witr agar Isha ke baad na padha ho to yahin ada karein" },
  ];

  return `
    <div class="namaz-wrap">
      <div style="display:flex; gap:8px; margin-bottom:16px;">
        <button class="namaz-enable-btn" style="flex:1;" onclick="openQiblaModal()">🧭 Qibla</button>
        <button class="namaz-enable-btn" style="flex:1;" onclick="openIstikharaModal()">🌙 Istikhara</button>
      </div>
      <div class="namaz-list">
        ${rows
          .map(
            (r) => `
          <div class="namaz-row">
            <div style="display:flex; align-items:center; gap:10px;">
              ${r.key ? `<input type="checkbox" class="namaz-check" ${todayLog[r.key] ? "checked" : ""} onchange="toggleNamazDone('${r.key}')">` : ""}
              <div>
                <div class="namaz-name">${r.name}${r.key ? ` <button class="icon-btn" style="font-size:11px; padding:2px 6px;" onclick="openNiyyatModal('${r.key}')">📖 Niyyat</button>` : ""}</div>
                ${r.rakat ? `<div class="namaz-rakat">${r.rakat}</div>` : ""}
              </div>
            </div>
            <span class="namaz-time">${r.time}</span>
          </div>`
          )
          .join("")}
      </div>
      <div class="namaz-loc-note">Aapki current location ke hisaab se (Muslim World League method)<br>Rakaton ki tadaad Hanafi tareeqe ke mutaabiq hai<br>Tahajjud ka waqt andaazan hai (raat ka aakhri tihai hissa)</div>
      ${getNamazCalendarHTML()}
    </div>
  `;
}

function renderIlajView() {
  if (!state.selectedIlaj) {
    return `
      <div class="ilaj-intro">Zaroorat ke hisaab se Quran aur Hadith ki authentic duayein.</div>
      ${ROHANI_ILAJ.map(
        (cat) => `
        <div class="surah-list-card" onclick="openIlajCategory('${cat.id}')">
          <div>
            <div style="font-weight:700; color:#1B2A3A;">${cat.icon} ${cat.title}</div>
            <div style="font-size:12px; color:#7A8A94; margin-top:2px;">${cat.desc}</div>
          </div>
          <span style="color:#C9A15A;">›</span>
        </div>`
      ).join("")}
    `;
  }

  const cat = ROHANI_ILAJ.find((c) => c.id === state.selectedIlaj);
  if (!cat) return "";

  const duasHtml = cat.duas
    .map((dua, i) => {
      const ilajId = `ilaj-${cat.id}-${i}`;
      const isLiked = !!state.likedIds[ilajId];
      return `
      <div class="dua-card">
        <div class="dua-tag-row">
          <span class="dua-tag">${dua.tag}</span>
          <span class="dua-ref">${dua.ref}${dua.person ? " · " + dua.person : ""}</span>
        </div>
        <div class="dua-ar">${dua.ar}</div>
        <div class="dua-tr">${dua.tr}</div>
        <div class="dua-en">${dua.en}</div>
        ${state.langPref === "hi" ? `<div class="dua-hi">${dua.hi}</div>` : ""}
        <div style="display:flex; justify-content:flex-end; margin-top:8px;">
          <button class="icon-btn" onclick="toggleLike('${ilajId}')">${isLiked ? "❤️" : "🤍"}</button>
        </div>
      </div>`;
    })
    .join("");

  return `
    <div class="surah-back-row" onclick="backToIlajList()">‹ Sab categories</div>
    <div class="ilaj-cat-header">${cat.icon} ${cat.title}</div>
    ${duasHtml}
  `;
}

function toggleAyahPlay(btn, audioUrl) {
  if (btn.classList.contains("playing")) {
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    btn.classList.remove("playing");
    btn.textContent = "▶";
    return;
  }
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  document.querySelectorAll(".play-btn.playing").forEach((b) => {
    b.classList.remove("playing");
    b.textContent = "▶";
  });

  btn.classList.add("playing");
  btn.textContent = "❚❚";

  const audio = new Audio(audioUrl);
  currentAudio = audio;
  audio.onended = () => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
    currentAudio = null;
  };
  audio.onerror = () => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
    currentAudio = null;
  };
  audio.play().catch(() => {
    btn.classList.remove("playing");
    btn.textContent = "▶";
  });
}

// ---------- main render ----------
function getHijriParts(dateObj) {
  // Kuwaiti algorithm: reliable Gregorian → Hijri conversion, works on every device
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const jd =
    Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
    Math.floor((367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12) -
    Math.floor((3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4) +
    day - 32075;

  let l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719) + Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const hMonth = Math.floor((24 * l) / 709);
  const hDay = l - Math.floor((709 * hMonth) / 24);
  const hYear = 30 * n + j - 30;

  return { day: hDay, month: hMonth, year: hYear };
}

function getHijriDateStr(dateObj) {
  const { day, month, year } = getHijriParts(dateObj);
  const hijriMonths = [
    "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Awwal", "Jumada al-Thani",
    "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhul Qa'dah", "Dhul Hijjah",
  ];
  return `${day} ${hijriMonths[month - 1]} ${year} AH`;
}

function getRamadanDay() {
  const p = getHijriParts(new Date());
  return p.month === 9 ? p.day : null;
}

function daysUntilRamadan() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const parts = getHijriParts(today);
  if (parts.month === 9) return 0;
  for (let i = 1; i <= 355; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const p = getHijriParts(d);
    if (p.month === 9 && p.day === 1) return i;
  }
  return null;
}

function getSpecialBannersHTML() {
  let html = "";
  const today = new Date();

  html += getIsaalSawabBannerHTML();

  if (today.getDay() === 5) {
    html += `
      <div class="jumma-banner">
        <div class="jumma-title">🕌 Jumma Mubarak!</div>
        <div class="jumma-text">Aaj Surah Al-Kahf padhna sunnat hai — is se agle Jumme tak noor (roshni) rehta hai.</div>
        <button class="jumma-btn" onclick="openSurah(18)">Surah Al-Kahf Padhein</button>
      </div>`;
  }

  const ramadanDay = getRamadanDay();
  if (ramadanDay !== null) {
    const t = state.namazTimings;
    html += `
      <div class="ramadan-banner">
        <div class="ramadan-title">🌙 Ramadan Mubarak — Roza ${ramadanDay}</div>
        <div class="ramadan-times">${
          t ? `Sehri khatam: ${to12Hour(t.Fajr)} &nbsp;•&nbsp; Iftar: ${to12Hour(t.Maghrib)}` : "Sehri/Iftar ka sahi waqt dekhne ke liye Namaz tab kholein"
        }</div>
        ${getRozaTrackerHTML()}
      </div>`;
  } else {
    const days = daysUntilRamadan();
    if (days !== null && days <= 60) {
      html += `
      <div class="ramadan-banner">
        <div class="ramadan-title">🌙 Ramadan mein ${days} din baaki hain</div>
      </div>`;
    }
  }

  if (state.streakCount >= 5 && !localStorage.getItem("roz_share_prompt_dismissed")) {
    html += `
      <div class="jumma-banner">
        <div class="jumma-title">💛 Ye app kaam aa raha hai?</div>
        <div class="jumma-text">Apne dost aur ghar walon ke saath share karein — sadqa-e-jaariya ban sakta hai.</div>
        <div style="display:flex; gap:8px; justify-content:center;">
          <button class="jumma-btn" onclick="shareApp()">📤 Share Karein</button>
          <button class="share-modal-cancel" style="padding:8px 14px; font-size:11px;" onclick="dismissSharePrompt()">Baad Mein</button>
        </div>
      </div>`;
  }

  return html;
}

function dismissSharePrompt() {
  localStorage.setItem("roz_share_prompt_dismissed", "1");
  render();
}

function render() {
  // date
  const dateObj = new Date(Date.now() + state.dayOffset * 86400000);
  document.getElementById("dateStr").textContent = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  const hijriEl = document.getElementById("hijriDateStr");
  if (hijriEl) hijriEl.textContent = getHijriDateStr(dateObj);

  const silsilaEl = document.getElementById("silsilaBadge");
  if (silsilaEl) {
    silsilaEl.textContent = state.streakCount >= 2 ? `🔥 ${state.streakCount} din ka silsila` : "🔥 Naya silsila shuru";
  }
  applyFontScale();
  const isaalContainer = document.getElementById("isaalSawabContainer");
  if (isaalContainer) isaalContainer.innerHTML = getIsaalSawabManageHTML();

  // nav active states
  document.getElementById("navHome").classList.toggle("active", state.view === "home");
  document.getElementById("navSearch").classList.toggle("active", state.view === "search");
  document.getElementById("navSaved").classList.toggle("active", state.view === "saved");
  document.getElementById("navSurah").classList.toggle("active", state.view === "surah");
  document.getElementById("navTasbih").classList.toggle("active", state.view === "tasbih");
  document.getElementById("navIlaj").classList.toggle("active", state.view === "ilaj");
  document.getElementById("navNamaz").classList.toggle("active", state.view === "namaz");
  document.getElementById("navAsma").classList.toggle("active", state.view === "asma");
  document.getElementById("navZakat").classList.toggle("active", state.view === "zakat");
  document.getElementById("aboutBtn").classList.toggle("active", state.view === "about");
  const langBtnHi = document.getElementById("langBtnHi");
  const langBtnEn = document.getElementById("langBtnEn");
  if (langBtnHi && langBtnEn) {
    langBtnHi.classList.toggle("active", state.langPref === "hi");
    langBtnEn.classList.toggle("active", state.langPref === "en");
  }
  const reciterOptions = ["ar.alafasy", "ar.husary", "ar.minshawi", "ar.abdurrahmaansudais"];
  reciterOptions.forEach((r) => {
    const btn = document.getElementById(`reciterBtn-${r}`);
    if (btn) btn.classList.toggle("active", state.reciter === r);
  });

  const namazNotifCheckbox = document.getElementById("namazNotifCheckbox");
  if (namazNotifCheckbox) {
    namazNotifCheckbox.checked = getNamazNotifSettings().enabled;
  }

  const reminderCheckbox = document.getElementById("reminderCheckbox");
  const reminderTimeRow = document.getElementById("reminderTimeRow");
  const reminderHourSel = document.getElementById("reminderHour");
  const reminderMinuteSel = document.getElementById("reminderMinute");
  if (reminderCheckbox && reminderHourSel && reminderMinuteSel) {
    const rSettings = getReminderSettings();
    reminderCheckbox.checked = rSettings.enabled;
    if (reminderTimeRow) reminderTimeRow.style.opacity = rSettings.enabled ? "1" : "0.4";
    if (!reminderHourSel.dataset.filled) {
      reminderHourSel.innerHTML = Array.from({ length: 24 }, (_, h) => `<option value="${h}">${String(h).padStart(2, "0")}</option>`).join("");
      reminderMinuteSel.innerHTML = ["00", "15", "30", "45"].map((m) => `<option value="${parseInt(m)}">${m}</option>`).join("");
      reminderHourSel.dataset.filled = "1";
      reminderMinuteSel.dataset.filled = "1";
    }
    reminderHourSel.value = rSettings.hour;
    reminderMinuteSel.value = rSettings.minute - (rSettings.minute % 15);
  }

  const savedList = allDuasFlat().filter((d) => state.savedIds[d.id]);
  document.getElementById("savedCount").textContent = savedList.length ? `(${savedList.length})` : "";

  // header title + badges visibility
  const isHome = state.view === "home";
  document.getElementById("pageTitle").textContent =
    state.view === "about" ? "About" :
    state.view === "search" ? "Talaash" :
    state.view === "surah" ? "Surah" :
    state.view === "tasbih" ? "📿 Tasbih" :
    state.view === "ilaj" ? (state.selectedIlaj ? "Rohani Ilaj" : "🌙 Rohani Ilaj") :
    state.view === "namaz" ? "🕌 Namaz ke Waqt" :
    state.view === "asma" ? "✨ 99 Naam" :
    state.view === "zakat" ? "💰 Zakat Calculator" :
    state.view === "saved" ? "Roz ki Dua" : "Aaj ki Duayein";

  document.getElementById("homeSubtitle").style.display = isHome ? "block" : "none";
  document.getElementById("jhalakBtn").style.visibility = isHome ? "visible" : "hidden";

  document.getElementById("searchWrap").classList.toggle("hidden", state.view !== "search");
  document.getElementById("aboutWrap").classList.toggle("hidden", state.view !== "about");
  document.getElementById("savedHeader").classList.toggle("hidden", state.view !== "saved");

  const surahHeader = document.getElementById("surahHeader");
  surahHeader.classList.toggle("hidden", state.view !== "surah");
  if (state.view === "surah") {
    const info = SURAH_LIST.find((s) => s.number === state.selectedSurah);
    document.getElementById("surahHeaderTitle").textContent = info ? `📖 Surah ${info.name}` : "📖 Surahein";
    document.getElementById("surahHeaderSub").textContent = info
      ? `${info.nameAr} — ${info.ayahs} Ayatein`
      : "Poori Surah padhein — Arabic aur tarjuma ke saath";
  }

  document.getElementById("mainContent").style.display = state.view === "about" ? "none" : "block";

  renderMainContent();
}

function renderMainContent() {
  const container = document.getElementById("mainContent");
  if (state.view === "about") {
    container.innerHTML = "";
    return;
  }
  if (state.view === "tasbih") {
    container.innerHTML = renderTasbihView();
    return;
  }
  if (state.view === "ilaj") {
    container.innerHTML = renderIlajView();
    return;
  }
  if (state.view === "namaz") {
    container.innerHTML = renderNamazView();
    return;
  }
  if (state.view === "asma") {
    container.innerHTML = renderAsmaView();
    return;
  }
  if (state.view === "zakat") {
    container.innerHTML = renderZakatView();
    return;
  }
  if (state.view === "search") {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      const recent = getRecentSearches();
      if (recent.length === 0) {
        container.innerHTML = `<div class="empty-state">Upar box mein type karke koi bhi dua ya Surah dhoondein</div>`;
        return;
      }
      container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div class="search-section-label" style="margin:0;">PICHLI TALAASH</div>
          <button class="icon-btn" style="font-size:11px;" onclick="clearRecentSearches()">Saaf Karein</button>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${recent.map((r) => `<button class="lang-toggle-btn" style="padding:8px 14px;" onclick="runRecentSearch('${r.replace(/'/g, "\\'")}')">${r}</button>`).join("")}
        </div>`;
      return;
    }
    const surahResults = SURAH_LIST.filter((s) => s.name.toLowerCase().includes(q));
    const duaResults = allDuasFlat().filter(
      (d) =>
        d.tag.toLowerCase().includes(q) ||
        d.hi.toLowerCase().includes(q) ||
        d.tr.toLowerCase().includes(q) ||
        (d.en && d.en.toLowerCase().includes(q)) ||
        (d.person && d.person.toLowerCase().includes(q))
    );

    if (surahResults.length === 0 && duaResults.length === 0) {
      container.innerHTML = `<div class="empty-state">Koi dua ya Surah nahi mili "${state.searchQuery}" ke liye</div>`;
      return;
    }

    let html = "";
    if (surahResults.length > 0) {
      html += `<div class="search-section-label">SURAHEIN</div>`;
      html += surahResults
        .map(
          (s) => `
        <div class="surah-list-card" onclick="openSurah(${s.number})">
          <div>
            <div class="surah-list-name">${s.name}</div>
            <div class="surah-list-meta">${s.ayahs} Ayatein</div>
          </div>
          <div class="surah-list-ar">${s.nameAr}</div>
        </div>`
        )
        .join("");
    }
    if (duaResults.length > 0) {
      if (surahResults.length > 0) html += `<div class="search-section-label">DUAYEIN</div>`;
      html += duaResults.map(duaCardHTML).join("");
    }
    container.innerHTML = html;
    return;
  }
  if (state.view === "saved") {
    const savedList = allDuasFlat().filter((d) => state.savedIds[d.id]);
    container.innerHTML = savedList.length
      ? savedList.map(duaCardHTML).join("")
      : `<div class="empty-state"><div class="empty-icon">🌙</div><div class="empty-title">Abhi yahan kuch nahi hai</div>Jo bhi dua dil ko chhoo jaye, uske 📑 button ko dabakar yahan mehfooz kar lein — phir se dekhne ke liye</div>`;
    return;
  }
  if (state.view === "surah") {
    if (!state.selectedSurah) {
      // Surahon ki list dikhao
      const hifz = getHifzList();
      const hifzCount = Object.values(hifz).filter(Boolean).length;
      const progressHTML = `
        <div class="progress-card" style="margin-bottom:14px;">
          <div class="progress-title">📗 Hifz Progress</div>
          <div style="text-align:center; font-size:22px; font-weight:700; color:#FDFBF6;">${hifzCount} / ${SURAH_LIST.length}</div>
          <div style="text-align:center; font-size:11px; color:#93A5B1;">Surahein yaad hui</div>
        </div>`;
      container.innerHTML = progressHTML + SURAH_LIST.map(
        (s) => `
        <div class="surah-list-card" onclick="openSurah(${s.number})">
          <div style="display:flex; align-items:center; gap:10px;">
            <input type="checkbox" class="namaz-check" ${hifz[s.number] ? "checked" : ""} onclick="toggleHifz(${s.number}, event)" title="Yaad ho gayi?">
            <div>
              <div class="surah-list-name">${s.name}${SURAH_HI_TRANSLATIONS[s.number] ? ' <span style="color:#C9A15A; font-size:10px;">(Hindi bhi)</span>' : ""}</div>
              <div class="surah-list-meta">${s.ayahs} Ayatein</div>
            </div>
          </div>
          <div class="surah-list-ar">${s.nameAr}</div>
        </div>`
      ).join("");
      return;
    }
    // ek Surah khuli hui hai
    const ayahs = surahCache[state.selectedSurah];
    let html = `<button class="surah-back-btn" onclick="backToSurahList()">← Saari Surahein</button>`;
    if (ayahs === undefined) {
      html += `<div class="loading-text">Surah load ho rahi hai…</div>`;
    } else if (ayahs === null) {
      html += `<div class="empty-state">Surah load nahi ho payi. Internet check karke dobara try karein.</div>`;
    } else {
      html += ayahs
        .map((a) => {
          const ayahId = `surah-${state.selectedSurah}-ayah-${a.numberInSurah}`;
          const isLiked = !!state.likedIds[ayahId];
          return `
        <div class="ayah-card" id="ayah-block-${a.numberInSurah}">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="ayah-num">Ayat ${a.numberInSurah}</span>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="icon-btn" onclick="toggleLike('${ayahId}')">${isLiked ? "❤️" : "🤍"}</button>
              <button class="play-btn" onclick="toggleAyahPlay(this, 'https://cdn.islamic.network/quran/audio/128/${state.reciter}/${a.globalNumber}.mp3')">▶</button>
            </div>
          </div>
          <div class="ayah-ar">${a.ar}</div>
          ${a.tr ? `<div class="dua-tr">${a.tr}</div>` : ""}
          <div class="ayah-en">${a.en}</div>
          ${
            state.langPref === "hi" && SURAH_HI_TRANSLATIONS[state.selectedSurah] && SURAH_HI_TRANSLATIONS[state.selectedSurah][a.numberInSurah]
              ? `<div class="dua-hi">${SURAH_HI_TRANSLATIONS[state.selectedSurah][a.numberInSurah]}</div>`
              : ""
          }
        </div>`;
        })
        .join("");
    }
    container.innerHTML = html;
    if (ayahs && ayahs.length) {
      attachSurahScrollTracker(state.selectedSurah);
      maybeShowResumeBanner(state.selectedSurah);
    }
    return;
  }
  // home
  const day = getDayOfYear(state.dayOffset);
  const todaysSet = getTodaysThree(ALL_DUAS, 0, day).map((d) => ({
    ...d,
    id: `dua-${d.tag}-${d._originalIndex}`,
  }));

  const pinnedIdsList = Object.keys(state.pinnedIds).filter((id) => state.pinnedIds[id]);
  const pinnedDuas = pinnedIdsList
    .map((id) => allDuasFlat().find((d) => d.id === id))
    .filter(Boolean)
    .filter((d) => !todaysSet.some((t) => t.id === d.id));

  const pinnedBanner = pinnedDuas.length
    ? `<div class="pinned-label">📌 Aapki pin ki hui duayein</div>`
    : "";

  const amalCard = `
    <div class="amal-card">
      <div class="amal-label">✨ Aaj ka Amal</div>
      <div class="amal-text">${getTodaysAmal(state.dayOffset)}</div>
    </div>
  `;

  const todaysAyat = getTodaysAyat(state.dayOffset);
  const ayatCard = `
    <div class="amal-card" style="text-align:center;">
      <div class="amal-label">📖 Aaj Ka Ayat</div>
      <div class="dua-ar" style="text-align:center; margin:8px 0; color:#FDFBF6;">${todaysAyat.ar}</div>
      <div class="amal-text" style="color:#93A5B1; font-style:italic;">${todaysAyat.tr}</div>
      <div class="amal-text" style="color:#7B8C99; margin-top:6px;">${todaysAyat.en}</div>
      <div class="amal-text" style="color:#C9A15A; margin-top:6px;">${todaysAyat.hi}</div>
      <div style="font-size:10px; color:#7B8C99; margin-top:8px;">Quran ${todaysAyat.ref}</div>
    </div>
  `;

  container.innerHTML =
    getSpecialBannersHTML() +
    amalCard +
    ayatCard +
    getProgressSummaryHTML() +
    pinnedBanner +
    pinnedDuas.map(duaCardHTML).join("") +
    todaysSet.map(duaCardHTML).join("");
}

// init
if (localStorage.getItem("roz_lang_pref")) {
  const ob = document.getElementById("onboarding");
  if (ob) ob.classList.add("hidden");
} else {
  // Detect phone's language to suggest a default, without forcing it
  const deviceLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
  const suggestHindi = deviceLang.startsWith("hi") || deviceLang.startsWith("ur") || deviceLang.includes("-in");
  const btnHi = document.getElementById("onboardingBtnHi");
  const btnEn = document.getElementById("onboardingBtnEn");
  if (suggestHindi && btnHi) {
    btnHi.classList.add("onboarding-btn-suggested");
  } else if (btnEn) {
    btnEn.classList.add("onboarding-btn-suggested");
  }
}
if (getReminderSettings().enabled && "Notification" in window && Notification.permission === "granted") {
  scheduleNextReminder();
}
// Auto-load cached namaz timings for today if available, without prompting location again
(() => {
  const cached = JSON.parse(localStorage.getItem("roz_namaz_cache") || "null");
  const todayKey = new Date().toISOString().slice(0, 10);
  if (cached && cached.date === todayKey) {
    state.namazTimings = cached.timings;
  }
})();
applyTheme(localStorage.getItem("roz_theme") || "dark");
checkStreakMilestone();
updateOfflineBanner();
applyFontScale();
render();
if (state.namazTimings) scheduleNamazNotifications();

// register service worker for offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
