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

</head>

<body>
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