"use client"

import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"

import fetchClient from "@/lib/fetch-client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type FormValues = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function RegisterForm() {
  const form = useForm<FormValues>()
  async function onSubmit({
    name,
    email,
    password,
    password_confirmation,

  }: FormValues) {
    try {
      const response = await fetchClient({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/register",
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation,
        }),
      })

      if (!response.ok) {
        throw response
      }

      const credentials = {
        email,
        password,
      }

      signIn("credentials", credentials)
    } catch (error) {
      if (error instanceof Response) {
        const response = await error.json()

        if (!response.errors) {
          throw error
        }

        console.log(response.errors)
        // return Object.keys(response.errors).map((errorKey) => {
        //   const input = document.querySelector(
        //     `[name="${errorKey}"]`
        //   ) as HTMLInputElement
        //   input.setCustomValidity(response.errors[errorKey])
        //   input.reportValidity()
        // })
      }

      throw new Error("An error has occurred during registration request")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8d">
        <CardContent>
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Podaj swój email" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasło</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Twoje hasło" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password confirmation */}
          <FormField
            control={form.control}
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potwierdź hasło</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Potwierdź hasło"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>

        {/* Submit button */}
        <CardFooter>
          <Button className="w-full" type="submit">
            Zarejestruj się
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
