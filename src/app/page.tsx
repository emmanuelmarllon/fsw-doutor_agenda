import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="dark flex h-screen w-screen flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Doutor Agenda</h1>
      </div>
      <Button className="dark ml-4">Get Started</Button>
    </div>
  );
}
