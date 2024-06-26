export const introLessons = [
  {
    step: 0,
    title: "Lesson intro",
    subject: "HTML intro",
    content: `Welcome to Learn 2 Code. Here you will be able to start your programming career with the basics and progress to a fully-fledged web developer.

          To start our journey, we are going to look at HTML. We will look at HTML elements, how they are used and how a typical HTML page is structured.

          HTML (HyperText Markup Language) tells web browsers how to structure the web pages you visit. It consists of elements which are used to enclose, wrap or mark up different parts of content, making it appear in a certain way.
          
          Ok, so let’s start building a basic page.`,
    userInteraction: false,
  },
  {
    step: 1,
    title: "Headers",
    subject: "h1 tag",
    content: `We want our page to have a header. Think of this like a title to a story or a title to describe the contents of the page. To do this we are going to use what we call an <h1> element. These elements have an opening tag <h1>, and a closing tag </h1>. Notice the difference between the opening and closing tags. Closing tags contain / before the element name.
          For best practice, each page on your website should only contain one <h1> tag.
          Let’s try it out.
          Using the editor below, create a title of your choice. You can nest your title between the opening and closing tag.
          e.g <h1> Hello World! </h1>
          `,
    name: "h1",
    opening_tag: "<h1>",
    closing_tag: "</h1>",
    self_closing: false,
    userInteraction: true,
  },
  {
    step: 2,
    title: "Sub Headings",
    subject: "h3 tag",
    content: `Perfect! So now you know how to add a title to your page. Let’s add a sub heading.
          As previously mentioned, for best practice we should avoid using more than one <h1> tag per page. Thankfully HTML provides us with six levels of H tag. <h1> to <h6>.
          <h1> tags output the biggest font size. <h6> tags will output the smallest font size of the header tags.
          For this example, we will use an <h3> tag for our sub heading.
          Create a sub heading of your choice using the <h3> tag.
          e.g <h3> What a wonderful world </h3>
          `,
    name: "h3",
    opening_tag: "<h3>",
    closing_tag: "</h3>",
    self_closing: false,
    userInteraction: true,
  },
  {
    step: 3,
    title: "Paragraphs",
    subject: "p tags",
    content: `Awesome! We have a title and a sub heading. What’s next I hear you ask! Well, let’s put some more text content on the page.
          We don’t always want to use header tags for text. For a majority of the page’s text content, we will use <p> tags.
          The <p> element represents paragraph. Unlike <h1> tags, you can freely use as many <p> tags on a page as you require.
          Let’s give it a go! Imagine you have your title, sub heading and now want to add a short description. Use the <p> tag to add a short description of your choice. Don’t forget to use the closing tag at the end of the description.
          e.g <p> This is a page about how wonderful the world is! </p>
          `,
    name: "p",
    opening_tag: "<p>",
    closing_tag: "</p>",
    self_closing: false,
    userInteraction: true,
  },
  {
    step: 4,
    title: "Headers, sub headings and paragraphs combined",
    subject: "h1, h2 and p tags",
    content: `Woah, That’s some quick progress! Let’s combine what we have learnt so far and put it all together.
          For this task I want you to make a title using <h1> tags, a sub heading using <h3> tags and a short description using <p> tags, all on the same page! Again, don’t forget the closing tags!
          
          <h1> Hello World! </h1>
          <h3> What a wonderful world </h3>
          <p> This is a page about how wonderful the world is! </p>
          `,
    // name: "h1",
    // opening_tag: "<h1>",
    // closing_tag: "</h1>",
    // self_closing: false,
    userInteraction: true,
  },
];
