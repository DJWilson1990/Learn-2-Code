import fsPromises from "fs/promises";
import path from "path";
import Input from "@/components/Input";
import { redirect } from "next/navigation";
import Button from "@/components/Button";
import { getProfile, setProgress } from "@/utils/utils";
import { auth } from "@clerk/nextjs";
import "./course.css";
import Render from "@/components/Render";

export default async function Page({ params }) {
  const { userId } = auth();
  const userProfile = await getProfile(userId);

  const course = params.courseId;
  const step = params.step;

  // setting course id
  const courseIdAsString = "00" + course;
  // for url purposes
  const courseFileName =
    courseIdAsString.substring(courseIdAsString.length - 2) + ".json";

  // const courseData = await getCourseData(
  //   `/src/resources/courses/${courseFileName}`
  // );

  const courseData = await getCourseData(`${courseFileName}`);

  const numberOfSteps = courseData.length;
  // to stop course starting at second step instead of first
  const lesson = courseData[step - 1];
  //splitting the json for styling. creating line break
  const lessonContent = lesson.content.split("\n");

  // element details
  let element;
  if (lesson.userInteraction === true) {
    element = {
      name: lesson.name,
      opening_tag: lesson.opening_tag,
      closing_tag: lesson.closing_tag,
      self_closing: lesson.self_closing,
    };
  }

  // console.log(lesson);
  //  getting course data from json file
  async function getCourseData(fileName) {
    const filePath = path.join(process.cwd(), "public", fileName);
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
    redirect(`/course/${course}/${next}`);
  }

  async function playground() {
    "use server";
    redirect("/code-editor");
  }

  return (
    <div className="flex flex-col mx-auto my-10">
      <h3 className="m-2 font-bold text-xl">
        <Render text={lesson.title} language={userProfile.language} />
      </h3>
      {lessonContent.map((text) => (
        <p key={text} className="mb-2">
          <Render text={text} language={userProfile.language} />
        </p>
      ))}

      {lesson.userInteraction === true ? (
        <Input element={element} className="mx-auto" />
      ) : null}
      {lesson.userInteraction === true ? (
        <div id="output" className="border w-96 h-40 mx-auto text-wrap"></div>
      ) : null}
      <div className="mx-auto mt-10">
        {step < numberOfSteps ? (
          <Button action={nextStep} caption="Next Step" className="mx-auto" />
        ) : (
          <Button
            action={playground}
            caption="Go to code playground"
            className="mx-auto"
          />
        )}
      </div>
    </div>
  );
}
