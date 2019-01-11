var ibu = 0;
$('table td').click(function(){
    $(this).css('background', '#5c666f')
    table = $(this).text();
    console.log(table);
});
$('#hydro').click(function(){
    areometr = $("#areometer").val();
    hydrometer = (areometr / 0.5 * 2) / 1000 + 1;
    $('#hydrometer').html('Показатель по гидрометру: ' + hydrometer);
});
$('#result').click(function(){
    alpha = $("#alpha").val();
    weight = $("#weight").val();
    volume = $("#volume").val();
    ibu = ibu + Math.round((((weight * alpha) / (volume * 0.1)) * table), -1);
    $('#ibu').html('Горечь: ' + ibu + ' IBU');
});
$('#more').click(function(){
    $('#hydrometer').html();
    $('input').val('');
    $('table td').css('background', 'none');
});