$(function(){

    //header escrever e apagar
    function escrever(i) {
        var texto = 'incríveis';
        var velocidade = 60;
        var intervalo = 5000;
    
        if (i < texto.length) {
            $('#write').append(texto.charAt(i));
            i++;
            setTimeout(function () {
                escrever(i);
            }, velocidade);
        } else {
            setTimeout(function () {
                apagarTexto();
            }, intervalo);
        }
    }
    function apagarTexto() {
        var textoAtual = $('#write').text();
        var velocidade = 60;
    
        if (textoAtual.length > 0) {
            $('#write').text(textoAtual.slice(0, -1));
            setTimeout(function () {
                apagarTexto();
            }, velocidade);
        } else {
            setTimeout(function () {
                escrever(0);
            }, velocidade);
        }
    }
    escrever(0);


    //voltar ao topo
    backToTop()
    function backToTop(){
        var btn = $('.backtotop');
        btn.click(function(){
            $('body,html').stop().animate({
                scrollTop: 0,
            },0)
        })
        
    }
    $(window).scroll(function(){
        var sobre = $('.sobre').offset().top
        var btn = $('.backtotop');
        
        if($(this).scrollTop() > sobre){
            btn.fadeIn().css('display','flex');
        }else{
            btn.fadeOut();
        }

    })

    
    //mobile
    function mobile(){
        var mobile = $('.mobile');
        var menu = $('.mobileMenu');
        var menuAberto = false;
        var animando = false;
        var line1 = $('.line1');
        var line2 = $('.line2');
        var line3 = $('.line3');
        var click = $('.mobile ul li a')


        menu.click(function(){
            if(animando) return

            if(!menuAberto){
                animando = true
                menuAberto = true
                line1.css('transform','rotate(45deg)').css('top','12px')
                line2.css('display','none');
                line3.css('transform','rotate(-45deg)').css('top','12px');
                mobile.toggle('slide',{direction: 'up'},'slow',function(){
                    animando = false
                });
            }else{
                animando = true
                menuAberto = false
                line1.css('transform','rotate(0)').css('top','0')
                line2.css('display','block');
                line3.css('transform','rotate(0)').css('top','20px');
                mobile.toggle('slide',{direction: 'up'},'slow',function(){
                    animando = false
                });
            }
        })


        click.click(function(){
            if(menuAberto){
                menuAberto = false;
                animando = true;
                line1.css('transform','rotate(0)').css('top','0')
                line2.css('display','block');
                line3.css('transform','rotate(0)').css('top','20px');
                mobile.toggle('slide',{direction: 'up'},'slow',function(){
                    animando = false
                })
            }
        });
    }
    mobile()



})