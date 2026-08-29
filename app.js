// Roz ki Dua — poori app ka logic

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
let state = {
  dayOffset: 0,
  view: "home", // home | saved | search | about | surah | tasbih | ilaj
  searchQuery: "",
  selectedSurah: null,
  selectedIlaj: null,
  savedIds: JSON.parse(localStorage.getItem("roz_saved") || "{}"),
  likedIds: JSON.parse(localStorage.getItem("roz_liked") || "{}"),
  tasbihId: localStorage.getItem("roz_tasbih_current") || "subhanallah",
  tasbihCounts: JSON.parse(localStorage.getItem("roz_tasbih_counts") || "{}"),
};

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
    <div class="tasbih-meaning">${current.meaning}</div>
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
        <button class="icon-btn" style="color:${isSaved ? "#C9A15A" : "#B9AE93"}" onclick="toggleSave('${dua.id}')">${isSaved ? "🔖" : "📑"}</button>
        <button class="play-btn" onclick="togglePlay(this, '${dua.id}')">▶</button>
        <button class="icon-btn" style="color:#7C6A46" onclick="toggleShare(this)">↗️</button>
      </div>
    </div>
    <div class="progress-wrap" style="display:none;"><div class="progress-bar"></div></div>
    <div class="dua-ar">${dua.ar}</div>
    <div class="dua-tr">${dua.tr}</div>
    <div class="dua-en">${dua.en}</div>
    <div class="dua-hi">${dua.hi}</div>
    <div class="share-panel">
      <div class="share-ar">${dua.ar}</div>
      <div class="share-hi">${dua.hi.length > 70 ? dua.hi.slice(0, 70) + "…" : dua.hi}</div>
      <div class="share-brand">ROZ KI DUA</div>
      <div class="share-buttons">
        <button class="share-wa" onclick="shareWhatsApp('${dua.id}')">WhatsApp</button>
        <button class="share-img">Image save</button>
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
    const res = await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.alafasy`);
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

function nextDay() {
  state.dayOffset += 1;
  render();
}

function setView(view) {
  state.view = view;
  render();
}

function onSearch(val) {
  state.searchQuery = val;
  renderMainContent();
}

// ---------- Surahein ----------
// Mashhoor Surahein — poora text live fetch hota hai (trusted Quran database se)
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

let surahCache = {}; // number -> ayahs array, taaki dobara fetch na karna pade

async function openSurah(number) {
  state.selectedSurah = number;
  state.view = "surah";
  render();

  if (surahCache[number]) return; // already loaded hai

  const container = document.getElementById("mainContent");
  container.innerHTML = `<div class="loading-text">Surah load ho rahi hai…</div>`;

  try {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/editions/quran-simple,en.sahih`);
    const json = await res.json();
    const arabicAyahs = json.data[0].ayahs;
    const enAyahs = json.data[1].ayahs;
    surahCache[number] = arabicAyahs.map((a, i) => ({
      numberInSurah: a.numberInSurah,
      ar: a.text,
      en: enAyahs[i] ? enAyahs[i].text : "",
      globalNumber: a.number,
    }));
  } catch (e) {
    surahCache[number] = null; // error hone par null rakho
  }
  renderMainContent();
}

function backToSurahList() {
  state.selectedSurah = null;
  renderMainContent();
}

function openIlajCategory(id) {
  state.selectedIlaj = id;
  renderMainContent();
}

function backToIlajList() {
  state.selectedIlaj = null;
  renderMainContent();
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
        <div class="dua-hi">${dua.hi}</div>
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
function render() {
  // date
  const dateObj = new Date(Date.now() + state.dayOffset * 86400000);
  document.getElementById("dateStr").textContent = dateObj.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  // nav active states
  document.getElementById("navHome").classList.toggle("active", state.view === "home");
  document.getElementById("navSearch").classList.toggle("active", state.view === "search");
  document.getElementById("navSaved").classList.toggle("active", state.view === "saved");
  document.getElementById("navSurah").classList.toggle("active", state.view === "surah");
  document.getElementById("navTasbih").classList.toggle("active", state.view === "tasbih");
  document.getElementById("navIlaj").classList.toggle("active", state.view === "ilaj");
  document.getElementById("aboutBtn").classList.toggle("active", state.view === "about");

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
  if (state.view === "search") {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      container.innerHTML = `<div class="empty-state">Upar box mein type karke koi bhi dua ya Surah dhoondein</div>`;
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
      container.innerHTML = SURAH_LIST.map(
        (s) => `
        <div class="surah-list-card" onclick="openSurah(${s.number})">
          <div>
            <div class="surah-list-name">${s.name}</div>
            <div class="surah-list-meta">${s.ayahs} Ayatein</div>
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
        <div class="ayah-card">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="ayah-num">Ayat ${a.numberInSurah}</span>
            <div style="display:flex; align-items:center; gap:10px;">
              <button class="icon-btn" onclick="toggleLike('${ayahId}')">${isLiked ? "❤️" : "🤍"}</button>
              <button class="play-btn" onclick="toggleAyahPlay(this, 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/${a.globalNumber}.mp3')">▶</button>
            </div>
          </div>
          <div class="ayah-ar">${a.ar}</div>
          <div class="ayah-en">${a.en}</div>
        </div>`;
        })
        .join("");
    }
    container.innerHTML = html;
    return;
  }
  // home
  const day = getDayOfYear(state.dayOffset);
  const todaysSet = getTodaysThree(ALL_DUAS, 0, day).map((d) => ({
    ...d,
    id: `dua-${d.tag}-${d._originalIndex}`,
  }));
  container.innerHTML = todaysSet.map(duaCardHTML).join("");
}

// init
render();

// register service worker for offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
