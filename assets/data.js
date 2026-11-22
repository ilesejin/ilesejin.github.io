/*
  Your site's content lives here.
  - Change the details below and save.
  - To add a publication, copy one object in the publications list.
  - Put your CV PDF in assets/ and change cvFile to its filename.
*/
window.siteData = {
  name: "Sejin Park",
  intro: "I am an undergraduate student at Seoul National University. I am interested in cryptography, especially in homomorphic encryption.",
  cvFile: "assets/sejin-park-cv.pdf",
  email: "ilesejin@snu.ac.kr",
  facts: [
    ["Seoul National University", "B.S. Mathematics, Computer Science · Expected February 2028"],
    ["Charles University", "Exchange Student · 2026-2027"],
  ],
  languages: [
    ["Korean", "Native"],
    ["English", "Fluent"],
    ["Japanese", "Fluent · JLPT N1"],
    ["Czech", "Basic (Learning)"]
  ],
  experience: [
    ["Cryptolab", "Research Intern · March 2025 – January 2026", "Homomorphic Encryption Optimization Team."],
  ],
  publications: [
    {
      title: "Soohak: A Mathematician-Curated Benchmark for Evaluating Research-level Math Capabilities of LLMs",
      displayAuthors: "Guijin Son et al.",
      contribution: { role: "Dataset Contribution" },
      authors: "Guijin Son, Seungone Kim, Catherine Arnett, Hyunwoo Ko, Hyein Lee, Hyeonah Kang, Jiang Longxi, Jin Yun, JungYup Lee, Kyungmin Lee, Sam Yoosuk Kim, Sang Park, Seunghyeok Hong, SeungJae Lee, Seungyeop Yi, Shinae Shin, SunHye Bok, Sunyoung Shin, Yonghoon Ji, Youngtaek Kim, Hanearl Jung, Akari Asai, Graham Neubig, Sean Welleck, Youngjae Yu, Akshelin R, Alexander B. Ivanov, Boboev Muhammadjon, Chae Young Han, Christian Stump, Cooper R. Anderson, Dmitrii Karp, Dohyun Kwon, Dongryung Yi, DoYong Kwon, Duk-Soon Oh, Eunho Choi, Giovanni Resta, Greta Panova, Huiyun Noh, Hyungryul Baik, Hyungsun Bae, Inomov Mashrafdzhon, Jeewon Kim, Jeong-Rae Kim, Ji Eun Lee, Jiaqi Liu, Jieui Kang, Jimin Kim, Jon-Lark Kim, Joonyeong Won, Junseo Yoon, Junwoo Jo, Kibeom Kim, Kiwoon Kwon, Mario Kummer, Max Mercer, Min Hoon Kim, Minjun Kim, Nahyun Lee, Ng Ze-An, Nicolas Libedinsky, Rafał Marcin Łochowski, Raphaël Lachièze-Rey, Robert Auffarth, Ruichen Zhang, Sejin Park, Seonguk Seo, Shin Jaehoon, Sunatullo, Taewoong Eom, Yeachan Park, Yongseok Jang, Youchan Oh, Zhaoyang Wang, Zoltán Kovács",
      venue: "Preprint",
      year: "2026",
      links: [
        { label: "Preprint", url: "https://arxiv.org/abs/2605.09063" },
      ],
    },
    {
      title: "Scaling up Privacy-Preserving ML: A CKKS Implementation of Llama-2-7B",
      authors: "Jaiyoung Park, Sejin Park, Jai Hyun Park, Jung Ho Ahn, Jung Hee Cheon, Guillaume Hanrot, Jung Woo Kim, Minje Park, Damien Stehlé",
      venue: "Preprint",
      year: "2026",
      links: [
        { label: "Preprint", url: "https://arxiv.org/pdf/2601.18511" },
      ],
    },
  ],
  projects: [
    {
      title: "Slitherlink Solver",
      url: "https://github.com/ilesejin/SlitherlinkSolver",
    },
    {
      title: "Pikachu Volleyball",
      url: "https://ilesejin.github.io/pikachu-volleyball-links/ko/",
    },
  ],
  profileLinks: [
    { label: "GitHub", url: "https://github.com/ilesejin" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=nRLflTwAAAAJ" },
  ],
};
