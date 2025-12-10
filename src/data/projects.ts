export interface Project {
  slug: string
  title: string
  subtitle: string
  description: string
  techStack: string[]
  features: string[]
  challenges: { title: string; description: string }[]
  outcomes: string[]
}

export const projects: Project[] = [
  {
    slug: "real-time-chat",
    title: "Real-Time Chat Application",
    subtitle: "WebSocket-based Communication Platform",
    description: "A robust real-time messaging application enabling seamless two-way communication. Features include instant message delivery, user presence indicators, and intelligent bot interactions to enhance user engagement.",
    techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
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
    description: "An innovative computer vision system that allows users to write in the air using hand gestures. The system tracks finger movements and uses machine learning models to classify and convert drawn characters into digital text.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy"],
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
