module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // mysql에서 자동으로 users 테이블로 됨
      // id는 기본으로 들어감
      email: {
        type: DataTypes.STRING(35),
        allowNull: false, // 필수
        unique: true, // 중복불가
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수
      },
    },
    {
      charset: "utf-8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {};
  return User;
};
