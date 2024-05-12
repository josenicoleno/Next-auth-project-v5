import { auth } from "@/auth"
import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";

const ServerPage = async () => {
    const session = await auth();
    const user = await currentUser();
    return (
        <div>
            <UserInfo
                label="Server component"
                user={user}
            />
        </div>
    )
}

export default ServerPage
