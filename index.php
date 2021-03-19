<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ajax e PHP</title>
    <script src="js/jquery-3.5.1.min.js"></script>

    <!-- FORMATAR MOEDA -->
    <script src="js/jquery.maskMoney.min.js"></script>

    <!-- AJAX -->
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/style.css" />

<script>
    var oldxpos;

    function getPos(mouseEvent) {
        
        var xpos;
        
        if (mouseEvent) {
            xpos = mouseEvent.screenX;
        } else {
            xpos = window.event.screenX;
        }

        if (xpos == 0 && xpos != oldxpos) {
            document.getElementById("togglemenu").click();
            oldxpos = xpos;
        } else {
            oldxpos = xpos;
        }
    }

    $(window).load(function() {
        document.getElementById("processando").style.display = "inline";
    })
</script>
</head>

<body
onmousemove = getPos(event);
onSubmit='document.getElementById("processando").style.display="inline";'
onbeforeunload='document.getElementById("processando").style.display="inline";'
>

<div id='processando' style='display:none;' width='100%' height='100%'><br><br><br><br><br><br><br><br><br><br><br><br><p align='center'><font color='#60D060'><b>AGUARDE <img src='images/loading-bars.svg' width='40'> PROCESSANDO</b></font></p><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<div class="centralizar">
<form action="index.php" id="formajax" method="POST">
<table class="xtable">
    <tr>
        <td>Nome:</td>
        <td><input type="text" id="nome" name="nome" minlength="3" required></td>
    </tr><tr>
        <td>Salario:</td>
        <td><input type="text" id="salario" name="salario" required></td>
    </tr><tr>
        <td><input type="hidden" id="id-pessoa"></td>
        <td style="text-align:right;"><input type="button" id="limpar" value="Limpar">&nbsp;&nbsp;<input type="submit" id="salvar" value="Salvar"></td>
    </tr>
</table>
</form>
</div>
<div class="centralizar">
<table class="vtable">
    <tr>
        <td>ID</td>
        <td>Nome</td>
        <td>Salario</td>
        <td>Controle</td>
    </tr>
    <tbody id="mytr"></tbody>
</table>
</div>

</body>
</html>