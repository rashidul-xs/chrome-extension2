
jQuery( document ).ready(function($) {

	// functions
	const insertTextToInputs = (value, field) => {
		field.value = value.replace(/<br\s*[\/]?>/g, "\n");
		const event = new Event("input", {
			bubbles: true,
			cancelable: true,
		 });
		field.dispatchEvent(event);
	}

	const addGetGenieTriggerBtn = (container) => {
		const textarea = jQuery(container).find("textarea");
		const text = jQuery(container).find("input[type=text]");
		const logo =`${window.getGenie.config.assetsUrl}dist/admin/images/genie-dark.svg`;
		let uiThemeClass = elementor.settings.editorPreferences.model.get('ui_theme');
		if ( uiThemeClass === "auto" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
			uiThemeClass = 'dark';
		}
		
		const triggerBtnHtml = (classes) => {
			return `<button class="getgenie-trigger-btn ${classes} ${uiThemeClass}"><img src=${logo} alt="GetGenie" /></button>`
		}


		textarea.parent().append(triggerBtnHtml('getgenie-trigger-btn-textarea'));
		text.parent().append(triggerBtnHtml('getgenie-trigger-btn-text'));
	}

	// events/ hooks
	$e.routes.on( 'run:after', ( component, route ) => {
		if(route === 'panel/editor/content'){
			addGetGenieTriggerBtn(document.getElementById('elementor-panel'))
		}
	});	

	MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    
	var observer = new MutationObserver(function(mutations, observer) {
		for (let mutation of mutations) {
			if(mutation.target.className.includes('elementor-control-type-section') === true){
				addGetGenieTriggerBtn(mutation.target.parentElement)
			}

		}
	});

	// define what element should be observed by the observer
	// and what types of mutations trigger the callback
	observer.observe(document, {
		subtree: true,
		attributeFilter: ['class'],
		attributes: true,
		// childList: true
		//...
	});
	
	jQuery(document).on('click', '.getgenie-trigger-btn', function(e){
		const field = jQuery(this).siblings(['textarea', 'text']);
		if(field.length == 0){
			return
		}

		wp.data.dispatch('getgenie').setSidebar({
			open: true,
			component: 'TemplateListScreen',
			insertTextCallback: insertTextToInputs, // rename writingCallback to insertTextCallback
			insertTextField: field[0] // pure js dom. if jquery used, use jQuery('.input')[0] or jQuery('.input').get(0) // must check if the index defined or not.
		})
	});
});