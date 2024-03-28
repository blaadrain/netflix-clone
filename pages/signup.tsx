import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { SignUpSchema, SignUpSchemaType } from "@/schemas";
import { FormError } from "@/components/FormError";

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpSchemaType) => {
    try {
      setIsLoading(true);
      await axios.post("/api/signup", values);
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setError(error.response.data.error);
        }
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full bg-black bg-[url('/images/hero.svg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex h-full w-full flex-col">
        <nav className="border-b bg-black px-12 py-5">
          <span className="inline-block bg-gradient-to-br from-teal-400 to-cyan-600 bg-clip-text text-4xl font-bold text-transparent">
            waves
          </span>
        </nav>
        <div className="flex h-full items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-[450px] bg-black p-4">
            <CardHeader>
              <CardTitle className="text-center">Sign in</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col justify-center gap-y-6"
                >
                  <div className="space-y-3">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isLoading}
                              placeholder="John Doe"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isLoading}
                              placeholder="youremail@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isLoading}
                              type="password"
                              placeholder="*********"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormError message={error} />
                  <Button disabled={isLoading} className="w-full">
                    Submit
                  </Button>
                  <Separator />
                  <div className="flex gap-x-2">
                    <Button
                      disabled={isLoading}
                      variant="outline"
                      className="w-1/2"
                    >
                      <FcGoogle className="h-5 w-5" />
                    </Button>
                    <Button
                      disabled={isLoading}
                      variant="outline"
                      className="w-1/2"
                    >
                      <FaGithub className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button
                    variant="link"
                    asChild
                    className="p-0 text-muted-foreground"
                  >
                    <Link href="/login">Already have an account?</Link>
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
