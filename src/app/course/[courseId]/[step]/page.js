import fsPromises from "fs/promises";
import path from "path";
import Input from "@/components/Input";
import { redirect } from "next/navigation";
import NextButton from "@/components/NextButton";
import { setProgress } from "@/utils/utils";
import { auth } from "@clerk/nextjs";

export default async function Page({ params }) {
  const { userId } = auth();
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
  const lessonContent = lesson.content.split("\n");

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
    await setProgress(course, next, userId);
    console.log("setProgress", course, step, userId);
    redirect(`/course/${course}/${next}`);
  }

  async function playground() {
    "use server";
    redirect("/code-editor");
  }

  return (
    <div className="flex flex-col mx-auto w-96 m-10">
      {/* <p dangerouslySetInnerHTML={{ __html: lesson.content }}></p> */}
      {lessonContent.map((text) => (
        <p key={text} className="mb-2">
          {text}
        </p>
      ))}
      {/* <p className="text-center">{lesson.content}</p> */}
      {lesson.userInteraction === true ? <Input element={element} /> : null}
      {lesson.userInteraction === true ? (
        <div id="output" className="border w-96 h-40 mx-auto text-wrap"></div>
      ) : null}

      {/* {step < numberOfSteps ? (
        <NextButton action={nextStep} caption="Next Step" />
      ) : null} */}
      {step < numberOfSteps ? (
        <NextButton action={nextStep} caption="Next Step" />
      ) : (
        <NextButton action={playground} caption="Go to code playground" />
      )}
    </div>
  );
}
