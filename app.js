// Roz ki Dua — poori app ka logic

// Quran mein aayi hui duayein — har ek ke saath Surah:Ayat ka reference.
const POOLS = {
  subah: [
    { tag: "SURAH AL-BAQARAH", ref: "2:201", ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", tr: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adhaaban-naar", hi: "Ae hamare Rab, humein duniya mein bhalai de aur aakhirat mein bhi bhalai de, aur humein dozakh ke azaab se bacha." },
    { tag: "SURAH IBRAHIM", ref: "14:40-41", ar: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ", tr: "Rabbij'alnee muqeemas-salaati wa min dhurriyyatee rabbanaa wa taqabbal du'aa'", hi: "Ae mere Rab, mujhe aur meri aulaad ko namaz qaayam karne wala bana, aur ae hamare Rab, meri dua qubool farma." },
    { tag: "SURAH TAHA", ref: "20:25-28", ar: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي", tr: "Rabbish-rah lee sadree wa yassir lee amree wahlul 'uqdatan min lisaanee yafqahoo qawlee", hi: "Ae mere Rab, mera seena khol de, mera kaam aasaan kar de, aur meri zabaan ki girah khol de taaki log meri baat samajh sakein." },
    { tag: "SURAH AL-FURQAN", ref: "25:74", ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", tr: "Rabbanaa hab lanaa min azwaajinaa wa dhurriyyaatinaa qurrata a'yunin waj'alnaa lil-muttaqeena imaamaa", hi: "Ae hamare Rab, hamein hamari biwiyon aur aulaad se aankhon ki thandak ata farma, aur humein parhezgaron ka imaam bana." },
    { tag: "SURAH ASH-SHU'ARA", ref: "26:83-85", ar: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ وَاجْعَلْ لِي لِسَانَ صِدْقٍ فِي الْآخِرِينَ", tr: "Rabbi hab lee hukman wa alhiqnee bis-saaliheen, waj'al lee lisaana sidqin fil-aakhireen", hi: "Ae mere Rab, mujhe hikmat ata farma aur mujhe nek logon mein shaamil kar, aur baad mein aane walon mein meri sachi yaad qaayam kar." },
    { tag: "SURAH AN-NAML", ref: "27:19", ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ", tr: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya", hi: "Ae mere Rab, mujhe taufeeq de ki main teri us naimat ka shukar adaa karoon jo tune mujh par ki hai." },
    { tag: "SURAH AL-QASAS", ref: "28:24", ar: "رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", tr: "Rabbi innee limaa anzalta ilayya min khayrin faqeer", hi: "Ae mere Rab, jo bhalai tu mujh par utaare, main uska mohtaaj hoon." },
    { tag: "SURAH AL-BAQARAH", ref: "2:286", ar: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا", tr: "Rabbanaa laa tu'aakhidhnaa in naseenaa aw akhta'naa", hi: "Ae hamare Rab, agar hum bhool jayein ya galti karein toh humein pakad mat." },
  ],
  shaam: [
    { tag: "SURAH AAL-E-IMRAN", ref: "3:8", ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً", tr: "Rabbanaa laa tuzigh quloobanaa ba'da idh hadaytanaa wa hab lanaa min ladunka rahmah", hi: "Ae hamare Rab, hidayat dene ke baad hamare dilon ko na bhatka, aur humein apni khaas rehmat ata farma." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:147", ar: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا", tr: "Rabbanaghfir lanaa dhunoobanaa wa israafanaa fee amrinaa wa thabbit aqdaamanaa", hi: "Ae hamare Rab, hamare gunaah aur hamari zyaadti maaf kar, aur hamare qadam jamaa de." },
    { tag: "SURAH AAL-E-IMRAN", ref: "3:191", ar: "رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ", tr: "Rabbanaa maa khalaqta haadhaa baatilan subhaanaka faqinaa 'adhaaban-naar", hi: "Ae hamare Rab, tune ye sab bekaar nahi banaya, tu paak hai, humein dozakh ke azaab se bacha." },
    { tag: "SURAH AL-MU'MINUN", ref: "23:29", ar: "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ", tr: "Rabbi anzilnee munzalan mubaarakan wa anta khayrul-munzileen", hi: "Ae mere Rab, mujhe barkat wali jagah utaar, tu sab se behtar utarne wala hai." },
    { tag: "SURAH AL-MU'MINUN", ref: "23:97-98", ar: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ", tr: "Rabbi a'oodhu bika min hamazaatish-shayaateen, wa a'oodhu bika rabbi an yahdhuroon", hi: "Ae mere Rab, main shayateen ke waswason se teri panaah maangta hoon, aur ye bhi ki wo mere paas aayein." },
    { tag: "SURAH ASH-SHU'ARA", ref: "26:78-80", ar: "الَّذِي خَلَقَنِي فَهُوَ يَهْدِينِ وَالَّذِي هُوَ يُطْعِمُنِي وَيَسْقِينِ وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ", tr: "Alladhee khalaqanee fahuwa yahdeen, walladhee huwa yut'imunee wa yasqeen, wa idhaa maridtu fahuwa yashfeen", hi: "Woh jisne mujhe banaya, wahi meri hidayat karta hai, aur wahi mujhe khilaata aur pilaata hai, aur jab main bimaar hota hoon toh wahi shifa deta hai." },
    { tag: "SURAH AN-NAML", ref: "27:15", ar: "الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا عَلَىٰ كَثِيرٍ مِنْ عِبَادِهِ الْمُؤْمِنِينَ", tr: "Alhamdulillaahil-ladhee faddalanaa 'alaa katheerin min 'ibaadihil-mu'mineen", hi: "Sab tareef Allah ke liye jisne humein apne bahut se momin bandon par fazeelat di." },
    { tag: "SURAH AL-BAQARAH", ref: "2:286", ar: "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا", tr: "Rabbanaa wa laa tahmil 'alaynaa isran kamaa hamaltahoo 'alal-ladheena min qablinaa", hi: "Ae hamare Rab, hum par woh bojh na daal jo tune hamse pehle logon par daala tha." },
  ],
  raat: [
    { tag: "SURAH AL-BAQARAH (DUA-E-YUNUS)", ref: "21:87", ar: "لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", tr: "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen", hi: "Tere siwa koi mabood nahi, tu paak hai, beshak main zaalimon mein se tha." },
    { tag: "SURAH IBRAHIM", ref: "14:35", ar: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَنْ نَعْبُدَ الْأَصْنَامَ", tr: "Rabbij'al haadhal-balada aaminan wajnubnee wa baniyya an na'budal-asnaam", hi: "Ae mere Rab, is shehar ko amn wala bana, aur mujhe aur meri aulaad ko buton ki pooja se bacha." },
    { tag: "SURAH AL-FATIHA", ref: "1:6-7", ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", tr: "Ihdinas-siraatal-mustaqeem, siraatal-ladheena an'amta 'alayhim", hi: "Humein seedhe raaste ki hidayat de, un logon ka raasta jin par tune inaam kiya." },
    { tag: "SURAH AL-MUMTAHINA", ref: "60:5", ar: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا", tr: "Rabbanaa laa taj'alnaa fitnatan lilladheena kafaroo waghfir lanaa rabbanaa", hi: "Ae hamare Rab, humein kaafiron ke liye aazmaish na bana, aur humein maaf kar de, ae hamare Rab." },
    { tag: "SURAH AL-HASHR", ref: "59:10", ar: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا", tr: "Rabbanaghfir lanaa wa li-ikhwaaninal-ladheena sabaqoonaa bil-eemaani wa laa taj'al fee quloobinaa ghillal-lilladheena aamanoo", hi: "Ae hamare Rab, humein aur hamare un bhaiyon ko maaf kar jo iman mein humse pehle guzre, aur hamare dilon mein imaan walon ke liye koi kina na rakh." },
    { tag: "SURAH NUH", ref: "71:28", ar: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ", tr: "Rabbighfir lee wa liwaalidayya wa liman dakhala baytiya mu'minan wa lil-mu'mineena wal-mu'minaat", hi: "Ae mere Rab, mujhe, mere maa-baap ko, aur jo momin hokar mere ghar mein aaye usko, aur sab momin mardon aur auraton ko maaf kar de." },
    { tag: "SURAH AL-A'RAF", ref: "7:23", ar: "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", tr: "Rabbanaa zalamnaa anfusanaa wa illam taghfir lanaa wa tarhamnaa lanakoonanna minal-khaasireen", hi: "Ae hamare Rab, humne apni jaan par zulm kiya, agar tu maaf na kare aur reham na kare toh hum ghaate mein rehne walon mein se ho jayenge." },
    { tag: "SURAH AL-BAQARAH", ref: "2:250", ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", tr: "Rabbanaa afrigh 'alaynaa sabran wa thabbit aqdaamanaa wansurnaa 'alal-qawmil-kaafireen", hi: "Ae hamare Rab, hum par sabr utaar, hamare qadam jamaa de, aur hamari madad kar." },
  ],
};

const SLOTS = [
  { key: "subah", label: "Subah", time: "Fajr – Zohar", icon: "🌅" },
  { key: "shaam", label: "Shaam", time: "Asr – Maghrib", icon: "🌇" },
  { key: "raat", label: "Raat", time: "Isha – Sone se pehle", icon: "🌙" },
];

const MOODS = [
  { key: "pareshan", label: "Pareshan", icon: "😟", dua: { tag: "PARESHANI KE LIYE", ref: "65:3", ar: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", tr: "Wa man yatawakkal 'alallaahi fahuwa hasbuh", hi: "Jo Allah par bharosa kare, Allah uske liye kaafi hai." } },
  { key: "shukar", label: "Shukar", icon: "✨", dua: { tag: "SHUKAR KE LIYE", ref: "14:7", ar: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ", tr: "La'in shakartum la-azeedannakum", hi: "Agar tum shukar karoge toh main tumhein aur zyada dunga." } },
  { key: "gussa", label: "Gussa", icon: "😠", dua: { tag: "GUSSA THANDA KARNE KI DUA", ref: "hadees", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", tr: "A'oodhu billaahi minash-shaytaanir-rajeem", hi: "Main Allah ki panaah maangta hoon shaitaan mardood se." } },
  { key: "thaka", label: "Thaka hua", icon: "😪", dua: { tag: "SUKOON AUR TAQAT KI DUA", ref: "9:129", ar: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ", tr: "Hasbiyallaahu laa ilaaha illaa huwa 'alayhi tawakkalt", hi: "Allah hi mere liye kaafi hai, uske siwa koi mabood nahi, maine usi par bharosa kiya." } },
];

// ---------- state ----------
let state = {
  activeSlot: "subah",
  dayOffset: 0,
  view: "home", // home | saved | search | about
  selectedMood: null,
  searchQuery: "",
  savedIds: JSON.parse(localStorage.getItem("roz_saved") || "{}"),
  likedIds: JSON.parse(localStorage.getItem("roz_liked") || "{}"),
  silsila: parseInt(localStorage.getItem("roz_silsila") || "1", 10),
};

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
  for (let i = 0; i < 3; i++) {
    const idx = (startIdx + i * 3) % n;
    picks.push({ ...pool[idx], _originalIndex: idx });
  }
  return picks;
}

function allDuasFlat() {
  const list = [];
  Object.entries(POOLS).forEach(([slotKey, arr]) => {
    arr.forEach((d, i) => list.push({ ...d, id: `${slotKey}-${d.tag}-${i}` }));
  });
  MOODS.forEach((m) => list.push({ ...m.dua, id: `mood-${m.key}` }));
  return list;
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
        ${dua.ref ? `<span class="dua-ref">Quran ${dua.ref}</span>` : ""}
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

function selectMood(key) {
  state.selectedMood = state.selectedMood === key ? null : key;
  render();
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
  document.getElementById("aboutBtn").classList.toggle("active", state.view === "about");

  const savedList = allDuasFlat().filter((d) => state.savedIds[d.id]);
  document.getElementById("savedCount").textContent = savedList.length ? `(${savedList.length})` : "";

  // header title + badges visibility
  const isHome = state.view === "home";
  document.getElementById("pageTitle").textContent =
    state.view === "about" ? "About" :
    state.view === "search" ? "Talaash" :
    state.view === "saved" ? "Roz ki Dua" : "Aaj ki Duayein";

  document.getElementById("homeSubtitle").style.display = isHome ? "block" : "none";
  document.getElementById("silsilaBadge").style.visibility = isHome ? "visible" : "hidden";
  document.getElementById("jhalakBtn").style.visibility = isHome ? "visible" : "hidden";
  document.getElementById("silsilaBadge").textContent = `📿 ${state.silsila} din ka silsila`;

  document.getElementById("moodSection").style.display = isHome ? "block" : "none";
  document.getElementById("slotTabs").style.display = isHome ? "flex" : "none";
  document.getElementById("searchWrap").classList.toggle("hidden", state.view !== "search");
  document.getElementById("aboutWrap").classList.toggle("hidden", state.view !== "about");
  document.getElementById("savedHeader").classList.toggle("hidden", state.view !== "saved");
  document.getElementById("mainContent").style.display = state.view === "about" ? "none" : "block";

  // mood row
  const moodRow = document.getElementById("moodRow");
  moodRow.innerHTML = MOODS.map((m) => `
    <button class="mood-btn ${state.selectedMood === m.key ? "active" : ""}" onclick="selectMood('${m.key}')">
      <div class="mood-icon">${m.icon}</div>
      <div class="mood-text">${m.label}</div>
    </button>`).join("");

  // mood dua
  const moodWrap = document.getElementById("moodDuaWrap");
  if (isHome && state.selectedMood) {
    const m = MOODS.find((x) => x.key === state.selectedMood);
    moodWrap.style.display = "block";
    moodWrap.innerHTML = duaCardHTML({ ...m.dua, id: `mood-${m.key}` });
  } else {
    moodWrap.style.display = "none";
    moodWrap.innerHTML = "";
  }

  // slot tabs
  const slotTabs = document.getElementById("slotTabs");
  slotTabs.innerHTML = SLOTS.map((s) => `
    <button class="slot-btn ${state.activeSlot === s.key ? "active" : ""}" onclick="setSlot('${s.key}')">
      <div class="slot-emoji">${s.icon}</div>
      <div class="slot-name">${s.label}</div>
      <div class="slot-time">${s.time}</div>
    </button>`).join("");

  renderMainContent();
}

function setSlot(key) {
  state.activeSlot = key;
  render();
}

function renderMainContent() {
  const container = document.getElementById("mainContent");
  if (state.view === "about") {
    container.innerHTML = "";
    return;
  }
  if (state.view === "search") {
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) {
      container.innerHTML = `<div class="empty-state">Upar box mein type karke koi bhi dua dhoondein</div>`;
      return;
    }
    const results = allDuasFlat().filter(
      (d) => d.tag.toLowerCase().includes(q) || d.hi.toLowerCase().includes(q) || d.tr.toLowerCase().includes(q)
    );
    container.innerHTML = results.length
      ? results.map(duaCardHTML).join("")
      : `<div class="empty-state">Koi dua nahi mili "${state.searchQuery}" ke liye</div>`;
    return;
  }
  if (state.view === "saved") {
    const savedList = allDuasFlat().filter((d) => state.savedIds[d.id]);
    container.innerHTML = savedList.length
      ? savedList.map(duaCardHTML).join("")
      : `<div class="empty-state"><div class="empty-icon">🌙</div><div class="empty-title">Abhi yahan kuch nahi hai</div>Jo bhi dua dil ko chhoo jaye, uske 📑 button ko dabakar yahan mehfooz kar lein — phir se dekhne ke liye</div>`;
    return;
  }
  // home
  const day = getDayOfYear(state.dayOffset);
  const slotOffsets = { subah: 0, shaam: 3, raat: 6 };
  const pool = POOLS[state.activeSlot];
  const todaysSet = getTodaysThree(pool, slotOffsets[state.activeSlot], day).map((d) => ({
    ...d,
    id: `${state.activeSlot}-${d.tag}-${d._originalIndex}`,
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
