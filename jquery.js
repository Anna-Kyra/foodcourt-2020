$(document).ready(function () {
    //naar pagina 1
    $(".pan_lint").click(function () {
        $(this).addClass('remove_pointer');
        $(".onderdelen_pan").animate({
            margin: '-200px 25px'
        }, 500);
        $('.lint_klik_hier').animate({
            opacity: '0',
            margin: '700px auto'
        }, 600);
        $('.pan_onderkant').animate({
            opacity: '0',
            margin: '-130px -2.2px',
            width: '545px'
        }, 400);
        $('.pan_voorkant').animate({
            margin: '0 auto',
            width: '550px'
        });
        $('.pan_achterkant').animate({
            margin: '0 auto',
            width: '440px'
        });
        $('.welkom').animate({
            fontSize: '50px',
            margin: '450px'
        }, 800);
        $('.bij').animate({
            fontSize: '50px',
            margin: '300px'
        }, 800);
        $('.pasta_di').animate({
            fontSize: '50px',
            margin: '200px'
        }, 800);
        $('.piazza').animate({
            fontSize: '50px',
            margin: '100px'
        }, 800);
        $('.gehaktbal').animate({
            margin: '400px'
        }, 650);
        $('.gehaktbal2').animate({
            margin: '350px -300px'
        }, 600);
        $('.gehaktbal3').animate({
            margin: '200px'
        }, 600);
        $('.deksel').animate({
            margin: '250px auto',
            width: '450px'
        }, 600);
        $('.pijlen').animate({
            opacity: '1'
        }, 800);
        $('.klassenpagina').addClass('boven_pagina');
        $('.navigatie, .lint_pasta').removeClass('boven_pagina'), 600;
        $('.pasta_soort').removeClass('onder_pagina');
        $('.pijlen').removeClass('onder_pagina');
        $('.pan_macaroni').removeClass('onder_pagina');
        $('.pan_macaroni').addClass('pan_macaroni_klein');
        $('.pan_macaroni').addClass('hidden_pasta');
        $('.macaroni').addClass('interactie_macaroni');
    });
    //terug naar welkom
    $(".terug1").click(function () {
        $('.pan_lint').removeClass('remove_pointer');
        $(".onderdelen_pan").animate({
            margin: '0 0'
        }, 500);
        $('.lint_klik_hier').animate({
            opacity: '1',
            margin: '0 auto'
        }, 300);
        $('.pan_onderkant').animate({
            opacity: '1',
            margin: '0 0',
            width: '593.4px'
        }, 1200);
        $('.pan_voorkant').animate({
            margin: '0 auto',
            width: '600px'
        });
        $('.pan_achterkant').animate({
            margin: '0 auto',
            width: '490px'
        });
        $('.welkom').animate({
            fontSize: '100px',
            margin: '0'
        }, 800);
        $('.bij').animate({
            fontSize: '65px',
            margin: '0'
        }, 800);
        $('.pasta_di').animate({
            fontSize: '155px',
            margin: '0'
        }, 800);
        $('.piazza').animate({
            fontSize: '155px',
            margin: '0'
        }, 800);
        $('.gehaktbal').animate({
            margin: '0'
        }, 650);
        $('.gehaktbal2').animate({
            margin: '0 0'
        }, 600);
        $('.gehaktbal3').animate({
            margin: '0'
        }, 600);
        $('.deksel').animate({
            margin: '0 auto',
            width: '500px'
        }, 200);
        $('.pijlen').animate({
            opacity: '0'
        }, 800);
        $('.klassenpagina').removeClass('boven_pagina');
        $('.navigatie, .lint_pasta').addClass('boven_pagina');
        $('.pasta_soort').addClass('onder_pagina');
        $('.pan_macaroni').addClass('onder_pagina');
        $('.deksel').removeClass('deksel_rotate1');
    });
    //naar pagina 1.5
    $(".interactie_macaroni").click(function () {
        $('.macaroni').removeClass('interactie_macaroni');
        $('.groene_pijl').addClass('interactie_groenepijl1');
        $('.groene_pijl2').removeClass('interactie_groenepijl1');
        $('.vlinder, .penne').addClass('opacity_pasta'), 800;
        $('.pan_macaroni').removeClass('pan_macaroni_klein'), 800;
        $('.rode_pijl').addClass('hidden_pasta'), 800;
        $('.rode_pijl1_5').removeClass('hidden_pasta'), 800;
        $('.deksel').addClass('deksel_rotate1'), 800;
        $('.pan_macaroni').removeClass('hidden_pasta');
    });
    //terug naar pagina 1.5
    $(".rode_pijl1_5").click(function () {
        $('.macaroni').addClass('interactie_macaroni');
        $('.rode_pijl').removeClass('hidden_pasta'), 800;
        $('.rode_pijl1_5').addClass('hidden_pasta'), 800;
        $('.vlinder, .penne').removeClass('opacity_pasta'), 800;
        $('.pan_macaroni').addClass('pan_macaroni_klein'), 800;
        $('.deksel').removeClass('deksel_rotate1'), 800;
        $('.groene_pijl2').addClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
    }), 'slow';
    //naar pagina 2
    $(".groene_pijl2").click(function () {
        $('.lint_deeg').removeClass('hidden_pasta');
        $('.groene_pijl2').addClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
        $('.nav2').removeClass('nav_opacity'), 800;
        $('.nav1').addClass('nav_opacity'), 800;
        $('.pasta_soort').addClass('hidden_pasta');
        $('.deeg_soort').removeClass('hidden_pasta');
        $('.rode_pijl').removeClass('terug1.5'), 800;
        $('.welkom').addClass('hidden_pasta');
        $('.bij').addClass('hidden_pasta');
        $('.pasta_di').addClass('hidden_pasta');
        $('.piazza').addClass('hidden_pasta');
        $('.gehaktbal').addClass('hidden_pasta');
        $('.gehaktbal2').addClass('hidden_pasta');
        $('.gehaktbal3').addClass('hidden_pasta');
        $('.rode_pijl').addClass('hidden_pasta');
        $('.rode_pijl2').removeClass('hidden_pasta');
        $('.macaroni').addClass('interactie_macaroni');
    });
    //terug naar pagina 1
    $(".rode_pijl2").click(function () {
        $('.nav2').addClass('nav_opacity'), 800;
        $('.nav1').removeClass('nav_opacity'), 800;
        $('.rode_pijl').removeClass('hidden_pasta');
        $('.rode_pijl2').addClass('hidden_pasta');
        $('.lint_deeg').addClass('hidden_pasta');
        $('.welkom').removeClass('hidden_pasta');
        $('.bij').removeClass('hidden_pasta');
        $('.pasta_di').removeClass('hidden_pasta');
        $('.piazza').removeClass('hidden_pasta');
        $('.gehaktbal').removeClass('hidden_pasta');
        $('.gehaktbal2').removeClass('hidden_pasta');
        $('.gehaktbal3').removeClass('hidden_pasta');
        $('.pasta_soort').removeClass('hidden_pasta');
        $('.deeg_soort').addClass('hidden_pasta');
        $('.groene_pijl2').removeClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
    });
    //naar pagina 2.5
    $(".interactie_tarwe").click(function () {
        $('.pan_macaroni_geel').removeClass('hidden_pasta'), 800;
        $('.pan_macaroni').addClass('hidden_pasta');
        $('.groene_pijl3').removeClass('interactie_groenepijl1'), 800;
        $('.volkoren, .spinazie').addClass('opacity_pasta'), 800;
        $('.rode_pijl2').addClass('hidden_pasta');
        $('.rode_pijl2_5').removeClass('hidden_pasta');
        $('.tarwe').removeClass('interactie_tarwe');
    });
    //terug naar pagina 2.5
    $(".rode_pijl2_5").click(function () {
        $('.volkoren, .spinazie').removeClass('opacity_pasta'), 800;
        $('.pan_macaroni_geel').addClass('hidden_pasta'), 800;
        $('.pan_macaroni').removeClass('hidden_pasta');
        $('.rode_pijl2_5').addClass('hidden_pasta');
        $('.rode_pijl2').removeClass('hidden_pasta');
        $('.groene_pijl3').addClass('interactie_groenepijl1');
        $('.groene_pijl').removeClass('interactie_groenepijl1');
        $('.tarwe').addClass('interactie_tarwe');
    });
    //naar pagina 3
    $(".groene_pijl3").click(function () {
        $('.tarwe').removeClass('interactie_tarwe');
        $('.groene_pijl3').addClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
        $('.nav2').addClass('nav_opacity'), 800;
        $('.nav3').removeClass('nav_opacity'), 800;
        $('.saus_soort').removeClass('hidden_pasta');
        $('.deeg_soort').addClass('hidden_pasta');
        $('.lint_saus').removeClass('hidden_pasta');
        $('.rode_pijl2_5').addClass('hidden_pasta');
        $('.rode_pijl3').removeClass('hidden_pasta');
    });
    //terug naar pagina 2.5
    $(".rode_pijl3").click(function () {
        $('.tarwe').removeClass('interactie_tarwe');
        $('.saus_soort').addClass('hidden_pasta');
        $('.deeg_soort').removeClass('hidden_pasta');
        $('.nav3').addClass('nav_opacity'), 800;
        $('.nav2').removeClass('nav_opacity'), 800;
        $('.rode_pijl3').addClass('hidden_pasta');
        $('.rode_pijl2_5').removeClass('hidden_pasta');
        $('.lint_saus').addClass('hidden_pasta');
        $('.groene_pijl3').removeClass('interactie_groenepijl1');
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
    });
    //naar pagina 3.5
    $(".rood").click(function () {
        $('.rood').removeClass('interactie_tarwe');
        $('.pan_rode_saus').removeClass('pan_rode_saus_klein'), 800;
        $('.deksel').addClass('deksel_rotate2'), 800;
        $('.groen, .wit').addClass('opacity_pasta'), 800;
        $('.groene_pijl3').addClass('interactie_groenepijl1');
        $('.groene_pijl4').removeClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
        $('.rode_pijl3').addClass('hidden_pasta');
        $('.rode_pijl3_5').removeClass('hidden_pasta');
    });
    //terug naar pagina 3
    $(".rode_pijl3_5").click(function () {
        $('.groen, .wit').removeClass('opacity_pasta'), 800;
        $('.rood').addClass('interactie_tarwe');
        $('.pan_rode_saus').addClass('pan_rode_saus_klein'), 800;
        $('.deksel').removeClass('deksel_rotate2'), 800;
        $('.rode_pijl3_5').addClass('hidden_pasta');
        $('.rode_pijl3').removeClass('hidden_pasta');
        $('.groene_pijl4').addClass('interactie_groenepijl1');
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
    });
    //naar pagina 4
    $(".groene_pijl4").click(function () {
        $('.nav3').addClass('nav_opacity'), 800;
        $('.nav4').removeClass('nav_opacity'), 800;
        $('.groene_pijl4').addClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
        $('.lint_topping').removeClass('hidden_pasta');
        $('.topping_soort').removeClass('hidden_pasta');
        $('.saus_soort').addClass('hidden_pasta');
        $('.rode_pijl3_5').addClass('hidden_pasta');
        $('.rode_pijl4').removeClass('hidden_pasta');
    });
    //terug naar pagina 3_5
    $(".rode_pijl4").click(function () {
        $('.nav3').removeClass('nav_opacity'), 800;
        $('.nav4').addClass('nav_opacity'), 800;
        $('.rode_pijl3_5').removeClass('hidden_pasta');
        $('.rode_pijl4').addClass('hidden_pasta');
        $('.lint_topping').addClass('hidden_pasta');
        $('.topping_soort').addClass('hidden_pasta');
        $('.saus_soort').removeClass('hidden_pasta');
        $('.groene_pijl4').removeClass('interactie_groenepijl1');
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
    });
    //naar pagina 4.5
    $(".gehakt").click(function () {
        $('.gehakt').removeClass('interactie_tarwe');
        $('.groene_pijl5').removeClass('interactie_groenepijl1'), 800;
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
        $('.tonijn, .mozzarella').addClass('opacity_pasta'), 800;
        $('.deksel').addClass('deksel_rotate3'), 800;
        $('.pan_gehakt').removeClass('pan_gehakt_klein'), 1000;
        $('.rode_pijl4').addClass('hidden_pasta');
        $('.rode_pijl4_5').removeClass('hidden_pasta');
    });
    //terug naar pagina 4
    $(".rode_pijl4_5").click(function () {
        $('.gehakt').addClass('interactie_tarwe');
        $('.tonijn, .mozzarella').removeClass('opacity_pasta'), 800;
        $('.groene_pijl3').addClass('interactie_groenepijl1');
        $('.groene_pijl4').addClass('interactie_groenepijl1');
        $('.groene_pijl5').addClass('interactie_groenepijl1');
        $('.groene_pijl').removeClass('interactie_groenepijl1'), 800;
        $('.deksel').removeClass('deksel_rotate3'), 800;
        $('.pan_gehakt').addClass('pan_gehakt_klein'), 1000;
        $('.rode_pijl4').removeClass('hidden_pasta');
        $('.rode_pijl4_5').addClass('hidden_pasta');
    });
    //naar pagina 5
    $(".groene_pijl5").click(function () {
        $('.lint_controleer').removeClass('hidden_pasta');
        $('.nav4').addClass('nav_opacity'), 800;
        $('.nav5').removeClass('nav_opacity'), 800;
        $('.groene_pijl5').addClass('interactie_groenepijl1');
        $('.groene_pijl6').removeClass('interactie_groenepijl1');
        $('.topping_soort').addClass('hidden_pasta');
        $('.pagina5').removeClass('hidden_pasta');
        $('.rode_pijl4_5').addClass('hidden_pasta');
        $('.rode_pijl5').removeClass('hidden_pasta');
    });
    //terug naar pagina 4.5
    $(".rode_pijl5").click(function () {
        $('.lint_controleer').addClass('hidden_pasta');
        $('.nav5').addClass('nav_opacity'), 800;
        $('.nav4').removeClass('nav_opacity'), 800;
        $('.topping_soort').removeClass('hidden_pasta');
        $('.pagina5').addClass('hidden_pasta');
        $('.groene_pijl6').addClass('interactie_groenepijl1');
        $('.groene_pijl5').removeClass('interactie_groenepijl1');
        $('.groene_pijl').addClass('interactie_groenepijl1'), 800;
        $('.rode_pijl4_5').removeClass('hidden_pasta');
        $('.rode_pijl5').addClass('hidden_pasta');
    });
    //naar pagina 6
    $(".groene_pijl6").click(function () {
        $('.lint_geniet, .klassenpagina2').removeClass('hidden_pasta');
        $('.nav5').addClass('nav_opacity'), 800;
        $('.nav6').removeClass('nav_opacity'), 800;
        $('.deksel, .pijlen').animate({
            opacity: '0',
            margin: '1400px auto'
        }, 'fast');
        $('.pan_voorkant, .pan_achterkant, .pan_macaroni_geel, .pan_rode_saus, .pan_gehakt, .pagina5').animate({
            opacity: '0',
            margin: '1400px auto'
        }, 1000);
        $('.eindproduct, .eindproduct_naam').removeClass('onder_pagina');
    });
});
