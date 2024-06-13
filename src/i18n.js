// i18n.js
import i18n from 'i18next';
import { initReactI18next } from '../node_modules/react-i18next';

const resources = {
  en: {
    translation: {
      "about_us": "ABOUT US",
      "our_services": "OUR SERVICES",
      "portfolio": "PORTFOLIO",
      "our_team": "OUR TEAM",
      "your_it_development_partner": "YOUR IT DEVELOPMENT PARTNER",
      "building_useful_scalable_apps": "Building useful, scalable, and sustainable applications is our desire! Our job is to develop and maintain business applications for companies. Very often, these applications are required to be long-term, and to evolve at the same pace as user needs.",
      "precisely_aiming": "This is precisely what we are aiming for in our developments. Whether in the choice of technologies or APIs/cloud services used, in the architecture implemented, in the design of the database, workflows and functionalities, and obviously for each line of code to be produced, we take care of the height and we integrate the component of strong maintainability.",
      "email": "contact@ganeshcoding.com",
      "phone": "+216 52 00 68 73",
      "rights_reserved": "2024 GCO All rights reserved.",
      "service1_description": "\"Ganesh Coding office\" is equipped to provide you with a comprehensive range of technology services that cater to all your requirements. Whether you require assistance with user experience, interface design, web development, mobile app development, or support and maintenance, we are here to assist you.",
      "service2_description": "Being a designer means you care about the details,you must be crative and be able to take direction, turn concepts into visuals, communicate with clients, and implement feedback to create a final product .",
      "service3_description": "<strong>Web Development:</strong> Building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. <strong>Mobile App Development:</strong> Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.",
      "service4_description": "Marketing boosts brand awareness and visibility, attracting new consumers. Strong campaigns increase market share in the competitive business landscape, strategically launching products based on market needs to improve return on investments.",
      "service4_bullet1": "Align your team with specific objectives.",
      "service4_bullet2": "Help link your efforts to business goals.",
      "service4_bullet3": "Allow yourself to identify and test what resonates with your target audience.",
      "service4_bullet4": "Empower yourself to capitalize on emerging trends.",
      "service4_bullet5": "Targeted campaigns on social networks.",
      "service4_bullet6": "Partnerships with influencers.",
      "service4_bullet7": "Online advertising schedule.",
      "service1_title": "CONSULTING",
      "service2_title": "DESIGN",
      "service3_title": "DEVELOPMENT",
      "service4_title": "MARKETING",

      "comprehensive_digital_expertise": "Comprehensive Digital Expertise:",
      "comprehensive_digital_expertise_desc": "Our team possesses deep expertise across all facets of the digital landscape.",
      "tailored_solutions": "Tailored Solutions:",
      "tailored_solutions_desc": "We adopt a personalized approach for each project to meet the unique needs of every client.",
      "innovation_creativity": "Innovation and Creativity:",
      "innovation_creativity_desc": "We provide our clients with innovative and creative solutions that stand out in the market.",
      "transparent_communication": "Transparent Communication:",
      "transparent_communication_desc": "We keep our clients informed at every stage of the process, ensuring clarity and collaboration.",
      "measurable_results": "Measurable Results:",
      "measurable_results_desc": "Our strategies deliver measurable results, allowing for continuous improvement and success.",
      "long_term_partnerships": "Long-Term Partnerships:",
      "long_term_partnerships_desc": "We are committed to building long-term relationships with our clients, supporting their growth and evolving needs.",
    }
  },
  fr: {
    translation: {
      "about_us": "À PROPOS",
      "our_services": "NOS SERVICES",
      "portfolio": "PORTFOLIO",
      "our_team": "NOTRE ÉQUIPE",
      "your_it_development_partner": "VOTRE PARTENAIRE DE DÉVELOPPEMENT INFORMATIQUE",
      "building_useful_scalable_apps": "Construire des applications utiles, évolutives et durables est notre désir ! Notre travail consiste à développer et à maintenir des applications métier pour les entreprises. Très souvent, ces applications doivent être à long terme et évoluer au même rythme que les besoins des utilisateurs.",
      "precisely_aiming": "C'est précisément ce que nous visons dans nos développements. Que ce soit dans le choix des technologies ou des API/services cloud utilisés, dans l'architecture mise en œuvre, dans la conception de la base de données, des flux de travail et des fonctionnalités, et évidemment pour chaque ligne de code à produire, nous prenons soin de la hauteur et nous intégrons le composant de forte maintenabilité.",
      "email": "contact@ganeshcoding.com",
      "phone": "+216 52 00 68 73",
      "rights_reserved": "2024 GCO Tous droits réservés.",
      "service1_description": "\"Ganesh Coding office\" est équipé pour vous fournir une gamme complète de services technologiques qui répondent à toutes vos exigences. Que vous ayez besoin d'assistance pour l'expérience utilisateur, la conception d'interfaces, le développement web, le développement d'applications mobiles ou le support et la maintenance, nous sommes là pour vous aider.",
      "service2_description": "Être designer signifie que vous vous souciez des détails, vous devez être créatif et capable de suivre des directives, transformer des concepts en visuels, communiquer avec les clients et intégrer leurs retours pour créer un produit final .",
      "service3_description": "<strong>Développement Web :</strong> Construction et maintenance de sites web ; c'est le travail qui se passe en coulisses pour rendre un site web superbe, rapide et performant avec une expérience utilisateur fluide. <strong>Développement d'applications mobiles :</strong> Le développement d'applications mobiles est le processus de création de logiciels pour smartphones, tablettes et assistants numériques, principalement pour les systèmes d'exploitation Android et iOS.",
      "service4_description": "Le marketing augmente la notoriété et la visibilité de la marque, attirant de nouveaux consommateurs. Des campagnes solides augmentent la part de marché dans le paysage concurrentiel, en lançant stratégiquement des produits en fonction des besoins du marché pour améliorer le retour sur investissement.",
      "service4_bullet1": "Alignez votre équipe sur des objectifs spécifiques.",
      "service4_bullet2": "Aidez-vous à lier vos efforts aux objectifs commerciaux.",
      "service4_bullet3": "Permettez-vous d'identifier et de tester ce qui résonne avec votre public cible.",
      "service4_bullet4": "Vous autonomiser pour tirer parti des tendances émergentes.",
      "service4_bullet5": "Campagnes ciblées sur les réseaux sociaux.",
      "service4_bullet6": "Partenariats avec des influenceurs.",
      "service4_bullet7": "Calendrier de publicité en ligne.",

      "service1_title": "CONSULTATION",
      "service2_title": "CONCEPTION",
      "service3_title": "DÉVELOPPEMENT",
      "service4_title": "MARKETING",
      "comprehensive_digital_expertise": "Expertise Numérique Complète:",
      "comprehensive_digital_expertise_desc": "Notre équipe possède une expertise approfondie dans tous les aspects du paysage numérique.",
      "tailored_solutions": "Solutions Sur Mesure:",
      "tailored_solutions_desc": "Nous adoptons une approche personnalisée pour chaque projet afin de répondre aux besoins uniques de chaque client.",
      "innovation_creativity": "Innovation et Créativité:",
      "innovation_creativity_desc": "Nous fournissons à nos clients des solutions innovantes et créatives qui se démarquent sur le marché.",
      "transparent_communication": "Communication Transparente:",
      "transparent_communication_desc": "Nous tenons nos clients informés à chaque étape du processus, assurant clarté et collaboration.",
      "measurable_results": "Résultats Mesurables:",
      "measurable_results_desc": "Nos stratégies délivrent des résultats mesurables, permettant une amélioration continue et un succès.",
      "long_term_partnerships": "Partenariats à Long Terme:",
      "long_term_partnerships_desc": "Nous nous engageons à construire des relations à long terme avec nos clients, soutenant leur croissance et leurs besoins évolutifs.",

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
