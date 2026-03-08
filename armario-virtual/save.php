<?php

$archivo="prendas.json";

$imagen=$_FILES["imagen"];

$nombre="img_".time().".png";

$ruta="img/".$nombre;

move_uploaded_file($imagen["tmp_name"],$ruta);

$nueva=[

"imagen"=>$ruta,
"categoria"=>$_POST["categoria"],
"subcategoria"=>$_POST["subcategoria"],
"tiempo"=>$_POST["tiempo"]

];

$datos=[];

if(file_exists($archivo)){

$datos=json_decode(file_get_contents($archivo),true);

}

$datos[]=$nueva;

file_put_contents($archivo,json_encode($datos,JSON_PRETTY_PRINT));

header("Location: index.php");

?>