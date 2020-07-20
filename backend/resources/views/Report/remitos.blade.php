<table border="1">
<tr>
    <td colspan="10">
        <img src="{{ public_path().'/images/REPORTE_CONSULTA_DE_REMITOS.jpg' }}" width="1510px" />
    </td>
</tr>
   <tr>
      <td WIDTH="30">Proveedor/Cliente</td>
      <td WIDTH="30">Código de producto</td>
      <td WIDTH="30">Cantidad</td>
      <td WIDTH="30"># Remito</td>
      <td WIDTH="30">Fecha de remito</td>
      <td WIDTH="30">Estado</td>
   </tr>
   @foreach($data as $datas)
   
        @foreach($datas as $datica)
        <tr>
            <td>{{ $datica['businessName'] }}</td>
            <td>{{ $datica['numberProduct'] }}</td>
            <td>{{ $datica['quantity'] }}</td>
            <td>{{ $datica['numberRemito'] }}</td>
            <td>{{ $datica['dateRemito'] }}</td>
            <td>{{ $datica['nameStatus'] }}</td>
        </tr>

        @endforeach

    @endforeach
</table>