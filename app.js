// ==================================================
// نظام البطولة أون - التطبيق الرئيسي
// ==================================================

// تعريف المتغيرات العامة
let appData = {};
let currentTeam = 'wac'; // الافتراضي الوداد
let currentTeamData = {};
let standingsData = [];

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    const teamElement = document.getElementById('team-app');
    
    if (teamElement) {
        currentTeam = teamElement.getAttribute('data-team') || 'wac';
    }
    
    // تحميل البيانات
    loadData();
});

// دالة تحميل البيانات من JSON
async function loadData() {
    try {
        // تحميل البيانات من ملف محلي
        appData = await fetchData();
        
        // تأكد من وجود الفريق المطلوب
        if (!appData.teams || !appData.teams[currentTeam]) {
            throw new Error(`الفريق ${currentTeam} غير موجود في البيانات`);
        }
        
        // تخزين بيانات الفريق الحالي
        currentTeamData = appData.teams[currentTeam];
        
        // معالجة الترتيب
        processStandings();
        
        // عرض الواجهة
        renderInterface();
        
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
        document.getElementById('team-app').innerHTML = `
            <div style="text-align: center; padding: 40px; color: #d2151e;">
                <h3>⚠️ حدث خطأ في تحميل البيانات</h3>
                <p>${error.message}</p>
                <p>يرجى المحاولة لاحقاً</p>
            </div>
        `;
    }
}

// جلب البيانات (يمكن تغييرها للقراءة من ملف خارجي)
async function fetchData() {
    // إذا كان هناك ملف data.js خارجي
    if (typeof window.appJSONData !== 'undefined') {
        return window.appJSONData;
    }
    
    // قراءة من ملف محلي
    try {
        const response = await fetch('data.js');
        const text = await response.text();
        // إزالة أي تعليقات أو نص خارج JSON
        const jsonStart = text.indexOf('{');
        const jsonEnd = text.lastIndexOf('}') + 1;
        const jsonStr = text.substring(jsonStart, jsonEnd);
        return JSON.parse(jsonStr);
    } catch (e) {
        // استخدام البيانات المحلية
        return getDefaultData();
    }
}

// البيانات الافتراضية
function getDefaultData() {
    // هنا يمكن وضع البيانات الأساسية إذا فشل التحميل
    return {
        competition: {
            name: "بطولة الرابطة المحترفة المغربية",
            season: "2024-2025",
            totalRounds: 30,
            currentRound: 8,
            lastUpdated: "2024-11-30T14:30:00Z"
        },
        teams: {},
        standings: []
    };
}

// معالجة بيانات الترتيب
function processStandings() {
    if (!appData.standings || !Array.isArray(appData.standings)) {
        console.error('بيانات الترتيب غير صالحة');
        return;
    }
    
    // نسخ البيانات
    standingsData = [...appData.standings];
    
    // ترتيب الفرق حسب النقاط ثم فارق الأهداف
    standingsData.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const diffA = a.goalsFor - a.goalsAgainst;
        const diffB = b.goalsFor - b.goalsAgainst;
        if (diffB !== diffA) return diffB - diffA;
        return b.goalsFor - a.goalsFor;
    });
    
    // إضافة الترتيب النهائي
    standingsData.forEach((team, index) => {
        team.rank = index + 1;
        team.teamInfo = appData.teams[team.teamId];
        team.goalDifference = team.goalsFor - team.goalsAgainst;
    });
}

// عرض الواجهة الرئيسية
function renderInterface() {
    const container = document.getElementById('team-app');
    
    // إضافة CSS
    const css = generateCSS();
    
    // بناء HTML
    let html = `
        ${css}
        <div id="elbotolaon-widget-container">
            ${renderTeamHeader()}
            ${renderTeamStats()}
            ${renderStandingsTable()}
            ${renderMatchesSection()}
            ${renderSquadSection()}
            ${renderTransfersSection()}
        </div>
    `;
    
    container.innerHTML = html;
    
    // تفعيل المكونات التفاعلية
    setupInteractions();
}

