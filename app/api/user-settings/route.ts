import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";

export async function GET(request: Request) {
  const user = await currentUser();
    if (!user) {
       redirect("/sign-in");
    }
    let userSettings = await prisma.UserSettings.findUnique({
      where: {
        userId: user.id,
      },
    })
    if(!userSettings){
        userSettings = await prisma.UserSettings.create({
          data: {
            userId: user.id,
            currency: "INR",}
        });
    }
    revalidatePath("/");
    return Response.json(userSettings);
}
