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
            }).done(function(data){
                /*
                jQuery.each(data, function(index, item) {
                    $("#mytr").append("<tr><td>"+item.id+"</td><td>"+item.nome+"</td><td>"+item.salario+"</td></tr>");
                });
                */
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
                
            }).fail(function(xhr, textStatus, error){
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
            }).done(function(data){
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
                $("#id-pessoa").val('');
            }).fail(function(xhr, textStatus, error){
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
        data: {}
    }).done(function(data){
        $("#mytr").empty();
        for (var i in data) {
            $("#mytr").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' value='Excluir'></td></tr>");
        }
        $('#formajax')[0].reset();
    }).fail(function(xhr, textStatus, error){
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
        }).done(function(data) {
            //console.log(data);
            for (var i in data) {
                $("#id-pessoa").val(data[i]["id"]);
                $("#nome").val(data[i]["nome"]);
                $("#salario").val(data[i]["salario"]);
            }
            document.getElementById("nome").focus();

        }).fail(function(xhr, textStatus, error){
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
            }).done(function(data) {
                $("#mytr").empty();
                for (var i in data) {
                    $("#mytr").append("<tr><td>"+data[i]["id"]+"</td><td>"+data[i]["nome"]+"</td><td>"+data[i]["salario"]+"</td><td><input type='button' id='btn-edita' data-id="+data[i]["id"]+" value='Editar'>&nbsp;&nbsp;<input type='button' id='btn-delete' del-id="+data[i]["id"]+" del-nome='"+data[i]["nome"]+"' value='Excluir'></td></tr>");
                }
                $('#formajax')[0].reset();
            }).fail(function(xhr, textStatus, error){
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
    });
});
