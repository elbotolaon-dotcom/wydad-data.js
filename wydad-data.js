/* ============================================================
   ELBOTOLAON - DYNAMIC DATA MANAGER (V1.0)
   يحتوي هذا الملف على جميع روابط الصور والبيانات
   ============================================================ */

// 1. قاعدة بيانات التشكيلة (Squad)
const squadData = [
    {n:"يوسف المطيع", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUo4dkktTOZdj0bbqu-XI4gdOIkckaLF37Yb6JCLgNcXB2nAfNDJzTZnz0ulQ87JnBLvM5JFO0CQ1rp51MWoAqcGVZalI9yqv_9zNBWpcUJhWlppWWxC2nqCQUE-gxq8-DD9f9C-jnBWdB-Nu4z1JOPjVwgQf8yLsYN8p85zflqRQe7M7mxe0bbPq0lV0/s1600/%D9%8A%D9%88%D8%B3%D9%81%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B9.png", m:0, g:0, y:0},
    {n:"عبد العالي المحمدي", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjTX9RTHz61FreoTcdlilvb2h-pncWoJ70msZtsuVDNKBd44pD6grL0lpf9LdZ15L_HfwTQTBfD_4jT2mS7R3imC5czEEyTlkXtREcAUZvYkQDKweUXrk89BiInp69yPcsDMZS6F1IQ1sOzeZ5-VaKriQgl34yT93IXOEQGPNeFWmTe1PigVTq2SUaksk/s1600/%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AD%D9%85%D8%AF%D9%8A.png", m:0, g:0, y:0},
    {n:"عمر أقزداو", p:"حارس مرمى", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvCDhiuf8yAt31fram6dYsLS8I8zmexekKZwqn5TMU3wa-QT9kEx0OcfA9m3ZpF0YoXHW1dJlydpOW8VsldAP1GhLB2Do82u_akdbeVbnrljwqP2IReTKoIohRpsdBYWOfCliOSX-fHvi4E0ATI06ZYADhWJHXV1JsnYssNeCtkwWt_gdMk3HaHXJ61C4/s1600/%D8%B9%D9%85%D8%B1%20%D8%A7%D9%94%D9%82%D8%B2%D8%AF%D8%A7%D9%88.png", m:0, g:0, y:0},
    {n:"جمال حركاس", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0}, // يرجى تحديث الرابط إن وجد
    {n:"أيمن ديراني", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", m:0, g:0, y:0},
    {n:"نبيل مرموق", p:"مدافع", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"محمد مفيد", p:"مدافع أيمن", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidaZpqymNDEyQTp5GQ9i7nOp1-hp3hyphenhyphenCZAO7sSJ4oSrQAyUqJgrcbBRTdJSOC3sw_laHKtde1EynCzeBqLDZ5l9DpxB-1K9qtlJew-3jnVnq4L8T-6NwSLet5FV39N081wJwdg-fITlFu9PeXrDYqDCSYB0gRpJZGvE_KVQoL0yHzKFBjMLtr-htE0JvY/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D9%85%D9%81%D9%8A%D8%AF.png", m:0, g:0, y:0},
    {n:"زكرياء ناسيك", p:"مدافع أيسر", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"أسامة محروس", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"أسامة الزمراوي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbukgFSTjokLs4WoTGLcULMEeNqeZ2TUTZ9T6c977nUoFrty4ncmmsPrGZz0AFO0_KH8ivMuzogdUaaoTERy-_XEXg3Wj9cztFCqBE3IOb0gKDyU5NKsKvcjM2FVNwFqxHbyfBm45eLyKtOMvvvKZvEe0HQqtJDttv0LHs4TwJGBGsNMTwF3bYBkx2qsM/s1600/%D8%A7%D9%94%D8%B3%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%B2%D9%85%D8%B1%D8%A7%D9%88%D9%8A.png", m:0, g:0, y:0},
    {n:"إسماعيل المترجي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"سيدي بونا عمار", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"حمزة الساخي", p:"وسط ميدان", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"معاذ أونزو", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi043gehhQWhaK_ye2vwKU24y_V0suMT_wurQcN4HgmFXEQmxozXZWO5Ifwcma-N7JIgJ1y4F5tO6l2ujMmQ4o6wG7xqjR8t60H89aWtQlAqCI40xgJIUe_0ZY5RfHd8EHsphquZoGLGTtSsQPn2_hBiimHx_23lWvSuiLLWILTJMy5UTUt3dhfxqpedBg/s1600/%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%94%D9%88%D9%86%D8%B2%D9%88.png", m:0, g:0, y:0},
    {n:"شعيب فيضي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"محمد رايحي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHVwPaPAzeaAbXgiyuWSLyOS_GuMf-0_wg3NUtjX3-jlMfHyNxQOGuCV2VG2wo0arQcBOB0KmRwC431RO8DvPxEdTWHKhVuhW2vrQ9JARMkZdVsycWLNi19KEzKn0kz-EXLBYPqr8qopu2Bdcymsvg4jLvhxtO4C-u1EnNLaAsEJEujKuBXNdnljoT-lg/s1600/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B1%D8%A7%D9%8A%D8%AD%D9%8A.png", m:0, g:0, y:0},
    {n:"كاسيوس مايلولا", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"وليد ناسي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-nX1H0ZgZb-8NOODz3N1N9a0nxO37oZPbTzdTN6PhaY6RmXwRbJNHd7H6QFo-yO-I0FQgZuQL0fCY3n5IYlyEbB3EJOTWQLeqdip3bSq3lgre6I08PDrp01KeyTLacJhUvjRbj6vXyid_1_EbiCx6D4z8v7RvGMsNUPA9ddNZKc-rxe9zTmjDZ6bTNGY/s1600/%D9%88%D9%84%D9%8A%D8%AF%20%D9%86%D8%A7%D8%B3%D9%8A.png", m:0, g:0, y:0},
    {n:"زكرياء غيلان", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"نسيم الشادلي", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0},
    {n:"مباي نيانغ", p:"مهاجم", img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/default-player.png", m:0, g:0, y:0}
];

// 2. قاعدة بيانات جدول المباريات (Matches)
const roundsDB = {
    1: [{d:"12/09", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"1-0", t2:"الكوكب", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip-oEAsHz8oQKe10SIv7u9M1pM5fzw2aF3RVg6BWRnyaRDojF9zSva_yhy0VK7jPzG73OHM7631KrQAvRexNgvKIV8WCd8pl-msiSrf1tPni8PF2JQpZWASyRXDzjxaPc06n2H0La5UKcixDR9L2aS-SJchNPJ-6l7l2x7S9Ywg6bKDCHvyDs2y3Dy-1c/s1600/kwkab%20elbotolaon.png", std:"ملعب العربي الزاولي"}],
    2: [{d:"19/09", t:"20:00", t1:"يعقوب المنصور", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEFq76HFAW4KUgwf1Vi4WHlOyf-3xnRLxPeGJ-q8GUIiLhcq7W7U5fFfHfWBgsZVaq3R6vBkKyW25D9G_AEUefo2kVa6dIM5ru8WniSUQF97avoSaGxn_mWpsfQy7_f3L-249taATp1R_6KTJ-8vINPKeVQmYq8rqQbo8GDEpbJDW5hrnGR6O_S8xCPYI/s1600/tihad%20masor%20elbotolaon.png", s:"1-1", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب البشير"}],
    3: [{d:"28/09", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"3-1", t2:"الزمامرة", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", std:"ملعب العربي الزاولي"}],
    4: [{d:"03/10", t:"18:00", t1:"المكناسي", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTxx7NmgVNlZhzkwOoglitHjTOR0F11OuYKLLkXcldpljr8SGL08yDo_ohy5ZfkkGzdpSvDYmiF1pJynETrfUAdsK2xzHZPSuhRUVZH_rMXG-c04U2Lziooy1wWN-3azB0_OAo4YQnTJceeXmHKRswKzgDt6qJOOekYdqqVHSFfWpg4IXB9s2YXvtDIME/s1600/maknas%20elbotolaon.png", s:"1-3", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"الملعب الشرفي"}],
    5: [{d:"29/10", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"0-0", t2:"الرجاء", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYTcZHL8uXzayfgOuBhzbOIZRvsPIkHJU8k4bpE0G7wnZIUEGEp-bZH_n_Bjqw56nISyoQ42mS7MjAPTxVhPTGrAlIZLHvNw4E6qyooC8US7kXSfUOmCyqVCst7oGMI96mXdWKVEBhT0AI-WuAxv5G5G3Ll7-D0qJrBQcwZa-GCZL2U0fs3MaT_SFocTk/s1600/raja%20elbotolaon.png", std:"ملعب العربي الزاولي"}],
    6: [{d:"02/11", t:"20:00", t1:"الوداد", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", s:"2-0", t2:"طنجة", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4P_IvUvnWjM46GX9tjM1ar2klX7qaFOa4VN5YvGLhCUWA7NKS5WuGJUJqk9_uqfpL99_mb-0ocxZIdO8kWDjT3hZWTSn_Mmj3JOzE8mqSOdxrLLZW4VEM-L5ymQagqAOnkZxXW_D6OLPmcmpHFwIuph0LZwYCQdTWxAywnIYNM_AhI8fwcldq0I9QVWk/s1600/tanja%20elbotolaon.png", std:"ملعب العربي الزاولي"}],
    7: [{d:"05/11", t:"16:00", t1:"أكادير", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioKR1msekF2BXfNIgI8FnxEd9qogdUAgGxrWq_LGFh0FAbDdqYvGB-x8m_GPcZ69ubTmTW3YysUzM4i3A5j0MXp3AWngIMNrKgQsT5l-EkDi4fvQ92dvT4QX83Iy6c2xvFPOgalV_Qxov_0_g0lXICv7s60tlZvbzYkOrh4R5em5ZL8XweiNczRUk49aE/s1600/hassania%20elbotolaon.png", s:"1-2", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب أدرار"}],
    8: [{d:"09/11", t:"16:00", t1:"آسفي", l1:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhennOIbFknnlYOmS4wwizF1GIxzDbqFnDXCeEdaGpoKpbzrFfbPExst5Gfd1S2u4hQgaOu_uohsHRYyjBdrnm8PurL_6UlyyM-KbvlKVF2tf_uBAgPnD5dW68wtKunRoLqk8HhO4IPM62oHtonupb2Inp2VsoZK7b1Ecf5MuzgZQMX_CtBx4EEnWjzuH8/s1600/assfi%20elbotolaon.png", s:"1-2", t2:"الوداد", l2:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", std:"ملعب المسيرة"}]
};

// 3. قاعدة بيانات الترتيب (Standings)
const standingsData = [
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
];

// 4. قاعدة بيانات الانتقالات (Transfers)
const transfersData = [
    {date:"23-11", pName:"زاكارياس غيلان", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9hI0cgifqm8HVEcqRPNZ0oPb-KCxxvddot29oJiV0hkx43E6eoAp_gdpNx6PDA78Gv2TvCcBB4j9ooVlCr59EjmRT45KW3OPzv-fb4tXgXdJ0QU-QCvfNo9ut_nWelIBKQiOohZuBvyndojHDFObYtrkPb98fESOQvfVYGS1gBgQZAmh2dhaU7jpyK_4/s1600/%D8%B4%D9%85%D8%B3%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D8%A7%D9%84%D8%B9%D9%84%D8%A7%D9%84%D9%8A.jpeg", from:"نهضة الزمامرة", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"},
    {date:"23-11", pName:"زكرياء فتحي", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-_3mk3aOvLVORUUmpYNbtB7afGrJEsk8-gHtQKvghHD714PRdRweDGYrWkqlNgImPML2YaX4IBjZ8BKQHY5SKpsPRkR5I_iT7z3vpnfwmOVBTBYi_dpyW_MMVTL3RuaP0s_MBNLEXGOBpYB4T40Z1pcn21S-HbgY-wFA3BY12EVPtbAncHTGEDGgcceM/s1600/zakariya%20elbotolaon.png", from:"نهضة الزمامرة", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgye2fqgjgoLDcpAVG7nZHP12IUiisRF9OvRcdpv0esIZjRWHqJgCZFNL_f3MYyf42jJLI3v_BAOZ3GGADSxEhoDGyOKlDRVEBqE_dEOsB0BJQkplbF6VvAn9jV8MiV5mrzeV4gCSi4xQt2LzPWh0x1yTPbm8zEYlBdo6ovSp1RFVQmXzhaXdyu2nUJANA/s1600/nahdat%20zmarra%20elbotolaon.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"انتقال"},
    {date:"23-11", pName:"أيمن ديراني", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl2GoNGSTZoKbK8uOMtJGA95_l10A6FVaELY6nYfL41GntKu8zNaDdFFpKq6QdoS1TuAznMJE9qJNq_8rDCQu9yGC_-UvHp4NIup7z1AQaTQJ6lxNnc15xcwUVE1UyHxBraGP2Z1Zht87v4eVJoi1eYGYdeFC8jYTWqzLWUzBxUIbv3gZdHFDG7z4K_kI/s1600/%D8%A7%D9%94%D9%8A%D9%85%D9%86%20%D8%AF%D8%A7%D9%8A%D8%B1%D8%A7%D9%86%D9%8A.png", from:"الخالدية", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"0.095M €"},
    {date:"23-11", pName:"حكيم زياش", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2048CGA7tgFAFyUltoCMZlPi-9LlR2yxplKBI6qoMyPiTFk0oD4DI45GDjJJlCHGFvAtKkQ0ioLqteufaAbfJ7VF5lsj-57zBxO6TkdaFQRz0Jyd7G4B45Xu6IoMaNlbW-0eDvYllwrboxjN6MduKLQD_tlWdMt7RrIBYZku93CBBx-gD8xjx2F1hHOM/s1600/%D8%AD%D9%83%D9%8A%D9%85%20%D8%B2%D9%8A%D8%A7%D8%B4.png", from:"حر", fromImg:"//images.elbotola.com/stats/logos/6ypq3nh0pejmd7o.png", to:"الوداد", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", type:"حر"},
    {date:"23-11", pName:"عبد المنعم بوطويل", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaclBBR8cLPX29wwgt3xOY8F9MsDs0R0ZMh081VoJJYZH_DwaCz_P6TyKsqk7mhS0mzvmis1ZIVzcE2YjzrNLM6Js0ab3oAjZ7ORI12isWysKCLbBDycJRQSntoiRLdTU-Lmlv0nafQAbJzAEDxk4tqec9GOoqMSHAQwUBtIvuGZlktsNNYvUDEknmNsg/s1600/mon3im%20elbotolaon.png", from:"الوداد", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to:"الحزم", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF_ZkiLexkF1lSvsTZyzyHA4J9HmJUCINLtWXd_a6UBdyLdnmX-L59VIteJppHH-GaXy_Hm2zWlmduxHCbA5O9DJcAT2samgYUBjNnhNmvSwLEex4q7o-MeRUrgd7rp7F5aAv9-etJN6DcZIJbQLkQTtoOnIgn9VTGUfxu3v-p3lXdBwtuZCxutENBuhQ/s1600/hazam.png", type:"انتقال"},
    {date:"23-11", pName:"ميكائيل مالسا", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSpw-ic7vTiJwqGwGplkA1rvQswmHAQO7oAsiII68yQfF_3i4vK_EsbRpMhmdhsofEwR4w_hYcejhp75D0Kx0BNinQWLhKlhFHRqaC7C560KzW4j-sBbnChvwSU9z-abPEQaLSsKzNgDliAvyIOFLsAOB2f9nqoCUmu0ioZWq-hnl3iZE88VOogdn7_eM/s1600/mikaail%20elbotolaon.png", from:"الوداد", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to:"حر", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcVq_JSGW28_dkmFv60oOR0wEEHAhzyd3Wlb2WInEbqQfUsy3o2dz1KTFVJ8pFLNek763Jz0B87Th_ZxaAE69iJ9docMKQDDUKpFWDpw9Jg1otWab3gEfkKvI5shhq-qAr70oB3dR9tAEKRXAPUvfFKav7aYTAvQJ6-oia1x7cHqwHw3yRudKgm36Jv9Y/s1600/free%20elbotolaon.png", type:"حر"},
    {date:"23-11", pName:"صمويل أوبينغ", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNPuA7ev_QsRfIB2afawjCl_hdCV1XBUhFtY-QImdDA03rPXp3_qoj5iAHWj_4byophlIkAXPdEWJFugtO08yQfpO95QlQhzN346tdTJlnX5EVlIJWn3ufLQ7YogTyiHybSB2Sw2kU0eNWjJ-cTqFip8sjb01sou1qIxbKQYUIEjza6Am9PydoCMdac1Q/s1600/somaila%20elbotolaon.png", from:"الوداد", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to:"سبتة", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1ajn7GxLUTLsOEbYhtEp_D5tHlvoczRqwEnjPwjPFvQ-R2yxjp5oMz2BGQrgqPDMShRECnjo2VEFLotA5SH7bfskZzOwyuzDeDlLAoLN7S_mOeMOEP0yOQH0q22kaDE_jqgdWy-n4SM6M8ur2AxQoHszGucOhVg55JWtFvTNIkl2aOieYA1pJJJ1noqk/s1600/sabta%20elbotolaon.png", type:"انتقال"},
    {date:"23-11", pName:"سيف الدين بوهرة", pImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-gjy7i738UOKEtaApP7oSaMgogLZWe5DEdw9MsHTXiHHcuoyiqJINV8jJ1m-PfHcQ9PsuOmP36VSvPbb5Sn_5n3Tlee7fmkVmrxEwwNEDNxfc6D2npUE_eG-NcGeQjBrvXsbh7rbJ0F_WljAyiVO9_b7g_cM29wI1pd1bKJSudFEXLh_dBR1MfZ8Sccs/s1600/bohara%20elbotolaon.png", from:"الوداد", fromImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY5x7sLNOVCth8x7gfRCsazVQ4Oa5dROJJK5qpTRan8ai0sgwG6KYrbtEGwIvVrl0_i-lQ2zo4HWMQnqQaUx5qwVMQhNRrCNE6W_8lo_NAAS6USi_JQj1qxBXZH4RakVNSQt7RFFLyFjX4t6qRIBinU_0bkPBLF5s4J-BCeIS4rFg0wiE4_WEFK5_Ibb0/s1600/wida%20elbotolaon.png", to:"الخالدية", toImg:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRgd00SXNgwb85XSJ6iTq8Ou52kSjmMoU75AjFOHlaMClpOPWMaMJipK9xG6e6U22ZcMw55CFf92ODI8NAmdZ_28PlLfyIaXicwJsQIylG2R94xe5HH9srbUcZgDjjxngIUQEjcvFmUTqkuShiSWmpyZ1Xi7EC-kR49Ld58wi6VgE4dNqmsvgjq1ZT6VA/s1600/khaliday%20elbotolaon.png", type:"0.142M €"}
];

// 5. دوال العرض (Rendering Functions) - لكي يعمل كل شيء تلقائياً
function renderSquad() {
    const container = document.getElementById('squadContainer');
    if(!container) return;
    let html = '';
    squadData.forEach((p, index) => {
        html += `
        <div class="squad-card" id="pcard-${index}" onclick="toggleCard(${index})">
            <div class="card-main">
                <img src="${p.img}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'">
                <div class="card-txt"><h4>${p.n}</h4><p>${p.p}</p></div>
                <i class="fa fa-angle-down card-arrow"></i>
            </div>
            <div class="card-stats">
                <div class="cs-row">
                    <div class="cs-box"><span class="cs-val">${p.m}</span><span class="cs-lbl">مباريات</span></div>
                    <div class="cs-box"><span class="cs-val">${p.g}</span><span class="cs-lbl">أهداف</span></div>
                    <div class="cs-box"><span class="cs-val">${p.y}</span><span class="cs-lbl">صفراء</span></div>
                    <div class="cs-box"><span class="cs-val">0</span><span class="cs-lbl">دقيقة</span></div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function loadRound(rid) {
    const box = document.getElementById('matchesContainer');
    if(!box) return;
    const matches = roundsDB[rid] || [];
    let html = '';
    matches.forEach(m => {
        html += `
        <div class="match-row">
            <div class="m-date">${m.d}<br>${m.t}</div>
            <div class="m-info">
                <div class="m-team"><img src="${m.l1}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${m.t1}</div>
                <div class="m-res">${m.s}</div>
                <div class="m-team away"><img src="${m.l2}" onerror="this.src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-EzE0Owo0Hd2FH_5b-r4S2QgUPkcwSRIKWbh5NaOrTsjk8-6LNGaodij3NWQDwEFkCj5lPq1VQgcmkPiAPJoR8fDa3uy63vfUMqpxDhjsJ6Af-tvERImqG74tN8Y7fsb2GF-Om1m1iN_dStI116FFzeOFKm07NkhzZH56m1hvMgc4n_lLih9wusqB71o/s1600/blank.gif'"> ${m.t2}</div>
            </div>
            <div class="m-stadium">${m.std}</div>
        </div>`;
    });
    if(matches.length === 0) html = '<div style="padding:20px;text-align:center;color:#999;">لا مباريات</div>';
    box.innerHTML = html;
}

function renderStandings() {
    const container = document.getElementById('standingsContainer');
    if(!container) return;
    
    let html = '<table class="ranking-table"><thead><tr><th>#</th><th>الفريق</th><th>لعب</th><th class="hide-on-mobile">فاز</th><th class="hide-on-mobile">تعادل</th><th class="hide-on-mobile">خسر</th><th class="hide-on-mobile">له</th><th class="hide-on-mobile">عليه</th><th class="hide-on-mobile">+/-</th><th>ن</th></tr></thead><tbody>';
    
    standingsData.forEach(t => {
        let rowClass = '';
        if(t.rank <= 2) rowClass = 'style="background:#e6ffe6;"';
        
        html += `<tr ${rowClass}>
            <td><span class="rank-badge rank-${t.rank}">${t.rank}</span></td>
            <td class="col-team"><div class="team-flex"><img src="${t.img}"><span>${t.team}</span></div></td>
            <td>${t.p}</td>
            <td class="hide-on-mobile">${t.w}</td>
            <td class="hide-on-mobile">${t.d}</td>
            <td class="hide-on-mobile">${t.l}</td>
            <td class="hide-on-mobile">${t.gf}</td>
            <td class="hide-on-mobile">${t.ga}</td>
            <td class="hide-on-mobile">${t.diff}</td>
            <td class="points-cell">${t.pts}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderTransfers() {
    const container = document.getElementById('transfersContainer');
    if(!container) return;
    
    let html = '<table class="transfers-table"><thead><tr><td class="hide-trans-mobile">التاريخ</td><td>اللاعب</td><td>من</td><td>إلى</td><td class="hide-trans-mobile">النوع</td></tr></thead><tbody>';
    
    transfersData.forEach(t => {
        html += `<tr>
            <td class="hide-trans-mobile">${t.date}</td>
            <td class="t-player"><img src="${t.pImg}"> ${t.pName}</td>
            <td class="t-club"><img src="${t.fromImg}"> ${t.from}</td>
            <td class="t-club"><img src="${t.toImg}"> ${t.to}</td>
            <td class="t-type hide-trans-mobile">${t.type}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

function toggleCard(idx) {
    const card = document.getElementById(`pcard-${idx}`);
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.squad-card').forEach(c => c.classList.remove('active'));
    if(!isActive) card.classList.add('active');
}

// تشغيل الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    renderSquad();
    renderStandings();
    renderTransfers();
    loadRound(8); // الجولة الافتراضية
});
