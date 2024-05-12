"use client"

import { logout } from "@/actions/logout";
import { userCurrentUser } from "@/hooks/user-current-user";

const SettingPage = () => {
  const user = userCurrentUser()

  const onClick = () => {
    logout();
  }
  
  return (
    <div className="bg-white p-10 rounded-xl">
        <button onClick={onClick} type="submit">
          Signout
        </button>
    </div>
  )
}

export default SettingPage
