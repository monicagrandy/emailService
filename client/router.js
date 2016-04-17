EmailService.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$el = options.el;
  },
  routes: {
    '':       'send'
  },
   swapView: function(view){
    this.$el.html(view.render().el);
  },
   send: function(){
    console.log("changing to email view")
    this.swapView(new EmailService.sendEmailView());
  }

})



// Shortly.Router = Backbone.Router.extend({
//   initialize: function(options){
//     this.$el = options.el;
//   },

//   routes: {
//     '':       'index',
//     'create': 'create',
//     'logout': 'logout',
//     'send': 'send'
//   },

//   swapView: function(view){
//     this.$el.html(view.render().el);
//   },

//   index: function(){
//     var links = new Shortly.Links();
//     var linksView = new Shortly.LinksView({ collection: links });
//     this.swapView(linksView);
//   },

//   create: function(){
//     this.swapView(new Shortly.createLinkView());
//   },

//   send: function(){
//     console.log("changing to email view")
//     this.swapView(new Shortly.sendEmailView());
//   }
// });