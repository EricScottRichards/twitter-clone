$(document).ready(function() {
	
	$.timeago.settings.strings.suffixAgo = null;
	$.timeago.settings.strings.years = "%d" + "y";

	$('span.username').after('<span><time class="timeago" datetime="1:04 PM - 19 Sep 13"></time></span>');

	$('time.timeago').timeago();


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
		// var newTime = new Date();
		var newTweet = $('.tweet:first').clone();
		newTweet.find('.avatar').prop('src', 'img/stach.jpg');
		newTweet.find('.fullname').html('Eric Richards');
		newTweet.find('.username').html('@satchmohonky');
		newTweet.find('.tweet-text').html($('.tweet-compose').val());
		// newTweet.find('.time').html(newTime);
		// newTweet.find('time datetime').html(newTime);
		$('#stream').prepend(newTweet);
		
		$('#tweet-controls').hide();
		$('#tweet-content .tweet-compose').css({
			height: '2.5em'
		});

	})

	$('.tweet-actions').hide();

	$('.tweet').hover(function(){
		$('.tweet-actions', this).show();
		}, function(){
		$('.tweet-actions', this).hide();
		}
	);

	$('.stats, .reply').hide();

	$('.tweet').click(function(){
		$('.stats, .reply', this).slideToggle();
	});
		
	// $('div.time').replaceWith('<div><time class="timeago" class="time" datetime="1:04 PM - 19 Sep 13"></time></div>');

	// $('div time.timeago').timeago();

	


});





