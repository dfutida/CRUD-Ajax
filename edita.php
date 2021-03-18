<?php

    include "backend/admin.class.php";

    $id = $_POST["id"];

    $pessoa = new pessoa();
    
    $pessoa->edita($id);
?>