import React from "react";
import { Layout } from "antd";
import NewsFeed from "../components/NewsFeed";
import ProfileIcon from "../components/ProfileIcon";


const { Content } = Layout;


function Home() {
  return(
    <Layout className="mainLayout">
      <Content>
      <div className="container-list">
          <ProfileIcon />
        </div>
      </Content>
      <Content>
        <div className="container-list">
          <NewsFeed />
        </div>
      </Content>
    </Layout>
  )
}

export default Home;