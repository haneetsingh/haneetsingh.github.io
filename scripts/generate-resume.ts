import { createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import PDFDocument from "pdfkit";
import {
  profile,
  resumeExperience,
  earlierRoles,
  skills,
  education,
} from "../src/data/resume";

const resumeSocial = profile.social.filter(
  (s) => s.label === "GitHub" || s.label === "LinkedIn",
);

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(scriptDir, "fonts");
const outPath = path.join(scriptDir, "../public/Haneet_Singh_Resume.pdf");

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 54, bottom: 54, left: 54, right: 54 },
  info: { Title: `${profile.name}: Resume`, Author: profile.name },
});
doc.pipe(createWriteStream(outPath));

doc.registerFont("Regular", path.join(fontsDir, "Lato-Regular.ttf"));
doc.registerFont("Bold", path.join(fontsDir, "Lato-Bold.ttf"));
doc.registerFont("Italic", path.join(fontsDir, "Lato-Italic.ttf"));
doc.registerFont("BoldItalic", path.join(fontsDir, "Lato-BoldItalic.ttf"));

const ACCENT = "#0f766e";
const TEXT = "#1a1a1a";
const DIM = "#555555";
const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

const heading = (text: string) => {
  doc.moveDown(0.6);
  doc
    .fontSize(12)
    .fillColor(ACCENT)
    .font("Bold")
    .text(text.toUpperCase(), { characterSpacing: 0.5 });
  doc
    .moveTo(doc.x, doc.y + 2)
    .lineTo(doc.x + contentWidth, doc.y + 2)
    .strokeColor(ACCENT)
    .lineWidth(0.75)
    .stroke();
  doc.moveDown(0.5);
};

const jobHeader = (role: string, org: string, location: string, period: string) => {
  const startY = doc.y;
  const heading = org === "Self-employed" ? role : `${org} - ${role}`;
  doc.fontSize(10.5).fillColor(TEXT).font("BoldItalic").text(heading, { continued: false });
  const afterY = doc.y;
  doc
    .fontSize(9)
    .fillColor(DIM)
    .font("Italic")
    .text(period, doc.page.margins.left, startY, { width: contentWidth, align: "right" });
  doc.y = afterY;
  doc.fontSize(9.5).fillColor(DIM).font("Italic").text(location);
  doc.moveDown(0.3);
};

const bullet = (text: string) => {
  doc
    .fontSize(9.5)
    .fillColor(TEXT)
    .font("Regular")
    .text(`•  ${text}`, { indent: 10, width: contentWidth - 10 });
};

// Header
doc.fontSize(22).fillColor(TEXT).font("Bold").text(profile.name);
doc.fontSize(11).fillColor(ACCENT).font("Regular").text(`${profile.title} - ${profile.tagline}`);
doc.moveDown(0.2);
doc
  .fontSize(9.5)
  .fillColor(DIM)
  .font("Regular")
  .text(`${profile.location}  |  ${profile.email}  |  ${profile.phone}`);
doc
  .fontSize(9.5)
  .fillColor(DIM)
  .text(resumeSocial.map((s) => s.href.replace(/^https?:\/\//, "")).join("   |   "));

// Summary
heading("Summary");
doc.fontSize(9.5).fillColor(TEXT).font("Regular").text(profile.bio, { align: "left" });

// Skills
heading("Skills");
for (const [category, list] of Object.entries(skills)) {
  doc.fontSize(9.5).fillColor(TEXT);
  doc.font("Bold").text(`${category}: `, { continued: true });
  doc.font("Regular").text(list.join(", "));
}

// Experience
heading("Experience");
resumeExperience.forEach((job, i) => {
  jobHeader(job.role, job.org, job.location, job.period);
  job.bullets.forEach(bullet);
  if (i < resumeExperience.length - 1) doc.moveDown(0.5);
});

doc.moveDown(0.5);
doc.fontSize(9.5).fillColor(TEXT).font("Bold").text("Earlier roles (2012 – 2020)");
doc.moveDown(0.2);
earlierRoles.forEach((r) => bullet(`${r.role}: ${r.summary}`));

// Education
heading("Education");
doc.fontSize(9.5).fillColor(TEXT).font("Bold").text(education.degree);
doc.fontSize(9.5).fillColor(DIM).font("Regular").text(`${education.school}  |  ${education.period}`);

doc.end();
console.log(`Generated ${outPath}`);
