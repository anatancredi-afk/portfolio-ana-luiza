/* JavaScript: tradução PT/EN, menu do celular e formulário de contato */

// Cada chave corresponde ao atributo data-i18n de um elemento HTML
// Os textos em português já estão escritos no próprio index.html
// abaixo ficam suas traduções para inglês
const english = {
  // Textos em inglês das páginas Experiências e Contato
  experienceTitle:"Experience", experienceSubtitle:"Experiences that broaden my perspective and help shape my professional journey.",
  compDate:"September / 2026", compTitle:"Joined COMP", compOrg:"PUC Minas Junior Computing Enterprise", compDesc:"PUC Minas junior enterprise dedicated to developing technology solutions for real clients. An opportunity to apply academic knowledge, build technical and professional skills, and experience teamwork in the technology market.", compTag1:"Selection process", compTag2:"Learning", compTag3:"Professional development",
  teacherDate:"2023 - Present", teacherTitle:"Sunday School Teacher", teacherOrg:"Oitava Presbyterian Church & Caiçara Presbyterian Church", teacherDesc:"Preparing lessons and sharing knowledge in a teaching environment. An experience that strengthens communication, listening, and awareness of different ways of learning.", teacherTag1:"Teaching", teacherTag2:"Communication", teacherTag3:"Organization",
  volunteerDate:"2022-2025", volunteerTitle:"Volunteering · Event Organization", volunteerDesc:"Participated in planning and organizing events for camps. An experience of collaboration, caring for participants, and working together to coordinate activities.", volunteerTag1:"Planning", volunteerTag2:"Teamwork", volunteerTag3:"Volunteering",
  contactTitle:"Let's talk!", contactSubtitle:"To exchange experiences, discuss projects, or share an opportunity, get in touch.", contactName:"Name", contactEmail:"Email", contactMessage:"Message", contactSend:"Send message", contactNote:"Submitting opens your email application with a prefilled message. Review it and confirm sending there.",
  namePlaceholder:"Your name", emailPlaceholder:"you@example.com", messagePlaceholder:"Write your message...",

  // Traduções dos textos da página Projetos
  projectsTitle:"Projects",
  medifindDate:"In development / 2026",
  medifindTitle:"MediFind - Medical Appointment Search and Booking Platform",
  medifindDesc:"Development of a web platform designed to make it easier to find doctors and book appointments. Patients can search for professionals by specialty, location, and health insurance plan. The system includes patient and dependent registration and management, available appointment times, bookings, and professional reviews.",
  medifindTech:"Areas explored: Front-End, Web Development, UX/UI, prototyping, and data modeling.",
  arduinoDate:"July / 2026",
  arduinoTitle:"Arduino Bob-it - Interactive Game",
  arduinoDesc:"Development of an interactive Arduino game inspired by Bop It, challenging players to perform randomly selected actions using buttons, a motion sensor, and a potentiometer. The system uses an LCD display, LEDs, and sound effects to provide real-time feedback. Each correct response increases the score and reduces the response time, making the game progressively more challenging.",
  arduinoTech:"Technologies: Arduino, C/C++, sensors, and electronic components.",
  solDate:"June / 2026",
  solTitle:"Technology Awareness at a Youth Shelter",
  solDesc:"University outreach project carried out at Casa Irmão Sol in Belo Horizonte to promote responsible and safe technology use among socially vulnerable teenagers. The initiative involved planning and delivering interactive workshops on digital safety, technology career opportunities, and introductory programming logic, using Minecraft and Blockly Games as educational tools.",
  solTech:"Tools used: Canva, Minecraft, and Blockly Games.",

  resumeTitle:"Resume", downloadResume:"Download resume (PDF)", resumeFallback:"If the PDF does not appear, use the button above to open or download it.",
  menu:"Menu", navHome:"HOME", navResume:"RESUME", navProjects:"PROJECTS",
  navExperience:"EXPERIENCE", navContact:"CONTACT",
  course:"COMPUTER SCIENCE", welcome:"Welcome",
  skills:"Skills", curiosities:"Fun Facts", interests:"Interests",
  certificates:"Certificates & Awards",
  about1:"I'm Ana Luiza Tancredi, a Computer Science student at PUC Minas, where I began my academic journey in 2026.",
  about2:"I've always had an affinity for the exact sciences and an interest in problem-solving, especially when it involves creativity and different ways of thinking. When I started my degree, I discovered how broad computing is and the many career paths it offers, which made me even more enthusiastic about the field.",
  about3:"I aim to keep developing my technical knowledge, exploring different areas of technology, and gaining hands-on experience that contributes to my education and professional growth.",
  soft1:"Strong interpersonal communication", soft2:"Logical reasoning",
  soft3:"Verbal communication", soft4:"Organization and planning",
  soft5:"Time management", soft6:"Leadership", soft7:"Strong writing skills",
  languagesHeading:"LANGUAGES", portuguese:"Portuguese — Native", english:"English — Advanced",
  interest1Title:"Software Development",
  interest1Text:"From idea to application: understanding problems, experimenting with solutions, and writing increasingly clear code.",
  interest1Tags:"Logic · Applications · Best practices",
  interest2Title:"Databases",
  interest2Text:"Organizing information and understanding how well-structured data supports useful, reliable solutions.",
  interest2Tags:"Data modeling · Queries · Organization",
  interest3Title:"Project Management",
  interest3Text:"Connecting people and tasks while following a project's development with collaboration and purpose.",
  interest3Tags:"Scrum · Kanban · Teamwork",
  interest4Text:"Interested in learning how models learn from data and exploring their applications to problem-solving.",
  interest4Tags:"Learning · Data · Applications",
  interest5Text:"Interested in exploring information security principles and learning practices that help protect data and digital systems.",
  interest5Tags:"Security · Data · Practices",
  curiositySubtitle:"Interests and little things that are also part of who I am.",
  curiosity1Title:"Studies", curiosity1Text:"Theology and apologetics are among my favorite subjects to study.",
  curiosity2Title:"Sports", curiosity2Text:"Movement is also part of my routine. I've always loved physical activity and have practiced more than five different sports.",
  curiosity3Title:"Teaching / Volunteering", curiosity3Text:"Since 2023, I've been a Sunday school teacher at my local church.",
  curiosity4Title:"Hobbies", curiosity4Text:"Drawing and playing acoustic guitar are my creative outlets.",
  cert1Title:"Academic Distinction — Computer Science",
  cert1Org:"Pontifical Catholic University of Minas Gerais",
  cert1Desc:"Recognition awarded by PUC Minas to students with outstanding academic performance during the semester, considering course grades, faculty nominations, commitment, participation, and collaboration in academic activities.",
  cert2Title:"Sunday School Teacher Training",
  cert2Desc:"Training focused on biblical teaching, developing knowledge and skills for serving as a Sunday school teacher.",
  cert3Title:"Intensive English Course",
  cert3Desc:"An intensive English course focused on communication skills and vocabulary development, including terminology and expressions related to Christian missions and evangelism.",
  cert4Title:"Small Group Leadership Course",
  cert4Desc:"Training in leadership principles, group organization, interpersonal communication, and teamwork activities.",
  cert5Title:"English Course (Complete Program)",
  cert5Desc:"Completion of a comprehensive English-language program, with advanced-level certification.",
  cert6Title:"Study Abroad (Intensive English Course)",
  cert6Desc:"Certificate earned upon completion of a one-month English-language course during an educational exchange in England, providing language immersion, improved communication skills, and intercultural experience."
};

