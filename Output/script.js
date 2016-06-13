var main = function() {
	var count=2;
	var currentItem="";
	var checkbox= '<a class="done"><i class="material-icons">&#xE876;</i></a>';
	var deleteBtn= '<a class="delete"><i class="material-icons">&#xE872;</i></a>';
	var editBtn= '<a class="edit"><i class="material-icons">&#xE150;</i></a>';
	$('form').submit(function(event) {

		var $input = $(event.target).find('input');
		var comment = $input.val();

		if (comment != "") {
			var html = $('<li>').html(checkbox + '<span>'+ comment +'</span>'+ deleteBtn + editBtn).attr('id', 'list'+count);
			console.log(html);
			html.appendTo('#com');
			$input.val("");
			count++;
		}
		return false;
	});

	$('.delete').on('click', this.parent, function(currentItem) {
		currentItem= $(this).parent();
		console.log(currentItem);
		$(currentItem).remove();
	});

	$('.done').click(function(){
		currentItem= $(this).parent().attr('id');
	console.log(currentItem);
		$(currentItem).child('span').toggleClass('complete');
	});
};

$(document).ready(main);
