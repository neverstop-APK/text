// CET-4 考试环节配置
const cet4Sections = [
  {
    name: "考前准备",
    start: 0,
    duration: 10,
    end: 10,
    description: "发卷、填写个人信息、贴条形码",
    realTime: "9:00-9:10",
  },
  {
    name: "写作",
    start: 10,
    duration: 30,
    end: 40,
    description: "作文写作（不能翻看试题册）",
    realTime: "9:10-9:40",
  },
  {
    name: "听力",
    start: 40,
    duration: 25,
    end: 65,
    description: "听力理解（边听边涂答题卡1）",
    realTime: "9:40-10:05",
  },
  {
    name: "收答题卡1",
    start: 65,
    duration: 5,
    end: 70,
    description: "听力结束后立即收答题卡1",
    realTime: "10:05-10:10",
  },
  {
    name: "阅读理解 + 翻译",
    start: 70,
    duration: 70,
    end: 140,
    description: "作答在答题卡2（阅读40min+翻译30min）",
    realTime: "10:10-11:20",
  },
  {
    name: "考试结束",
    start: 140,
    duration: 0,
    end: 140,
    description: "收答题卡2和试题册",
    realTime: "11:20",
  },
];

// CET-6 考试环节配置
const cet6Sections = [
  {
    name: "考前准备",
    start: 0,
    duration: 10,
    end: 10,
    description: "发卷、填写个人信息、贴条形码",
    realTime: "15:00-15:10",
  },
  {
    name: "写作",
    start: 10,
    duration: 30,
    end: 40,
    description: "作文写作（不能翻看试题册）",
    realTime: "15:10-15:40",
  },
  {
    name: "听力",
    start: 40,
    duration: 30,
    end: 70,
    description: "听力理解（边听边涂答题卡1）",
    realTime: "15:40-16:10",
  },
  {
    name: "收答题卡1",
    start: 70,
    duration: 5,
    end: 75,
    description: "听力结束后立即收答题卡1",
    realTime: "16:10-16:15",
  },
  {
    name: "阅读理解 + 翻译",
    start: 75,
    duration: 70,
    end: 145,
    description: "作答在答题卡2（阅读40min+翻译30min）",
    realTime: "16:15-17:25",
  },
  {
    name: "考试结束",
    start: 145,
    duration: 0,
    end: 145,
    description: "收答题卡2和试题册",
    realTime: "17:25",
  },
];

// ==================== 高考预设（广东 3+1+2 模式）====================

// 6月7日 - 语文 9:00-11:30（150分钟）
const gaokaoYuwen = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "9:00-9:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "9:05-9:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 140,
    end: 150,
    description: "现代文阅读、古代诗文、语言文字运用、写作",
    realTime: "9:10-11:30",
  },
  {
    name: "考试结束",
    start: 150,
    duration: 0,
    end: 150,
    description: "收试卷和答题卡",
    realTime: "11:30",
  },
];

// 6月7日 - 数学 15:00-17:00（120分钟）
const gaokaoShuxue = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "15:00-15:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "15:05-15:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 110,
    end: 120,
    description: "选择题、填空题、解答题",
    realTime: "15:10-17:00",
  },
  {
    name: "考试结束",
    start: 120,
    duration: 0,
    end: 120,
    description: "收试卷和答题卡",
    realTime: "17:00",
  },
];

// 6月8日 - 物理 9:00-10:15（75分钟）
const gaokaoWuli = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "9:00-9:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "9:05-9:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、实验题、计算题",
    realTime: "9:10-10:15",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "10:15",
  },
];

// 6月8日 - 历史 9:00-10:15（75分钟）
const gaokaoLishi = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "9:00-9:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "9:05-9:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、材料分析题、论述题",
    realTime: "9:10-10:15",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "10:15",
  },
];

// 6月8日 - 外语 15:00-17:00（120分钟）
const gaokaoWaiyu = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "15:00-15:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "15:05-15:10",
  },
  {
    name: "听力",
    start: 10,
    duration: 20,
    end: 30,
    description: "听力理解（边听边涂答题卡）",
    realTime: "15:10-15:30",
  },
  {
    name: "笔试",
    start: 30,
    duration: 90,
    end: 120,
    description: "阅读理解、完形填空、语法填空、书面表达",
    realTime: "15:30-17:00",
  },
  {
    name: "考试结束",
    start: 120,
    duration: 0,
    end: 120,
    description: "收试卷和答题卡",
    realTime: "17:00",
  },
];

// 6月9日 - 化学 8:30-9:45（75分钟）
const gaokaoHuaxue = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "8:30-8:35",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "8:35-8:40",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、非选择题",
    realTime: "8:40-9:45",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "9:45",
  },
];

// 6月9日 - 地理 11:00-12:15（75分钟）
const gaokaoDili = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "11:00-11:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "11:05-11:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、综合题",
    realTime: "11:10-12:15",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "12:15",
  },
];

// 6月9日 - 思想政治 14:30-15:45（75分钟）
const gaokaoZhengzhi = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "14:30-14:35",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "14:35-14:40",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、非选择题",
    realTime: "14:40-15:45",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "15:45",
  },
];

// 6月9日 - 生物学 17:00-18:15（75分钟）
const gaokaoShengwu = [
  {
    name: "考前准备1",
    start: 0,
    duration: 5,
    end: 5,
    description: "发放答题卡、草稿纸、条形码，填写答题卡上个人信息",
    realTime: "17:00-17:05",
  },
  {
    name: "考前准备2",
    start: 5,
    duration: 5,
    end: 10,
    description: "发放试卷，不允许作答",
    realTime: "17:05-17:10",
  },
  {
    name: "考试作答",
    start: 10,
    duration: 65,
    end: 75,
    description: "选择题、非选择题",
    realTime: "17:10-18:15",
  },
  {
    name: "考试结束",
    start: 75,
    duration: 0,
    end: 75,
    description: "收试卷和答题卡",
    realTime: "18:15",
  },
];

