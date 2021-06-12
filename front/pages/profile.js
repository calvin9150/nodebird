import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "gomdang" },
    { nickname: "sarigom" },
    { nickname: "bearpunch" },
  ];
  const followingList = [
    { nickname: "gomdang2" },
    { nickname: "sarigom2" },
    { nickname: "bearpunch2" },
  ];
  return (
    <>
      <Head>
        <title>프로필</title>
      </Head>
      <AppLayout>
        내 프로필
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
