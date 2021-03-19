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

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
    <script src="bootstrap/js/bootstrap.min.js"></script>

</head>

<body class="bg-dark text-light">

<div id='processando' style='display:none;' width='100%' height='100%'><br><br><br><br><br><br><br><br><br><br><br><br><p align='center'><font color='#60D060'><b>AGUARDE  <img src='images/loading-bars.svg' width='40'>  PROCESSANDO</b></font></p><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<div class="d-flex align-items-center justify-content-center h-100">
<form action="index.php" id="formajax" method="POST">
<table class="table">
    <caption style="caption-side:top; text-align:center;" class="text-light">Cadastro de funcionários</caption>
    <tr>
        <td>Nome:</td>
        <td><input type="text" id="nome" name="nome" minlength="3" required></td>
    </tr><tr>
        <td>Salário:</td>
        <td><input type="text" id="salario" name="salario" required></td>
    </tr><tr>
        <td><input type="hidden" id="id-pessoa"></td>
        <td style="text-align:right;"><input type="button" class="btn btn-light btn-sm" id="limpar" value="Limpar">&nbsp;&nbsp;<input type="submit" class="btn btn-light btn-sm" id="salvar" value="Salvar"></td>
    </tr>
</table>
</form>
</div>
<div class="d-flex align-items-center justify-content-center h-100">
<table class="table table-hover table-striped table-dark">
    <tr>
        <td class="text-center">#</td>
        <td>Nome</td>
        <td>Salário</td>
        <td>Controle</td>
    </tr>
    <tbody id="mytr"></tbody>
</table>
</div>

</body>
</html>