var baseUri = 'YOUR DOWNLOAD TARGET BASE URL (e.g: http://domain.com/dir/images/FilePrefix-';
var ext = '.FILE_EXTENSION (e.g: .jpg)';
var uri;
var fileIndex;
var startIndex = 0;
var endIndex = 100;

for(var i = startIndex; i <= endIndex; i++ )
{
	fileIndex = '';
	uri = '';
	if(digits(i) == 1)
	{
		fileIndex = '00'+i;
	}
	else if(digits(i) == 2)
	{
		fileIndex = '0'+i;
	}
	else
		if(digits(i) == 3)
		{
			fileIndex = i;
		}
	uri = baseUri + fileIndex + ext;
	download(uri, fileIndex+ext);
};

//download method
var download = function(uri,filename, callback){
	console.log('downloading '+filename+'..');
	//$ npm install http-get
	var http = require('http-get');
	var path = 'YOUR PATH FOR DOWNLOADED FILES (e.g: C:\\Files\\)'+filename;
	http.get(uri, path, function(error)
	{
		if(error) {
			console.error(error);
			return -1;
		}
		else
		{
			console.log(filename +' downloaded.');
			return 0;
		}
	});		
};
//digit counter
var digits = function(n) { 
		return 1+Math.floor(Math.log(n)/Math.log(10));		
	}; 