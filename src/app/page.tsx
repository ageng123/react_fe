"use client"
import ChatInput from "@/components/Input/ChatInput";
import ChatPanel from "@/components/Panel/ChatPanel";
import MainLayout from "@/layouts/main_layouts";
import { App, Button, Typography } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: 'column', height: "100%" }}>
        <ChatPanel flex={1} />
      </div>
      
    </MainLayout>
  );
}
