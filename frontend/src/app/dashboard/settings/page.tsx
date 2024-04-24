"use client"

import { Label } from "@radix-ui/react-dropdown-menu"
import { CirclePlus } from "lucide-react"
import { Plus } from "lucide-react"

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
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

          <div className="">
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="outline">
                    <CirclePlus size={24} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Ustaw dni działania</DialogTitle>
                    <DialogDescription>
                      Zaznacz dni działania ustawienia
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <ToggleGroup
                      type="multiple"
                      className="flex flex-wrap gap-2"
                    >
                      <ToggleGroupItem value="monday">
                        Poniedziałek
                      </ToggleGroupItem>
                      <ToggleGroupItem value="tuesday">Wtorek</ToggleGroupItem>
                      <ToggleGroupItem value="wednesday">Środa</ToggleGroupItem>
                      <ToggleGroupItem value="thursday">
                        Czwartek
                      </ToggleGroupItem>
                      <ToggleGroupItem value="friday">Piątek</ToggleGroupItem>
                      <ToggleGroupItem value="saturday">Sobota</ToggleGroupItem>
                      <ToggleGroupItem value="sunday">
                        Niedziela
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Zapisz zmiany</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>

            {/* Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Godziny pracy</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Ustaw Godzinę</h4>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label>Uruchomienia:</Label>
                      <Input
                        id="width"
                        defaultValue="20:00"
                        className="col-span-2 h-8"
                      />
                      <Label>Wyłączenia:</Label>
                      <Input
                        id="width"
                        defaultValue="23:30"
                        className="col-span-2 h-8"
                      />
                    </div>
                    {/* Pozostałe opcje */}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <div className="flex items-center space-x-2">
              <Switch />
            </div>
            <Button>
              <Plus className="size-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
