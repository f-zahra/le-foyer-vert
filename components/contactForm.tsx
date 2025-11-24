"use client";
import { toast, Toaster } from "react-hot-toast";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

function ContactForm() {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast("Sending...", {
      style: {
        background: "#fff",
        color: "#000",
      },
    });
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", key || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast("Email sent successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#000",
        },
      });
      form.reset();
    } else {
      console.log("Error", data);
      toast.error("Error!");
    }
  };
  const t = useTranslations("form");
  return (
    <section id="quote-form">
      <div className="grid md:grid-cols-2  grid-col-1 items-center min-h-[80vh]">
        <div className="relative min-h-[500px] h-full">
          <Image
            src="/images/contact-form-image.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className=" md:px-18 px-12 my-8">
          <h3 className="text-3xl  font-bold mb-10 ">{t("submit-form")}</h3>
          <form onSubmit={onSubmit}>
            <FieldSet className="max-w-[500px]">
              <FieldGroup>
                <div className="flex md:flex-row flex-col items-center justify-between md:gap-3 gap-5">
                  <Field>
                    <FieldLabel htmlFor="name">{t("name")}*</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">{t("phone")}</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      pattern="^[0-9\-\+\s\(\)]*$"
                      placeholder="123-456-7890"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">{t("email")}*</FieldLabel>
                  <Input id="email" name="email" type="email" required />
                </Field>

                <Field>
                  <FieldLabel htmlFor="feedback">{t("message")}*</FieldLabel>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    rows={4}
                    required
                    minLength={10}
                    className="overflow-auto"
                  />
                </Field>
                <Field orientation="horizontal">
                  <Button className="cursor-pointer" type="submit">
                    {t("send")}
                  </Button>
                  <Toaster position="top-center" />
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Toaster position="top-center" />
      </div>
    </section>
  );
}

export default ContactForm;
