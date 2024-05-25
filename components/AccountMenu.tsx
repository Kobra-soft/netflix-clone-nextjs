import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  /* const { data: user } = useCurrentUser(); */

  return (
    <div className="bg-black/90 w-56 absolute top-12 right-0 py-5 flex-col flex border-[1px] border-[#282828]">
      <div className="flex flex-col gap-2.5">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          {/* <img
            className="w-8 rounded-md"
            src="/images/default-squidgame2.png"
            alt=""
          ></img> */}
          <img
            className="w-8 rounded-md"
            src="/images/default-red.png"
            alt=""
          ></img>
          <p className="text-[#dfe0e0] text-sm group-hover/item:underline">
            {/* {user?.name} */}User_1 (JackFlix)
          </p>
        </div>
        <hr className="border-[#404749] border-1 my-2" />
        <div className="px-14 py-1 text-[#dfe0e0] text-[13.666px] hover/item:underline">
          Manage Profiles
        </div>
        <div className="px-14 py-1 text-[#dfe0e0] text-[13.666px] hover/item:underline">
          Transfer Profile
        </div>
        <div className="px-14 py-1 text-[#dfe0e0] text-[13.666px] hover/item:underline">
          Account
        </div>
        <div className="px-14 py-1 text-[#dfe0e0] text-[13.666px] hover/item:underline">
          Help Centre
        </div>
        <hr className="border-[#404749] border-1 my-2" />
        <div
          /* onClick={() => signOut()} */ className="px-3 text-center text-[#dfe0e0] text-sm hover/item:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
