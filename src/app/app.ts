
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
        'Frontend Developer with professional experience building web applications using Angular and TypeScript, integrating REST APIs, and maintaining business software. Experienced in CMS-based development, backend technologies, Docker, and web infrastructure management. Combines software development experience with independent project delivery and collaboration across multidisciplinary teams.',
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
            'Developed, customized, and maintained websites and CMS-based solutions for international clients.',
            'Independently developed Angular applications using Java/Kotlin backend technologies and MongoDB.',
            'Designed responsive website layouts and digital graphic assets according to client requirements.',
            'Configured and maintained hosting environments, VPS servers, domains, DNS, and website deployments.',
            'Used Docker for local development environments.',
            'Managed client communication, technical requirements, budgets, and project deliveries.',
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
            'Developed and maintained web and mobile application features.',
            'Built application features using Angular.',
            'Integrated REST APIs and third-party services.',
            'Built Telegram bots connected to external services.',
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
            'Angular · TypeScript · SCSS · Bootstrap · jQuery',
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
          items: 'C# · .NET · Java · Kotlin · Spring Boot · REST APIs',
        },
        {
          title: 'Databases',
          items: 'SQL · MySQL · MongoDB',
        },
        {
          title: 'Infrastructure & Deployment',
          items:
            'Docker · VPS · Hosting · DNS · Website Deployment',
        },
        {
          title: 'Digital Design',
          items: 'Website Design · Banners · Digital Graphic Assets',
        },
      ],

      studies: [
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
        'Desarrolladora frontend con experiencia profesional en aplicaciones web con Angular y TypeScript, integración de APIs REST y mantenimiento de software empresarial. Experiencia en desarrollo con CMS, tecnologías backend, Docker y gestión de infraestructura web. Combina el desarrollo de software con la gestión integral de proyectos y la colaboración con equipos multidisciplinares.',
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
            'Desarrollo, personalización y mantenimiento de sitios web y soluciones CMS para clientes internacionales.',
            'Desarrollo independiente de aplicaciones Angular con tecnologías backend Java/Kotlin y MongoDB.',
            'Diseño de interfaces web adaptables y recursos gráficos digitales según los requisitos del cliente.',
            'Configuración y mantenimiento de alojamiento web, servidores VPS, dominios, DNS y despliegues.',
            'Uso de Docker para entornos de desarrollo locales.',
            'Gestión de comunicación con clientes, requisitos técnicos, presupuestos y entregas.',
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
            'Desarrollo y mantenimiento de funcionalidades para aplicaciones web y móviles.',
            'Implementación de funcionalidades con Angular.',
            'Integración de APIs REST y servicios de terceros.',
            'Creación de bots de Telegram conectados con servicios externos.',
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
            'Angular · TypeScript · SCSS · Bootstrap · jQuery',
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
          items: 'C# · .NET · Java · Kotlin · Spring Boot · APIs REST',
        },
        {
          title: 'Bases de datos',
          items: 'SQL · MySQL · MongoDB',
        },
        {
          title: 'Infraestructura y despliegue',
          items:
            'Docker · VPS · Alojamiento web · DNS · Despliegue web',
        },
        {
          title: 'Diseño digital',
          items: 'Diseño web · Banners · Recursos gráficos digitales',
        },
      ],

      studies: [
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