// 官方考试预设多级分类
const officialPresetCategories = [
  {
    name: "CET",
    items: ["cet4", "cet6"]
  },
  {
    name: "高考",
    subcategories: [
      {
        name: "6月7日",
        items: ["gaokao_yuwen", "gaokao_shuxue"]
      },
      {
        name: "6月8日",
        items: ["gaokao_wuli", "gaokao_lishi", "gaokao_waiyu"]
      },
      {
        name: "6月9日",
        items: ["gaokao_huaxue", "gaokao_dili", "gaokao_zhengzhi", "gaokao_shengwu"]
      }
    ]
  }
];

// 官方考试预设
const officialExams = {
  cet4: {
    name: "CET-4",
    sections: cet4Sections,
    totalTime: 140 * 60,
    examDate: "2026年6月13日上午",
    examTimeRange: "9:00 - 11:20",
    examStartTime: { hours: 9, minutes: 0 },
    targetDate: "2026-06-13T09:00:00",
  },
  cet6: {
    name: "CET-6",
    sections: cet6Sections,
    totalTime: 145 * 60,
    examDate: "2026年6月13日下午",
    examTimeRange: "15:00 - 17:25",
    examStartTime: { hours: 15, minutes: 0 },
    targetDate: "2026-06-13T15:00:00",
  },
  // 高考 - 6月7日
  gaokao_yuwen: {
    name: "高考 · 语文",
    sections: gaokaoYuwen,
    totalTime: 150 * 60,
    examDate: "6月7日上午",
    examTimeRange: "9:00 - 11:30",
    examStartTime: { hours: 9, minutes: 0 },
    targetDate: "2027-06-07T09:00:00",
  },
  gaokao_shuxue: {
    name: "高考 · 数学",
    sections: gaokaoShuxue,
    totalTime: 120 * 60,
    examDate: "6月7日下午",
    examTimeRange: "15:00 - 17:00",
    examStartTime: { hours: 15, minutes: 0 },
    targetDate: "2027-06-07T15:00:00",
  },
  // 高考 - 6月8日
  gaokao_wuli: {
    name: "高考 · 物理",
    sections: gaokaoWuli,
    totalTime: 75 * 60,
    examDate: "6月8日上午",
    examTimeRange: "9:00 - 10:15",
    examStartTime: { hours: 9, minutes: 0 },
    targetDate: "2027-06-08T09:00:00",
  },
  gaokao_lishi: {
    name: "高考 · 历史",
    sections: gaokaoLishi,
    totalTime: 75 * 60,
    examDate: "6月8日上午",
    examTimeRange: "9:00 - 10:15",
    examStartTime: { hours: 9, minutes: 0 },
    targetDate: "2027-06-08T09:00:00",
  },
  gaokao_waiyu: {
    name: "高考 · 外语",
    sections: gaokaoWaiyu,
    totalTime: 120 * 60,
    examDate: "6月8日下午",
    examTimeRange: "15:00 - 17:00",
    examStartTime: { hours: 15, minutes: 0 },
    targetDate: "2027-06-08T15:00:00",
  },
  // 高考 - 6月9日
  gaokao_huaxue: {
    name: "高考 · 化学",
    sections: gaokaoHuaxue,
    totalTime: 75 * 60,
    examDate: "6月9日",
    examTimeRange: "8:30 - 9:45",
    examStartTime: { hours: 8, minutes: 30 },
    targetDate: "2027-06-09T08:30:00",
  },
  gaokao_dili: {
    name: "高考 · 地理",
    sections: gaokaoDili,
    totalTime: 75 * 60,
    examDate: "6月9日",
    examTimeRange: "11:00 - 12:15",
    examStartTime: { hours: 11, minutes: 0 },
    targetDate: "2027-06-09T11:00:00",
  },
  gaokao_zhengzhi: {
    name: "高考 · 思想政治",
    sections: gaokaoZhengzhi,
    totalTime: 75 * 60,
    examDate: "6月9日",
    examTimeRange: "14:30 - 15:45",
    examStartTime: { hours: 14, minutes: 30 },
    targetDate: "2027-06-09T14:30:00",
  },
  gaokao_shengwu: {
    name: "高考 · 生物学",
    sections: gaokaoShengwu,
    totalTime: 75 * 60,
    examDate: "6月9日",
    examTimeRange: "17:00 - 18:15",
    examStartTime: { hours: 17, minutes: 0 },
    targetDate: "2027-06-09T17:00:00",
  },
};

// 加载自定义考试配置到 window.customExams
function loadCustomExams() {
  const savedExams = localStorage.getItem("customExams");
  if (savedExams) {
    try {
      window.customExams = JSON.parse(savedExams);
    } catch (e) {
      console.error("解析自定义考试数据失败，已重置为默认值", e);
      setDefaultCustomExams();
    }
  } else {
    setDefaultCustomExams();
  }
}

function setDefaultCustomExams() {
  // 如果没有保存的自定义考试，或者解析失败，设置默认预设
  window.customExams = [
    {
      id: 1,
      name: "参考预设：中期模拟考试",
      startTime: "09:00",
      date: "2026-06-20",
      timeRange: "09:00 - 11:30",
      totalMinutes: 150,
      displaySettings: {
        showCurrentTime: false,
        showCountdownTimer: true,
        showSectionTimer: true,
      },
      sections: [
        {
          name: "考前准备",
          duration: 10,
          description: "发卷及填写信息",
          countInTotal: true,
        },
        {
          name: "第一部分",
          duration: 60,
          description: "选择题模块",
          countInTotal: true,
        },
        {
          name: "第二部分",
          duration: 80,
          description: "主观题模块",
          countInTotal: true,
        },
        {
          name: "考试结束",
          duration: 0,
          description: "收起试卷",
          countInTotal: false,
        },
      ],
    },
  ];
  // 保存默认预设到 localStorage
  localStorage.setItem("customExams", JSON.stringify(window.customExams));
}