// Guardamos o texto original para restaurá-lo quando o usuário voltar ao PT
const originalPortuguese = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  originalPortuguese[element.dataset.i18n] = element.textContent;
});

// Aplica o idioma a todos os elementos traduzíveis
function setLanguage(language) {
  const dictionary = language === "en" ? english : originalPortuguese;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) element.textContent = dictionary[key];
  });

  // Troca também o texto de exemplo dos campos do formulário
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const placeholders = language === "en" ? english : {namePlaceholder:"Seu nome",emailPlaceholder:"seu@email.com",messagePlaceholder:"Escreva sua mensagem..."};
    if (placeholders[key]) element.placeholder = placeholders[key];
  });

  // Destaca o botão do idioma que está ativo
  document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", String(active));
  });

  // Lembra o idioma escolhido ao navegar entre as páginas
  try { localStorage.setItem("portfolio-language", language); } catch (error) {}
}

// Associa cada botão de idioma à função de tradução
document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Recupera o idioma anterior, se existir
let initialLanguage = "pt";
try { initialLanguage = localStorage.getItem("portfolio-language") || "pt"; } catch (error) {}
setLanguage(initialLanguage === "en" ? "en" : "pt");

// Menu compacto para celular: abre e fecha ao clicar
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Contato: lê os campos preenchidos e monta um link mailto
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que a página recarregue ao enviar
    if (!contactForm.reportValidity()) return;
    const name = document.querySelector("#contact-name").value.trim();
    const email = document.querySelector("#contact-email").value.trim();
    const message = document.querySelector("#contact-message").value.trim();
    if (!name || !email || !message) return;
    // encodeURIComponent permite usar acentos e espaços no assunto e na mensagem
    const subject = encodeURIComponent("Contato pelo portfólio - " + name);
    const body = encodeURIComponent("Nome: " + name + "\nEmail: " + email + "\n\nMensagem:\n" + message);
    // Redireciona para o aplicativo de email do visitante; o envio final é feito lá
    window.location.href = "mailto:analu.tancredi@gmail.com?subject=" + subject + "&body=" + body;
  });
}
