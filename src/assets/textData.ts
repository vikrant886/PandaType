
const words = [
    "quick", "brown", "fox", "jumps", "over", "lazy", "dog", "bright", "sun", "shining", "morning", "birds", "singing",
    "flowers", "bloom", "children", "play", "park", "nearby", "house", "car", "drives", "fast", "city", "crowded", "streets",
    "people", "walk", "sidewalk", "hurry", "work", "office", "meeting", "start", "soon", "important", "project", "deadline",
    "approaching", "manager", "team", "discuss", "plan", "execute", "strategy", "success", "requires", "effort", "focus",
    "dedication", "learning", "new", "skills", "enhance", "performance", "growth", "knowledge", "crucial", "achieving",
    "goals", "life", "journey", "filled", "challenges", "opportunities", "embrace", "change", "adapt", "circumstances",
    "positive", "attitude", "leads", "happiness", "peace", "mind", "healthy", "body", "essential", "exercise", "daily",
    "habit", "maintain", "balance", "nutrition", "hydration", "key", "factors", "well-being", "relationships", "built",
    "trust", "communication", "respect", "understanding", "value", "connections", "family", "friends", "support",
    "pillar", "strength", "adventures", "travel", "explore", "discover", "world", "experience", "cultures", "perspectives",
    "enrich", "soul", "memories", "last", "lifetime", "creativity", "spark", "innovation", "art", "expression",
    "ideas", "flow", "freely", "inspire", "others", "stories", "written", "words", "carry", "power", "influence",
    "thoughts", "actions", "dream", "big", "pursue", "passion", "fearlessly", "determination", "overcome", "obstacles",
    "reach", "potential", "success", "measured", "impact", "create", "community", "serve", "uplift", "humanity",
    "shared", "compassion", "kindness", "empathy", "make", "difference", "better", "place", "mountain", "river", "ocean", "valley", "forest", "desert", "beach", "island", "cliff", "cave",
    "waterfall", "hill", "lake", "path", "trail", "road", "bridge", "village", "town", "city",
    "country", "continent", "planet", "earth", "universe", "galaxy", "star", "moon", "sun", "planetarium",
    "telescope", "spaceship", "satellite", "orbit", "gravity", "magnetism", "electricity", "energy", "power", "light",
    "shadow", "reflection", "mirror", "lens", "camera", "photograph", "film", "cinema", "movie", "screen",
    "theater", "stage", "performance", "actor", "director", "script", "scene", "dialogue", "character", "role",
    "story", "plot", "conflict", "resolution", "climax", "setting", "theme", "symbolism", "metaphor", "poetry",
    "rhyme", "verse", "stanza", "prose", "novel", "book", "chapter", "page", "sentence", "word",
    "letter", "alphabet", "language", "speech", "conversation", "discussion", "debate", "argument", "opinion", "perspective",
    "viewpoint", "belief", "faith", "hope", "dream", "vision", "imagination", "creativity", "innovation", "technology",
    "computer", "internet", "network", "connection", "wireless", "signal", "communication", "device", "gadget", "machine",
    "robot", "automation", "system", "software", "program", "application", "interface", "database", "storage", "memory",
    "processor", "algorithm", "data", "information", "analysis", "statistics", "research", "experiment", "discovery", "invention",
    "science", "physics", "chemistry", "biology", "mathematics", "geometry", "algebra", "calculus", "equation", "formula",
    "theory", "hypothesis", "law", "principle", "rule", "concept", "idea", "thought", "mind", "brain",
    "intelligence", "knowledge", "wisdom", "experience", "learning", "education", "school", "university", "college", "institute",
    "teacher", "student", "class", "lesson", "subject", "topic", "quiz", "test", "exam", "grade",
    "certificate", "degree", "career", "profession", "job", "work", "task", "project", "goal", "achievement"
];

const number = Array.from({ length: 200 }, () => Math.floor(Math.random() * 10000));

const punctuationSequence = [
    ".", ",", "!", "?", ";", ":", "'", "\"", "-", "_", "(", ")", "[", "]", "{", "}", "<", ">", "/", "\\",
    "|", "~", "`", "@", "#", "$", "%", "^", "&", "*", "+", "=", ".", ",", "!", "?", ";", ":", "'", "\"", "-", "_",
    "(", ")", "[", "]", "{", "}", "<", ">", "/", "\\", "|", "~", "`", "@", "#", "$", "%", "^", "&", "*", "+", "=",
    ".", ",", "!", "?", ";", ":", "'", "\"", "-", "_", "(", ")", "[", "]", "{", "}", "<", ">", "/", "\\", "|", "~",
    "`", "@", "#", "$", "%", "^", "&", "*", "+", "="
];

export {number , punctuationSequence, words}
