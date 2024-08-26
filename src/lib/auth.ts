"use server";
import { hash, verify } from "@node-rs/argon2";
import prisma from "./prisma";
import { loginSchema, signUpSchema, TLogin, TSignUp } from "./validation";
import { generateIdFromEntropySize } from "lucia";
import { lucia, validateRequest } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export const signUp = async (credentials: TSignUp) => {
  try {
    const { success, data, error } = signUpSchema.safeParse(credentials);
    if (!success) {
      console.log({ error });
      return { error: "something went wrong" };
    }

    const userExits = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExits) {
      return { error: "this email is already registered" };
    }

    const hashedPassword = await hash(data.password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);
    await prisma.user.create({
      data: {
        id: userId,
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    console.log({ error });
    if (isRedirectError(error)) throw error;
    return { error: "something went wrong" };
  }
};

export const login = async (credentials: TLogin) => {
  try {
    const { success, data, error } = loginSchema.safeParse(credentials);
    if (!success) {
      console.log({ error });
      return { error: "something went wrong" };
    }

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { error: "incorrect credentials" };
    }

    const validatePassword = await verify(user.password, data.password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    console.log({ validatePassword });

    if (!validatePassword) {
      return { error: "incorrect credentials" };
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    console.log({ error });
    if (isRedirectError(error)) throw error;
    return { error: "something went wrong" };
  }
};

export const logout = async () => {
  const { session } = await validateRequest();
  if (!session) {
    throw new Error("unauthorized");
  }

  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
};
