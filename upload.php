<?php

header('Content-Type: application/json');

$uploaded = [];

if ( ! empty($_FILES['file']['name'][0]))
{
    foreach ($_FILES['file']['name'] as $index => $name)
    {
        $filename = $_FILES['file']['tmp_name'][$index];
        $destination = 'images/' . $name;
        
        if (move_uploaded_file($filename, $destination))
        {
            $uploaded[] = [
                'name' => $name,
                'file' => $destination
            ];
        }
    }
}

echo json_encode($uploaded);