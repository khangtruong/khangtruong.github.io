$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_info_number').append(data.name);
      $('#bitcoin_block_number').append(data.height);
      $('#bitcoin_mining_number').append(data.time);
      $('#bitcoin_peer_number').append(data.peer_count);
		},

		error : function(xhr, status, err) {
			$('#bitcoin_info_number').append(err+" N/A");
      $('#bitcoin_block_number').append(err+" N/A");
      $('#bitcoin_mining_number').append(err+" N/A");
      $('#bitcoin_peer_number').append(err+" N/A");
		}
	});
});
