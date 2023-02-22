<?php
require_once("Connection.php");

// Fetch the projects data
$sql = "SELECT * FROM tblproject";
$result = mysqli_query($conn, $sql);


$projects = array();

while ($row = mysqli_fetch_assoc($result)) {
    $project_PID = $row['PID'];
    $image = array();
    $tools = array();

    $images_sql = "SELECT image From tblallimages WHERE tblallimages.PID = $project_PID";
    $result_image = mysqli_query($conn, $images_sql);
    while ($item_img = mysqli_fetch_assoc($result_image)) {
        $image[] = $item_img["image"];
    }

    $tools_sql = "SELECT tools From tblalltools WHERE tblalltools.PID = $project_PID";
    $result_tools = mysqli_query($conn, $tools_sql);
    while ($item_tools = mysqli_fetch_assoc($result_tools)) {
        $tools[] = $item_tools["tools"];
    }


    $row['image'] = $image;
    $row['tools'] =  $tools;
    $projects[] = $row;
}
header('Content-Type: application/json');

// Encode the array as a JSON object
echo json_encode($projects);

// Output the JSON string

