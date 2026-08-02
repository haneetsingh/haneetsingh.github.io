import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  LevelFormat,
} from "docx";
import {
  profile,
  experience,
  earlierRoles,
  skills,
  education,
} from "../src/data/resume";

const numbering = {
  config: [
    {
      reference: "bullets",
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: "•",
          alignment: "left" as const,
          style: { paragraph: { indent: { left: 360, hanging: 260 } } },
        },
      ],
    },
  ],
};

const heading = (text: string) =>
  new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { before: 280, after: 120 } });

const jobTitle = (role: string, org: string, location: string, period: string) =>
  new Paragraph({
    spacing: { before: 200, after: 40 },
    children: [
      new TextRun({ text: `${role} — ${org}`, bold: true }),
      new TextRun({ text: `, ${location}  |  ${period}` }),
    ],
  });

const bullet = (text: string) =>
  new Paragraph({
    text,
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
  });

const children: Paragraph[] = [
  new Paragraph({
    children: [new TextRun({ text: profile.name, bold: true, size: 36 })],
    spacing: { after: 40 },
  }),
  new Paragraph({
    children: [new TextRun({ text: `${profile.title} — ${profile.tagline}`, size: 22 })],
    spacing: { after: 40 },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: `${profile.location} | ${profile.email} | ${profile.phone}`,
        size: 20,
      }),
    ],
    spacing: { after: 40 },
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: profile.social.map((s) => s.href.replace(/^https?:\/\//, "")).join("  |  "),
        size: 20,
      }),
    ],
    spacing: { after: 160 },
  }),

  heading("Summary"),
  new Paragraph({ text: profile.bio, spacing: { after: 80 } }),

  heading("Experience"),
  ...experience.flatMap((job) => [
    jobTitle(job.role, job.org, job.location, job.period),
    ...job.bullets.map(bullet),
  ]),

  new Paragraph({
    children: [new TextRun({ text: `Earlier roles (2012 — 2020)`, bold: true })],
    spacing: { before: 200, after: 60 },
  }),
  ...earlierRoles.map((r) => bullet(`${r.role} — ${r.summary}`)),

  heading("Skills"),
  ...Object.entries(skills).map(
    ([category, list]) =>
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: `${category}: `, bold: true }),
          new TextRun({ text: list.join(", ") }),
        ],
      }),
  ),

  heading("Education"),
  new Paragraph({
    spacing: { after: 20 },
    children: [new TextRun({ text: education.degree, bold: true })],
  }),
  new Paragraph({ text: `${education.school}  |  ${education.period}` }),
];

const doc = new Document({
  numbering,
  sections: [
    {
      properties: {
        page: { size: { width: 12240, height: 15840 }, margin: { top: 720, bottom: 720, left: 900, right: 900 } },
      },
      children,
    },
  ],
});

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/Haneet_Singh_Resume.docx",
);

const buffer = await Packer.toBuffer(doc);
writeFileSync(outPath, buffer);
console.log(`Generated ${outPath}`);
