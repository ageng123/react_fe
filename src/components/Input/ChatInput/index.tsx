import { Button, Form, Input, Typography } from "antd";
import useChatInput from "./useChatInput";
import { SendOutlined } from "@ant-design/icons";

const ChatInput = () => {
    const model = useChatInput()
    return (
        <div style={{ flex: "1 0 10%",background: "#F0f0f0", position: "sticky", padding: 12, width: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            {model.contextHolder}
            <Form form={model.form} style={{ flex: 1, alignItems: "center", width: "100%",display: "flex",flexDirection: "row" }}>
                
                <Form.Item style={{flex: 1, marginBottom: 0 }} name={"message"} required>
                    <Input style={{ padding: 12, borderRadius: 0 }} placeholder="Masukkan Chat Baru" />
                </Form.Item>
                <Form.Item style={{ marginBottom: 0 }}>
                    <Button onClick={model.sendChat} type={"text"} style={{ height: "100%" }} htmlType={"button"}>
                        <SendOutlined style={{ fontSize: 24 }} />
                    </Button>
                </Form.Item>
            </Form>
            
        </div>
    );
}
export default ChatInput