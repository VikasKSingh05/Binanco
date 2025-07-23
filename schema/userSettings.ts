import {z} from "zod";
import {currencies} from "@/lib/currency";

export const UpdateUserCurrencySchema = z.object({
    currency: z.custom(value => {
        const found = currencies.some((c)=> c.value===value);
        if(!found) {
            throw new Error("Invalid currency");
        }
        return value;
    }

    )
})