"use client"

import axios from "axios"
import React from "react"
import Pusher from "pusher-js"
import { useQuery } from "@apollo/client"
import { GET_CHAT } from "@/infrastructures/databases/graphql/queries/chat"
const useChatPanel = () => {
    const [data, setData] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false)
    const dataQuery = useQuery(GET_CHAT)
    const pusher = new Pusher("f204120eaf9829d4fab2", {
        cluster: "ap1",
        
    })
    const loadData = async () => {
        setRefreshing(dataQuery?.loading ?? true)
        setData(dataQuery?.data?.chats ?? [])
    }
    const loadPusher = async () => {
        
        pusher.connect()
        const channel = pusher.subscribe("chat")
        channel.bind("new", (data: any) => {
            dataQuery.refetch()
        })
    }
    const unmount = () => {
        pusher.unsubscribe("chat")
        pusher.disconnect()
    }
    
    React.useEffect(() => {
        loadPusher()
        loadData();
        // return () => unmount()
    }, [dataQuery])
    return {
        data,
        refreshing,
        dataQuery
    }
}
export default useChatPanel