// إنشاء CSS
function generateCSS() {
    return `
    <style>
        /* =========================================
           نظام البطولة أون - الأنماط الرئيسية
           ========================================= */
        #elbotolaon-widget-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #fff;
            color: #333;
            direction: rtl;
            text-align: right;
            font-size: 16px;
            line-height: 1.6;
            width: 100%;
            box-sizing: border-box;
        }
        
        #elbotolaon-widget-container * {
            box-sizing: border-box;
        }
        
        /* Layout */
        .eb-section { margin-bottom: 25px; border: 1px solid #eee; border-radius: 8px; overflow: hidden; background: #fff; }
        .eb-header { padding: 15px 20px; border-bottom: 2px solid #f5f5f5; display: flex; align-items: center; justify-content: space-between; }
        .eb-title { font-size: 20px; font-weight: 700; border-right: 5px solid #d2151e; padding-right: 12px; margin: 0; color: #333; }

        /* Header */
        .eb-team-header { padding: 25px; display: flex; align-items: center; gap: 20px; background: #fdfdfd; flex-wrap: wrap; }
        .eb-team-logo { width: 100px; height: 100px; object-fit: contain; }
        
        /* Ranking Table */
        .eb-ranking-scroll { width: 100%; overflow-x: auto; }
        #elbotolaon-widget-container table.ranking-table { width: 100%; border-collapse: collapse !important; margin: 0 !important; min-width: 600px; }
        #elbotolaon-widget-container table.ranking-table th,
        #elbotolaon-widget-container table.ranking-table td {
            padding: 12px 5px !important; text-align: center !important; border-bottom: 1px solid #f0f0f0 !important; 
            white-space: nowrap; font-size: 15px !important;
        }
        .col-team { text-align: right !important; width: 30%; font-weight: 600; }
        .team-flex { display: flex; align-items: center; gap: 8px; }
        .team-flex img { width: 24px; height: 24px; }
        .rank-badge { display: inline-block; width: 26px; height: 26px; line-height: 26px; border-radius: 50%; color: #fff; font-size: 13px; background: #ccc; }
        .rank-1, .rank-2 { background: #28a745; } .rank-3 { background: #007bff; } .rank-15, .rank-16 { background: #dc3545; }
        .points-cell { font-weight: bold; color: #000; background: #f9f9f9; font-size: 16px !important; }

        /* Matches */
        .eb-schedule-header { padding: 15px; background: #f8f8f8; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
        .eb-select { padding: 8px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; width: 150px; }
        .match-row { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #f5f5f5; flex-wrap: wrap; }
        .m-date { width: 75px; font-size: 13px; color: #555; font-weight:bold; text-align: center; border-left: 1px solid #eee; padding-left: 10px; }
        .m-info { flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 0 10px; min-width: 200px; }
        .m-team { width: 35%; display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 14px; }
        .m-team.away { justify-content: flex-end; flex-direction: row-reverse; }
        .m-team img { width: 28px; height: 28px; }
        .m-res { background: #eee; padding: 5px 10px; border-radius: 6px; font-weight: bold; font-size: 15px; min-width: 50px; text-align: center; }
        .m-stadium { font-size: 11px; color: #777; background: #f9f9f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #eee; white-space: nowrap; margin-top: 5px; }

        /* Squad Grid */
        .eb-squad-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; padding: 20px; }
        .squad-card { border: 1px solid #eee; border-radius: 8px; background: #fff; cursor: pointer; transition: all 0.2s; overflow: hidden; position: relative; }
        .squad-card:hover { border-color: #d2151e; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .squad-card.active { border: 1px solid #d2151e; background: #fffafa; }
        
        .card-main { display: flex; align-items: center; padding: 12px; }
        .card-main img { width: 55px; height: 55px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-left: 15px; object-fit: cover; }
        .card-txt h4 { margin: 0; font-size: 15px; font-weight: 700; color: #333; }
        .card-txt p { margin: 4px 0 0; font-size: 13px; color: #888; text-transform: uppercase; }
        
        .card-stats { display: none; border-top: 1px solid #eee; padding: 15px; background: #fff; animation: slideOpen 0.3s ease; }
        .squad-card.active .card-stats { display: block; }
        .cs-row { display: flex; justify-content: space-around; text-align: center; }
        .cs-box span { display: block; }
        .cs-val { font-weight: bold; font-size: 16px; color: #d2151e; }
        .cs-lbl { font-size: 12px; color: #999; }

        @keyframes slideOpen { from { opacity: 0; max-height: 0; } to { opacity: 1; max-height: 100px; } }

        /* Transfers */
        .transfers-scroll { overflow-x: auto; width: 100%; }
        .transfers-table { width: 100%; border-collapse: collapse; font-size: 14px; min-width: 600px; }
        .transfers-table td { padding: 12px; border-bottom: 1px solid #eee; vertical-align: middle; }
        .transfers-table thead td { font-weight: bold; background: #fbfbfb; color: #555; font-size: 15px; }
        .t-player img { width: 28px; height: 28px; border-radius: 50%; margin-left: 8px; vertical-align: middle; }
        .t-club img { width: 24px; height: 24px; margin-left: 8px; vertical-align: middle; }
        .t-type { font-weight: bold; color: #28a745; font-size: 13px; }

        /* Mobile Optimization */
        @media (max-width: 768px) {
            .hide-on-mobile { display: none !important; }
            .hide-trans-mobile { display: none !important; }
            .col-team { width: 60% !important; }
            #elbotolaon-widget-container table.ranking-table { min-width: 100%; }
            .m-stadium { display: none; }
            .eb-team-header { flex-direction: column; text-align: center; }
            
            .eb-squad-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; padding: 15px; }
            .card-main { padding: 10px; }
            .card-main img { width: 45px; height: 45px; margin-left: 10px; }
        }

        @media (max-width: 480px) {
            .eb-squad-grid { grid-template-columns: 1fr; }
            .m-team { width: 40%; font-size: 14px; }
            .m-team img { width: 28px; height: 28px; }
        }
    </style>
    `;
}

