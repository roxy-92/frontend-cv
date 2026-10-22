
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
        'Frontend Developer with professional experience building web applications using Angular, TypeScript, HTML5 and CSS3. Experienced in REST API integration, application development and maintenance, and version control using Git and Git-based repositories. Additional technical experience in WordPress and other CMS platforms, website deployment, Docker and infrastructure management.',
      skills: 'Technical Skills',
      experience: 'Professional Experience',
      education: 'Education',
      training: 'Certifications & Additional Training',
      languages: 'Languages',
      jobs: [
        {
          title: 'Freelance Web Developer | Digital Projects',
          dates: 'May 2019 – March 2026',
          bullets: [
            'Developed and maintained websites for international clients.',
            'Created, customised and maintained websites using WordPress and other CMS platforms.',
            'Configured web hosting, domains, DNS and VPS environments.',
            'Used Docker in web projects and handled deployments and maintenance.',
            'Managed client requirements, quotes, deadlines and deliveries.',
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
          items: 'Angular · TypeScript · JavaScript · HTML5 · CSS3 · Bootstrap · jQuery · Responsive Design',
        },
        {
          title: 'Version Control & Repositories',
          items: 'Git · GitHub · GitLab',
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
          items: 'SQL · MySQL · PostgreSQL · MongoDB',
        },
        {
          title: 'Infrastructure & Deployment',
          items: 'Docker · VPS · Hosting · Domains · DNS · Website Deployment & Maintenance',
        },
        {
          title: 'Digital Design',
          items: 'Website Design · Digital Graphic Assets',
        },
      ],
      studies: [
        {
          title: 'Higher Vocational Training Diploma in Web Application Development',
          details: 'IES Aguadulce · September 2012 – July 2014',
        },
        {
          title: 'Intermediate Vocational Training Diploma in Microcomputer Systems and Networks',
          details: 'IES La Puebla · September 2010 – July 2012',
        },
      ],
      trainingItems: [
        'HTML & CSS Workshop Instructor',
        'Digital Transformation Fundamentals',
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
        'Desarrolladora Frontend con experiencia profesional creando aplicaciones web con Angular, TypeScript, HTML5 y CSS3. Experiencia integrando APIs REST, desarrollando y manteniendo aplicaciones y utilizando Git y repositorios de código. Experiencia técnica adicional con WordPress y otros CMS, despliegue web, Docker y gestión de infraestructura.',
      skills: 'Competencias técnicas',
      experience: 'Experiencia profesional',
      education: 'Formación académica',
      training: 'Certificaciones y formación adicional',
      languages: 'Idiomas',
      jobs: [
        {
          title: 'Desarrolladora web autónoma | Proyectos digitales',
          dates: 'Mayo 2019 – marzo 2026',
          bullets: [
            'Desarrollo y mantenimiento de páginas web para clientes internacionales.',
            'Creación, personalización y mantenimiento de webs con WordPress y otros CMS.',
            'Configuración de alojamiento web, dominios, DNS y entornos VPS.',
            'Uso de Docker en proyectos web y gestión de despliegues y mantenimiento.',
            'Gestión de requisitos de clientes, presupuestos, plazos y entregas.',
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
          title: 'Desarrolladora frontend en prácticas | Cloud Software Factory',
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
          items: 'Angular · TypeScript · JavaScript · HTML5 · CSS3 · Bootstrap · jQuery · Diseño adaptable',
        },
        {
          title: 'Control de versiones y repositorios',
          items: 'Git · GitHub · GitLab',
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
          items: 'SQL · MySQL · PostgreSQL · MongoDB',
        },
        {
          title: 'Infraestructura y despliegue',
          items: 'Docker · VPS · Alojamiento web · Dominios · DNS · Despliegue y mantenimiento',
        },
        {
          title: 'Diseño digital',
          items: 'Diseño web · Recursos gráficos digitales',
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
        'Instructora de talleres de HTML y CSS',
        'Fundamentos de transformación digital',
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
