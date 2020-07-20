<table border="1">
<tr>
    <td colspan="10">
        <img src="{{ public_path().'/images/REPORTE_CTIT.jpg' }}" width="1510px" />
    </td>
</tr>
   <tr>
      <td WIDTH="30">CTIT</td>
      <td WIDTH="30">Proveedor/Cliente</td>
      <td WIDTH="30">Fecha CTIT</td>
      <td WIDTH="30">Cod Producto</td>
      <td WIDTH="30">Part Number Terminal</td>
   </tr>
   @foreach($data as $datas)
        <tr>
            <td>{{ $datas->numberCTIT }}</td>
            <td>{{ $datas->businessName }}</td>
            <td>{{ $datas->dateSynchronization }}</td>
            <td>{{ $datas->CtitProductCodeAutopartista }}</td>
            <td>{{ $datas->codigoProducto }}</td>
        </tr>
    @endforeach
</table>