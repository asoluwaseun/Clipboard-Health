import React from "react";

import Layout from "../components/layout";
import Search from "../components/search";
import SideBar from "../components/sidebar";
import Main from "../components/main";
import AppProvider from "../providers/AppProvider";

const Index = () => (
    <AppProvider>
        <Layout>
            <div className="flex">
                <Search/>
            </div>
            <div className="flex">
                <SideBar/>
                <Main/>
            </div>
        </Layout>
    </AppProvider>
)

export default Index
