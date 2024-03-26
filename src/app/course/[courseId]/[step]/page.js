import fsPromises from "fs/promises";
import path from "path";
import Input from "@/components/Input";
import { redirect } from "next/navigation";
import NextButton from "@/components/NextButton";

export default async function Page({ params }) {
  console.log(params);

  const course = params.courseId;
  const step = params.step;

  const courseIdAsString = "00" + course;
  const courseFileName =
    courseIdAsString.substring(courseIdAsString.length - 2) + ".json";

  const courseData = await getCourseData(
    `/src/resources/courses/${courseFileName}`
  );

  const numberOfSteps = courseData.length;
  const lesson = courseData[step - 1];
  let element;
  if (lesson.userInteraction === true) {
    element = {
      name: lesson.name,
      opening_tag: lesson.opening_tag,
      closing_tag: lesson.closing_tag,
      self_closing: lesson.self_closing,
    };
  }

  console.log(lesson);

  async function getCourseData(fileName) {
    const filePath = path.join(process.cwd(), fileName);
    try {
      const fileContent = await fsPromises.readFile(filePath, "utf-8");
      const data = await JSON.parse(fileContent);
      return data;
    } catch (error) {
      console.error("error reading JSON data:", error);
      return null;
    }
  }

  async function nextStep() {
    "use server";
    const next = Number(step) + 1;
    redirect(`/course/${course}/${next}`);
  }

  return (
    <div className="flex flex-col mx-auto w-96 items-center m-10">
      {/* <p dangerouslySetInnerHTML={{ __html: lesson.content }}></p> */}
      <p className="text-center">{lesson.content}</p>
      {lesson.userInteraction === true ? <Input element={element} /> : null}
      {lesson.userInteraction === true ? (
        <div id="output" className="border w-96 h-40 mx-auto text-wrap"></div>
      ) : null}

      {step < numberOfSteps ? (
        <NextButton action={nextStep} caption="Next Step" />
      ) : null}
    </div>
  );
}
