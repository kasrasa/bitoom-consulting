export const site = {
  brand: "Bitoom Consulting",
  shortBrand: "Bitoom",
  founder: "Kasra Sadatsharifi",
  role: "AI / ML Engineer · Computer Vision Specialist",
  location: "Ontario, Canada · Remote friendly",
  github: "https://github.com/kasrasa",
  linkedin: "https://www.linkedin.com/in/kasra-sadatsharifi/",
  // Replace after the domain + mailbox are created.
  email: "hello@bitoomconsulting.com",
};

export const services = [
  {
    index: "01",
    title: "Computer Vision & Visual AI",
    text: "Detection, classification, OCR, segmentation, multimodal vision and practical model evaluation for real-world imagery.",
    tags: ["PyTorch", "OpenCV", "VLMs", "ViT", "OCR"],
  },
  {
    index: "02",
    title: "Machine Vision Systems",
    text: "Camera, optics and software architecture for reliable inspection systems that have to survive actual production conditions.",
    tags: ["Cameras", "Calibration", "Concurrency", "Edge AI"],
  },
  {
    index: "03",
    title: "ML Systems & MLOps",
    text: "Reproducible training, distributed experimentation, containerization, deployment and telemetry from prototype to production.",
    tags: ["AWS", "EKS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    index: "04",
    title: "Applied AI R&D",
    text: "Fast technical exploration when the solution is not obvious: benchmark alternatives, expose failure modes and turn research into a buildable plan.",
    tags: ["SSL", "VICReg", "Research", "Prototyping"],
  },
];

export const projects = [
  {
    slug: "vlm-uncertainty-routing",
    type: "Applied research · 2026",
    title: "Uncertainty-routed Vision-Language Models",
    summary: "Compared modern image classifiers with zero-shot VLMs, then used uncertainty to selectively route hard samples to a VLM reranker.",
    metric: "87.5% → 91.3%",
    metricLabel: "Food101 accuracy",
    tags: ["ViT", "ConvNeXt", "VLM", "PyTorch"],
    github: "https://github.com/kasrasa/ViT-VLM-experiments",
  },
  {
    slug: "multi-camera-vision",
    type: "Production engineering",
    title: "High-throughput Multi-Camera Vision",
    summary: "Architected synchronized 20MP image capture with concurrent I/O, telemetry and a production-focused failure model.",
    metric: "60% → 20%",
    metricLabel: "CPU load in testing",
    tags: ["Python", "Cameras", "Prometheus", "Grafana"],
  },
  {
    slug: "self-supervised-vision",
    type: "Representation learning",
    title: "Self-Supervised Visual Representation Learning",
    summary: "Evaluated and adapted non-contrastive representation learning approaches for unlabeled industrial imagery with multi-GPU training.",
    metric: "67%",
    metricLabel: "KNN benchmark",
    tags: ["VICReg", "SimSiam", "Lightning", "DDP"],
  },
  {
    slug: "single-shot-3d",
    type: "3D vision",
    title: "Single-Shot 3D Reconstruction",
    summary: "Built a structured-light reconstruction pipeline using classical vision techniques including Radon transform and RANSAC.",
    metric: "~10 sec",
    metricLabel: "from 2–3 min",
    tags: ["3D Vision", "RANSAC", "Calibration", "Signal Processing"],
  },
  {
    slug: "machine-vision-inspection",
    type: "Industrial machine vision",
    title: "AI Inspection for Manufacturing",
    summary: "Designed vision systems combining cameras, optics, lighting and deep-learning inspection for demanding production lines.",
    metric: "10–120 ppm",
    metricLabel: "inspection throughput",
    tags: ["Detection", "OCR", "Classification", "FAT/SAT"],
  },
  {
    slug: "structure-optimizer",
    type: "Open-source engineering tool",
    title: "Structure Optimizer",
    summary: "Python tooling for structural calculations, wind-load analysis and cost-aware assembly optimization with a testable modular architecture.",
    metric: "Python + UI",
    metricLabel: "engineering automation",
    tags: ["Python", "Optimization", "Testing", "Streamlit"],
    github: "https://github.com/kasrasa/Structure-Optimizer",
  },
];

export const experience = [
  {
    period: "2024 — now",
    company: "Siemens Canada",
    role: "Computer Vision Developer",
    line: "Industrial CV systems, representation learning, distributed training and production MLOps.",
  },
  {
    period: "2022 — 2024",
    company: "ATS Automation",
    role: "Computer Vision Developer",
    line: "End-to-end machine vision architecture for pharmaceutical manufacturing and AI-based inspection.",
  },
  {
    period: "2021 — 2022",
    company: "Christie Digital Systems",
    role: "Computer Vision Developer · Internship",
    line: "Single-shot structured-light 3D reconstruction and geometric computer vision.",
  },
];

export const notes = [
  {
    slug: "vlms-when-confidence-is-not-enough",
    date: "2026.08",
    kind: "Lab note",
    title: "VLMs: useful when confidence is not enough",
    excerpt: "A practical pattern for routing uncertain classifier predictions to a more flexible vision-language model instead of paying the VLM cost on every sample.",
    body: [
      "The interesting part of multimodal systems is often not choosing one model. It is deciding when each model should be trusted.",
      "A lightweight classifier can handle the easy majority of a dataset. Uncertain samples can then be escalated to a more capable model, allowing a system to trade compute for accuracy where it matters most.",
      "This is the kind of architecture I like exploring at Bitoom: benchmark the components independently, understand their failure modes, then design the system around those failures rather than around a single headline metric.",
    ],
  },
  {
    slug: "object-detection-from-cnn-to-transformers",
    date: "2026.07",
    kind: "Build log",
    title: "Object detection: from CNNs to transformers",
    excerpt: "A living implementation notebook comparing generations of object detectors and the engineering trade-offs behind them.",
    body: [
      "Object detection has changed dramatically, but older architectures remain useful reference points because they expose the trade-offs that newer models try to solve.",
      "My public object-detection experiments are organized as a learning and benchmarking track across older detector families and newer transformer-based approaches.",
      "The goal is not to crown one architecture. It is to make model selection more deliberate: data size, latency, deployment target, label quality and failure cost all matter.",
    ],
  },
  {
    slug: "traditional-cv-still-matters",
    date: "2026.06",
    kind: "Field note",
    title: "Traditional CV still matters",
    excerpt: "Why OpenCV, geometry and signal processing still belong in modern AI systems — especially around calibration, quality control and deterministic preprocessing.",
    body: [
      "Deep learning is powerful, but many vision systems fail outside the model: bad optics, unstable exposure, geometry, timing or a poorly designed preprocessing chain.",
      "Classical image processing gives us deterministic tools for measuring, transforming and validating the input before a learned model ever sees it.",
      "In production systems, the strongest architecture is often hybrid: use deterministic vision where the physics is known and learned models where the variability is hard to encode manually.",
    ],
  },
];
