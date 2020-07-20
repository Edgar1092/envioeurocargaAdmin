<table border="1">
<tr>
    <td colspan="10">
        <img src="{{ public_path().'/images/REPORTE_EXPORTAR_RIPE.jpg' }}" width="1510px" />
    </td>
</tr>
   <tr>
      <td WIDTH="30">Código de parte(T)</td>
      <td WIDTH="30">Código de producto(A)</td>
      <td WIDTH="30">Código de producto(T)</td>
      <td WIDTH="30">Uso</td>
      <td WIDTH="30">Proveedor</td>

   </tr>
   @foreach($data as $datas)
        <tr>
            <td>{{ $datas->inputTerminal }}</td>
            <td>{{ $datas->CtitProductCodeAutopartista }}</td>
            <td>{{ $datas->SuffixADPermit }}</td>
            <td>{{ $datas->use }}</td>
            <td>{{ $datas->CUIT }}</td>

        </tr>
    @endforeach
</table>