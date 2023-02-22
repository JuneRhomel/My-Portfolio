<?php

require_once("Connection.php");

if (!empty($_POST)) {
    $Title = $_POST["Project"];
    $Description = $_POST["Description"];
    $Github = $_POST["Github"];
    $Link = $_POST["Link"];
    $Tools = $_POST["Tools"];
    $data_array = json_decode($Tools, true);

    $list_tools = '';
    foreach ($data_array as $item) {
        $list_tools .= $item["tool"].",";
    }


    if ($_FILES && $_FILES['Image']) {
        $file = $_FILES['Image'];

        $fileName = $_FILES['Image']['name'];
        $filetype = $_FILES['Image']['type'];
        $fileTmpName = $_FILES['Image']['tmp_name'];
        $fileError = $_FILES['Image']['error'];
        $fileSize = $_FILES['Image']['size'];

        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = array('jpg','jpeg','png');

        if(in_array($fileActualExt,$allowed) && $fileError === 0) {
            $fileNameNew = uniqid('',true).".". $fileActualExt;
            $fileDestination = 'uploads/'.$fileNameNew;
            move_uploaded_file($fileTmpName,$fileDestination);
        } 
    } 


    
    $sql = "INSERT INTO `tblproject`(`Title`, `Description`, `Github`, `Link`,`Image`,`Tools`) VALUES ('$Title','$Description','$Github','$Link','$fileDestination','$list_tools')";
    
    if ($conn->query($sql) === TRUE) {
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} 
