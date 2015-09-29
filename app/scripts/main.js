var LikeButton = require('models/like');


$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());

  var likeButton = new LikeButton({
    likes: 0
  });

  $('.like').on('click', function(){
    likeButton.like();
  });

  likeButton.on('change:likes', function(){
    var likes = likeButton.get('likes');
    if(likeButton.toJSON() === 1){
      $('.like').text(likes + ' Like');
    } else {
      $('.like').text(likes + ' Likes');
    }
  });
});
