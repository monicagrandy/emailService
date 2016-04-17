EmailService.Emails = Backbone.Collection.extend({
  model: EmailService.Email,
  url: '/email'
});