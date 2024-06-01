"use client"
import { GET_CHAT } from "@/infrastructures/databases/graphql/queries/chat"
import { useQuery } from "@apollo/client"
import React from "react"

const useSidebar = () => {
    const [data, setData] = React.useState([
        {
            item: "key",
            chatId: "test",
            title: "Test No. 1",
            latestChat: "lorem ipsum ...",
            chatCount: 0
        },
       
    ])
    const dataQuery = useQuery(GET_CHAT)
    setInterval(() => {
        dataQuery.refetch()

    }, 1000 * 600)
    React.useEffect(() => {
        let dataQuerySort = dataQuery?.data?.chats ?? []
        if(dataQuerySort.length > 0){

            let data = dataQuerySort[dataQuerySort.length - 1]
            console.warn(data)
            let params = {
                item: data.cpk,
                chatId: data.cpk,
                title: data?.user ?? "Anonymous",
                latestChat: data?.message,
                ChatCount: dataQuerySort.length
            }
            setData([params])
        }
    }, [dataQuery.data])
    return {
        data
    }
}
export default useSidebar