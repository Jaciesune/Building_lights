"use client"

import { CirclePlus } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function AddDevice() {
  const [value, setValue] = useState("")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          onClick={() => console.log("Dodaj urządzenie")}
        >
          Dodaj
          <CirclePlus size={18} className="ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Dodaj urządzenie</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nazwa
            </Label>
            <Input
              id="name"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Zapisz</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
