import { headers } from "next/headers";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isLogged = Boolean(session?.user);

  return (
    <div className="dark flex h-screen w-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        Bem-vindo ao Doutor Agenda
      </h1>

      <Button asChild className="text-white">
        <Link href={isLogged ? "/dashboard" : "/authentication"}>
          {isLogged ? "Ir para o dashboard" : "Fazer login"}
        </Link>
      </Button>
    </div>
  );
}