// 在脚本加载时立即加载自定义考试配置
if (typeof window !== "undefined") {
  loadCustomExams();
}

// 当前使用的考试类型（默认为CET-4）
let currentExamType = "cet4";
let examSections = cet4Sections;

// 总考试时间（以秒为单位）
let totalTime = 140 * 60; // CET-4总时间

let timer = null;
let timeLeft = 140 * 60;
let isRunning = false;
let currentSectionIndex = 0;
let examStartTime = new Date();
examStartTime.setHours(9, 0, 0, 0); // CET-4开始时间

let startTimeStamp = null; // 计时器最近一次启动或恢复时的系统时间戳
let elapsedBeforeLastStart = 0; // 最近一次启动或恢复前，考试已经累计消耗的秒数

// 添加变量跟踪倒计时显示状态
let isCountdownVisible = true;

// 确保所有全局变量都有初始值
if (isNaN(totalTime) || totalTime <= 0) {
  totalTime = 140 * 60; // 默认为CET-4总时间
}

if (isNaN(timeLeft) || timeLeft <= 0) {
  timeLeft = totalTime;
}

// 确保examStartTime是有效日期
if (!(examStartTime instanceof Date) || isNaN(examStartTime.getTime())) {
  examStartTime = new Date();
  const fallbackConfig = officialExams[currentExamType];
  if (fallbackConfig) {
    examStartTime.setHours(fallbackConfig.examStartTime.hours, fallbackConfig.examStartTime.minutes, 0, 0);
  } else {
    examStartTime.setHours(9, 0, 0, 0);
  }
}

// 初始化全局变量
function initializeGlobals() {
  // 设置默认为CET-4
  currentExamType = "cet4";
  examSections = cet4Sections;
  totalTime = officialExams.cet4.totalTime;
  timeLeft = totalTime;
  examStartTime = new Date();
  examStartTime.setHours(9, 0, 0, 0);

  // 更新UI元素
  document.getElementById("examType").textContent = officialExams.cet4.name;
  document.getElementById("examTitle").textContent = officialExams.cet4.name;
  document.getElementById("examDate").textContent = officialExams.cet4.examDate;
  document.getElementById("examTimeRange").textContent =
    officialExams.cet4.examTimeRange;

  // Calculate days left
  const targetDate = new Date(officialExams.cet4.targetDate);
  const now = new Date();
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("examCountdown").textContent =
    `距离考试还有 ${diffDays > 0 ? diffDays : 0} 天`;
  document.getElementById("totalTime").textContent = totalTime / 60;
  document.getElementById("remainingTime").textContent = totalTime / 60;
  document.getElementById("timer").textContent = formatTime(timeLeft);
  document.getElementById("currentTimeSpan").textContent = "09:00:00";

  // 重置考试状态
  resetExam();
  updateSectionOptions();
  updateSectionList();

  // 更新切换按钮文本 - 不再需要，因为按钮已移除
  // const toggleBtn = document.getElementById('toggleExamBtn');
  // const toggleBtnSmall = document.getElementById('toggleExamBtnSmall');
  // if (toggleBtn) toggleBtn.textContent = '切换为CET-6';
  // if (toggleBtnSmall) toggleBtnSmall.textContent = '切换为CET-6';

  // 设置预设选择器的默认显示值
  if (document.getElementById("selectedPreset")) {
    document.getElementById("selectedPreset").innerHTML =
      '<span>CET-4 (大学英语四级)</span><span class="dropdown-arrow">▼</span>';
  }
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function clampTimeLeft(value) {
  const upperBound = Math.max(0, Number(totalTime) || 0);
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return 0;
  }
  return Math.min(Math.max(numericValue, 0), upperBound);
}

