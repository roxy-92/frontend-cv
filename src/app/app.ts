
import { Component } from '@angular/core';

type Language = 'en' | 'es';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  language: Language = 'en';

  readonly cv = {
    en: {
      role: 'Frontend Developer',
      location: 'Almería, Spain',
      availability: 'Open to remote opportunities',
      contact: 'Contact',
      profile: 'Professional Summary',
      profileText:
        'Frontend Developer with previous professional experience developing web applications using Angular and TypeScript. Returning to frontend development with a focus on modern Angular, responsive interfaces and maintainable code. Experience integrating REST APIs, maintaining applications and using Git. Additional experience managing client web projects, CMS platforms, hosting and deployments.',
      skills: 'Technical Skills',
      experience: 'Professional Experience',
      education: 'Education',
      training: 'Additional Activities',
      languages: 'Languages',

      jobs: [
        {
          title: 'Freelance Web Developer | Digital Projects',
          dates: 'May 2019 – March 2026',
          bullets: [
            'Developed and maintained websites for international clients using WordPress and other CMS platforms.',
            'Built independent Angular applications with Kotlin/Java backends and MongoDB databases.',
            'Designed responsive website layouts and digital graphic assets.',
            'Configured hosting, domains, DNS and VPS environments.',
            'Used Docker for local environments, deployment and maintenance.',
            'Managed client requirements, budgets and project deliveries.',
          ],
        },
        {
          title: 'Graphic & Multimedia Designer | Ontinet.com',
          dates: 'July 2023 – April 2024 · Remote',
          bullets: [
            'Created graphic and multimedia assets for software products.',
            'Produced visual materials according to project requirements.',
            'Worked with multidisciplinary teams in a remote environment.',
          ],
        },
        {
          title: 'Application Developer | ZRED',
          dates: 'April 2018 – June 2019',
          bullets: [
            'Developed and maintained web and mobile applications.',
            'Developed application features using Angular.',
            'Integrated REST APIs and external services.',
            'Developed Telegram bots connected to external services.',
            'Collaborated with development teams using Agile methodologies.',
          ],
        },
        {
          title: 'Web Developer | ZIXOM Business Management',
          dates: 'September 2017 – April 2018',
          bullets: [
            'Developed frontend and backend functionality for business applications.',
            'Worked with C# and .NET.',
            'Implemented new features and maintained existing software.',
          ],
        },
        {
          title: 'Frontend Developer Intern | Cloud Software Factory',
          dates: 'January 2014 – June 2014',
          bullets: [
            'Developed responsive web interfaces using HTML, CSS and JavaScript.',
            'Implemented layouts based on design specifications.',
            'Worked with Bootstrap and jQuery.',
          ],
        },
        {
          title: 'Web Designer Intern | Ruano Informática',
          dates: 'November 2013 – January 2014',
          bullets: [
            'Designed and developed websites for clients.',
            'Built web page layouts using HTML and CSS.',
            'Delivered customised website solutions.',
          ],
        },
      ],

      skillGroups: [
        {
          title: 'Frontend Development',
          items:
            'Angular · TypeScript · Bootstrap · jQuery · Responsive Design',
        },
        {
          title: 'Version Control & Collaboration',
          items: 'Git · GitHub',
        },
        {
          title: 'CMS & E-commerce',
          items: 'WordPress · Joomla · Drupal · PrestaShop · Magento',
        },
        {
          title: 'Backend & APIs',
          items: 'C# · .NET · Java · Spring Boot · REST APIs',
        },
        {
          title: 'Databases',
          items: 'SQL · MySQL · MongoDB',
        },
        {
          title: 'Infrastructure & Deployment',
          items:
            'Docker · VPS · Hosting · Domains · DNS · Website Deployment & Maintenance',
        },
        {
          title: 'Digital Design',
          items: 'Website Design · Banners · Digital Graphic Assets',
        },
      ],

      studies: [
        {
          title: 'Computer Engineering | Undergraduate Studies',
          details:
            'University of Almería · 2014–2018 · Degree not completed',
        },
        {
          title:
            'Higher Vocational Training Diploma in Web Application Development',
          details: 'IES Aguadulce · September 2012 – July 2014',
        },
        {
          title:
            'Intermediate Vocational Training Diploma in Microcomputer Systems and Networks',
          details: 'IES La Puebla · September 2010 – July 2012',
        },
      ],

      trainingItems: [
        'Girls Camp Mentor · Two consecutive years',
        'HTML & CSS Workshop Instructor',
      ],

      languageItems: [
        'Spanish · Native',
        'English · Professional working proficiency',
        'Romanian · Professional working proficiency',
      ],
    },

    es: {
      role: 'Desarrolladora Frontend',
      location: 'Almería, España',
      availability: 'Abierta a oportunidades en remoto',
      contact: 'Contacto',
      profile: 'Perfil profesional',
      profileText:
        'Desarrolladora frontend con experiencia profesional previa en aplicaciones web con Angular y TypeScript. Retomando el desarrollo frontend con especial interés en Angular moderno, interfaces adaptables y código mantenible. Experiencia integrando APIs REST, manteniendo aplicaciones y utilizando Git. Experiencia adicional gestionando proyectos web para clientes, plataformas CMS, alojamiento y despliegues.',
      skills: 'Competencias técnicas',
      experience: 'Experiencia profesional',
      education: 'Formación académica',
      training: 'Actividades complementarias',
      languages: 'Idiomas',

      jobs: [
        {
          title: 'Desarrolladora web autónoma | Proyectos digitales',
          dates: 'Mayo 2019 – marzo 2026',
          bullets: [
            'Desarrollo y mantenimiento de sitios web para clientes internacionales con WordPress y otros CMS.',
            'Desarrollo de aplicaciones propias con Angular, backend en Kotlin/Java y bases de datos MongoDB.',
            'Diseño de páginas adaptables y recursos gráficos digitales.',
            'Configuración de alojamiento web, dominios, DNS y entornos VPS.',
            'Uso de Docker para entornos locales, despliegues y mantenimiento.',
            'Gestión de requisitos, presupuestos y entregas de proyectos.',
          ],
        },
        {
          title: 'Diseñadora gráfica y multimedia | Ontinet.com',
          dates: 'Julio 2023 – abril 2024 · Remoto',
          bullets: [
            'Creación de recursos gráficos y multimedia para productos de software.',
            'Producción de materiales visuales según los requisitos de cada proyecto.',
            'Colaboración con equipos multidisciplinares en remoto.',
          ],
        },
        {
          title: 'Desarrolladora de aplicaciones | ZRED',
          dates: 'Abril 2018 – junio 2019',
          bullets: [
            'Desarrollo y mantenimiento de aplicaciones web y móviles.',
            'Desarrollo de funcionalidades utilizando Angular.',
            'Integración de APIs REST y servicios externos.',
            'Desarrollo de bots de Telegram conectados con servicios externos.',
            'Colaboración con equipos de desarrollo mediante metodologías ágiles.',
          ],
        },
        {
          title: 'Desarrolladora web | ZIXOM Business Management',
          dates: 'Septiembre 2017 – abril 2018',
          bullets: [
            'Desarrollo de funcionalidades frontend y backend para aplicaciones empresariales.',
            'Trabajo con C# y .NET.',
            'Implementación de nuevas funcionalidades y mantenimiento de software existente.',
          ],
        },
        {
          title:
            'Desarrolladora frontend en prácticas | Cloud Software Factory',
          dates: 'Enero 2014 – junio 2014',
          bullets: [
            'Desarrollo de interfaces web adaptables con HTML, CSS y JavaScript.',
            'Implementación de diseños a partir de especificaciones visuales.',
            'Trabajo con Bootstrap y jQuery.',
          ],
        },
        {
          title: 'Diseñadora web en prácticas | Ruano Informática',
          dates: 'Noviembre 2013 – enero 2014',
          bullets: [
            'Diseño y desarrollo de páginas web para clientes.',
            'Creación de estructuras de páginas con HTML y CSS.',
            'Desarrollo de soluciones web personalizadas.',
          ],
        },
      ],

      skillGroups: [
        {
          title: 'Desarrollo frontend',
          items:
            'Angular · TypeScript · Bootstrap · jQuery · Diseño adaptable',
        },
        {
          title: 'Control de versiones y colaboración',
          items: 'Git · GitHub',
        },
        {
          title: 'CMS y comercio electrónico',
          items: 'WordPress · Joomla · Drupal · PrestaShop · Magento',
        },
        {
          title: 'Backend y APIs',
          items: 'C# · .NET · Java · Spring Boot · APIs REST',
        },
        {
          title: 'Bases de datos',
          items: 'SQL · MySQL · MongoDB',
        },
        {
          title: 'Infraestructura y despliegue',
          items:
            'Docker · VPS · Alojamiento web · Dominios · DNS · Despliegue y mantenimiento',
        },
        {
          title: 'Diseño digital',
          items: 'Diseño web · Banners · Recursos gráficos digitales',
        },
      ],

      studies: [
        {
          title: 'Grado en Ingeniería Informática | Estudios cursados',
          details:
            'Universidad de Almería · 2014–2018 · Titulación no finalizada',
        },
        {
          title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
          details: 'IES Aguadulce · Septiembre 2012 – julio 2014',
        },
        {
          title: 'Técnico en Sistemas Microinformáticos y Redes',
          details: 'IES La Puebla · Septiembre 2010 – julio 2012',
        },
      ],

      trainingItems: [
        'Mentora en Girls Camp · Dos años consecutivos',
        'Instructora de talleres de HTML y CSS',
      ],

      languageItems: [
        'Español · Nativo',
        'Inglés · Competencia profesional',
        'Rumano · Competencia profesional',
      ],
    },
  };

  get content() {
    return this.cv[this.language];
  }

  setLanguage(language: Language): void {
    this.language = language;
  }
}
