EmailService.sendEmailView = Backbone.View.extend({
  className: 'sender',

  events: {
    'submit': 'sendEmail'
  },

  render: function() {
    console.log("inside sendEmailView render")
    return this.$el.html;
  },

  sendEmail: function(e){
    console.log("getting input fields")
    console.log("line 24: ", this.$el)
    e.preventDefault();
    var $name = this.$el.find('form .username');
    var $ToEmailAddress = this.$el.find('form .RecipientEmailAddress');
    var $FromEmailAddress = this.$el.find('form .UserEmailAddress');
    var $emailBody = this.$el.find('form .msgText');
    var newEmail = new EmailService.Email({ first: $firstName.val(), last: $lastName.val(), to: $ToEmailAddress.val(), from: $FromEmailAddress.val(), msgBody: $emailBody.val() });
    console.log("line 24: ", newEmail)
    newEmail.save()
    $name.val('');
    $ToEmailAddress.val('');
    $FromEmailAddress.val('');
    $emailBody.val('');
  }

});
