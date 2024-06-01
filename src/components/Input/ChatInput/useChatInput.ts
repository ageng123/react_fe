import { Form, message } from "antd"
import axios from "axios"
import React from "react"

const useChatInput = () => {
    const [data, setData] = React.useState([])
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage()
    const sendChat = async () => {
        console.warn(form.getFieldsValue())
        const debouncing = setTimeout(async () => {
            let data = await axios.post("http://localhost:3000/chat/new", {
                ...form.getFieldsValue(),
                user: Date.now() + "users"
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "Bearer "
                }
            })
            .then(r => {
                messageApi.success(r.data.message)
                form.setFieldValue("message", "")
            })
        }, 100)
        return () => clearTimeout(debouncing)
    }
    return {
        data,
        form,
        contextHolder,
        sendChat
    }
}
export default useChatInput