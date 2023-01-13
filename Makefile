zip: extension.js metadata.json
	mkdir persistent-notifications@AlexeyReshetnyak
	cp extension.js persistent-notifications@AlexeyReshetnyak
	cp metadata.json persistent-notifications@AlexeyReshetnyak
	zip -r persistent-notifications@AlexeyReshetnyak.zip persistent-notifications@AlexeyReshetnyak
	rm -rfv persistent-notifications@AlexeyReshetnyak

clean: persistent-notifications@AlexeyReshetnyak.zip
	rm -v persistent-notifications@AlexeyReshetnyak.zip
