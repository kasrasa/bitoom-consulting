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

export const caseStudies = [
  {
    slug: "machine-vision-inspection",
    type: "Case study · Industrial AI",
    title: "AI Inspection for High-Throughput Manufacturing",
    summary: "Modernized difficult inspection problems by combining cameras, optics, lighting, deterministic vision and learned models for OCR, detection and classification.",
    clientValue: "Bitoom can help evaluate, design and deploy inspection systems when rule-based vision is becoming brittle or difficult to maintain.",
    metric: "10–120 ppm",
    metricLabel: "inspection throughput",
    tags: ["Automated Inspection", "OCR", "Deep Learning", "System Integration"],
  },
  {
    slug: "multi-camera-vision",
    type: "Case study · Vision systems",
    title: "Production Multi-Camera Vision Systems",
    summary: "Designed synchronized high-resolution image acquisition around concurrent I/O, telemetry and production reliability instead of treating the camera layer as an afterthought.",
    clientValue: "Bitoom can help solve dropped frames, synchronization issues, edge-compute bottlenecks and camera-system reliability problems.",
    metric: "60% → 20%",
    metricLabel: "CPU utilization in testing",
    tags: ["Camera Integration", "Edge Systems", "Concurrency", "Observability"],
  },
  {
    slug: "self-supervised-vision",
    type: "Case study · Data-efficient AI",
    title: "Industrial AI with Limited Labeled Data",
    summary: "Evaluated self-supervised representation learning for industrial imagery where large labeled datasets were not practical, using VICReg, SimSiam and distributed experimentation.",
    clientValue: "Bitoom can help turn unlabeled image archives into useful embeddings for retrieval, similarity search, downstream learning and reduced labeling effort.",
    metric: "67%",
    metricLabel: "KNN benchmark",
    tags: ["Self-Supervised Learning", "Visual Embeddings", "PyTorch", "Model Evaluation"],
  },
  {
    slug: "ml-experimentation-platform",
    type: "Case study · ML systems",
    title: "Scalable ML Experimentation for Vision Teams",
    summary: "Built reproducible containerized training workflows with distributed experimentation and cloud GPU infrastructure so model development was not tied to one machine or one developer.",
    clientValue: "Bitoom can help teams move from research scripts to repeatable training, evaluation, GPU orchestration and production-minded ML workflows.",
    metric: "R&D → Scale",
    metricLabel: "reproducible ML workflows",
    tags: ["MLOps", "Distributed Training", "AWS", "Kubernetes"],
  },
  {
    slug: "single-shot-3d",
    type: "Case study · 3D vision",
    title: "Fast 3D Vision & Reconstruction",
    summary: "Developed a single-shot structured-light reconstruction pipeline using calibration, Radon transforms, geometric correspondence and RANSAC-based outlier handling.",
    clientValue: "Bitoom can help with calibration, geometric vision, measurement systems and hybrid classical/AI solutions where deep learning is not the whole answer.",
    metric: "2–3 min → ~10 sec",
    metricLabel: "processing time",
    tags: ["3D Vision", "Calibration", "Geometry", "Signal Processing"],
  },
];

