/* 
	Persistent Notifications
	Copyright Alexey Reshetnyak 2023
	License GPL v2
*/

const Main = imports.ui.main;
const MessageTray = Main.messageTray;
const Urgency = imports.ui.messageTray.Urgency;

class Extension {
    constructor() {
    }
    
    _on_source_added(tray, source) {
    	this.new_source = source;
      this.notification_added = this.new_source.connect('notification-added',
                                       this._on_notification_added.bind(this));
    }
    
    _on_notification_added(tray, notification) {
    	notification.setUrgency(Urgency.CRITICAL);
    	this.new_source.disconnect(this.notification_added);
    }
    
    enable() {
		this.source_added = MessageTray.connect('source-added',
                                             this._on_source_added.bind(this));
    }

    disable() {
    	MessageTray.disconnect(this.source_added);
    }
}

function init() {
	return new Extension();
}
