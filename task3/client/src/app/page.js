"use client";
import AudianceGrowth from "@/component/AudianceGrowth/page";
import FollowerGrowth from "@/component/FollowerGrowth/page";
import MultipleAccounts from "@/component/MultipleAccounts/page";
import Post from "@/component/Post/page";
import PostingSchedule from "@/component/PostingSchedule/page";
import SocialMedia from "@/component/SocialMedia/page";
import SocialMediaSchedule from "@/component/SocialMediaSchedule/page";
import UsingAi from "@/component/UsingAi/page";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-1lg:grid-cols-4 gap-6 p-6 ">
      <div>
        <SocialMedia></SocialMedia>
      </div>
      <div>
        <MultipleAccounts></MultipleAccounts>
      </div>
      <div>
        <PostingSchedule></PostingSchedule>
      </div>
      <div>
        <SocialMediaSchedule></SocialMediaSchedule>
      </div>
      <div>
        <FollowerGrowth></FollowerGrowth>
      </div>
      <div>
        <AudianceGrowth></AudianceGrowth>
      </div>
      <div>
        <Post></Post>
      </div>
      <div>
        <UsingAi></UsingAi>
      </div>
    </div>
  );
};

export default page;
