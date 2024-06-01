"use client"
import ChatInput from "@/components/Input/ChatInput";
import Navbar from "@/components/Menus/Navbar";
import Sidebar from "@/components/Menus/Sidebar";
import graphqlClient from "@/infrastructures/databases/graphql";
import { ApolloProvider } from "@apollo/client";
import { App, Flex, Layout } from "antd";
import { ThemeProvider } from "antd-style";
import { ThemeContext } from "styled-components";

const MainLayout = (props: any) => {
    return (
        <App style={{height: "100%"}}>
            <ThemeProvider styled={{ThemeContext}}>
                <ApolloProvider client={graphqlClient}>
                    <Flex gap={"middle"} style={{height: "100%", overflow: "hidden"}} wrap>
                        <Layout style={{ flex: 1, height: "100%" }}>
                            <Layout.Header style={{ alignItems: "center", backgroundColor: "#f0f0f0" }}>
                                <Navbar />
                            </Layout.Header>
                            <Layout>
                                <Layout.Sider width={300} style={{ width: 500 }}>
                                    <Sidebar />
                                </Layout.Sider>
                                <Layout.Content>
                                    {props?.children ?? "[No Content]"}
                                </Layout.Content>
                            
                            </Layout>
                            <Layout.Footer>
                                <ChatInput />
                            </Layout.Footer>
                        </Layout>
                    </Flex>
                </ApolloProvider>
            </ThemeProvider>
        </App>
    );
}
export default MainLayout