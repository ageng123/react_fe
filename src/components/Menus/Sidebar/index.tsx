import { Avatar, Flex, List, Menu, Typography } from "antd"
import useSidebar from "./useSidebar"

const Sidebar = () => {
    const model = useSidebar()
    return (
        <Menu>
           
            {
                model.data.map((row, ind) => {
                    return <Menu.Item key={row.chatId} style={{ height: "auto" }}>
                        <Flex style={{alignItems: "center"}}>
                            <Avatar src={"https://source.unsplash.com/random/50x50?avatar-" + row.chatId} />
                            <Flex style={{flexDirection: 'column', marginLeft: 7, paddingTop: 8}}>
                                <Typography.Title level={5}>
                                    {row.title}
                                </Typography.Title>
                                <Typography.Paragraph style={{color: "grey" }}>
                                    {row.latestChat}
                                </Typography.Paragraph>
                            </Flex>
                        </Flex>
                     
                    </Menu.Item>
                })
            }
            
        </Menu>
    )
}
export default Sidebar