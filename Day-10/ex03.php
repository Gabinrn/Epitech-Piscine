<?php
  $email = $_POST['email'];
  $sortie = "";
  if ($email !== null || $email !== ""){
    $regex = "/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}/";
    if(preg_match($regex,$email)){
      $sortie = $email;
    }
    else {
      http_response_code(400);
    }
  }
  echo json_encode($sortie);
?>
