if(_.isEqual(Posts.find().count(),0)){
  for(let i = 0; i < 25; i++){
    Posts.insert({
      name: "Post Test " + [i] + 1,
      subbmitedAtt: new Date()
    });
  };
};