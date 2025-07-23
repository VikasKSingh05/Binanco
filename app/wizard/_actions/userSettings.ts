"use server";

import { UpdateUserCurrencySchema } from "@/schema/userSettings";

export async function UpdateUserCurrency(currency:string){
    const parsedBody = UpdateUserCurrencySchema.safeParse({currency});
    if(!parsedBody.success){
        throw parsedBody.error;
    }

}