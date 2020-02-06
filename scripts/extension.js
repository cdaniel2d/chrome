document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').textContent = "Extension loaded";
    var button = document.getElementById('changelinks');
	var params = document.getElementById('params');
    button.addEventListener('click', function () {
        $('#status').html('Clicked change links button');
        var text = $('#linkstext').val();
		
		var linesDefault = params.value.replace(/\r\n/g,"\n").split("\n").filter(line => line);
		var lines = linesDefault.map(function (el) {
  return el.trim();
});
		console.log(lines);
		$('#array').html(lines);
		
		
        if (!text) {
            $('#status').html('Invalid text provided');
            return;
        }
		
		
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                $('#status').html('changed data in page');
                console.log('success');
            });
        });
    });
});

