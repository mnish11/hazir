Template.Department.events({
	'submit form':function(event){
		event.preventDefault();
		Session.set('submittedForm',event.type);
				}
});
