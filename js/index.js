$(function () {
    $('#full').fullpage({
        anchors: ['page1', 'page2', 'page3'],
        keyboardScrolling: false,
        afterLoad: function (anchorLink, index) {
            console.log('현제 섹션 번호는' + index)
            if (index == 3) {
                $('.smth').addClass('on')
                $('.neimcade').addClass('on')
            } else {
                $('.smth').removeClass('on')
                $('.neimcade').removeClass('on')
            }
            if (index == 1 || index == 3) {
                $('.midlep').animate({
                    height: '1%',
                }, 100)
                $('.midlep').animate({
                    opacity: 0,
                    width: '1%',
                }, 100)
                $('.mypoto').removeClass('on')
                $('.group').removeClass('on')
            }
            if (index == 1 || index == 3) {
                $('.videoone').animate({
                    height: '1%',
                }, 100)
                $('.videoone').animate({
                    opacity: 0,
                    width: '1%',
                }, 100)
                $('.group').removeClass('on')
            }

        }
    })

})
$(function () {
    $('.swiper-slide:eq(0), .in').click(function () {
        $('.midlep').animate({
            opacity: 1,
            width: '90%',
        }, 500)
        $('.midlep').animate({
            height: '90%',
        }, 500).delay(500)
        $('.group').addClass('on')
        $('.mypoto').addClass('on')
        $('.smth').addClass('on')
    })
    $('.outmain').click(function () {
        $('.midlep').animate({
            height: '1%',
        }, 500)
        $('.midlep').animate({
            opacity: 0,
            width: '1%',
        }, 500).delay(500)
        $('.group').removeClass('on')
        $('.mypoto').removeClass('on')
        $('.smth').removeClass('on')
    })

    $('.swiper-slide:eq(1)').click(function () {
        $('.videoone').animate({
            opacity: 1,
            width: '80%',
        }, 500)
        $('.videoone').animate({
            height: '80%',
        }, 500).delay(500)
        $('.group').addClass('on')
        $('.smth').addClass('on')
    })
    $('.outone').click(function () {
        $('.videoone').animate({
            height: '1%',
        }, 500)
        $('.videoone').animate({
            opacity: 0,
            width: '1%',
        }, 500).delay(500)
        $('.group').removeClass('on')
        $('.smth').removeClass('on')
        // $('.videoone').find('iframe')[0].pause()
        // $('.videoone').find('iframe')[0].currentTime = 0
    })
    $('.icon > *').click(function () {
        $(this).toggleClass('on').siblings().removeClass('on')
        $('.sidetaitle').toggleClass('on')
        $('.sidecontent').toggleClass('on')
    })
    $('.icontoo > *').click(function () {
        $(this).toggleClass('on').siblings().removeClass('on')
    })

    $('.swiper-slide:eq(2)').click(function () {
        $('.videotwo').animate({
            opacity: 1,
            width: '80%',
        }, 500)
        $('.videotwo').animate({
            height: '80%',
        }, 500).delay(500)
        $('.group').addClass('on')
        $('.smth').addClass('on')
    })
    $('.outtwo').click(function () {
        $('.videotwo').animate({
            height: '1%',
        }, 500)
        $('.videotwo').animate({
            opacity: 0,
            width: '1%',
        }, 500).delay(500)
        $('.group').removeClass('on')
        $('.smth').removeClass('on')
        // $('.videotwo').find('iframe')[0].pause()
        // $('.videotwo').find('iframe')[0].currentTime = 0
    })

    $('.swiper-slide:eq(3)').click(function () {
        $('.videothree').animate({
            opacity: 1,
            width: '80%',
        }, 500)
        $('.videothree').animate({
            height: '80%',
        }, 500).delay(500)
        $('.group').addClass('on')
        $('.smth').addClass('on')
    })
    $('.outthree').click(function () {
        $('.videothree').animate({
            height: '1%',
        }, 500)
        $('.videothree').animate({
            opacity: 0,
            width: '1%',
        }, 500).delay(500)
        $('.group').removeClass('on')
        $('.smth').removeClass('on')
        // $('.videothree').find('iframe')[0].pause()
        // $('.videothree').find('iframe')[0].currentTime = 0
    })
    $(".out").on("click", function () {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $("iframe")[1].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $("iframe")[2].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
})
