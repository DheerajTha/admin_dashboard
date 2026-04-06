import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { Select } from "@/components/FormElements/select";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { FaFileUpload } from "react-icons/fa";


export function ContactForm() {
  return (
    <ShowcaseSection title="Contact Form" className="!p-6.5">
      <form action="#">
        <div className="mb-4.5 flex flex-col gap-4.5 xl:flex-row">
          <InputGroup
            label="First name"
            type="text"
            placeholder="Enter your first name"
            className="w-full xl:w-1/2"
          />

          <InputGroup
            label="Last name"
            type="text"
            placeholder="Enter your last name"
            className="w-full xl:w-1/2"
          />
        </div>

        <div className="flex flex-col gap-4.5 xl:flex-row mb-4.5">
          <InputGroup
          label="Email"
          type="email"
          placeholder="Enter your email address"
          className="mb-4.5 w-full xl:w-1/2"
          required
        />

        <InputGroup
          label="Subject"
          type="text"
          placeholder="Enter your subject"
          className="mb-4.5 w-full xl:w-1/2"
        />
        </div>

        <DatePickerOne />

        <Select
          label="Select Options"
          placeholder="Select your subject"
          className="mb-4.5 rounded-md"
          items={[
            { label: "Option 1", value: "OPTION1" },
            { label: "Option 2", value: "OPTION2" },
            { label: "Option 3", value: "OPTION3" },
            { label: "Option 4", value: "OPTION4" },
            { label: "Option 5", value: "OPTION5" },
            { label: "Option 6", value: "OPTION6" },
          ]}
        />
        <TextAreaGroup label="Message" placeholder="Type your message" />

        <div className="col-span-full">
              <label htmlFor="photo" className="block   text-body-sm font-medium text-dark dark:text-white">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <FaFileUpload  aria-hidden="true" className="size-12 text-gray-500" />
                <button
                  type="button"
                  className="rounded-md   px-3 py-2  text-body-sm font-medium text-dark dark:text-white inset-ring inset-ring-white/5  
                    hover:bg-gray-100 dark:hover:bg-dark-200 dark:hover:bg-black"
                >
                  Change
                </button>
              </div>
            </div>

        <button className="mt-6 flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Send Message
        </button>
      </form>
    </ShowcaseSection>
  );
}
