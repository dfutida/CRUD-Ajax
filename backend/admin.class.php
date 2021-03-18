<?php

class pessoa {

    public function insere() { 

        include_once 'conexao.php';

        try {
            header('Content-Type: application/json');

            $nome = $_POST["nome"];
            $salario = $_POST["salario"];
            
            $database = new Conexao();
            $db = $database->abreConexao();

            $sql = "INSERT INTO tb_teste (
                nome, salario
            ) VALUES ( 
                :nome, :salario
            )";

            $stm = $db->prepare($sql);
            $stm->bindParam(':nome', $nome, PDO::PARAM_STR);
            $stm->bindParam(':salario', $salario, PDO::PARAM_STR);

            if($stm->execute()) {
                
                //echo json_encode("Registro inserido com sucesso");

                $vsql = "SELECT * FROM tb_teste";

                $stmt = $db->prepare($vsql);
                $stmt->execute();
    
                $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
                $itens = array();
    
                foreach($res as $pessoa){
                    $itens[] = array("id" => $pessoa['id'], "nome" => $pessoa['nome'], "salario" => $pessoa['salario']);
                }
                
                echo json_encode($itens);

            } else {
                echo json_encode("Erro ao inserir registro");
            }

            $database->fechaConexao();

        } catch (PDOException $e) {
            echo json_encode("There is some problem in function insere: " . $e->getMessage());
        }
    }

    public function seleciona() { 

        include_once 'conexao.php';

        try {
            header("Content-Type: application/json");

            $database = new Conexao();
            $db = $database->abreConexao();

            $sql = "SELECT * FROM tb_teste";

            $stmt = $db->prepare($sql);
            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            $itens = array();

            foreach($result as $pessoa){
                $itens[] = array("id" => $pessoa['id'], "nome" => $pessoa['nome'], "salario" => $pessoa['salario']);
            }
            
            echo json_encode($itens);
            
            $database->fechaConexao();

        } catch (PDOException $e) {
            echo json_encode("There is some problem in function seleciona: " . $e->getMessage());
        }
    }

    public function edita($id) { 

        include_once 'conexao.php';

        try {
            header("Content-Type: application/json");

            $database = new Conexao();
            $db = $database->abreConexao();

            $sql = "SELECT * FROM tb_teste WHERE id = ".$id."";

            $res = $db->query($sql);

            $itens = array();

            while ($linha = $res->fetch(PDO::FETCH_ASSOC)) {
                $id = $linha['id'];
                $nome = $linha['nome'];
                $salario = $linha['salario'];

                $itens[] = array("id" => (int) $id, "nome" => $nome, "salario" => $salario);
            }

            echo json_encode($itens);
            
            $database->fechaConexao();

        } catch (PDOException $e) {
            echo json_encode("There is some problem in function edita: " . $e->getMessage());
        }
    }

    public function atualiza($id, $nome, $salario) { 

        include_once 'conexao.php';

        try {
            header("Content-Type: application/json");

            $database = new Conexao();
            $db = $database->abreConexao();

            $sql = "UPDATE tb_teste SET nome=:nome, salario=:salario WHERE id=:id";
                        
            if($stmt = $db->prepare($sql)){
                $stmt->bindParam(":id", $id);
                $stmt->bindParam(":nome", $nome);
                $stmt->bindParam(":salario", $salario);
            }

            if($stmt->execute()) {
                
                //echo json_encode("Registro atualizado com sucesso");

                $vsql = "SELECT * FROM tb_teste";

                $stm = $db->prepare($vsql);
                $stm->execute();
    
                $res = $stm->fetchAll(PDO::FETCH_ASSOC);
    
                $itens = array();
    
                foreach($res as $pessoa){
                    $itens[] = array("id" => $pessoa['id'], "nome" => $pessoa['nome'], "salario" => $pessoa['salario']);
                }
                
                echo json_encode($itens);

            } else {
                echo json_encode("Erro ao atualizar registro");
            }

            $database->fechaConexao();

        } catch (PDOException $e) {
            echo json_encode("There is some problem in function atualiza: " . $e->getMessage());
        }
    }

    public function delete($id) { 

        include_once 'conexao.php';

        try {
            header("Content-Type: application/json");

            $database = new Conexao();
            $db = $database->abreConexao();

            $sql = "DELETE FROM tb_teste WHERE id = :id";

            $stmt = $db->prepare($sql);
            $stmt->bindParam(':id', $id);

            if($stmt->execute()) {
                $vsql = "SELECT * FROM tb_teste";

                $stm = $db->prepare($vsql);
                $stm->execute();
    
                $res = $stm->fetchAll(PDO::FETCH_ASSOC);
    
                $itens = array();
    
                foreach($res as $pessoa){
                    $itens[] = array("id" => $pessoa['id'], "nome" => $pessoa['nome'], "salario" => $pessoa['salario']);
                }
                
                echo json_encode($itens);
                
            } else {
                echo json_encode("Houve um erro ao excluir o registro");
            }
            
            $database->fechaConexao();

        } catch (PDOException $e) {
            echo json_encode("There is some problem in function delete: " . $e->getMessage());
        }
    }
}

?>