export const labs = [
  {
    slug: "ros2-perception-pipeline",
    type: "Bitoom Lab · Robotics",
    title: "Robotics Perception & Sensor Synchronization",
    summary: "A ROS2 prototype that aligns camera images with robot joint state and PLC state, publishes synchronization-quality metrics, and coordinates robot motion through action-based task execution.",
    clientValue: "Relevant to robotic inspection, camera-to-robot synchronization, PLC integration and perception-driven automation.",
    metric: "ROS2",
    metricLabel: "camera + robot + PLC",
    tags: ["ROS2", "Robotics", "Sensor Sync", "PLC Integration"],
    github: "https://github.com/kasrasa/ROS2-Pipeline",
  },
  {
    slug: "vision-guided-pick-place",
    type: "Bitoom Lab · Automation",
    title: "Rapid Vision Prototyping for Robotic Pick & Place",
    summary: "Used transfer learning with YOLOv8m on a small custom dataset to detect bottles for an automation-line pick-and-place concept, then tested the detector on unseen images and prepared PyTorch and ONNX deployment formats.",
    clientValue: "Shows how Bitoom can rapidly test whether a custom object-detection idea is viable before a client commits to a large data-collection effort.",
    metric: "~40 images",
    metricLabel: "prototype training set",
    tags: ["Object Detection", "YOLO", "Robotics", "ONNX"],
    github: "https://github.com/kasrasa/Industrial-projects",
  },
  {
    slug: "vlm-uncertainty-routing",
    type: "Bitoom Lab · Multimodal AI",
    title: "Efficient Multimodal Vision Architectures",
    summary: "Compared specialist image classifiers with vision-language models and explored uncertainty-based routing so stronger multimodal models are used only where they add value.",
    clientValue: "Relevant to teams evaluating VLM adoption, model routing and accuracy-versus-latency trade-offs instead of defaulting to the largest model everywhere.",
    metric: "87.5% → 91.3%",
    metricLabel: "Food101 accuracy",
    tags: ["VLMs", "Vision Transformers", "Model Routing", "AI Prototyping"],
  },
  {
    slug: "structure-optimizer",
    type: "Bitoom Lab · Engineering software",
    title: "Engineering Workflow & Decision Automation",
    summary: "Converted domain-heavy structural calculations into modular Python software covering input validation, uplift loads, wall and roof calculations, automated design paths, structured outputs and tests.",
    clientValue: "Relevant to teams replacing spreadsheets and repetitive engineering calculations with maintainable internal software and optimization tools.",
    metric: "Tested",
    metricLabel: "modular engineering workflow",
    tags: ["Engineering Automation", "Python", "Optimization", "Testing"],
    github: "https://github.com/kasrasa/Structure-Optimizer",
  },
  {
    slug: "guardrailed-ai-agent",
    type: "Bitoom Lab · Agentic AI",
    title: "Guardrailed AI Agents for Internal Workflows",
    summary: "Explored a tool-using AI agent with structured safety checks, generated-content validation and controlled file-writing actions using the OpenAI Agents SDK.",
    clientValue: "Relevant to internal assistants and workflow agents that need controlled tool access instead of unrestricted chatbot behavior.",
    metric: "Tools + guardrails",
    metricLabel: "agent workflow prototype",
    tags: ["AI Agents", "Tool Calling", "Guardrails", "Workflow Automation"],
    github: "https://github.com/kasrasa/FileAssistantAgent",
  },
  {
    slug: "computer-vision-methods",
    type: "Bitoom Lab · Computer vision",
    title: "Computer Vision Methods Bench",
    summary: "A collection of practical experiments across OpenCV, image processing, OCR, text detection and object-detection methods designed to keep model selection grounded in the actual problem.",
    clientValue: "Relevant when the best production solution is a hybrid of deterministic image processing, OCR and learned models rather than a single end-to-end network.",
    metric: "Hybrid CV",
    metricLabel: "classical + learned methods",
    tags: ["OpenCV", "OCR", "Image Processing", "Detection"],
    github: "https://github.com/kasrasa/image_processing_experiments",
  },
];

// Backward-compatible combined export for any components that still consume `projects`.
export const projects = [...caseStudies, ...labs];

export const experience = [
  {
    period: "2024 — now",
    company: "Siemens Canada",
    role: "Computer Vision Developer",
    line: "Built production-oriented vision infrastructure, data-efficient representation learning and scalable ML experimentation workflows for industrial AI systems.",
  },
  {
    period: "2022 — 2024",
    company: "ATS Automation",
    role: "Computer Vision Developer",
    line: "Delivered end-to-end machine vision for pharmaceutical and industrial automation, spanning cameras, optics, OCR, deep-learning inspection and FAT/SAT integration.",
  },
  {
    period: "2021 — 2022",
    company: "Christie Digital Systems",
    role: "Computer Vision Developer · Internship",
    line: "Developed geometric computer-vision and structured-light reconstruction methods that reduced a 3D processing workflow from minutes to seconds.",
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
