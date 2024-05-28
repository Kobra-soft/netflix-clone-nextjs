import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";
import NetflixSearchLogo from "./NetflixSearchLogo";
import NetflixPencilLogo from "./NetflixPencilLogo";
import NetflixTransferProfileLogo from "./NetflixTransferProfileLogo";
import NetflixAccountLogo from "./NetflixAccountLogo";
import NetflixHelpCentreLogo from "./NetflixHelpCentreLogo";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  /* const { data: user } = useCurrentUser(); */

  return (
    <div className="bg-black/90 w-[13.70rem] absolute top-[51px] right-0 pt-4 flex-col flex 
    border border-[#414142]/60">
      <div className="flex flex-col gap-2.5">
        <div className="px-2.5 group/item flex flex-row gap-2 items-center w-full">
          {/* <img
            className="w-8 rounded-md"
            src="/images/default-squidgame2.png"
            alt=""
          ></img> */}
          <img
            className="w-[1.95rem] h-[1.95rem] rounded-[0.22rem]"
            src="/images/default-green.png"
            alt=""
          ></img>
          <div className="text-[#dfe0e0] text-[13px] group-hover/item:underline">
            {/* {user?.name} */}User 1 (Jack)
          </div>
        </div>
        <div className="px-2.5 group/item flex flex-row gap-2 items-center w-full">
          <img
            className="w-[1.95rem] h-[1.95rem] rounded-[0.22rem]"
            src="/images/default-slate.png"
            alt=""
          ></img>
          <div className="text-[#dfe0e0] text-[13px] group-hover/item:underline">
            {/* {user?.name} */}User 2 (Mum)
          </div>
        </div>
        <div className="px-2.5 group/item flex flex-row gap-2 items-center w-full">
          <img
            className="w-[1.95rem] h-[1.95rem] rounded-[0.22rem]"
            src="/images/default-blue.png"
            alt=""
          ></img>
          <div className="text-[#dfe0e0] text-[13px] group-hover/item:underline">
            {/* {user?.name} */}User 3 (Dad)
          </div>
        </div>
        <div className="px-2.5 group/item flex flex-row gap-2 items-center w-full">
          <img
            className="w-[1.95rem] h-[1.95rem] rounded-[0.22rem]"
            src="/images/default-red.png"
            alt=""
          ></img>
          <div className="text-[#dfe0e0] text-[13px] group-hover/item:underline">
            {/* {user?.name} */}User 4 (Laura)
          </div>
        </div>

        {/* <hr className="border-[#404749] border-1 my-2" /> */}

        <div className="flex flex-col gap-2.5 mt-0">
          <div className="flex items-center mt-2 text-[#dfe0e0] text-[13px] hover:underline">
            <div className="px-3">
              <NetflixPencilLogo />
            </div>
            Manage Profiles
          </div>
          <div className="flex items-center py-0 text-[#dfe0e0] text-[13px] hover:underline">
            <div className="px-3">
              <NetflixTransferProfileLogo />
            </div>
            Transfer Profile
          </div>
          <div className="flex items-center py-0 text-[#dfe0e0] text-[13px] hover:underline">
            <div className="px-3">
              <NetflixAccountLogo />
            </div>
            Account
          </div>
          <div className="flex items-center py-0 text-[#dfe0e0] text-[13px] hover:underline">
            <div className="px-3">
              <NetflixHelpCentreLogo />
            </div>
            Help Centre
          </div>

          <hr className="border-[#414142] border-1 mt-2" />
        </div>

      </div>
      <div
            className="py-3 text-center items-center text-[#dfe0e0] text-[13px] hover/item:underline"
          >
            Sign out of Netflix
          </div>
    </div>
    
  );
};

export default AccountMenu;
