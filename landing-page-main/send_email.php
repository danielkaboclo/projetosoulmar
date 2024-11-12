<?php
// Inicializa a variável da mensagem de resposta
$responseMessage = "";

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta e sanitiza os dados do formulário
    $fullName = htmlspecialchars($_POST["fullName"]);
    $date = htmlspecialchars($_POST["date"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $trip = htmlspecialchars($_POST["trip"]);

    // Define os parâmetros do e-mail
    $to = "daniel.caboclo16@gmail.com";
    $subject = "Novo Contato - Reserva de Viagem";
    $message = "Nome Completo: $fullName\nData: $date\nTelefone: $phone\nTrajeto: $trip";
    $headers = "From: no-reply@seudominio.com";

    // Tenta enviar o e-mail e redireciona com o status
    if (mail($to, $subject, $message, $headers)) {
        header("Location: send_email.php?status=sucesso");
        exit(); // Garantir que o script pare após o redirecionamento
    } else {
        header("Location: send_email.php?status=erro");
        exit();
    }
}

// Inicializa a mensagem de resposta com base no status
$responseMessage = "";
if (isset($_GET["status"])) {
    if ($_GET["status"] == "sucesso") {
        $responseMessage = "E-mail enviado com sucesso!";
    } elseif ($_GET["status"] == "erro") {
        $responseMessage = "Falha no envio do e-mail. Tente novamente.";
    }
}
?>