function getRealTime(currentTime) {
  // 确保examStartTime是有效的日期对象
  if (!(examStartTime instanceof Date) || isNaN(examStartTime.getTime())) {
    examStartTime = new Date();
    const fallbackConfig = officialExams[currentExamType];
    if (fallbackConfig) {
      examStartTime.setHours(fallbackConfig.examStartTime.hours, fallbackConfig.examStartTime.minutes, 0, 0);
    } else {
      examStartTime.setHours(9, 0, 0, 0);
    }
  }

  const actualTime = new Date(examStartTime.getTime() + currentTime * 1000);
  return actualTime.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function updateTimer(suppressSectionSwitchReminder = false) {
  // 基于系统时间戳计算准确的 timeLeft
  if (isRunning && startTimeStamp) {
    const elapsedSeconds = Math.floor((Date.now() - startTimeStamp) / 1000);
    timeLeft = clampTimeLeft(
      totalTime - (elapsedBeforeLastStart + elapsedSeconds),
    );
  }

  // 检查是否结束
  if (timeLeft <= 0) {
    timeLeft = 0; // 确保时间不为负数
    clearInterval(timer);
    isRunning = false;
    updateButtons();

    // 更新 UI 为结束状态
    document.getElementById("timer").textContent = formatTime(0);
    document.getElementById("remainingTime").textContent = 0;
    document.getElementById("progressFill").style.width = "100%";
    document.getElementById("currentSection").textContent = "考试结束！";
    document.getElementById("sectionTimer").style.display = "none";
    document.getElementById("currentTimeSpan").textContent =
      getRealTime(totalTime);
    document.querySelector(".countdown-value").textContent = "考试已结束";
    updateSectionList();
    return;
  }

  document.getElementById("timer").textContent = formatTime(timeLeft);

  // 计算剩余时间
  document.getElementById("remainingTime").textContent = Math.ceil(
    timeLeft / 60,
  );

  // 更新进度条
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  document.getElementById("progressFill").style.width = `${progress}%`;

  // 更新当前环节
  const currentTime = totalTime - timeLeft;
  const previousSectionIndex = currentSectionIndex;
  let currentSection = null;
  let nextSection = null;
  let nextSectionTime = 0;

  for (let i = 0; i < examSections.length; i++) {
    if (
      currentTime >= examSections[i].start * 60 &&
      currentTime < examSections[i].end * 60
    ) {
      currentSection = examSections[i];
      currentSectionIndex = i;

      // 找到下一环节
      if (i < examSections.length - 1) {
        nextSection = examSections[i + 1];
        nextSectionTime = examSections[i + 1].start * 60 - currentTime;
      }
      break;
    }
  }

  // 更新当前环节显示
  if (currentSection) {
    const sectionEndTime = currentSection.end * 60;
    const sectionStartTime = currentSection.start * 60;
    const timeInCurrentSection = currentTime - sectionStartTime;
    const timeLeftInSection = Math.max(0, sectionEndTime - currentTime);

    // 更新本环节倒计时显示
    document.getElementById("sectionTimer").style.display = "block";
    document.querySelector("#sectionTimer .time-value").textContent =
      formatTime(timeLeftInSection);

    document.getElementById("currentSection").innerHTML = `
                <strong>当前环节：</strong>${currentSection.name}<br>
                <small style="color: var(--color-text-muted);">${currentSection.description}</small><br>
                <small style="color: var(--color-text-light);">考场时间: ${currentSection.realTime}</small>
            `;
  } else if (timeLeft > 0) {
    // 考试还没开始
    document.getElementById("currentSection").textContent =
      "考试尚未开始，请点击开始按钮";
    document.getElementById("sectionTimer").style.display = "none";
  } else {
    // 考试已结束
    document.getElementById("currentSection").textContent = "考试结束！";
    document.getElementById("sectionTimer").style.display = "none";
  }

  if (
    !suppressSectionSwitchReminder &&
    currentSection &&
    previousSectionIndex !== currentSectionIndex
  ) {
    notifySectionSwitch();
  }

  // 更新倒计时
  if (nextSection) {
    document.querySelector(".countdown-value").textContent =
      `"${nextSection.name}"`;
  } else if (timeLeft > 0) {
    document.querySelector(".countdown-value").textContent = "即将结束";
  }

  // 更新环节列表
  updateSectionList();

  // 更新实时时间显示
  document.getElementById("currentTimeSpan").textContent = getRealTime(
    totalTime - timeLeft,
  );
}

function updateSectionList() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  examSections.forEach((section, index) => {
    const currentTime = totalTime - timeLeft;
    const sectionStart = section.start * 60;
    const sectionEnd = section.end * 60;

    let status = "upcoming";
    let isActive = false;
    let isCompleted = false;

    // 只有在考试进行中时才计算实际状态
    if (isRunning) {
      if (currentTime >= sectionStart && currentTime < sectionEnd) {
        status = "current";
        isActive = true;
      } else if (currentTime >= sectionEnd) {
        status = "completed";
        isCompleted = true;
      }
    }

    // 构建基础类名
    let className = "section";
    if (isActive) className += " active";
    if (isCompleted) className += " completed";

    const sectionDiv = document.createElement("div");
    sectionDiv.className = className;

    let statusText = "";
    switch (status) {
      case "current":
        statusText = '<span class="status-current">进行中</span>';
        break;
      case "completed":
        statusText = '<span class="status-completed">已完成</span>';
        break;
      case "upcoming":
        statusText = '<span class="status-upcoming">待开始</span>';
        break;
    }

    const durationLabel =
      section.countInTotal === false ? "不计时" : `${section.duration}min`;

    sectionDiv.innerHTML = `
                <div class="section-title">${section.name} (${durationLabel})</div>
                <div class="section-time">${section.description}</div>
                <div class="section-real-time">考场时间: ${section.realTime}</div>
                ${statusText}
            `;

    timeline.appendChild(sectionDiv);
  });

  // 更新已完成环节统计
  const completed = examSections.filter((section) => {
    if (isRunning) {
      return totalTime - timeLeft >= section.end * 60;
    }
    return false;
  }).length;

  document.getElementById("completedSections").textContent = completed;
}

function startExam() {
  // 如果考试已经结束，先重置再开始
  if (timeLeft <= 0) {
    resetExam();
  }

  isRunning = true;
  startTimeStamp = Date.now();
  elapsedBeforeLastStart = totalTime - timeLeft;
  timer = setInterval(updateTimer, 1000);
  updateButtons();
  updateSectionList();
}

function pauseExam() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    if (startTimeStamp) {
      const elapsedSeconds = Math.floor((Date.now() - startTimeStamp) / 1000);
      elapsedBeforeLastStart += elapsedSeconds;
      timeLeft = clampTimeLeft(totalTime - elapsedBeforeLastStart);
    }
    updateButtons();
  }
}

function resetExam() {
  clearInterval(timer);
  isRunning = false;
  startTimeStamp = null;
  elapsedBeforeLastStart = 0;
  timeLeft = clampTimeLeft(totalTime);
  currentSectionIndex = 0;
  document.getElementById("timer").textContent = formatTime(timeLeft);
  // 使用getRealTime函数获取正确的时间显示
  document.getElementById("currentTimeSpan").textContent = getRealTime(0);
  document.getElementById("sectionTimer").style.display = "none";
  updateButtons();
  updateSectionList();
  document.getElementById("currentSection").textContent =
    "考试尚未开始，请点击开始按钮";
  document.querySelector(".countdown-value").textContent = "--";
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("remainingTime").textContent = totalTime / 60;
}

function syncTimeOnManualChange() {
  elapsedBeforeLastStart = totalTime - timeLeft;
  if (isRunning) {
    startTimeStamp = Date.now();
  }
}

