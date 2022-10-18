import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { userAgent } from "next/server";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { IUser } from "../types";

const Navbar = () => {
  const [user, setUser] = useState<IUser | null>();
  const { userProfile, addUser } = useAuthStore();

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer "
            src={Logo}
            alt="tiktik"
            layout="responsive"
            priority
          />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {user ? (
          <div className="flex gap-5 md:gap-7 items-center">
            <Link href="/upload">
              <button className="border-2 px-2 py-2 md:px-4 text-md font-semibold flex items-center gap-2 rounded">
                <IoMdAdd className="text-xl" />{" "}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {user.image && (
              <Link href="/">
                <div className="w-[35px] h-[35px]">
                  <Image
                    src={user.image}
                    width={35}
                    height={35}
                    className="rounded-full cursor-pointer"
                    alt="profile_photo"
                  />
                </div>
              </Link>
            )}
            <button
              type="button"
              onClick={() => {
                googleLogout();
                addUser(null);
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(res) => createOrGetUser(res, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
