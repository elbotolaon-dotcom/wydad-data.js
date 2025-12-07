// بيانات الوداد الرياضي - الموسم 2024-2025
// يتم استدعاء هذا الملف من CDN

const wydadData = {
  teamInfo: {
    name: "الوداد الرياضي",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png",
    founded: "1937",
    city: "الدار البيضاء",
    coach: "أديل كاظري"
  },

  standingsData: [
    {rank:1, team:"الوداد الرياضي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", p:8, w:6, d:2, l:0, gf:14, ga:5, diff:"+9", pts:20},
    {rank:2, team:"الجيش الملكي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6aa3FtbYHbHMZEhj-bAuBYL6fCkhm9U1t8T_L0bXdw8nAyzN4MVvtcSGVbrzB0f-npw___4ghtfUkwj4LDBW5HdRFesvedqj4m-Ged4QKqb2sqk-liO2LQiQ3GBSwmKB0MK2oLjaMc7a4oRpr8-glUuYyCjkv_toLfkS9PxHD45XvWMBonsb6nyKAf_0/s1600/far%20elbotolaon.png", p:8, w:5, d:3, l:0, gf:14, ga:1, diff:"+13", pts:18},
    {rank:3, team:"المغرب الفاسي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-igka8JGdMxooELJ6fdG65ds3byXt37bQtGDJ8QRhXwoYR4ieyN0sh1v_FjPevP17byg9akoq9isvyjwdzGlMRBcREzFxILSb3BIvqnPDi0TcYYS6ChwnkwHLC5uatbAHU4WsxLEPltKZ8Bc87cJvFrDeuQZyB085AZsluC47LZTWNwOMQxPCY3sxVhY/s1600/fes%20elbotolaon.png", p:8, w:4, d:4, l:0, gf:11, ga:2, diff:"+9", pts:16},
    {rank:4, team:"الرجاء الرياضي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", p:7, w:4, d:3, l:0, gf:7, ga:1, diff:"+6", pts:15},
    {rank:5, team:"النادي المكناسي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", p:8, w:3, d:3, l:2, gf:6, ga:6, diff:"0", pts:12},
    {rank:6, team:"نهضة بركان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc5JzEJVz_dOr2253YustqAKuvDosJ9JCQQByClQCJKQlgxdYIvZbbfutqFFQljifMX9z4ZgjkeTWEF-PUsPU-PIrQEM8WXEIpqg2Dg26zCtwVmJBOanF4ZoOMJzeBLb_RoLDUv-d3uwz4v2hCSRXZKoTuwMfyS7YCd9F8pWiPhfVoSeqCUbKG5CZG5cE/s1600/barkan%20elbotolaon.png", p:6, w:3, d:2, l:1, gf:13, ga:7, diff:"+6", pts:11},
    {rank:7, team:"أولمبيك الدشيرة", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5fMzOUOcDxRkI5xZON3V3KJpxTIzPp_je_QxIFEwK25igITEN_okWuuhiyYH_43NCWY3ubS1hh91hIqX0H7wObc-YGgdUYmtmbaTNxCXZeWErOdBPNFfr2TgvWE9YTJ_mRVQQahi-cYwMGbaN0nAyOh1ogc5FOReFBeZFJ8hXAc_tuyYico3z3AzL4X4/s1600/dchira%20elbotolaon.png", p:8, w:3, d:2, l:3, gf:8, ga:9, diff:"-1", pts:11},
    {rank:8, team:"الدفاع الجديدي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi604V7G-TMAR-7ry4jbAw39AkcufYfEQt6mDoiQjJVMiHo7-qL4Avgf7Gl-8n-tUFGuTVLYBR5vL5ecjeOwBjEQi8CQ-5bHwMtlsy8iA3Q8iVFrmmn624fNS_hsbShF1hsE_MWXSNtN3ycw2bt9I28qumLlFeMlj_B0dqmSliogS2HviI0qYz72pCMsdU/s1600/difa3%20jdidi%20elbotolaon.png", p:8, w:2, d:3, l:3, gf:6, ga:11, diff:"-5", pts:9},
    {rank:9, team:"اتحاد طنجة", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", p:8, w:1, d:5, l:2, gf:7, ga:11, diff:"-4", pts:8},
    {rank:10, team:"نهضة الزمامرة", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", p:7, w:2, d:2, l:3, gf:5, ga:9, diff:"-4", pts:8},
    {rank:11, team:"حسنية أكادير", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", p:8, w:2, d:1, l:5, gf:6, ga:14, diff:"-8", pts:7},
    {rank:12, team:"الكوكب المراكشي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", p:8, w:2, d:1, l:5, gf:8, ga:9, diff:"-1", pts:7},
    {rank:13, team:"الفتح الرياضي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY8Xl-VjUnPns3iQjGGnQxc4wFdtX-iG3iUPNh2KbWXx4gWo4D7Ai30h-xheqe28GmiHtCugMptmzCZJJgbS0R8SMLDRjD7wNXHY2hVgbXPEA2uDk2LTGlrlXaksyK4HdJQI6JXkJRISNL_J_BxJbazT33HJfOzcJuhCRmjY1QeIpLHpdlRxzG6-_Phng/s1600/fath%20raba%20elbotolaon.png", p:8, w:2, d:1, l:5, gf:7, ga:10, diff:"-3", pts:7},
    {rank:14, team:"يعقوب المنصور", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", p:8, w:1, d:3, l:4, gf:8, ga:11, diff:"-3", pts:6},
    {rank:15, team:"إتحاد تواركة", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhybz1aXcm8HM4tMmsZ2FsE17Mdz-yYEj8ZhpBAf0dxRUrpmcXkuPmVE5NiHFZbOCCzPsbDHvS0Lh169sEUwe2KfgV-njTNqPtzDRmyT7JWYgqef5k6TKzs_8mdd_Hc3ucpb7Lh9KtJBhZ08cP-7TsikV-JI7d8jedtYvuoPeX676STgHE3xzgnagU98P8/s1600/tihad%20twarka%20elbotolaon.png", p:8, w:0, d:5, l:3, gf:7, ga:12, diff:"-5", pts:5},
    {rank:16, team:"أولمبيك آسفي", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", p:8, w:1, d:2, l:5, gf:6, ga:15, diff:"-9", pts:5}
  ],

  squadData: [
    {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:8, g:0, y:0},
    {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:7, g:1, y:2},
    {n:"أيمن ديراني", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", m:6, g:0, y:1},
    {n:"حكيم زياش", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png", m:5, g:2, y:1},
    {n:"وليد ناسي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nX1H0ZgZb-8NOODz3N1N9a0nxO37oZPbTzdTN6PhaY6RmXwRbJNHd7H6QFo-yO-I0FQgZuQL0fCY3n5IYlyEbB3EJOTWQLeqdip3bSq3lgre6I08PDrp01KeyTLacJhUvjRbj6vXyid_1_EbiCx6D4z8v7RvGMsNUPA9ddNZKc-rxe9zTmjDZ6bTNGY/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D9%86%D8%A7%D8%B3%D9%8A.png", m:8, g:5, y:1},
    {n:"بيدرينهو", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3TdCJ62Hj8OFUJ2Bt2Td96R7-jQL4K_oWnLBCnIlhyzpmzqwMv8UUDfMQX5uKHjECWc5MBUJOjQR6182p_-sLM71eVSPPGW4g5iMD-buBdoWWtkIFicqxPicYgSKvEEGwGboiSb6ZJNBPFcqbE5ok6AfswXNqANUgOozor6X4iaiB-ZFWnI4m4SeQZrQ/s1600/%D8%A8%D9%8A%D8%AF%D8%B1%D9%8A%D9%86%D9%87%D9%88.png", m:7, g:2, y:3},
    {n:"معاذ أونزو", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi043gehhQWhaK_ye2vwKU24y_V0suMT_wurQcN4HgmFXEQmxozXZWO5Ifwcma-N7JIgJ1y4F5tO6l2ujMmQ4o6wG7xqjR8t60H89aWtQlAqCI40xgJIUe_0ZY5RfHd8EHsphquZoGLGTtSsQPn2_hBiimHx_23lWvSuiLLWILTJMy5UTUt3dhfxqpedBg/s1600/%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%94%D9%88%D9%86%D8%B2%D9%88.png", m:6, g:3, y:0},
    {n:"آرثور وينديروسكي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyclJvueyEeJJfK-20D167QfRMpOrGY8BdaTCll25ui4kn8t8v0qKO3KDU6qriRPkg-_NcBeWAdAW-5ScgVK1wq-amXNaHh2Tu_uhyphenhyphenjsmrKIV3XWHi0qa1a4g46ahguKntingVgvCmkvhVIMPOp5r0-pH9ROSSrGvEPzInPw0CL-CjbEcUk64s2ku-1ww/s1600/%D8%A7%D9%93%D8%B1%D8%AB%D9%88%D8%B1%20%D9%88%D9%8A%D9%86%D8%AF%D9%8A%D8%B1%D9%88%D8%B3%D9%83%D9%8A.png", m:5, g:1, y:2}
  ],

  roundsDB: {
    1: [
      {d:"12/09", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"1-0", t2:"الكوكب", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", std:"ملعب العربي الزاولي"}
    ],
    2: [
      {d:"19/09", t:"20:00", t1:"يعقوب المنصور", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", s:"1-1", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب البشير"}
    ],
    3: [
      {d:"28/09", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"3-1", t2:"الزمامرة", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", std:"ملعب العربي الزاولي"}
    ],
    4: [
      {d:"03/10", t:"18:00", t1:"المكناسي", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", s:"1-3", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"الملعب الشرفي"}
    ],
    5: [
      {d:"29/10", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"0-0", t2:"الرجاء", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", std:"ملعب العربي الزاولي"}
    ],
    6: [
      {d:"02/11", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"2-0", t2:"طنجة", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", std:"ملعب العربي الزاولي"}
    ],
    7: [
      {d:"05/11", t:"16:00", t1:"أكادير", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", s:"1-2", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب أدرار"}
    ],
    8: [
      {d:"09/11", t:"16:00", t1:"آسفي", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", s:"1-2", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب المسيرة"}
    ]
  },

  transfersData: [
    {date:"23-11", pName:"زاكارياس غيلان", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", from:"نهضة الزمامرة", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"},
    {date:"23-11", pName:"حكيم زياش", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png", from:"حر", fromImg:"//images.elbotola.com/stats/logos/6ypq3nh0pejmd7o.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"حر"},
    {date:"23-11", pName:"أيمن ديراني", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", from:"الخالدية", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"}
  ],

  teamStats: {
    matches: 8,
    goals: 14,
    penalties: 2,
    yellowCards: 22,
    redCards: 1
  }
};

// جعل المتغيرات متاحة عالمياً للتوافق مع الكود القديم
if (typeof squadData === 'undefined') {
  var squadData = wydadData.squadData;
}
if (typeof standingsData === 'undefined') {
  var standingsData = wydadData.standingsData;
}
if (typeof roundsDB === 'undefined') {
  var roundsDB = wydadData.roundsDB;
}
if (typeof transfersData === 'undefined') {
  var transfersData = wydadData.transfersData;
}
