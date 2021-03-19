$(document).ready(function() {

    //var itens = [];

    $("#salario").maskMoney({
      prefix: 'R$ ',
      allowNegative: true,
      thousands: '.',
      decimal: ','
   });

   $("#formajax").submit(function(e){
        
        e.preventDefault();
        var idPessoa = $("#id-pessoa").val();
        
        var formData = {
            'nome' : $("#nome").val(),
            'salario' : $("#salario").val()
        };

        //itens.push(formData);
        
        if(typeof(idPessoa) == 'undefined' || idPessoa == null || idPessoa == '') {

            $.ajax({
                url:'insere.php',
                method:'POST',
                dataType: "json",
                data:formData
                /*
                beforeSend: function(){
                    document.getElementById("processando").style.display = "inline";
                }
                */
            }).done(function(data){
                /*
                jQuery.each(data, function(index, item) {
                    $("#mytr").append("<tr><td>"+item.id+"</td><td>"+item.nome+"</td><td>"+item.salario+"</td></tr>");
                });
                */
                document.getElementById("processando").style.display = "none";
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td class='text-center'>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" class='btn btn-light btn-sm' value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' class='btn btn-light btn-sm' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
                document.getElementById("nome").focus();
            }).fail(function(xhr, textStatus, error) {
                document.getElementById("processando").style.display = "none";
                console.log(xhr.responseText);
                console.log('Erro: ' + textStatus);
                console.log('ErroText: ' + error);
            });
            
        } else {
                
            $.ajax({
                url:'atualiza.php',
                method:'POST',
                dataType: "json",
                data:{
                    id: idPessoa,
                    nome: $("#nome").val(),
                    salario: $("#salario").val()
                }
                /*
                beforeSend: function(){
                    document.getElementById("processando").style.display = "inline";
                }
                */
            }).done(function(data){
                document.getElementById("processando").style.display = "none";
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td class='text-center'>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" class='btn btn-light btn-sm' value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' class='btn btn-light btn-sm' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
                $("#id-pessoa").val('');
                document.getElementById("nome").focus();
            }).fail(function(xhr, textStatus, error) {
                document.getElementById("processando").style.display = "none";
                console.log(xhr.responseText);
                console.log('Erro: ' + textStatus);
                console.log('ErroText: ' + error);
            });
        }
    });

    $.ajax({
        url: "seleciona.php",
        method: "POST",
        dataType: "json",
        data: {},
        beforeSend: function(){
            document.getElementById("processando").style.display = "inline";
        }
    }).done(function(data){
        document.getElementById("processando").style.display = "none";
        $("#mytr").empty();
        for (var i in data) {
            $("#mytr").append("<tr><td class='text-center'>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" class='btn btn-light btn-sm' value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' class='btn btn-light btn-sm' value='Excluir'></td></tr>");
        }
        $('#formajax')[0].reset();
        document.getElementById("nome").focus();
    }).fail(function(xhr, textStatus, error){
        document.getElementById("processando").style.display = "none";
        console.log(xhr.responseText);
        console.log('Erro: ' + textStatus);
        console.log('ErroText: ' + error);
    });

    $(document).on("click","#btn-edita", function(e) {

        e.preventDefault();

        //var id = $('#data-id').val();
        var id = $(this).attr("data-id");

        $.ajax({
            url: "edita.php",
            method: "POST",
            dataType: "json",
            data: {
                id: id
            }
            /*
            beforeSend: function(){
                document.getElementById("processando").style.display = "inline";
            }
            */
        }).done(function(data) {
            //console.log(data);
            document.getElementById("processando").style.display = "none";
            for (var i in data) {
                $("#id-pessoa").val(data[i]["id"]);
                $("#nome").val(data[i]["nome"]);
                $("#salario").val(data[i]["salario"]);
            }
            document.getElementById("nome").focus();
        }).fail(function(xhr, textStatus, error) {
            document.getElementById("processando").style.display = "none";
            console.log(xhr.responseText);
            console.log('Erro: ' + textStatus);
            console.log('ErroText: ' + error);
        });
    });

    $(document).on("click","#btn-delete", function(e) {

        e.preventDefault();

        //var id = $('#data-id').val();
        var id = $(this).attr("del-id");
        var nome = $(this).attr("del-nome");

        var x = confirm('Você tem certeza que deseja excluir '+nome+'?');

        if(x) {

            $.ajax({
                url: "delete.php",
                method: "POST",
                dataType: "json",
                data: {
                    id: id
                }
                /*
                beforeSend: function(){
                    document.getElementById("processando").style.display = "inline";
                }
                */
            }).done(function(data) {
                document.getElementById("processando").style.display = "none";
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td class='text-center'>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" class='btn btn-light btn-sm' value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' class='btn btn-light btn-sm' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
                document.getElementById("nome").focus();
            }).fail(function(xhr, textStatus, error){
                document.getElementById("processando").style.display = "none";
                console.log(xhr.responseText);
                console.log('Erro: ' + textStatus);
                console.log('ErroText: ' + error);
            });
        }
    });

    $(document).on("click","#limpar", function(e) {

        e.preventDefault();

        $('#formajax')[0].reset();
        $("#id-pessoa").val('');
        document.getElementById("nome").focus();
    });

    $(".navbar-toggler-icon").add(window).on('resize load click',function(e){
        espaco = 5; // ajuste de espaçamento à partir barra, em pixels
        if(e.type != "click"){
            $("body").css("padding-top",($("div.fixed-top").height()+espaco)+"px");
        }else{
            setTimeout(function(){
                $("body").animate({ 'padding-top': ($("div.fixed-top").height()+espaco)+'px' }, 50);
            },500);
        }
    });
});
