module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      // id는 기본으로 들어감
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf-8",
      collate: "utf8_general_ci",
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
