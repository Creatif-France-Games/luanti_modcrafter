if(window.FileReader) { 
	var drop; 
	addEventHandler(window, 'load', function() {
		var drop = window;
		//var list = document.getElementById('list');

		function cancel(e) {
			if (e.preventDefault) { e.preventDefault(); }
			return false;
		}

		// Indique au navigateur que l'on peut déposer (drag & drop) sur cette cible
		addEventHandler(drop, 'dragover', cancel);
		addEventHandler(drop, 'dragenter', cancel);

		addEventHandler(drop, 'drop', function (e) {
			e = e || window.event; // récupère window.event si e est manquant (IE)   
			if (e.preventDefault) { e.preventDefault(); } // empêche le navigateur de rediriger vers l'image.

			var dt = e.dataTransfer;
			var files = dt.files;
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				var reader = new FileReader();

				// attacher les gestionnaires d'événements ici...

				reader.readAsDataURL(file);
				addEventHandler(reader, 'loadend', function(e, file) {
					try {
						var bin = this.result;
						var text = atob(bin.substr(bin.indexOf(",") + 1, bin.length - bin.indexOf(",") - 1));
						var data = jQuery.parseJSON(text);
						if (!data || !data.name || data.name == "") {
							alert("Le fichier n'est pas du bon type ou est corrompu !");
							return false;
						}

						project = data;
						displayMain();
					} catch(e) {						
						alert("Le fichier n'est pas du bon type ou est corrompu !");
						return false;
					}
				}.bindToEventHandler(file));
			}
			return false;
		});
		
		Function.prototype.bindToEventHandler = function bindToEventHandler() {
			var handler = this;
			var boundParameters = Array.prototype.slice.call(arguments);
			// création d'une closure
			return function(e) {
				e = e || window.event; // récupère window.event si e est manquant (IE)   
				boundParameters.unshift(e);
				handler.apply(this, boundParameters);
			}
		};
	});
}

function addEventHandler(obj, evt, handler) {
	if(obj.addEventListener) {
		// W3C method
		obj.addEventListener(evt, handler, false);
	} else if(obj.attachEvent) {
		// IE method.
		obj.attachEvent('on'+evt, handler);
	} else {
		// Old school method.
		obj['on'+evt] = handler;
	}
}
