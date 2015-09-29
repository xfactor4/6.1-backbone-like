var LikeButton = Backbone.Model.extend({
  defaults: {
    likes: 0,
  },
  like : function(){
    this.set('likes', this.get('likes') + 1);
  },
  toJSON : function(){
    return this.get('likes');
  }
});

module.exports = LikeButton;
