$(document).ready(function() {
	$(".senderMessageContainer").hide();
	$(".receiverMessageContainer").hide();



	$("#sendBut").click(function() {
		var message = $("#messageInput").val();
	
		$(".senderMessage").html(message);
		$(".senderMessageContainer").show();

		setTimeout(function(){$(".receiverMessageContainer").show();}, 7000);
		
	});
})



