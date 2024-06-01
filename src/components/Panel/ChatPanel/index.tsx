import { Avatar, Button, Card, Flex, List, Typography } from "antd"
import useChatPanel from "./useChatPanel"
import ChatCard from "@/components/Card/ChatCard"

const ChatPanel = (props: any) => {
    const model = useChatPanel()
    return (
        <div  style={{ flex: "1 1 20%", overflow: "scroll",width: "100%",height: 200, paddingBottom: 25, paddingTop: -10, background: "url('https://source.unsplash.com/random/1600x900?chat-wallpaper')" }}>
             <List
                    loading={model.refreshing}
                    dataSource={model?.data ?? []}
                    renderItem={ChatCard} 
                />
            
          
        </div>
    )
}
export default ChatPanel