function updateButtons() {
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (isRunning) {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  } else {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }

  // 根据考试状态更新开始按钮的文本
  if (timeLeft <= 0) {
    // 考试结束，显示"再次考试"
    startBtn.textContent = "再次考试";
  } else if (!isRunning && totalTime - timeLeft > 0) {
    // 暂停状态，显示"继续考试"
    startBtn.textContent = "继续考试";
  } else {
    // 默认状态，显示"开始考试"
    startBtn.textContent = "开始考试";
  }
}

function handleSectionChange() {
  const selectedValue = Number.parseInt(
    document.getElementById("sectionSelect").value,
    10,
  );
  const targetSection = examSections[selectedValue];
  if (!targetSection) {
    return;
  }

  const targetTime = targetSection.start * 60;
  timeLeft = clampTimeLeft(totalTime - targetTime);
  syncTimeOnManualChange();
  currentSectionIndex = selectedValue;
  updateTimer(true);
  notifySectionSwitch();
}

function skipToSelectedSection() {
  handleSectionChange();
}

// 函数：跳转到下一个环节
function nextSection() {
  // 如果考试尚未开始，先启动考试
  if (!isRunning) {
    startExam();
    return;
  }

  // 如果考试已经结束，重置考试
  if (timeLeft <= 0) {
    resetExam();
    return;
  }

  // 获取当前时间
  const currentTime = totalTime - timeLeft;

  // 查找当前环节
  let activeSectionIndex = 0;
  for (let i = 0; i < examSections.length; i++) {
    if (
      currentTime >= examSections[i].start * 60 &&
      currentTime < examSections[i].end * 60
    ) {
      activeSectionIndex = i;
      break;
    }
  }

  // 如果已经是最后一个环节，重置考试
  if (activeSectionIndex >= examSections.length - 1) {
    resetExam();
    return;
  }

  // 如果不是最后一个环节，则跳转到下一个环节
  const nextSectionIndex = activeSectionIndex + 1;
  const targetSection = examSections[nextSectionIndex];
  if (!targetSection) {
    resetExam();
    return;
  }

  const targetTime = targetSection.start * 60;
  timeLeft = clampTimeLeft(totalTime - targetTime);
  syncTimeOnManualChange();
  currentSectionIndex = nextSectionIndex;
  updateTimer(true);
  notifySectionSwitch();
}


