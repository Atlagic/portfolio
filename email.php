<?php
  if( isset($_POST['name']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['message']) ){
    $name = $_POST['name'];
	$lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = nl2br($_POST['message']);
    $to = "aleksandar.atlagic.93.14@ict.edu.rs";
    $from = $email;
    $subject = "Contact form message";
    $message = "<b>Name: </b>".$name."<br/><b>Lastname: </b>".$lastname."<br/><b>Email: </b>".$email."<br/><b>Message: ".$message."</b>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";
    if( mail($to, $subject, $message, $headers) ){
      echo "success";
    }
    else{
      echo "The server failed to send the message. Please try again later.";
    }
  }
?>