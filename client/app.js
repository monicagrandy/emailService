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
    var $ToEmailAddress = this.$el.find('.recipientEmailAddress');
    console.log("line 28: ", $ToEmailAddress.val())
    var $FromEmailAddress = this.$el.find('.userEmailAddress');
    var $emailBody = this.$el.find('.msgText');
    var newEmail = new EmailService.Email({ name: $name.val(), to: $ToEmailAddress.val(), from: $FromEmailAddress.val(), msgBody: $emailBody.val() });
    console.log("line 24: ", newEmail)
    newEmail.save()
    $name.val('');
    $ToEmailAddress.val('');
    $FromEmailAddress.val('');
    $emailBody.val('');
}

});