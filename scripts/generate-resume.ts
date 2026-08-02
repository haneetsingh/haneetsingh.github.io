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

const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/Haneet_Singh_Resume.pdf",
);

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 54, bottom: 54, left: 54, right: 54 },
  info: { Title: `${profile.name}: Resume`, Author: profile.name },
});
doc.pipe(createWriteStream(outPath));

const ACCENT = "#0f766e";
const TEXT = "#1a1a1a";
const DIM = "#555555";
const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

const heading = (text: string) => {
  doc.moveDown(0.6);
  doc
    .fontSize(12)
    .fillColor(ACCENT)
    .font("Helvetica-Bold")
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
  doc.fontSize(10.5).fillColor(TEXT).font("Helvetica-Bold").text(role, { continued: false });
  doc.fontSize(9.5).fillColor(DIM).font("Helvetica").text(`${org}: ${location}`);
  const afterY = doc.y;
  doc
    .fontSize(9)
    .fillColor(DIM)
    .font("Helvetica-Oblique")
    .text(period, doc.page.margins.left, startY, { width: contentWidth, align: "right" });
  doc.y = afterY;
  doc.moveDown(0.3);
};

const bullet = (text: string) => {
  doc
    .fontSize(9.5)
    .fillColor(TEXT)
    .font("Helvetica")
    .text(`•  ${text}`, { indent: 10, width: contentWidth - 10 });
};

// Header
doc.fontSize(22).fillColor(TEXT).font("Helvetica-Bold").text(profile.name);
doc.fontSize(11).fillColor(ACCENT).font("Helvetica").text(`${profile.title} - ${profile.tagline}`);
doc.moveDown(0.2);
doc
  .fontSize(9.5)
  .fillColor(DIM)
  .font("Helvetica")
  .text(`${profile.location}  |  ${profile.email}  |  ${profile.phone}`);
doc
  .fontSize(9.5)
  .fillColor(DIM)
  .text(resumeSocial.map((s) => s.href.replace(/^https?:\/\//, "")).join("   |   "));

// Summary
heading("Summary");
doc.fontSize(9.5).fillColor(TEXT).font("Helvetica").text(profile.bio, { align: "left" });

// Skills
heading("Skills");
for (const [category, list] of Object.entries(skills)) {
  doc.fontSize(9.5).fillColor(TEXT);
  doc.font("Helvetica-Bold").text(`${category}: `, { continued: true });
  doc.font("Helvetica").text(list.join(", "));
}

// Experience
heading("Experience");
resumeExperience.forEach((job, i) => {
  jobHeader(job.role, job.org, job.location, job.period);
  job.bullets.forEach(bullet);
  if (i < resumeExperience.length - 1) doc.moveDown(0.5);
});

doc.moveDown(0.5);
doc.fontSize(9.5).fillColor(TEXT).font("Helvetica-Bold").text("Earlier roles (2012 – 2020)");
doc.moveDown(0.2);
earlierRoles.forEach((r) => bullet(`${r.role}: ${r.summary}`));

// Education
heading("Education");
doc.fontSize(9.5).fillColor(TEXT).font("Helvetica-Bold").text(education.degree);
doc.fontSize(9.5).fillColor(DIM).font("Helvetica").text(`${education.school}  |  ${education.period}`);

doc.end();
console.log(`Generated ${outPath}`);
