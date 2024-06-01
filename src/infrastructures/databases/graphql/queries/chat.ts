import { gql } from "@apollo/client";

export const GET_CHAT = gql`
    query GetChat{
        chats{
            cpk
            message
            user
            createdAt
        }
    
    }
`