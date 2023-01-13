zip: extension.js metadata.json
	zip persistent-notifications@AlexeyReshetnyak.zip extension.js metadata.json

clean: persistent-notifications@AlexeyReshetnyak.zip
	rm -v persistent-notifications@AlexeyReshetnyak.zip