function updateExamConfig(examConfig) {
  // 更新全局变量
  examSections = examConfig.sections;
  totalTime = examConfig.totalTime;
  timeLeft = totalTime;

  // 设置考试开始时间
  const hours = examConfig.examStartTime.hours;
  const minutes = examConfig.examStartTime.minutes;
  examStartTime = new Date();
  examStartTime.setHours(hours, minutes, 0, 0);

  // 重置当前环节索引
  currentSectionIndex = 0;

  // 更新UI
  document.getElementById("examType").textContent = examConfig.name;
  document.getElementById("examTitle").textContent = examConfig.name;
  document.getElementById("examDate").textContent = examConfig.examDate;
  document.getElementById("examTimeRange").textContent =
    examConfig.examTimeRange;

  // Calculate days left
  const targetDateStr =
    examConfig.targetDate ||
    (examConfig.name === "CET-6" ? "2026-06-13T15:00:00" : "2026-06-13T09:00:00");
  const targetDate = new Date(targetDateStr);
  const now = new Date();
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("examCountdown").textContent =
    `距离考试还有 ${diffDays > 0 ? diffDays : 0} 天`;
  document.getElementById("totalTime").textContent = totalTime / 60;
  document.getElementById("remainingTime").textContent = totalTime / 60;
  document.getElementById("timer").textContent = formatTime(timeLeft);

  // 更新当前时间显示
  document.getElementById("currentTimeSpan").textContent =
    `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;

  // 重置考试状态
  resetExam();
  updateSectionOptions();
  updateSectionList();

  // 如果考试正在进行，需要重新启动计时器
  if (isRunning) {
    if (timer) clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
  }

  // 重新加载显示设置，确保复选框状态与当前设置一致
  initializeDisplaySettings();

  console.log(`已更新为${examConfig.name}的配置`);
}

function updateSectionOptions() {
  const select = document.getElementById("sectionSelect");
  select.innerHTML = "";

  examSections.forEach((section, index) => {
    const durationLabel = section.countInTotal === false ? "，不计时" : "";
    select.innerHTML += `<option value="${index}">${section.name} (${section.realTime}${durationLabel})</option>`;
  });
}

// 关闭/显示整个标题区域功能
function toggleHeader() {
  const examHeader = document.getElementById("examTimeHeader");
  const closeHeaderBtn = document.getElementById("closeHeaderBtn");
  const restoreHintSmallScreen = document.getElementById(
    "restoreHintSmallScreen",
  );
  const restoreHintLargeScreen = document.getElementById(
    "restoreHintLargeScreen",
  );
  const toggleButtonSmallScreen = document.getElementById(
    "toggleButtonSmallScreen",
  );
  const toggleExamBtnContainer = document.querySelector(
    ".toggle-exam-button-container",
  );

  if (examHeader.style.display !== "none") {
    // 隐藏标题区域
    examHeader.style.display = "none";
    closeHeaderBtn.style.display = "none"; // 隐藏关闭按钮

    // 根据屏幕宽度显示相应的恢复提示
    if (window.innerWidth > 800) {
      restoreHintLargeScreen.style.display = "block";
    } else {
      restoreHintSmallScreen.style.display = "block";
      toggleButtonSmallScreen.style.display = "block";
    }
  } else {
    // 显示标题区域
    examHeader.style.display = "block";
    closeHeaderBtn.style.display = "flex"; // 显示关闭按钮

    // 隐藏恢复提示
    restoreHintSmallScreen.style.display = "none";
    restoreHintLargeScreen.style.display = "none";
    toggleButtonSmallScreen.style.display = "none";
  }
}

function applySelectedCustomExam() {
  const selectedCustomExam = localStorage.getItem("selectedCustomExam");
  if (!selectedCustomExam) {
    return;
  }

  try {
    applyCustomExamConfig(JSON.parse(selectedCustomExam));
  } catch (e) {
    console.error("解析选择的自定义考试配置失败", e);
  }

  // 清除已应用的配置，避免重复应用
  localStorage.removeItem("selectedCustomExam");
}

if (typeof document !== "undefined" && typeof window !== "undefined") {
// 在页面各预设恢复逻辑完成后，最后应用待选自定义考试
window.addEventListener("load", applySelectedCustomExam);

// 在DOMContentLoaded事件监听器中初始化默认配置
document.addEventListener("DOMContentLoaded", function () {
  initializeGlobals();

  // 为选择框添加change事件监听器
  const sectionSelectElement = document.getElementById("sectionSelect");
  if (sectionSelectElement) {
    sectionSelectElement.addEventListener("change", handleSectionChange);
  }

  // 为关闭标题区域按钮添加点击事件监听器
  const closeHeaderBtn = document.getElementById("closeHeaderBtn");
  if (closeHeaderBtn) {
    closeHeaderBtn.addEventListener("click", toggleHeader);
  }

  // 为恢复提示添加点击事件监听器
  const restoreHintSmallScreen = document.getElementById(
    "restoreHintSmallScreen",
  );
  const restoreHintLargeScreen = document.getElementById(
    "restoreHintLargeScreen",
  );

  if (restoreHintSmallScreen) {
    restoreHintSmallScreen.addEventListener("click", toggleHeader);
  }

  if (restoreHintLargeScreen) {
    restoreHintLargeScreen.addEventListener("click", toggleHeader);
  }

  // 根据屏幕宽度设置初始显示状态
  const toggleButtonSmallScreen = document.getElementById(
    "toggleButtonSmallScreen",
  );
  const customExamButtonSmallScreen = document.getElementById(
    "customExamButtonSmallScreen",
  );
  if (window.innerWidth <= 800) {
    if (customExamButtonSmallScreen) {
      customExamButtonSmallScreen.style.display = "block";
    }
  } else {
    if (customExamButtonSmallScreen) {
      customExamButtonSmallScreen.style.display = "none";
    }
  }

  // 监听窗口大小变化
  window.addEventListener("resize", function () {
    const customExamButtonSmallScreen = document.getElementById(
      "customExamButtonSmallScreen",
    );
    const restoreHintSmallScreen = document.getElementById(
      "restoreHintSmallScreen",
    );

    if (window.innerWidth <= 800) {
      // 小屏幕显示小屏幕按钮
      if (customExamButtonSmallScreen) {
        customExamButtonSmallScreen.style.display = "block";
      }

      // 如果标题区域被隐藏，显示小屏幕恢复提示
      const examHeader = document.getElementById("examTimeHeader");
      if (
        examHeader &&
        examHeader.style.display === "none" &&
        restoreHintSmallScreen
      ) {
        restoreHintSmallScreen.style.display = "block";
      }
    } else {
      // 大屏幕隐藏小屏幕按钮
      if (customExamButtonSmallScreen) {
        customExamButtonSmallScreen.style.display = "none";
      }
      if (restoreHintSmallScreen) {
        restoreHintSmallScreen.style.display = "none";
      }
    }
  });
});
}

// 将分钟偏移格式化为 HH:MM
function formatClockFromMinutes(baseTime, offsetMinutes) {
  const time = new Date(baseTime.getTime() + offsetMinutes * 60 * 1000);
  return `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

// 将自定义考试对象转换为首页使用的无 DOM 依赖环节数组
function buildCustomExamSections(customExam) {
  const sourceSections = Array.isArray(customExam?.sections)
    ? customExam.sections
    : [];
  const startTime =
    typeof customExam?.startTime === "string" ? customExam.startTime : "00:00";
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const baseStartTime = new Date(2000, 0, 1, startHours, startMinutes);
  const convertedSections = [];
  let countedMinutes = 0;

  sourceSections.forEach((section) => {
    const safeSection = section || {};
    const rawDuration = Number(safeSection.duration);
    const duration = Number.isFinite(rawDuration) ? Math.max(0, rawDuration) : 0;
    const countInTotal = safeSection.countInTotal !== false;
    const start = countedMinutes;
    const end = countInTotal ? start + duration : start;
    const realTime =
      `${formatClockFromMinutes(baseStartTime, start)}-` +
      formatClockFromMinutes(baseStartTime, end);

    convertedSections.push({
      name: safeSection.name,
      start: start,
      duration: duration,
      end: end,
      description: safeSection.description,
      realTime: realTime,
      countInTotal: countInTotal,
    });

    countedMinutes = end;
  });

  if (convertedSections.length > 0) {
    const lastSection = convertedSections[convertedSections.length - 1];
    convertedSections.push({
      name: "考试结束",
      start: countedMinutes,
      duration: 0,
      end: countedMinutes,
      description: "考试结束",
      realTime: lastSection.realTime.split("-")[1],
      countInTotal: true,
    });
  }

  return convertedSections;
}

// 应用自定义考试配置
function applyCustomExamConfig(customExam) {
  const customSections = buildCustomExamSections(customExam);
  const totalMinutes =
    customSections.length > 0
      ? customSections[customSections.length - 1].end
      : Math.max(0, Number(customExam.totalMinutes) || 0);

  // 更新全局变量
  currentExamType = "custom";
  examSections = customSections;
  totalTime = totalMinutes * 60;
  timeLeft = clampTimeLeft(totalTime);

  // 设置考试开始时间
  const [hours, minutes] = customExam.startTime.split(":").map(Number);
  examStartTime = new Date();
  examStartTime.setHours(hours, minutes, 0, 0);

  // 更新UI
  document.getElementById("examType").textContent = customExam.name;
  document.getElementById("examTitle").textContent = customExam.name;
  document.getElementById("examDate").textContent = formatDate(customExam.date);
  document.getElementById("examTimeRange").textContent =
    `${customExam.startTime} - ${calculateEndTime(customExam.startTime, totalMinutes)}`;
  document.getElementById("totalTime").textContent = totalMinutes;
  document.getElementById("remainingTime").textContent = totalMinutes;
  document.getElementById("timer").textContent = formatTime(timeLeft);
  document.getElementById("currentTimeSpan").textContent =
    `${customExam.startTime}:00`;

  // 重置考试状态
  resetExam();
  updateSectionOptions();
  updateSectionList();

  // 更新天数倒计时
  if (customExam.date) {
    const targetDate = new Date(customExam.date);
    const now = new Date();
    if (customExam.startTime) {
      const [startH, startM] = customExam.startTime.split(":").map(Number);
      targetDate.setHours(startH, startM, 0, 0);
    }
    const diffTime = targetDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("examCountdown").textContent =
      `距离考试还有 ${diffDays > 0 ? diffDays : 0} 天`;
  } else {
    document.getElementById("examCountdown").textContent = "距离考试还有 0 天";
  }

  // 如果有自定义的显示设置，则应用它们
  if (customExam.displaySettings) {
    applyDisplaySettings(customExam.displaySettings);
  }

  // 更新切换按钮文本 - 不再需要，因为按钮已移除
  console.log(`已应用自定义考试"${customExam.name}"的配置`);
}

// 格式化日期显示
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 判断上午还是下午
  const hour = date.getHours();
  const period = hour < 12 ? "上午" : "下午";

  return `${year}年${month}月${day}日${period}`;
}

