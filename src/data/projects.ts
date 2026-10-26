export interface Project {
  /** Project title as displayed on the card. */
  title: string;
  /** One or two sentences describing what the project does and how. */
  description: string;
  /** Technologies, frameworks, and tools used. */
  technologies: string[];
  /** Optional link to the source repository. Leave undefined until the URL exists. */
  repoUrl?: string;
  /** Optional link to a live demo. Leave undefined until the URL exists. */
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'GraphRAG Explorer (Erika AI Tutor)',
    description:
      'An end-to-end GraphRAG system that transforms unstructured documents into a knowledge graph using LLM-based entity and relationship extraction. Uses hierarchical retrieval, Louvain community detection, and local LLM inference for context-aware question answering.',
    technologies: [
      'Python',
      'FastAPI',
      'Neo4j',
      'Ollama',
      'Gemma',
      'Streamlit',
      'Docker',
    ],
  },
  {
    title: 'Transformer Model Scaling for SVG',
    description:
      'Research exploring the scaling behavior of Transformer models trained to generate SVG code. Investigates relationships between model size, dataset size, compute budget, and model performance.',
    technologies: ['PyTorch', 'Transformers', 'Python', 'CUDA'],
  },
  {
    title: 'KNOXRT — Real-Time Threat Detection',
    description:
      'A streaming intrusion-detection system combining Kafka and PyFlink with hybrid deep learning architectures and ensemble classifiers. Includes online model retraining and a PostgreSQL-backed prediction pipeline.',
    technologies: [
      'Python',
      'Apache Kafka',
      'PyFlink',
      'CNN',
      'LSTM',
      'GRU',
      'Docker',
      'PostgreSQL',
    ],
  },
];
