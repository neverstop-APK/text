const test = require("node:test");
const assert = require("node:assert/strict");

const {
  formatTime,
  calculateEndTime,
  buildCustomExamSections,
} = require("../js/script.js");
const { validateAndFormatTime } = require("../js/custom-exam.js");

const customExamFixture = {
  name: "模拟测评-综合卷",
  startTime: "09:00",
  date: "2026-10-15",
  totalMinutes: 120,
  sections: [
    {
      name: "科目一",
      duration: 90,
      description: "科目一",
      countInTotal: true,
    },
    {
      name: "休息",
      duration: 10,
      description: "休息",
      countInTotal: false,
    },
    {
      name: "科目二",
      duration: 30,
      description: "科目二",
      countInTotal: true,
    },
  ],
};

test("buildCustomExamSections keeps non-counted sections as zero-duration placeholders", () => {
  const sections = buildCustomExamSections(customExamFixture);

  assert.deepStrictEqual(sections, [
    {
      name: "科目一",
      start: 0,
      duration: 90,
      end: 90,
      description: "科目一",
      realTime: "09:00-10:30",
      countInTotal: true,
    },
    {
      name: "休息",
      start: 90,
      duration: 10,
      end: 90,
      description: "休息",
      realTime: "10:30-10:30",
      countInTotal: false,
    },
    {
      name: "科目二",
      start: 90,
      duration: 30,
      end: 120,
      description: "科目二",
      realTime: "10:30-11:00",
      countInTotal: true,
    },
    {
      name: "考试结束",
      start: 120,
      duration: 0,
      end: 120,
      description: "考试结束",
      realTime: "11:00",
      countInTotal: true,
    },
  ]);
});

test("buildCustomExamSections handles all sections excluded from total time", () => {
  const exam = {
    startTime: "09:00",
    totalMinutes: 0,
    sections: [
      { name: "休息一", duration: 30, description: "休息一", countInTotal: false },
      { name: "休息二", duration: 15, description: "休息二", countInTotal: false },
    ],
  };

  let sections;
  assert.doesNotThrow(() => {
    sections = buildCustomExamSections(exam);
  });
  assert.strictEqual(sections.at(-1).start, 0);
  assert.strictEqual(sections.at(-1).end, 0);
  assert.strictEqual(
    sections.reduce(
      (total, section) =>
        total + (section.countInTotal === false ? 0 : section.duration),
      0,
    ),
    0,
  );
});

test("formatTime formats seconds and clamps negative input", () => {
  assert.strictEqual(formatTime(0), "00:00:00");
  assert.strictEqual(formatTime(7325), "02:02:05");
  assert.strictEqual(formatTime(-600), "00:00:00");
});

test("calculateEndTime handles normal and cross-midnight durations", () => {
  assert.strictEqual(calculateEndTime("09:00", 120), "11:00");
  assert.strictEqual(calculateEndTime("23:30", 120), "01:30 (次日)");
  assert.strictEqual(calculateEndTime("00:00", 0), "00:00");
});

test("validateAndFormatTime validates and normalizes supported inputs", () => {
  assert.strictEqual(validateAndFormatTime("09:30"), "09:30");
  assert.strictEqual(validateAndFormatTime("9:30"), "09:30");
  assert.strictEqual(validateAndFormatTime("0930"), "09:30");
  assert.strictEqual(validateAndFormatTime("25:99"), null);
  assert.strictEqual(validateAndFormatTime("abc"), null);
  assert.strictEqual(validateAndFormatTime(""), null);
  assert.strictEqual(validateAndFormatTime(null), null);
  assert.strictEqual(validateAndFormatTime("24:00"), null);
});
