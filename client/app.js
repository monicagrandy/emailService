window.EmailService = Backbone.View.extend({

  el: 'form',

  model: null,

  events: {
    'submit': 'sendEmail'
  },

  initialize: function(){
    console.log( 'EmailService is running' );
    $('body').append(this.render().el);
    $('form').append(this.render().el);
    Backbone.history.start({ pushState: true });
  },

  render: function(){
    console.log("hello Backbone!", this)
    return this.$el.html;
  },

  sendEmail: function(e){
    e.preventDefault();
    console.log("getting input fields");
    var $name = this.$el.find('.username');
    var $toEmailAddress = this.$el.find('.recipientEmailAddress');
    var $emailSubject = this.$el.find('.subject');
    var $fromEmailAddress = this.$el.find('.userEmailAddress');
    var $emailBody = this.$el.find('.msgText');
    var newEmail = new EmailService.Email({ name: $name.val(), subject: $emailSubject.val(), to: $toEmailAddress.val(), from: $fromEmailAddress.val(), msgBody: $emailBody.val() });
    console.log("line 24: ", newEmail)
    newEmail.save()
    $name.val('');
    $toEmailAddress.val('');
    $fromEmailAddress.val('');
    $emailSubject.val('');
    $emailBody.val('');
}

});