// Configuration
const ANNEE_DE_DEPART = 2024;
const MOIS_ANNIVERSAIRE = 8; // Septembre (0-indexé)
const JOUR_ANNIVERSAIRE = 27;

// Messages avec designs personnalisés
const messages = [
    {
        text: " Ma petite boule de vie, comme tu aimes bien m'appeler ainsi. Aujourd'hui est un nouveau jour, un nouveau 27 septembre, mais toujours avec la fille que j'aime depuis maintenant 5 ans. Aujourd'hui je te souhaite de prendre 5min de t'asseoir, et de repenser à tout ce que tu a pu réaliser dans ta vie, et également dans celle des autres, Pour moi tu es une grande Dame avec un grand coeur. Joyeux Anniversaires ma raison de vivre 🎉",
        theme: {
            gradient: "from-pink-400 via-red-400 to-yellow-400",
            bg: "from-pink-50 via-red-50 to-yellow-50",
            cardBg: "from-pink-100 to-red-100",
            icon: "🎂",
            animation: "animate-bounce"
        }
    },
    {
        text: " Genre tu a grandis encore, toi la mère de l'acapella, la femme d'affaire que tu penses être hein .Celle là meme qui a gagner le prix Nobel 2024 de la bonne conduite au Badenya ✨. Bon bref laissons atalakou la comme ça maintenant. Aujourd'hui je voudrais juste te dire de faire,ce qui te plais. Je parle de la danse, du tricot(si tu sais pas ce que ça veut dire donc faut aller voir sur Gouligoule < Google si t'a pas la ref >), la coiffure,le fait de faire des bracelets, ce sont des choses qui te plaisent vraiment. Sans oublier la sociologie, ou la psychologie. Tu aimes prendre soin des gens, alors continues ainsi, mais tout en prenant bien soin de toi également. Ta vie est toute aussi importante que celle des autres. Ce sont ces choses la meme qui font de toi EMMANUELLA, alors ne laisse jamais une personne t'empêcher  d'être  toi ma grande. Cette vie, elle est très courte, alors profites de chaque secondes de ta vie, et non seulement de cette journéé ",
        theme: {
            gradient: "from-purple-500 via-blue-500 to-indigo-600",
            bg: "from-purple-50 via-blue-50 to-indigo-50",
            cardBg: "from-purple-100 to-blue-100",
            icon: "⭐",
            animation: "animate-pulse"
        }
    },
    {
        text: "Ma petiiiiiiiiiiiiiiiiiiiiitee 
            Encore un tour de 365 jours, mais dis donc le temps passe vraiment vite.
    J'espère que tu prends vraiment bien soin de toi et que tu continues à faire ce qui te passionne.
    Aujourd'hui la je vais pas trop parler, je veux juste te dire d'aller apprendre l'anglais. Faut prendre ça au sérieux hein... c'est un homme d'affaire, un grand business man qui manies la langue de shakespeares comme son katana, qui est entrain de parler coomme ça la. 
    Donc écoutes bien tonton, sinon quand on va partir à Dubai la je ne vais pas jouer le traducteur pour toi heinnnnn, ah et puis si tu comprends pas anglais meme d'ailleurs tu vas pas me suivre, donc fais en ta résolution à partir d'aujourd'hui: APPRENDRE L'ANGLAIS (la langue de DOMINIQUE )😊
    JUSTE PASSE UNE BONNE JOURNNEE MA BELLEUHHHHHHHHH ",
        theme: {
            gradient: "from-yellow-400 via-orange-400 to-red-400",
            bg: "from-yellow-50 via-orange-50 to-red-50",
            cardBg: "from-yellow-100 to-orange-100",
            icon: "☀️",
            animation: "animate-spin"
        }
    },
    {
        text: "Chaque année avec toi est un cadeau précieux que je chéris 🎁",
        theme: {
            gradient: "from-emerald-400 via-teal-400 to-cyan-400",
            bg: "from-emerald-50 via-teal-50 to-cyan-50",
            cardBg: "from-emerald-100 to-teal-100",
            icon: "🎀",
            animation: "animate-wiggle"
        }
    },
    {
        text: "Tu vieillis comme un bon vin... de mieux en mieux avec le temps ! 🍷",
        theme: {
            gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
            bg: "from-violet-50 via-purple-50 to-fuchsia-50",
            cardBg: "from-violet-100 to-purple-100",
            icon: "🍇",
            animation: "animate-bounce"
        }
    }
    // Ajoute tes autres messages ici...
];

function calculateMessage(date = new Date()) {
    const anneeActuelle = date.getFullYear();
    const moisActuel = date.getMonth();
    const jourActuel = date.getDate();

    let decalageAnnee;
    if (moisActuel > MOIS_ANNIVERSAIRE || (moisActuel === MOIS_ANNIVERSAIRE && jourActuel >= JOUR_ANNIVERSAIRE)) {
        decalageAnnee = anneeActuelle - ANNEE_DE_DEPART;
    } else {
        decalageAnnee = (anneeActuelle - 1) - ANNEE_DE_DEPART;
    }

    if (decalageAnnee < 0) decalageAnnee = 0;
    const indexMessage = decalageAnnee % messages.length;
    
    return messages[indexMessage] || messages[0];
}

function renderMessage() {
    const messageData = calculateMessage();
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <div class="min-h-screen bg-gradient-to-br ${messageData.theme.bg} flex items-center justify-center p-4 transition-all duration-1000">
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div class="mb-6">
                    <div class="w-20 h-20 bg-gradient-to-r ${messageData.theme.gradient} rounded-full flex items-center justify-center mx-auto mb-4 ${messageData.theme.animation}">
                        <span class="text-3xl">${messageData.theme.icon}</span>
                    </div>
                    <h1 class="text-2xl font-bold text-gray-800 mb-2">Un Message Spécial</h1>
                    <p class="text-gray-600 text-sm">Pour une personne spéciale</p>
                </div>
                
                <div class="bg-gradient-to-r ${messageData.theme.cardBg} rounded-2xl p-6 mb-6 shadow-inner">
                    <p class="text-lg text-gray-800 leading-relaxed font-medium">
                        ${messageData.text}
                    </p>
                </div>

                <div class="text-xs text-gray-400">
                    Ce message change chaque année ✨
                </div>
            </div>
        </div>
    `;
}

// Initialiser la page
document.addEventListener('DOMContentLoaded', renderMessage);