// 计算结束时间（处理跨日期的情况）
function calculateEndTime(startTime, durationMinutes) {
  const [hours, minutes] = startTime.split(":").map(Number);
  const endTime = new Date(2000, 0, 1, hours, minutes);

  // 如果开始时间加上持续时间超过了24小时，则需要处理跨日期的情况
  endTime.setMinutes(endTime.getMinutes() + durationMinutes);

  const timeStr = `${endTime.getHours().toString().padStart(2, "0")}:${endTime.getMinutes().toString().padStart(2, "0")}`;
  const isNextDay = endTime.getDate() > 1 || endTime.getHours() < hours;
  return isNextDay ? `${timeStr} (次日)` : timeStr;
}

// 显示设置相关功能
// 添加显示设置的全局变量
let showCurrentTime = true;
let showCountdownTimer = true;
let showSectionTimer = true;
let showSectionSwitchReminder = true;
let sectionSwitchAudioContext = null;
let sectionSwitchFlashTimer = null;

function ensureSectionSwitchAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  try {
    if (!sectionSwitchAudioContext) {
      sectionSwitchAudioContext = new AudioContextClass();
    }

    if (sectionSwitchAudioContext.state === "suspended") {
      const resumeResult = sectionSwitchAudioContext.resume();
      if (resumeResult && typeof resumeResult.catch === "function") {
        resumeResult.catch(() => {});
      }
    }
  } catch (e) {
    return null;
  }

  return sectionSwitchAudioContext;
}

function unlockSectionSwitchAudio() {
  if (!showSectionSwitchReminder) {
    return;
  }
  ensureSectionSwitchAudioContext();
}

function playSectionSwitchSound() {
  if (!showSectionSwitchReminder || !sectionSwitchAudioContext) {
    return;
  }

  const playTone = () => {
    const oscillator = sectionSwitchAudioContext.createOscillator();
    const gain = sectionSwitchAudioContext.createGain();
    const now = sectionSwitchAudioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    oscillator.connect(gain);
    gain.connect(sectionSwitchAudioContext.destination);
    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gain.disconnect();
    });
    oscillator.start(now);
    oscillator.stop(now + 0.27);
  };

  try {
    if (sectionSwitchAudioContext.state === "suspended") {
      sectionSwitchAudioContext
        .resume()
        .then(playTone)
        .catch(() => {});
    } else {
      playTone();
    }
  } catch (e) {
    // Audio is an enhancement; a failed play must not interrupt the exam flow.
  }
}

function showSectionSwitchVisualCue() {
  if (!showSectionSwitchReminder) {
    return;
  }

  const currentSectionElement = document.getElementById("currentSection");
  if (!currentSectionElement) {
    return;
  }

  clearTimeout(sectionSwitchFlashTimer);
  currentSectionElement.classList.remove("section-switch-flash");
  void currentSectionElement.offsetWidth;
  currentSectionElement.classList.add("section-switch-flash");
  sectionSwitchFlashTimer = setTimeout(() => {
    currentSectionElement.classList.remove("section-switch-flash");
  }, 1600);
}

function clearSectionSwitchVisualCue() {
  clearTimeout(sectionSwitchFlashTimer);
  sectionSwitchFlashTimer = null;
  const currentSectionElement = document.getElementById("currentSection");
  if (currentSectionElement) {
    currentSectionElement.classList.remove("section-switch-flash");
  }
}

function notifySectionSwitch() {
  if (!showSectionSwitchReminder) {
    return;
  }
  playSectionSwitchSound();
  showSectionSwitchVisualCue();
}

if (typeof document !== "undefined") {
  document.addEventListener("pointerdown", unlockSectionSwitchAudio, {
    once: true,
  });
  document.addEventListener("keydown", unlockSectionSwitchAudio, {
    once: true,
  });
}

