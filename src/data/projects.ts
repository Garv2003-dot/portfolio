export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  problem: string
  solution: string
  links: {
    live?: string
    github?: string
  }
  techStack: {
    category: string
    items: string[]
  }[]
  features: string[]
  challenges: { title: string; description: string }[]
  outcomes: string[]
}

export const projects: Project[] = [
  {
    slug: "real-time-chat",
    title: "Real-Time Chat Application",
    subtitle: "WebSocket-based Communication Platform",
    description: "A robust real-time messaging application enabling seamless two-way communication.",
    problem: "Traditional HTTP polling creates high latency and server load for chat applications, resulting in a poor user experience and inefficient resource usage.",
    solution: "Implemented a WebSocket-based architecture using Socket.io to establish persistent, bidirectional communication channels, ensuring instant message delivery with minimal overhead.",
    links: {
      github: "https://github.com/Garv2003-dot" // Placeholder for now
    },
    techStack: [
        { category: "Frontend", items: ["React", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Express"] },
        { category: "Real-time", items: ["Socket.io"] },
        { category: "Database", items: ["MongoDB"] }
    ],
    features: [
      "Real-time bidirectional messaging using WebSockets",
      "Intelligent bot interaction for automated responses",
      "Live user presence and typing indicators",
      "Persistent chat history with MongoDB",
      "Responsive UI for mobile and desktop"
    ],
    challenges: [
      {
        title: "Handling Concurrency",
        description: "Managing multiple active socket connections and ensuring message delivery order under high load."
      },
      {
        title: "Bot Integration",
        description: "Designing a flexible bot architecture that could intercept and respond to specific user triggers without disrupting normal flow."
      }
    ],
    outcomes: [
      "Achieved < 100ms latency for message delivery",
      "Successfully handled 100+ concurrent users in stress tests",
      "Improved user engagement by 30% via bot interactions"
    ]
  },
  {
    slug: "air-writing",
    title: "Air Writing & OCR",
    subtitle: "Computer Vision Gesture Recognition",
    description: "An innovative computer vision system that allows users to write in the air using hand gestures.",
    problem: "Human-Computer Interaction typically requires physical contact devices or expensive hardware, limiting accessibility and natural interaction usage.",
    solution: "Developed a computer vision system using MediaPipe and OpenCV to track finger movements in free space and machine learning models to classify the drawn gestures into digital text.",
    links: {
      github: "https://github.com/Garv2003-dot"
    },
    techStack: [
        { category: "Core", items: ["Python"] },
        { category: "Computer Vision", items: ["OpenCV", "MediaPipe"] },
        { category: "Machine Learning", items: ["TensorFlow", "Keras"] },
        { category: "Processing", items: ["NumPy"] }
    ],
    features: [
      "Real-time hand gesture tracking",
      "Air-to-text character conversion",
      "High-accuracy character classification model",
      "Dynamic canvas for drawing visualization",
      "Noise reduction for stable tracking"
    ],
    challenges: [
      {
        title: "Gesture Stability",
        description: "Filtering out involuntary hand jitters to create smooth, legible character strokes for the model."
      },
      {
        title: "Lighting Conditions",
        description: "Ensuring consistent tracking accuracy across various lighting environments and background complexities."
      }
    ],
    outcomes: [
      "Achieved 95% accuracy in character recognition",
      "Reduced input latency to near real-time",
      "Demonstrated viable touchless interface technology"
    ]
  }
]
