"use client"

import { Label } from "@radix-ui/react-dropdown-menu"
import { CirclePlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

type SliderProps = React.ComponentProps<typeof Slider>

const DEVICE_NAME = "Philips Hue"

export default function Page() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold text-gray-800 md:text-4xl">
        Zarządzaj urządzenim {DEVICE_NAME}
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ustawienia oświetlenia</CardTitle>
            <CardDescription>
              Ustaw jasność i temperaturę barwową.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Temperatura barwowa</Label>
              <Slider defaultValue={[30]} />
            </div>

            <div className="space-y-2">
              <Label>Jasność</Label>
              <Slider defaultValue={[70]} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Harmonogram</CardTitle>
            <CardDescription>
              Ustaw godziny włączania i wyłączania.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" variant="outline">
                  <CirclePlus size={24} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
                    <ToggleGroupItem value="monday">
                      Poniedziałek
                    </ToggleGroupItem>
                    <ToggleGroupItem value="tuesday">Wtorek</ToggleGroupItem>
                    <ToggleGroupItem value="wednesday">Środa</ToggleGroupItem>
                    <ToggleGroupItem value="thursday">Czwartek</ToggleGroupItem>
                    <ToggleGroupItem value="friday">Piątek</ToggleGroupItem>
                    <ToggleGroupItem value="saturday">Sobota</ToggleGroupItem>
                    <ToggleGroupItem value="sunday">Niedziela</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