// 初始化显示设置
function initializeDisplaySettings() {
  // 从localStorage加载设置
  const savedSettings = localStorage.getItem("displaySettings");
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings);
      showCurrentTime =
        settings.showCurrentTime !== undefined
          ? settings.showCurrentTime
          : true;
      showCountdownTimer =
        settings.showCountdownTimer !== undefined
          ? settings.showCountdownTimer
          : true;
      showSectionTimer =
        settings.showSectionTimer !== undefined
          ? settings.showSectionTimer
          : true;
      showSectionSwitchReminder =
        settings.showSectionSwitchReminder !== undefined
          ? settings.showSectionSwitchReminder
          : true;
    } catch (e) {
      console.error("解析显示设置失败，恢复默认值", e);
      showCurrentTime = true;
      showCountdownTimer = true;
      showSectionTimer = true;
      showSectionSwitchReminder = true;
    }
  } else {
    // 默认设置
    showCurrentTime = true;
    showCountdownTimer = true;
    showSectionTimer = true;
    showSectionSwitchReminder = true;
  }

  // 更新UI和复选框状态
  updateDisplaySettings();
}

// 应用特定的显示设置
function applyDisplaySettings(displaySettings) {
  // 更新全局变量
  showCurrentTime =
    displaySettings.showCurrentTime !== undefined
      ? displaySettings.showCurrentTime
      : true;
  showCountdownTimer =
    displaySettings.showCountdownTimer !== undefined
      ? displaySettings.showCountdownTimer
      : true;
  showSectionTimer =
    displaySettings.showSectionTimer !== undefined
      ? displaySettings.showSectionTimer
      : true;
  showSectionSwitchReminder =
    displaySettings.showSectionSwitchReminder !== undefined
      ? displaySettings.showSectionSwitchReminder
      : showSectionSwitchReminder;

  // 保存设置到localStorage
  const settings = {
    showCurrentTime,
    showCountdownTimer,
    showSectionTimer,
    showSectionSwitchReminder,
  };
  localStorage.setItem("displaySettings", JSON.stringify(settings));

  // 更新UI
  updateDisplaySettings();
}

// 切换显示设置
function toggleDisplaySetting(settingName, value) {
  // 更新变量
  switch (settingName) {
    case "showCurrentTime":
      showCurrentTime = value;
      break;
    case "showCountdownTimer":
      showCountdownTimer = value;
      break;
    case "showSectionTimer":
      showSectionTimer = value;
      break;
    case "showSectionSwitchReminder":
      showSectionSwitchReminder = value;
      if (value) {
        unlockSectionSwitchAudio();
      } else {
        clearSectionSwitchVisualCue();
      }
      break;
  }

  // 保存设置到localStorage
  const settings = {
    showCurrentTime,
    showCountdownTimer,
    showSectionTimer,
    showSectionSwitchReminder,
  };
  localStorage.setItem("displaySettings", JSON.stringify(settings));

  // 更新UI
  updateDisplaySettings();
}

// 重置显示设置为默认值
function resetDisplaySettings() {
  // 检查当前是否选择了自定义考试，并且它有自定义显示设置
  const selectedCustomExam = localStorage.getItem("selectedCustomExam");
  if (selectedCustomExam) {
    try {
      const exam = JSON.parse(selectedCustomExam);
      if (exam.displaySettings) {
        applyDisplaySettings(exam.displaySettings);
        return;
      }
    } catch (e) {
      console.error("解析选中自定义考试的显示设置失败", e);
    }
  }

  // 如果当前是官方预设或自定义考试没有显示设置，则恢复为全部显示
  applyDisplaySettings({
    showCurrentTime: true,
    showCountdownTimer: true,
    showSectionTimer: true,
    showSectionSwitchReminder: true,
  });
}

// 更新显示设置的UI
function updateDisplaySettings() {
  // 更新复选框状态
  const currentTimeCheckbox = document.getElementById("inlineShowCurrentTime");
  const countdownTimerCheckbox = document.getElementById(
    "inlineShowCountdownTimer",
  );
  const sectionTimerCheckbox = document.getElementById(
    "inlineShowSectionTimer",
  );
  const sectionSwitchReminderCheckbox = document.getElementById(
    "inlineShowSectionSwitchReminder",
  );

  if (currentTimeCheckbox) currentTimeCheckbox.checked = showCurrentTime;
  if (countdownTimerCheckbox)
    countdownTimerCheckbox.checked = showCountdownTimer;
  if (sectionTimerCheckbox) sectionTimerCheckbox.checked = showSectionTimer;
  if (sectionSwitchReminderCheckbox) {
    sectionSwitchReminderCheckbox.checked = showSectionSwitchReminder;
  }

  // 控制元素显示/隐藏
  const currentTimeSpan = document.getElementById("currentTimeSpan");
  const timerDisplay = document.querySelector(".timer-display");
  const sectionTimerDisplay = document.getElementById("sectionTimer");

  if (currentTimeSpan) {
    const realTimeDisplay = document.querySelector(".real-time-display");
    if (realTimeDisplay) {
      realTimeDisplay.style.display = showCurrentTime ? "block" : "none";
    }
  }

  if (timerDisplay) {
    timerDisplay.style.display = showCountdownTimer ? "block" : "none";
  }

  if (sectionTimerDisplay) {
    // 根据用户设置和当前考试状态决定显示
    if (showSectionTimer) {
      // 如果用户希望显示，我们只改变它的CSS display属性而不影响其原本的显示状态
      sectionTimerDisplay.style.display = ""; // 重置为默认值
    } else {
      // 如果用户不希望显示，则强制隐藏
      sectionTimerDisplay.style.display = "none";
    }
  }

  // 特别处理本环节倒计时的内部元素
  if (sectionTimerDisplay && !showSectionTimer) {
    // 如果用户不希望显示本环节倒计时，则隐藏内部元素
    const timeValue = sectionTimerDisplay.querySelector(".time-value");
    if (timeValue) {
      timeValue.style.display = "none";
    }
  } else if (sectionTimerDisplay && showSectionTimer) {
    const timeValue = sectionTimerDisplay.querySelector(".time-value");
    if (timeValue) {
      timeValue.style.display = "";
    }
  }
}

// 在DOM加载完成后初始化显示设置
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    initializeDisplaySettings();
  });
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    formatTime,
    clampTimeLeft,
    calculateEndTime,
    buildCustomExamSections,
  };
}
