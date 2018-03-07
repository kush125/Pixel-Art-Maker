
$('form').on('submit', function(event) {
	event.preventDefault();
	$('table').remove();
	var row = $('#grid-height input').val();
	var col = $('#grid-width input').val();
	makeGrid(row,col);
});

function makeGrid(row, col) {
	$('#grid').append('<table></table>')
	for (var i = 0; i < row; i++){
		$('table').append('<tr></tr>');
		for (var  j = 0; j < col; j++){
			$('tr').last().append('<td></td>')
		}
	}
}

$( "#grid" ).on( "click", "td", function( event ) {
    event.preventDefault();
    var color = $('#pick-color label input').val();
    $(this).css('background-color', color);
});

