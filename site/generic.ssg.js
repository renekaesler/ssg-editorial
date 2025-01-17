import Shell from "./_components/shell.ssg.js";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 10, min: 5 },
  wordsPerSentence: { max: 16, min: 4 },
});

lorem.format = "html";

export default Shell(
  { title: "Generic" },
  html`
    <!-- Content -->
    <section>
      <header class="main">
        <h1>Generic</h1>
      </header>

      <span class="image main"><img src="images/pic11.jpg" alt="" /></span>
      ${lorem.generateParagraphs(3)}

      <hr class="major" />

      <h2>Interdum sed dapibus</h2>
      ${lorem.generateParagraphs(2)}

      <hr class="major" />

      <h2>Magna etiam veroeros</h2>
      ${lorem.generateParagraphs(2)}

      <hr class="major" />

      <h2>Lorem aliquam bibendum</h2>
      ${lorem.generateParagraphs(2)}
    </section>
  `
);
