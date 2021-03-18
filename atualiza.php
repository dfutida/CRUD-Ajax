<?php

    include "backend/admin.class.php";

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $salario = $_POST["salario"];

    $pessoa = new pessoa();
    
    $pessoa->atualiza($id, $nome, $salario);
?>