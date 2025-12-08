const appJSONData = {
  "competition": {
    "name": "بطولة الرابطة المحترفة المغربية",
    "season": "2024-2025",
    "totalRounds": 30,
    "currentRound": 8
  },
  "teams": {
    "wac": { "id": "wac", "name": "الوداد الرياضي", "shortName": "الوداد", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", "city": "الدار البيضاء", "founded": "1937" },
    "far": { "id": "far", "name": "الجيش الملكي", "shortName": "الجيش", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png" },
    "mas": { "id": "mas", "name": "المغرب الفاسي", "shortName": "المغرب", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png" },
    "rca": { "id": "rca", "name": "الرجاء الرياضي", "shortName": "الرجاء", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png" },
    "codm": { "id": "codm", "name": "النادي المكناسي", "shortName": "مكناس", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png" },
    "rsb": { "id": "rsb", "name": "نهضة بركان", "shortName": "بركان", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png" },
    "od": { "id": "od", "name": "أولمبيك الدشيرة", "shortName": "الدشيرة", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png" },
    "dhj": { "id": "dhj", "name": "الدفاع الجديدي", "shortName": "الدفاع", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png" },
    "irt": { "id": "irt", "name": "اتحاد طنجة", "shortName": "طنجة", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png" },
    "rcz": { "id": "rcz", "name": "نهضة الزمامرة", "shortName": "الزمامرة", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png" },
    "husa": { "id": "husa", "name": "حسنية أكادير", "shortName": "أكادير", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png" },
    "kacm": { "id": "kacm", "name": "الكوكب المراكشي", "shortName": "الكوكب", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png" },
    "fus": { "id": "fus", "name": "الفتح الرياضي", "shortName": "الفتح", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png" },
    "usym": { "id": "usym", "name": "يعقوب المنصور", "shortName": "المنصور", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png" },
    "uts": { "id": "uts", "name": "إتحاد تواركة", "shortName": "تواركة", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png" },
    "ocs": { "id": "ocs", "name": "أولمبيك آسفي", "shortName": "آسفي", "logo": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png" }
  },
  "standings": [
    { "teamId": "wac", "played": 8, "wins": 6, "draws": 2, "losses": 0, "goalsFor": 14, "goalsAgainst": 5, "points": 20 },
    { "teamId": "far", "played": 8, "wins": 5, "draws": 3, "losses": 0, "goalsFor": 14, "goalsAgainst": 1, "points": 18 },
    { "teamId": "mas", "played": 8, "wins": 4, "draws": 4, "losses": 0, "goalsFor": 11, "goalsAgainst": 2, "points": 16 },
    { "teamId": "rca", "played": 7, "wins": 4, "draws": 3, "losses": 0, "goalsFor": 7, "goalsAgainst": 1, "points": 15 },
    { "teamId": "codm", "played": 8, "wins": 3, "draws": 3, "losses": 2, "goalsFor": 6, "goalsAgainst": 6, "points": 12 },
    { "teamId": "rsb", "played": 6, "wins": 3, "draws": 2, "losses": 1, "goalsFor": 13, "goalsAgainst": 7, "points": 11 },
    { "teamId": "od", "played": 8, "wins": 3, "draws": 2, "losses": 3, "goalsFor": 8, "goalsAgainst": 9, "points": 11 },
    { "teamId": "dhj", "played": 8, "wins": 2, "draws": 3, "losses": 3, "goalsFor": 6, "goalsAgainst": 11, "points": 9 },
    { "teamId": "irt", "played": 8, "wins": 1, "draws": 5, "losses": 2, "goalsFor": 7, "goalsAgainst": 11, "points": 8 },
    { "teamId": "rcz", "played": 7, "wins": 2, "draws": 2, "losses": 3, "goalsFor": 5, "goalsAgainst": 9, "points": 8 },
    { "teamId": "husa", "played": 8, "wins": 2, "draws": 1, "losses": 5, "goalsFor": 6, "goalsAgainst": 14, "points": 7 },
    { "teamId": "kacm", "played": 8, "wins": 2, "draws": 1, "losses": 5, "goalsFor": 8, "goalsAgainst": 9, "points": 7 },
    { "teamId": "fus", "played": 8, "wins": 2, "draws": 1, "losses": 5, "goalsFor": 7, "goalsAgainst": 10, "points": 7 },
    { "teamId": "usym", "played": 8, "wins": 1, "draws": 3, "losses": 4, "goalsFor": 8, "goalsAgainst": 11, "points": 6 },
    { "teamId": "uts", "played": 8, "wins": 0, "draws": 5, "losses": 3, "goalsFor": 7, "goalsAgainst": 12, "points": 5 },
    { "teamId": "ocs", "played": 8, "wins": 1, "draws": 2, "losses": 5, "goalsFor": 6, "goalsAgainst": 15, "points": 5 }
  ],
  "players": {
    "wac": [
      { "name": "يوسف المطيع", "position": "حارس مرمى", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", "matches": 8, "goals": 0 },
      { "name": "جمال حركاس", "position": "دفاع", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqLwK5j1oH-4M5Zq0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o0l6jQ5z5o/s1600/%D8%AC%D9%85%D8%A7%D9%84%20%D8%AD%D8%B1%D9%83%D8%A7%D8%B3.png", "matches": 8, "goals": 1 }
    ]
  },
  "matches": {
      "rounds": {},
      "teamMatches": {}
  }
};
