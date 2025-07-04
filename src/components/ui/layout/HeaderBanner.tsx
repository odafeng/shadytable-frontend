"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function HeaderBanner() {
  return (
    <header className="bg-[#1D3557] text-white py-6 px-4 sm:px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
        {/* Logo + 標語區塊 */}
        <Link href="/" className="flex items-center gap-4 text-center md:text-left hover:opacity-80">
          <div className="h-[64px] flex items-center">
            <Image
              src="/logo/shady_logo_light.svg"
              alt="Shady Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              ShadyTable
            </h1>
            <p className="text-sm text-white/80">
              讓醫療統計變得簡單、有型、可信任。
            </p>
          </div>
        </Link>

        {/* 按鈕區（依登入狀態切換） */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center md:justify-end">
          <SignedOut>
            <Link href="/sign-in?redirect_url=/step1" className="w-full sm:w-auto">
              <Button className="bg-[#457B9D] text-white hover:bg-[#1D3557] px-5 py-2 text-sm rounded-lg w-full sm:w-auto">
                登入
              </Button>
            </Link>
            <Link href="/sign-up" className="w-full sm:w-auto">
              <Button className="bg-[#457B9D] text-white hover:bg-[#1D3557] px-5 py-2 text-sm rounded-lg w-full sm:w-auto">
                加入會員
              </Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <Link href="/step1" className="w-full sm:w-auto">
              <Button className="bg-[#457B9D] text-white hover:bg-[#1D3557] px-5 py-2 text-sm rounded-lg w-full sm:w-auto">
                控制台
              </Button>
            </Link>
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
