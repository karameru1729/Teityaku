"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface OAuthButtonProps {
  providerName: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function OAuthButton({ providerName, icon }: OAuthButtonProps){
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "http://localhost:3000/home";

  console.log(callbackUrl);
  return(
      <div className="flex flex-col items-center gap-2">
          <button onClick={() => signIn("google",{ callbackUrl })}  className="w-[52px] h-[52px] border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
            {icon}
          </button>
          <span className="text-[11px] text-gray-700">{providerName}</span>
      </div>
  );
}
