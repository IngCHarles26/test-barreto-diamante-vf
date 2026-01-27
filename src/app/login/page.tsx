import { LoginForm } from "@/components";

export default function LoginPage() {
  return (
    <div className="bg-back-1 text-body  min-h-screen flex flex-col font-display transition-colors duration-300">

      <header className="relative w-full h-[40vh] min-h-75">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZlEnQR0YXAC72a-pW783Gaea8vW58cK-bcW0NKg_fnZfvHpciryD_O0x-L3E0oNafeUCcvvHZWdJlFfM4FT2-S4XyY7u_ZORsUYmmLSk_dWsbL55NSeV_4d1AqQQ9whomtPxP0Le3jnN4WbbOXBVjd7QY1B02vjF881DoG3-ZOfFeJ0NlyjRztFuTc1m1Nlk0NcQPToinM4YSm1iaCTsSTjlgTUOoHwI0pcpWLdZWuGVWeAIbcfVbykzYqLY1ilYYMpseT0n-6Q')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"/>
        </div>

        <div className="absolute top-8 left-0 right-0 flex flex-col items-center">
          <div className="size-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-2xl mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building"            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 0" /><path d="M9 8l1 0" /><path d="M9 12l1 0" /><path d="M9 16l1 0" /><path d="M14 8l1 0" /><path d="M14 12l1 0" /><path d="M14 16l1 0" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
            </svg>
          </div>
          <span className="text-white md:text-body font-extrabold text-xl tracking-wider uppercase">
            HOSTAL BARRETO - DIAMANTE
          </span>
        </div>

        <div className="absolute bottom-10 left-0 right-0 px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white mb-1">
            Acceso de Personal
          </h1>
          <p className="text-white/80 text-sm font-medium">
            Por favor ingresa tus credenciales para continuar
          </p>
        </div>

      </header>

      <main className="flex-1 bg-white  rounded-t-[2.5rem] -mt-8 relative z-10 px-6 pt-12 pb-10">
        <div className="max-w-md mx-auto">

          <LoginForm/>
          
          <div className="mt-12 flex flex-col items-center gap-8">
            <p className="text-sm text-danger">Mensaje de error</p>
            <div className="flex items-center gap-6 text-sm font-bold text-[#617589] ">
              <a className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-primary/20" target="_blank" href="#">
                Contactar al Soporte
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white  pb-5 text-center px-6">
        <p className="text-xs text-[#617589]  font-medium">
          © 2026 Developed by CarlosCoDev
        </p>
      </footer>
      
    </div>
  );
}
