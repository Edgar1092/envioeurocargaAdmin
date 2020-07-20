<table border="1">
<tr>
    <td colspan="10">
        <img src="{{ public_path().'/images/REPORTE_MODULO_CUENTA_CORRIENTE.jpg' }}" width="1510px" />
    </td>
</tr>
   <tr>
      <td WIDTH="30">Insumo</td>
      <td WIDTH="30">Producto</td>
      <td WIDTH="30">Despacho</td>
      <td WIDTH="30">Permisos</td>
      <td WIDTH="30">Saldo</td>
   </tr>

   @foreach($data as $datas)
   
   @foreach($datas as $datica)
   <tr>
       <td>{{ $datica['item'] }}</td>
       <td>{{ $datica['subItem'] }}</td>
       <td>{{ $datica['numberDispatches'] }}</td>
       <td>{{ $datica['numberDispatches'] }}</td>
       <td>{{ $datica['quantityImport'] }}</td>
   </tr>

   @endforeach

@endforeach

</table>