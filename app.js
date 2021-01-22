$(document).ready(function () {

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
      })

    //consulta presencial: 

    $("#addConsultaPresencial").on("click", function () {
        console.log("hey")
        $("#modalPresencial").modal("show");
    })

    $("#presencial").on("submit", function (e) {
        console.log("on")
        var retVal = true;

        if (!$("input[name='btnradio']:checked").val() || $("#exampleInputBirthDate1").val() == "") {
            $("#modalErros1").modal("show");
            
        } else { 
            e.preventDefault();
            $("#showme1").show();
            $("#modalPresencial").modal("hide");
        }

        e.preventDefault();
        return retVal;
    })

    $("#asterisco1").mouseover(function () {
        $(this).attr('title', 'Receberá um email a confirmar o dia selecionado!');

    })

    $("#asterisco1").mouseout(function () {
        $(this).removeAttr('title');

    })

    $("#exampleInputBirthDate1").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: 'yy/mm/dd',
        yearRange: "2021:2023"
    });

    
    //consulta online


    $("#addConsultaOnline").on("click", function () {
        console.log("hey")
        $("#modalOnline").modal("show");
    })

    $("#btn2sub").on("click", function (e) {
        console.log("on hey")
        var retVal = true;

        if (!$("input[name='btnradio1']:checked").val() || $("#exampleInputBirthDate2").val() == "") {
            $("#modalErros2").modal("show");
            
        } else { 
            e.preventDefault();
            $("#showme2").show();
            $("#modalOnline").modal("hide");
        }

        e.preventDefault();
        return retVal;
    })

    $("#asterisco1").mouseover(function () {
        $(this).attr('title', 'Receberá um email a confirmar o dia selecionado!');

    })

    $("#asterisco1").mouseout(function () {
        $(this).removeAttr('title');

    })

    $("#exampleInputBirthDate2").datepicker({
        changeYear: true,
        changeMonth: true,
        dateFormat: 'yy/mm/dd',
        yearRange: "2021:2023"
    });

  
    




})



