import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is requered"
    }),
    password: z.string().min(1, {
        message: "Password is requered"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is requered"
    }),
    password: z.string().min(6, {
        message: "Minimun 6 characters!"
    }),
    name: z.string().min(1, {
        message: "Name is requered!"
    })
})