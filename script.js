var txtNome = document.getElementById("txtNome");
var txtEmail = document.getElementById("txtEmail");
var txtDesc = document.getElementById("txtDesc");
var txtMensagem = document.getElementById("txtMensagem");

$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    carregarDivBotaoWhats();

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Aprendiz", "Desenvolvedor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed1 = new Typed(".typing-2", {
        strings: ["Aprendiz", "Desenvolvedor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});

function onClick_AlternarEntreContatos(codigo) {
    if (codigo == 1) {
        $("#divEmail").show();
        $("#divWhatsapp").hide();
    } else {
        $("#divWhatsapp").show();
        $("#divEmail").hide();
    }
}

function onClick_EnviarEmail() {
    if (txtNome.value == "" || txtEmail.value == "" || txtDesc.value == "") {
        tata.error('Erro', 'Falha ao enviar o e-mail!', {
            position: 'tm',
            duration: 4000,
            animate: 'slide'
        });
    } else {
        tata.success('Sucesso', 'E-mail enviado com sucesso!', {
            position: 'tm',
            duration: 4000,
            animate: 'slide'
        });
    }
}

function onClick_EnviarMensagemWhatsapp() {
    if (txtMensagem.value != "") {
        $("#linkWhats").prop("href", `https://wa.me/5514999074567?text=${txtMensagem.value.replace(" ", "%20")}`);
    } else {
        tata.error('Erro', 'Por favor, escreva sua mensagem!', {
            position: 'tm',
            duration: 4000,
            animate: 'slide'
        });
    }
}

function carregarDivBotaoWhats() {
    var html = "";

    html += "<a onclick='onClick_EnviarMensagemWhatsapp()' href='javascript:void(0)' class='btn btn-danger' id='linkWhats'><i class='fab fa-whatsapp'></i>Enviar WhatsApp</a>";

    $("#botaoWhats").empty();
    $("#botaoWhats").append(html);
}