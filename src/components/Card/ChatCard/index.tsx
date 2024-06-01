import { Button, Flex, Card, Typography, Avatar } from "antd"
import moment from "moment"

const ChatCard = (props: any) => {
    const getHumanReadable = () => {
        return moment(new Date(props.createdAt)).locale("id").fromNow()
    }
    return (<Button type={"link"} style={{width: "100%", marginTop: 0, marginBottom: 75}}>
               
    <Flex style={{ alignItems: 'self-start' }}>
        <Avatar style={{ marginTop: 12, width: 60, height: 60 }} src={"https://source.unsplash.com/random/100x100?avatar-" + props?.cpk} />
        <Card  className={"d-flex"} style={{ display: "flex",margin: 12, minWidth:500, width: "fit-content", height: "fit-content" }}
            styles={{
                body: {
                    padding: 12,
                    width: "100%"
                }
            }}
        >
            <Flex style={{ width: "100%" }}>
                <Typography.Title level={5} style={{ fontSize: 12, color: "grey",}}>
                    {props?.user ?? "Anonymous"} 
                </Typography.Title>
                <div style={{ flex: 1 }}></div>
                <Typography.Text style={{ fontSize: 10 }}>
                    {getHumanReadable()}
                </Typography.Text>
                
            </Flex>
            
            <Typography.Paragraph style={{fontSize: 12, textAlign: "justify"}}>
                {props?.message ?? ""}
            </Typography.Paragraph>
        </Card>
    </Flex>
    
</Button>)
}
export default ChatCard