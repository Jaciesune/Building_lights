import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  return (
    <Card className="w-full max-w-[400px] space-y-2">
      <CardHeader>
        <CardTitle>Oświetlenier 2.0</CardTitle>

        <CardDescription>
          Aplikacja do sterowania oświetleniem w domu.
        </CardDescription>
      </CardHeader>

      <CardFooter className="space-x-4">
        <Button asChild>
          <Link href="/login">Zaloguj się</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/register">Zarejestruj się</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
