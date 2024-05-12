"use client"
import { UserInfo } from "@/components/user-info";
import { userCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
    const user = userCurrentUser();
    return (
        <div>
            <UserInfo
                label="Client component"
                user={user}
            />
        </div>
    )
}

export default ClientPage