// عرض رأس الفريق
function renderTeamHeader() {
    return `
    <div class="eb-section">
        <div class="eb-team-header">
            <img src="${currentTeamData.logo}" class="eb-team-logo" alt="${currentTeamData.name}">
            <div>
                <h1 style="margin:0 0 10px; color:#d2151e; font-size:32px;">${currentTeamData.name}</h1>
                <div style="font-size:15px; color:#555;">
                    <p style="margin:5px 0;"><strong>تاريخ التأسيس:</strong> ${currentTeamData.founded}</p>
                    <p style="margin:5px 0;"><strong>البلد:</strong> المغرب 🇲🇦</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

// عرض إحصائيات الفريق
function renderTeamStats() {
    const teamStanding = standingsData.find(t => t.teamId === currentTeam);
    
    if (!teamStanding) return '';
    
    return `
    <div class="eb-section">
        <div class="eb-team-header" style="padding: 15px;">
            <div style="flex:1; text-align:center;">
                <div style="font-size:24px; font-weight:bold; color:#d2151e;">المركز ${teamStanding.rank || '--'}</div>
                <div style="font-size:14px; color:#666;">في الترتيب</div>
            </div>
        </div>
        <div class="eb-stats-wrapper" style="display: flex; flex-wrap: wrap; border-top: 1px solid #eee; background: #fbfbfb;">
            <div class="eb-stat-item" style="flex: 1; min-width: 100px; text-align: center; padding: 20px 5px; border-left: 1px solid #eee;">
                <span style="font-size: 30px; font-weight: 800; color: #333; display: block; margin-bottom: 5px;">${teamStanding.played || 0}</span>
                <span style="font-size: 14px; color: #666; display: block; font-weight: 600;">مباريات</span>
            </div>
            <div class="eb-stat-item" style="flex: 1; min-width: 100px; text-align: center; padding: 20px 5px; border-left: 1px solid #eee;">
                <span style="font-size: 30px; font-weight: 800; color: #333; display: block; margin-bottom: 5px;">${teamStanding.goalsFor || 0}</span>
                <span style="font-size: 14px; color: #666; display: block; font-weight: 600;">أهداف</span>
            </div>
            <div class="eb-stat-item" style="flex: 1; min-width: 100px; text-align: center; padding: 20px 5px; border-left: 1px solid #eee;">
                <span style="font-size: 30px; font-weight: 800; color: #333; display: block; margin-bottom: 5px;">${teamStanding.points || 0}</span>
                <span style="font-size: 14px; color: #666; display: block; font-weight: 600;">نقاط</span>
            </div>
            <div class="eb-stat-item" style="flex: 1; min-width: 100px; text-align: center; padding: 20px 5px;">
                <span style="font-size: 30px; font-weight: 800; color: #333; display: block; margin-bottom: 5px;">${teamStanding.goalDifference > 0 ? '+' : ''}${teamStanding.goalDifference || 0}</span>
                <span style="font-size: 14px; color: #666; display: block; font-weight: 600;">فارق الأهداف</span>
            </div>
        </div>
    </div>
    `;
}

// عرض جدول الترتيب
function renderStandingsTable() {
    let rows = '';
    
    standingsData.forEach((team) => {
        const isCurrentTeam = team.teamId === currentTeam;
        const rowStyle = isCurrentTeam ? 'style="background:#e6ffe6;"' : '';
        
        let rankClass = '';
        if (team.rank === 1 || team.rank === 2) rankClass = 'rank-1';
        else if (team.rank === 3) rankClass = 'rank-3';
        else if (team.rank === 15 || team.rank === 16) rankClass = 'rank-15';
        
        rows += `
        <tr ${rowStyle}>
            <td><span class="rank-badge ${rankClass}">${team.rank}</span></td>
            <td class="col-team"><div class="team-flex"><img src="${team.teamInfo.logo}"><span>${team.teamInfo.name}</span></div></td>
            <td>${team.played}</td>
            <td class="hide-on-mobile">${team.wins}</td>
            <td class="hide-on-mobile">${team.draws}</td>
            <td class="hide-on-mobile">${team.losses}</td>
            <td class="hide-on-mobile">${team.goalsFor}</td>
            <td class="hide-on-mobile">${team.goalsAgainst}</td>
            <td class="hide-on-mobile">${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
            <td class="points-cell">${team.points}</td>
        </tr>
        `;
    });
    
    return `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">الترتيب العام</h3></div>
        <div class="eb-ranking-scroll">
            <table class="ranking-table">
                <thead><tr><th>#</th><th>الفريق</th><th>لعب</th><th class="hide-on-mobile">فاز</th><th class="hide-on-mobile">تعادل</th><th class="hide-on-mobile">خسر</th><th class="hide-on-mobile">له</th><th class="hide-on-mobile">عليه</th><th class="hide-on-mobile">+/-</th><th>ن</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
    </div>
    `;
}

// عرض قسم المباريات
function renderMatchesSection() {
    // إنشاء خيارات الجولات
    let roundOptions = '';
    const totalRounds = appData.competition.totalRounds || 30;
    
    for (let i = 1; i <= totalRounds; i++) {
        const selected = i === appData.competition.currentRound ? 'selected' : '';
        roundOptions += `<option value="${i}" ${selected}>الجولة ${i}</option>`;
    }
    
    return `
    <div class="eb-section">
        <div class="eb-schedule-header">
            <h3 class="eb-title">جدول المباريات</h3>
            <select id="roundSelect" class="eb-select" onchange="loadMatches(this.value)">
                ${roundOptions}
            </select>
        </div>
        <div id="matchesContainer">
            <!-- سيتم تحميل المباريات هنا -->
        </div>
    </div>
    `;
}

// عرض قسم التشكيلة
function renderSquadSection() {
    const players = appData.players[currentTeam] || [];
    
    if (players.length === 0) {
        return `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">تشكيلة الفريق</h3></div>
            <div style="padding: 30px; text-align: center; color: #666;">
                لا توجد بيانات للاعبين حالياً
            </div>
        </div>
        `;
    }
    
    let playersHTML = '';
    
    players.forEach((player, index) => {
        playersHTML += `
        <div class="squad-card" id="pcard-${index}" onclick="toggleCard(${index})">
            <div class="card-main">
                <img src="${player.image}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                <div class="card-txt">
                    <h4>${player.name}</h4>
                    <p>${player.position}</p>
                </div>
            </div>
            <div class="card-stats">
                <div class="cs-row">
                    <div class="cs-box"><span class="cs-val">${player.stats?.matches || 0}</span><span class="cs-lbl">مباريات</span></div>
                    <div class="cs-box"><span class="cs-val">${player.stats?.goals || 0}</span><span class="cs-lbl">أهداف</span></div>
                    <div class="cs-box"><span class="cs-val">${player.stats?.yellowCards || 0}</span><span class="cs-lbl">صفراء</span></div>
                </div>
            </div>
        </div>
        `;
    });
    
    return `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">تشكيلة الفريق (${players.length} لاعب)</h3></div>
        <div class="eb-squad-grid" id="squadContainer">
            ${playersHTML}
        </div>
    </div>
    `;
}

// عرض قسم الانتقالات
function renderTransfersSection() {
    const transfers = appData.transfers?.[currentTeam] || [];
    
    if (transfers.length === 0) {
        return `
        <div class="eb-section">
            <div class="eb-header"><h3 class="eb-title">الانتقالات والإعارات</h3></div>
            <div style="padding: 30px; text-align: center; color: #666;">
                لا توجد بيانات للانتقالات حالياً
            </div>
        </div>
        `;
    }
    
    let transfersHTML = '';
    
    transfers.forEach(transfer => {
        const fromTeam = appData.teams[transfer.fromTeam] || { name: transfer.fromTeam, logo: '' };
        const toTeam = appData.teams[transfer.toTeam] || { name: transfer.toTeam, logo: '' };
        
        transfersHTML += `
        <tr>
            <td class="hide-trans-mobile">${formatDateShort(transfer.date)}</td>
            <td class="t-player"><img src="${transfer.playerImage}"> ${transfer.playerName}</td>
            <td class="t-club"><img src="${fromTeam.logo}"> ${fromTeam.name}</td>
            <td class="t-club"><img src="${toTeam.logo}"> ${toTeam.name}</td>
            <td class="t-type hide-trans-mobile">${transfer.type === 'transfer' ? 'انتقال' : 'حر'}</td>
        </tr>
        `;
    });
    
    return `
    <div class="eb-section">
        <div class="eb-header"><h3 class="eb-title">الانتقالات والإعارات</h3></div>
        <div class="transfers-scroll">
            <table class="transfers-table">
                <thead><tr><td class="hide-trans-mobile">التاريخ</td><td>اللاعب</td><td>من</td><td>إلى</td><td class="hide-trans-mobile">النوع</td></tr></thead>
                <tbody>${transfersHTML}</tbody>
            </table>
        </div>
    </div>
    `;
}

// تهيئة التفاعلات
function setupInteractions() {
    // تحميل المباريات الأولى
    loadMatches(appData.competition.currentRound);
}

// دالة تحميل المباريات
function loadMatches(roundNumber) {
    const matchesList = document.getElementById('matchesContainer');
    
    if (!matchesList) return;
    
    const matches = appData.matches?.rounds?.[roundNumber] || [];
    
    if (matches.length === 0) {
        matchesList.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
                <p>لا توجد مباريات في الجولة ${roundNumber}</p>
            </div>
        `;
        return;
    }
    
    let matchesHTML = '';
    
    matches.forEach(match => {
        const homeTeam = appData.teams[match.homeTeam];
        const awayTeam = appData.teams[match.awayTeam];
        
        // تنسيق التاريخ
        const matchDate = formatDateShort(match.date);
        const timeParts = match.time.split(':');
        const timeFormatted = `${timeParts[0]}:${timeParts[1]}`;
        
        matchesHTML += `
        <div class="match-row">
            <div class="m-date">${matchDate}<br>${timeFormatted}</div>
            <div class="m-info">
                <div class="m-team"><img src="${homeTeam.logo}"> ${homeTeam.name}</div>
                <div class="m-res">${match.score || '--:--'}</div>
                <div class="m-team away"><img src="${awayTeam.logo}"> ${awayTeam.name}</div>
            </div>
            <div class="m-stadium">${match.venue || '--'}</div>
        </div>
        `;
    });
    
    matchesList.innerHTML = matchesHTML;
}

// تفعيل/إلغاء تفعيل بطاقة اللاعب
function toggleCard(index) {
    const card = document.getElementById(`pcard-${index}`);
    const isActive = card.classList.contains('active');
    
    // إغلاق جميع البطاقات أولاً
    document.querySelectorAll('.squad-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // فتح البطاقة المحددة إذا لم تكن مفتوحة
    if (!isActive) {
        card.classList.add('active');
    }
}

// تنسيق التاريخ قصير
function formatDateShort(dateString) {
    if (!dateString) return '--/--';
    
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    return `${day}/${month}`;
}

// جعل الدوال متاحة عالمياً
window.loadMatches = loadMatches;
window.toggleCard = toggleCard;