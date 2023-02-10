
$(function() {
    $("#header").load("header.html");
    $("#left").load("left.html");
    $("#footer").load("footer.html");
  });



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    

})(jQuery);


//date picker de mes e ano

$(document).ready(() => {
    $("#datepicker").datepicker( {
        format: "mm-yyyy",
        startView: "months", 
        minViewMode: "months",
        viewMode: 'months',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    
    });
})


//date picker de ano

$(document).ready(() => {
    $("#datepicker2").datepicker( {
        format: " yyyy",
        startView: "years", 
        minViewMode: "years",
        viewMode: 'years',
    
    });
})

//Não deixar data avançar no calendario

function pad(valor) { // completa com zeros à esquerda, caso necessário
    return valor.toString().padStart(2, '0');
}

function formata(data) {
    return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
}

const campo = document.querySelector('#campoData');

window.addEventListener('DOMContentLoaded', function() {
    var data = new Date(); // data de hoje
    campo.max = formata(data);
});

// mensagens de validação
campo.addEventListener('input', () => {
  campo.setCustomValidity('');
  campo.checkValidity();
});

// se tentar submeter o form com data fora do intervalo, mostra o erro
campo.addEventListener('invalid', () => {
    campo.setCustomValidity('A data deve estar entre hoje e o passado');
});





