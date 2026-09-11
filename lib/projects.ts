export const projects = {
  'technical-project-mini-git': {
    title: 'Mini-Git',
    category: 'SOFTWARE ENGINEERING / JAVA',
    subtitle:
      'Understanding version control by building it from the inside out.',
    image: 'mini-git.png',
    alt: 'Mini-Git project artwork',
    context: 'Data Structures & Algorithms · University of Washington',
    tools: 'Java · Linked lists · File I/O',
    role: 'Individual course project.',
    sections: [
      {
        title: 'The question',
        text: 'What happens when a developer saves a commit, reads a history, or returns to an earlier version? I built a simplified local version-control system to make those operations tangible.',
      },
      {
        title: 'How it was built',
        text: 'The implementation used Java classes to represent commits, repositories, and tracked files. Linked lists organized commit histories and restore points; file I/O saved and reloaded versioned files locally.',
        points: [
          'Commit history: linked-list traversal to reach earlier versions.',
          'Domain model: custom classes for commits, repositories, and files.',
          'Persistence: local file reads and writes.',
          'Interface: a command line simulating init, add, commit, checkout, and log.',
        ],
      },
      {
        title: 'The workflow',
        text: 'Create a local repository, track file changes, store commits, inspect the history, and return to a previous version. Logs include timestamps and version notes so the history can be read as a sequence of changes.',
      },
      {
        title: 'What I learned',
        text: 'Building the system strengthened my understanding of persistence and the data structures behind version control. It also connected implementation choices to developer experience: the way history is stored affects how people navigate and understand it.',
      },
      {
        title: 'Scope',
        text: 'Mini-Git is a simplified educational implementation inspired by Git. It is not a replacement for Git. The portfolio does not include a published repository, benchmark results, or a test report for this project.',
      },
    ],
  },
  'swe-graphics-posters-branding': {
    title: 'Designing for connection',
    category: 'VISUAL DESIGN / SOCIETY OF WOMEN ENGINEERS',
    subtitle:
      'A visual invitation to show up, meet people, and be part of SWE.',
    image: 'swe.png',
    alt: 'SWE event artwork',
    context: 'Society of Women Engineers · University of Washington',
    tools: 'Canva · CustomInk',
    role: 'Event graphics, posters, newsletters, and executive-team merchandise.',
    sections: [
      {
        title: 'One community, several formats',
        text: 'This collection brings together work for SWE’s Instagram, campus events, weekly newsletters, and executive team. Each format presents event information and community identity in a different space.',
      },
      {
        title: 'Event graphics',
        text: 'Promotional work includes the September 2025 Bracelets and Boba Dawg Daze welcome event and the October 2025 Graduate School Survival Kit panel and networking event.',
      },
      {
        title: 'Posters & newsletters',
        text: 'The collection includes the February 2025 general meeting poster with the National Society of Black Engineers, plus the April and May 2025 SWE newsletter layouts.',
      },
      {
        title: 'Beyond the screen',
        text: 'The September 2025 executive-team polo extends the work into merchandise, using Canva and CustomInk.',
      },
    ],
  },
} as const;
