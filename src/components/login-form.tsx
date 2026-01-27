'use client'

import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const LoginForm = () => {
  const [hiddePass, setHiddePass] = useState(true);

  const onSubmit = (e:FormEvent) => {
    e.preventDefault()

    redirect('/dashboard')
  }
  
  return (
    <form className="space-y-6 " onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <label
          className="text-[#111418] text-sm font-bold px-1"
          htmlFor="username"
        >
          Usuario
        </label>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#617589]  group-focus-within:text-primary transition-colors">
            <CiUser className="size-7" />
          </span>
          <input
            className="w-full rounded-2xl bg-[#f0f2f4]  border-2 border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10 h-16 pl-12 pr-4 text-[#111418] placeholder:text-[#617589]/60 text-base transition-all"
            id="username"
            placeholder="Ingresa tu usuario"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center px-1">
          <label
            className="text-[#111418] text-sm font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          
        </div>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#617589] group-focus-within:text-primary transition-colors">
            <CiLock className="size-7" />
          </span>
          <input
            className="w-full rounded-2xl bg-[#f0f2f4]  border-2 border-transparent focus:border-primary/20 focus:bg-white  focus:ring-4 focus:ring-primary/10 h-16 pl-12 pr-14 text-[#111418] placeholder:text-[#617589]/60 text-base transition-all"
            id="password"
            placeholder="Ingresa tu contraseña"
            type={hiddePass ? 'password' : 'text'}
          />
          <button
            aria-label="Toggle password visibility"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 text-[#617589]  hover:text-primary transition-colors"
            onClick={(e) => {e.preventDefault();setHiddePass(!hiddePass)}}
          >
            <span className="material-symbols-outlined text-2xl">
              {!hiddePass ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </button>
        </div>
      </div>
      <button
        className="w-1/2 mx-auto flex items-center justify-center gap-3 rounded-2xl h-16 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.97] mt-4 cursor-pointer"
        type="submit"
      >
        <span className="truncate">Ingresar</span>
      </button>
    </form>
  );
};
