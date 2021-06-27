module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      // mysql에서 자동으로 posts 테이블로 됨
      // id는 기본으로 들어감
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf-8mb4",
      collate: "utf8mb4_general_ci", // mb4 추가하면 이모티콘 저장가능
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.belongsToMany(db.Hashtag);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
};
