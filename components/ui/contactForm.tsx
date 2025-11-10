import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

import ButtonContact from "../ButtonContact";

const ContactForm = () => {
  return (
    <section id="#contact-form" className="">
      <div className="grid md:grid-cols-2  grid-col-1 items-center min-h-[80vh] ">
        <div className="relative w-full h-full ">
          <Image
            src="/images/contact-form-image.jpg" // path in public folder
            alt="Hero background"
            fill // makes the image fill its parent container
            className="object-cover " // tailwind: cover, contain, etc.
            priority // loads this image eagerly
          />
        </div>

        <div className=" py-10  md:px-18 px-12 ">
          <form action="">
            <FieldSet className="max-w-[500px]">
              <FieldGroup>
                <div className="flex md:flex-row flex-col items-center justify-between md:gap-3 gap-5">
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      pattern="^[0-9\-\+\s\(\)]*$"
                      placeholder="123-456-7890"
                      required
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" name="email" type="email" required />
                </Field>

                <Field>
                  <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Your feedback helps us improve..."
                    rows={4}
                    required
                    minLength={10}
                    className="overflow-auto"
                  />
                </Field>
                <Field orientation="horizontal">
                  <ButtonContact text={"Get a quote"}></ButtonContact>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
