export const projects = {
  'uw-dining-app-ux-case-study': {
    title: 'Husky Bites',
    category: 'UX RESEARCH / PRODUCT DESIGN',
    subtitle: 'A student budget shouldn’t make finding a good meal harder.',
    image: 'husky-bites.png',
    alt: 'Husky Bites dining app project artwork',
    context: 'Design Methods · University of Washington',
    tools: 'Figma · Google Forms · Google Docs',
    role: 'Team project with Medini Jayaram, Saltanat Begalieva, Raghav Sharma, and Gurleen Samra.',
    sections: [
      {
        title: 'The problem',
        text: 'UW students balance food costs, dietary needs, and limited time. Our team explored how to help them compare affordable, nutritious dining options on and around campus.',
      },
      {
        title: 'Start with how students actually eat',
        text: 'We reviewed literature on student food insecurity and meal planning, then interviewed two UW students: one living on campus and one off campus. Convenience and affordability drove their decisions, even when they wanted to eat more healthfully.',
        points: [
          'Meal value and ingredient information were difficult to compare.',
          'Students wanted quick, clear choices that fit their needs.',
          'On-campus and off-campus routines led to different priorities.',
        ],
      },
      {
        title: 'From 15+ ideas to one focused flow',
        text: 'We explored meal planners, recipe sharing, dietary-specific food trucks, and dining plan analyzers. We chose map-based discovery with dietary filters, a budget slider, student reviews, and distance information.',
        points: [
          'Choose dietary preferences and a budget.',
          'Compare nearby options on a map.',
          'Check ratings, reviews, and travel time.',
        ],
      },
      {
        title: 'Prototype the decision, then test it',
        text: 'The first low-fidelity Figma prototype demonstrated a limited path: vegan options within a $10–15 budget. It communicated the core filtering and discovery logic without supporting every possible combination. An analytical evaluation led to clearer selection feedback and navigation.',
      },
      {
        title: 'What three usability tests changed',
        text: 'Three UW students tested tasks involving gluten-free lunch options and navigating to a food location. Their feedback exposed friction that our initial flow had missed.',
        points: [
          'Repeated “Next” clicks made filtering tedious → remove the extra step after each filter.',
          'Some filters appeared incorrectly in summaries → clarify selections and progress feedback.',
          'Students wanted location context → improve map and ETA information, and consider a live location marker.',
          'Ratings were useful, but the interface felt plain → refine the visual hierarchy and palette.',
        ],
      },
      {
        title: 'What I took away',
        text: 'This project connected research, prototyping, and iteration. Student feedback made the next design decisions concrete: reduce steps, make selections visible, and give people context they can act on. It was a course prototype, not a launched product; there are no production impact metrics.',
      },
      {
        title: 'What comes next',
        text: 'Test with a larger group, expand the prototype beyond its main example, and evaluate whether the revised filters and map help students make decisions more confidently.',
      },
    ],
  },
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
