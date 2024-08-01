import { z } from "zod";

export const dealSchema = z.object({
    name: z
        .string({ message: "Name is required" })
        .min(5, "Name should have at least 5 characters"),
    link: z
        .string({ message: "Link is required" })
        .url("Link must be a valid url"),
    coupen: z
        .string({ message: "Coupen code is required" })
        .min(5, "Coupen should be at least 5 Chractersitcs"),
    discount: z.coerce
        .number({ message: "Discount percentage is required" })
        .min(1, "Dicount must be greater then 1")
        .max(100, "Percenatge must be less then 100"),
});
