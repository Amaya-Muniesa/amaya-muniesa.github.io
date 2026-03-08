<!DOCTYPE html>
<html lang="es">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Mi Armario</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet">

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

<style>

body{
background:#f5f7fb;
}

.header{
padding:18px;
font-size:3rem;
text-align:center;
font-family:"Limelight",sans-serif;
}

h2 img{
height:50px;
margin-right:10px;
}

.container{
max-width:1100px;
margin:auto;
padding:20px;
}

.controls{
flex-wrap:wrap;
gap:10px;
margin-bottom:20px;
padding:1rem;
border-radius:8px;
background-color:#5c6bc020;
box-shadow:0 4px 10px rgba(0,0,0,0.08);
}

input,select,button{
margin:0.2rem;
padding:10px;
border-radius:8px;
border:1px solid #ccc;
font-size:14px;
}

button{
background:#5c6bc0;
color:white;
border:none;
cursor:pointer;
}

button.add{
width:100%;
}

.card{
background:white;
border-radius:10px;
overflow:hidden;
box-shadow:0 4px 10px rgba(0,0,0,0.08);
transition:transform .15s;
}

.card:hover{
transform:scale(1.03);
}

.card img{
width:100%;
height:180px;
object-fit:contain;
padding:10px;
background:white;
}

.card-body{
text-align:center;
font-size:14px;
}

</style>

</head>

<body>

<div class="container py-4">

<div class="header">
<h2 class="mb-4 text-center">
<img src="logo-mi-armario.png"> Mi Armario
</h2>
</div>

<div class="card p-3 mb-4">

<form action="save.php" method="POST" enctype="multipart/form-data">

<div class="row g-2">

<div class="col-md-3 col-12">
<input type="file" name="imagen" class="form-control" required>
</div>

<div class="col-md-3 col-6">
<select name="categoria" class="form-select">

<option>Parte de Arriba</option>
<option>Prenda Exterior</option>
<option>Vestido</option>
<option>Pantalón</option>
<option>Falda</option>
<option>Zapatos</option>
<option>Bolsos</option>
<option>Sombreros</option>
<option>Joyería</option>
<option>Otros</option>

</select>
</div>

<div class="col-md-3 col-6">
<input type="text" name="subcategoria" class="form-control" placeholder="Subcategoría">
</div>

<div class="col-md-2 col-6">
<select name="tiempo" class="form-select">
<option>Calor</option>
<option>Templado</option>
<option>Frío</option>
</select>
</div>

<div class="col-md-1 col-6 d-flex align-items-center">
<button class="btn btn-dark add">
<i class="fa fa-plus"></i>
</button>
</div>

</div>

</form>

</div>

<div class="row">

<?php

$archivo="prendas.json";

if(file_exists($archivo)){

$prendas=json_decode(file_get_contents($archivo),true);

if($prendas){

foreach($prendas as $p){

echo '

<div class="col-lg-3 col-md-4 col-6 mb-3">

<div class="card">

<img src="'.$p["imagen"].'">

<div class="card-body">

<b>'.$p["categoria"].'</b><br>
'.$p["subcategoria"].'<br>
'.$p["tiempo"].'

</div>

</div>

</div>

';

}

}

}

?>

</div>

</div>

</body>
</html>