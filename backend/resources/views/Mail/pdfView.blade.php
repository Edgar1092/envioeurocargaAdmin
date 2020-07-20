<!DOCTYPE html>

<html>

<head>
	<title>Repostock</title>
	<style type="text/css">
         @page {
      margin: 160px 50px;
    }
    header { 
        position: fixed;
      left: 0px;
      top: -105px;
      right: 0px;


    }
        
		.table{
			width: 100%;
			/* border:1px solid black; */
		}
  
        footer {
      position: fixed;
      left: 0px;
      bottom: -70px;
      right: 0px;
   
  
    }
		.table td, .table th{
			border-bottom:1px solid black;
		}
        .table2 td, .table2 th{
			border-bottom:0px;
		}
    
        .txt-lft{
            color:#848485;
            font-size:16px;
        }
        .txt-rgt{
            color:#808287;
            font-size:14px;
        }


	</style>

</head>
<header>
<?php 
        $pathHeader = public_path('/images/HEADER_PDF_CON_LOGO.png');
        $typeHeader = pathinfo($pathHeader, PATHINFO_EXTENSION);
        $dataHeader = file_get_contents($pathHeader);
        $base64Header = 'data:image/' . $typeHeader . ';base64,' . base64_encode($dataHeader);

        $pathFooter = public_path('/images/FOOTER_PDF.png');
        $typeFooter = pathinfo($pathFooter, PATHINFO_EXTENSION);
        $dataFooter = file_get_contents($pathFooter);
        $base64Footer = 'data:image/' . $typeFooter . ';base64,' . base64_encode($dataFooter);

?>
<div><img src="{{ $base64Header }}" style="width:100%"></div>
</header>
<body>


<div class="row">
    <div class="col-md-12">
        <h2 style="color:#1f97cc">SOLICITUD DE CERTIFICADO</h2>
    </div>
    <div class="col-md-12">
        <h3 style="color:#808287">(C.T.I.T)</h3>
    </div>
</div>
<table style="width:100%">
<tr>
    <td>
        <table class="table" style="width:100% !important">
            <tr>
                <td><span class="txt-lft">Número de CTIT:</span> <span class="txt-rgt"><b>1534/2019</b></span></td>
            </tr>
            <tr>
                <td><span class="txt-lft">Fecha de emisión:</span> <span class="txt-rgt"><b>2019-01-16 21:15:17</b></span></td>
            </tr>
            <tr>
                <td><span class="txt-lft">¿Anula y Reemplaza?:</span> <span class="txt-rgt"><b>NO</b></span></td>
            </tr>
        </table>
    </td>
    <td>
        <table class="table" style="width:100% !important">
            <tr>
                <td><span class="txt-lft">Nombre de la Solicitud:</span> <span class="txt-rgt"><b>FAURECIA_CTIT</b></span></td>
            </tr>
            <tr>
                <td><span class="txt-lft">Expediente: </span> <span class="txt-rgt"><b>EX-2019-03258518- -APN-DE#MPYT</b></span></td>
            </tr>
            <tr>
                <td><span class="txt-lft">¿Renovación?: </span> <span class="txt-rgt"><b>NO</b></span></td>
            </tr>
        </table>
    </td>
</tr>
</table> <br>

<table class="table2" style="width:100% !important">
            <tr>
                <td style="background-color:#1f97cc;color:white;padding:10px 10px 10px;width:150px"><b>Razón social:<br>CUIT:</b></td>
                <td style="color:#808287;border:1px solid black; border-left:0px;padding:10px 10px 10px"><b>FAURECIA ARGENTINA S.A<br>30707163972</b></td>
            </tr>
   
</table>

 <div class="col-md-12">
 <p style="color:#808287;text-align:center;padding:50px 50px 50px">Declaro bajo juramento el compromiso de no efectuar importaciones de mercaderias
comprendidas en el marco de las leyes No 24.040 de Compuestos Químicos y No 24.051 de
Residuos Peligrosos y sus modificaciones.</p>
 </div>    
<br>
<div class="col-md-12">
        <h2 style="color:#1f97cc">INSUMOS</h2>
</div><br>
<table class="table2" style="width:100% !important">
            <tr>
                <td style="color:#1f97cc">ITEM</td>
                <td style="color:#1f97cc">REFERENCIA</td>
                <td style="color:#1f97cc">NMC</td>
                <td style="color:#1f97cc">DESCRIPCION</td>
            </tr>
            <tr>
                <td style="background-color:#eff1f2;color:#8e888c;padding:10px 10px 10px;">I#1</td>
                <td style="background-color:#eff1f2;color:#8e888c;padding:10px 10px 10px;">1907580-</td>
                <td style="background-color:#eff1f2;color:#8e888c;padding:10px 10px 10px;">85013110</td>
                <td style="background-color:#eff1f2;color:#8e888c;padding:10px 10px 10px;">Eje de motor de correder de alambre y cobertura
                    plástica para hacer girar el motor.
                </td>
            <tr>
   
</table>
</body>
<footer>
<div><img src="{{ $base64Footer}}" style="width:100%"></div>
</footer>
</html>