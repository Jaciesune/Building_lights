"use client"

import { Label } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

//page shows user information
export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-gray-800 md:text-4xl">
        Twoje konto
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Imię</Label>
          <Input defaultValue="John" />
          <Label>Nazwisko</Label>
          <Input defaultValue="Doe" />
        </div>

        <div>
          <Label>Email</Label>
          <Input defaultValue="developer@example.com" />
        </div>
        <Button className="w-20">Save</Button>
      </div>
    </div>
  )
}
