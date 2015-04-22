$(document).ready(function() {
	
	$('#tweet-controls').hide();

	$('.tweet-compose').on('click', function(){
		$('#tweet-controls').show()
		$('#tweet-content .tweet-compose').css({
			height: '5em'
		})
	})

	$('#tweet-content .tweet-compose').on('keyup', function(){
		var count = 140
		var tweetLength = $('#tweet-content .tweet-compose').val().length
		console.log(tweetLength)
		var thingy = count - tweetLength
		$('#char-count').text(thingy)
		if (tweetLength > 130){
			$('#char-count').css({
				color: 'red'
			})
		} else {
			$('#char-count').css({
				color: 'initial'
			})
		}
		if (thingy < 0){
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		}
	})

	$('#tweet-submit').on('click', function(){

		var newTweet = $('.tweet:first').clone();
		newTweet.find('.avatar').prop('src', 'img/alagoon.jpg');
		newTweet.find('.fullname').html('Eric Richards');
		newTweet.find('.username').html('@satchmohonky');
		newTweet.find('.tweet-text').html($('.tweet-compose').val());
		$('#stream').prepend(newTweet);
		
		$('#tweet-controls').hide();
		$('#tweet-content .tweet-compose').css({
			height: '2.5em'
		});

	})

});