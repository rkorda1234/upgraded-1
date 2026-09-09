import { Course, COURSES } from "./courses";

export const COURSES_ES: Record<string, Partial<Course>> = {
  "fl-14hr-ce": {
    title: "Educación Continua de 14 Horas de Florida",
    headline: "Completa los requisitos de Educación Continua de Florida con una experiencia de aprendizaje interactiva diseñada para profesionales inmobiliarios licenciados.",
    heroTagline: "Renueva Tu Licencia Con Confianza.",
    hours: "14 Horas",
    badge: "Aprobado por el Estado de Florida",
    accessPeriod: "Un Año de Acceso",
    language: "Disponible en Inglés y Español",
    description:
      "Educación Continua obligatoria para Asociados de Ventas y Brokers de Florida después de su primera renovación.\n\nTu licencia de bienes raíces de Florida se renueva cada dos años. Renovarla no debería ser confuso ni estresante.\n\nEn Upgraded, hemos rediseñado la Educación Continua en una experiencia de aprendizaje en línea moderna que te ayuda a cumplir con los requisitos de renovación de Florida mientras continúas creciendo como profesional inmobiliario.\n\nYa sea que estés renovando tu licencia o actualizando tus conocimientos, nuestro objetivo es simple: ayudarte a mantenerte informado, en cumplimiento normativo y a la vanguardia en una industria en constante cambio.",
    whoIsThisFor: [
      "Asociados de Ventas de Bienes Raíces de Florida después de su primera renovación de licencia.",
      "Brokers de Bienes Raíces de Florida activos renovando su ciclo bienal de licencia.",
      "Profesionales licenciados que buscan educación continua aprobada por el DBPR.",
      "Agentes que prefieren el aprendizaje en línea flexible a su propio ritmo."
    ],
    whatYouWillLearn: [
      "Actualizaciones de las Leyes Principales de Florida (Core Law) y Requisitos Estatutarios",
      "Ética Empresarial y Estándares Profesionales de Práctica",
      "Temas de Especialidad Inmobiliaria y Gestión de Riesgos",
      "Cumplimiento con el DBPR y Mejores Prácticas de Mantenimiento de Licencia"
    ],
    features: [
      "100% en Línea con Acceso 24/7 a tu Propio Ritmo",
      "Reporte Electrónico Directo de Finalización al DBPR de Florida",
      "Disponible en Inglés y Español",
      "Incluye 1 Año Completo de Acceso al Curso"
    ],
    trustBar: [
      "Educación Continua Aprobada por el Estado de Florida",
      "Acceso Inmediato en Línea",
      "Finalización Reportada al DBPR",
      "Disponible en Inglés y Español"
    ],
    whichCourseTable: [
      {
        situation: "Estoy trabajando para obtener mi Licencia de Asociado de Ventas de Florida",
        requiredEducation: "Pre-Licencia de 63 Horas (Próximamente)"
      },
      {
        situation: "Estoy renovando mi licencia de Asociado de Ventas por primera vez",
        requiredEducation: "Post-Licencia de 45 Horas"
      },
      {
        situation: "Ya completé mi primera renovación y necesito mantener mi licencia activa",
        requiredEducation: "Educación Continua de 14 Horas"
      },
      {
        situation: "Estoy renovando mi licencia activa de Broker de Florida",
        requiredEducation: "Educación Continua de 14 Horas"
      }
    ],
    renewalReview: {
      title: "LA REVISIÓN DE RENOVACIÓN UPGRADED™",
      subtitle: "Orientación Personalizada para la Renovación",
      paragraphs: [
        "Una de las mayores fuentes de confusión para los profesionales de bienes raíces de Florida no es completar el curso, sino saber qué curso realmente necesitan. Por eso creamos La Revisión de Renovación Upgraded™.",
        "Antes de inscribirte, nuestro Equipo de Éxito Estudiantil revisará la información que proporciones, te ayudará a determinar qué requisito educativo aplica con mayor probabilidad a tu estado de licencia actual y te guiará en tus próximos pasos.",
        "Desde seleccionar el curso adecuado hasta comprender el proceso de renovación con el Departamento de Regulación Comercial y Profesional de Florida (DBPR), estamos aquí para hacer el proceso simple, claro y libre de estrés.",
        "Porque la educación debe venir con orientación, no con suposiciones."
      ],
      whyCreated: [
        "La renovación de la licencia de Florida a veces puede resultar confusa, especialmente cuando no estás seguro de qué requisito educativo aplica a tu licencia actual.",
        "Por eso creamos La Revisión de Renovación Upgraded™.",
        "Nuestro objetivo es simple: ayudarte a tomar decisiones informadas antes de inscribirte, comprender tus requisitos de renovación y avanzar en el proceso con total confianza.",
        "Porque la educación debe venir con orientación, no con suposiciones."
      ]
    },
    renewalJourney: {
      title: "TU VIAJE DE RENOVACIÓN COMIENZA AQUÍ",
      subtitle: "Completar tu Educación Continua es solo un paso en el proceso de renovación de licencia. En Upgraded, creemos que la educación debe venir acompañada de orientación.",
      items: [
        {
          title: "Acceso Inmediato al Curso",
          description: "Comienza a estudiar inmediatamente después de completar tu inscripción. Tu curso está disponible en línea las 24 horas del día, los 7 días de la semana, permitiéndote aprender cuando mejor se adapte a tu horario."
        },
        {
          title: "Un Año de Acceso",
          description: "Disfruta de un año de acceso a tu curso seleccionado a partir de la fecha de inscripción. Revisa lecciones y materiales en cualquier momento durante tu periodo de acceso."
        },
        {
          title: "Aprende en Tu Idioma de Preferencia",
          description: "Elige la experiencia de aprendizaje que mejor se adapte a tus necesidades (🇺🇸 Inglés o 🇪🇸 Español). Ambas versiones incluyen el mismo plan de estudios aprobado por el estado de Florida y satisfacen el mismo requisito de Educación Continua."
        },
        {
          title: "Aprende Desde Cualquier Lugar",
          description: "Accede a tu curso desde tu computadora, tableta o teléfono inteligente y continúa aprendiendo desde donde te encuentres. Tu progreso se guarda automáticamente."
        },
        {
          title: "Reporte de Finalización del Curso",
          description: "Al completar con éxito todos los requisitos del curso, Upgraded Real Estate School reporta electrónicamente tu finalización al Departamento de Regulación Comercial y Profesional de Florida (DBPR) de conformidad con las regulaciones estatales."
        },
        {
          title: "Orientación Durante el Proceso de Renovación",
          description: "Nuestro compromiso no termina cuando terminas tu curso. Nuestro Equipo de Éxito Estudiantil está disponible para guiarte en el resto del proceso de renovación requerido por el DBPR."
        },
        {
          title: "Equipo de Éxito Estudiantil",
          description: "Desde ayudarte a seleccionar el curso correcto hasta responder preguntas después de finalizar y guiarte en el proceso de renovación, nuestro Equipo de Éxito Estudiantil está aquí para apoyarte en cada paso del camino."
        }
      ]
    },
    faqs: [
      {
        question: "¿Este curso está aprobado por el Departamento de Regulación Comercial y Profesional de Florida (DBPR)?",
        answer: "Sí. El curso de Educación Continua de 14 Horas de Florida ofrecido por Upgraded Real Estate School está oficialmente aprobado por el Departamento de Regulación Comercial y Profesional de Florida (DBPR)."
      },
      {
        question: "¿Cómo se reporta la finalización de mi curso al DBPR?",
        answer: "Al completar exitosamente todos los requisitos del curso, Upgraded Real Estate School reporta electrónicamente tu finalización directamente al DBPR de conformidad con los requisitos de Florida. Generalmente se procesa dentro de las 24 a 48 horas hábiles."
      },
      {
        question: "¿El curso se imparte a mi propio ritmo?",
        answer: "Sí. El curso es 100% en línea y se realiza a tu propio ritmo. Puedes iniciar sesión, avanzar y repasar en cualquier momento que se ajuste a tu horario."
      },
      {
        question: "¿Cuánto tiempo tendré acceso a los materiales?",
        answer: "Los estudiantes reciben 12 meses completos (un año) de acceso a partir de la fecha de inscripción para revisar lecciones y materiales."
      },
      {
        question: "¿Puedo tomar el curso en español?",
        answer: "¡Sí! El curso está completamente disponible tanto en inglés como en español. Puedes elegir tu idioma preferido al momento de inscribirte."
      }
    ]
  },

  "fl-45hr-postlicensing": {
    title: "Post-Licencia de 45 Horas para Asociados de Ventas de Florida",
    headline: "Cumple con el requisito obligatorio de educación post-licencia para tu primera renovación como Asociado de Ventas en Florida.",
    heroTagline: "Tu Primera Renovación con Éxito.",
    hours: "45 Horas",
    badge: "Obligatorio para Primera Renovación",
    accessPeriod: "Un Año de Acceso",
    language: "Disponible en Inglés y Español",
    description:
      "La ley de Florida exige que todos los Asociados de Ventas completen 45 horas de educación post-licencia aprobada antes de la fecha de vencimiento de su primera licencia.\n\nEn Upgraded, hemos estructurado este curso para que no sea solo teoría legal repetitiva, sino un plan práctico de desarrollo de negocio inmobiliario, gestión de transacciones, mercadeo y cumplimiento normativo.",
    whoIsThisFor: [
      "Asociados de Ventas de Bienes Raíces de Florida acercándose a su primera fecha de renovación de licencia.",
      "Nuevos agentes que buscan consolidar su negocio con fundamentos prácticos.",
      "Profesionales que desean aprender gestión de contratos, captación de propiedades y servicio al cliente."
    ],
    whatYouWillLearn: [
      "Estructuración de contratos de compraventa y cláusulas de protección",
      "Prácticas operativas y gestión de depósitos en garantía (Escrow)",
      "Análisis de mercado comparativo (CMA) y valoración de propiedades",
      "Marketing digital moderno y generación de prospectos éticos",
      "Responsabilidad profesional, cumplimiento legal y gestión de riesgos"
    ],
    features: [
      "100% en Línea y a tu Propio Ritmo",
      "Reporte Electrónico Directo al DBPR",
      "Material de Estudio Práctico Enfocado en el Mercado Actual",
      "1 Año de Acceso Completo"
    ],
    trustBar: [
      "Aprobado por el DBPR de Florida",
      "Obligatorio para la Primera Renovación",
      "Reporte Automático de Horas",
      "Soporte Continuo al Estudiante"
    ],
    faqs: [
      {
        question: "¿Qué pasa si no completo mi curso de 45 horas antes de mi primera renovación?",
        answer: "Si no completas el curso de post-licencia de 45 horas antes de la fecha límite de tu primera renovación, tu licencia se convertirá en nula y sin efecto (void and null) según la ley de Florida. Tendrías que volver a tomar el curso de pre-licencia de 63 horas y aprobar nuevamente el examen estatal."
      },
      {
        question: "¿Hay examen final en el curso de 45 horas?",
        answer: "Sí, de acuerdo con los reglamentos de la Comisión de Bienes Raíces de Florida (FREC), se requiere aprobar un examen final de fin de curso con una puntuación mínima del 75%."
      }
    ]
  },

  "fl-63hr-prelicensing": {
    title: "Pre-Licencia de 63 Horas para Asociados de Ventas de Florida",
    headline: "El programa fundamental aprobado por el DBPR para iniciar tu carrera como profesional de bienes raíces en el estado de Florida.",
    heroTagline: "Inicia Tu Carrera Inmobiliaria.",
    hours: "63 Horas",
    badge: "Curso Fundamental de Inicio",
    accessPeriod: "Un Año de Acceso",
    language: "Disponible en Inglés y Español",
    description:
      "El curso de Pre-Licencia de 63 Horas es el primer paso obligatorio para convertirte en un Asociado de Ventas de Bienes Raíces licenciado en Florida.\n\nDiseñado con una metodología moderna, explicaciones claras y simuladores de examen estatal, este curso te prepara tanto para aprobar el examen del DBPR en tu primer intento como para comprender la práctica inmobiliaria real.",
    whoIsThisFor: [
      "Personas que desean iniciar una nueva carrera en bienes raíces en Florida.",
      "Emprendedores que buscan dominar las leyes inmobiliarias y transacciones de propiedad.",
      "Estudiantes que necesitan un programa interactivo con alta tasa de aprobación."
    ],
    whatYouWillLearn: [
      "Leyes inmobiliarias de Florida, reglas de FREC y estatutos de DBPR",
      "Derechos de propiedad, títulos, escrituras y gravámenes",
      "Contratos inmobiliarios, financiamiento hipotecario y cierres",
      "Matemáticas inmobiliarias simplificadas con ejemplos prácticos",
      "Técnicas y estrategias para el examen estatal de Florida"
    ],
    features: [
      "100% en Línea con Módulos Interactivos",
      "Simulador de Examen Estatal con Preguntas Actualizadas",
      "Certificado Oficial de Finalización para el DBPR",
      "Acceso Completo por 12 Meses"
    ],
    trustBar: [
      "Requisito Oficial para Obtener la Licencia de Florida",
      "Simulador de Examen Estatal Incluido",
      "Alta Tasa de Aprobación",
      "Disponible en Inglés y Español"
    ],
    faqs: [
      {
        question: "¿Cuáles son los requisitos para obtener la licencia en Florida?",
        answer: "Tener al menos 18 años, poseer un diploma de secundaria o equivalente, tener número de Seguro Social de EE.UU., completar el curso de pre-licencia de 63 horas, someterse a toma de huellas digitales electrónicas y aprobar el examen estatal de Florida con 75% o más."
      }
    ]
  },

  "fl-60hr-broker-postlicensing": {
    title: "Post-Licencia de 60 Horas para Brokers de Florida",
    headline: "La formación avanzada obligatoria para brokers de Florida en su primer ciclo de renovación.",
    heroTagline: "Liderazgo y Gestión de Corretaje.",
    hours: "60 Horas",
    badge: "Obligatorio para Primera Renovación de Broker",
    accessPeriod: "Un Año de Acceso",
    language: "Disponible en Inglés y Español",
    description:
      "Los brokers recién licenciados en Florida deben completar 60 horas de educación post-licencia antes de su primera renovación.\n\nEste programa profundiza en la administración de corretajes, contabilidad de fondos de clientes (escrow), cumplimiento legal estricto, contratación de agentes y gestión estratégica de empresas inmobiliarias.",
    whoIsThisFor: [
      "Brokers de Bienes Raíces de Florida en su primer ciclo bienal de renovación.",
      "Propietarios de firmas inmobiliarias y brokers administradores.",
      "Líderes que buscan blindar legalmente sus operaciones y equipos."
    ],
    whatYouWillLearn: [
      "Gestión avanzada de cuentas de depósito en garantía (Escrow) y auditorías",
      "Responsabilidad legal de brokers y supervisión de agentes asociados",
      "Estructuración de planes de negocio y operaciones de agencia",
      "Contratos de corretaje, políticas de oficina y resolución de disputas"
    ],
    features: [
      "100% en Línea a tu Propio Ritmo",
      "Reporte Electrónico Directo al DBPR",
      "Enfoque en Gestión Real de Corretajes",
      "Un Año de Acceso Completo"
    ],
    trustBar: [
      "Aprobado por el DBPR de Florida",
      "Obligatorio para Brokers",
      "Reporte Directo al Estado",
      "Material de Alta Dirección"
    ],
    faqs: [
      {
        question: "¿Qué sucede si un broker no completa la post-licencia de 60 horas a tiempo?",
        answer: "Si no se completa antes del vencimiento de la primera renovación, la licencia de broker se anula y la persona regresa automáticamente a la condición de asociado de ventas, siempre que haya cumplido con los requisitos respectivos."
      }
    ]
  },

  "ai-real-estate": {
    title: "IA para Profesionales Inmobiliarios",
    headline: "Aprende a utilizar herramientas de inteligencia artificial para redactar listados, crear campañas de marketing y automatizar tu negocio inmobiliario.",
    heroTagline: "Domina la IA en Bienes Raíces.",
    hours: "8 Módulos Prácticos",
    badge: "Programa Avanzado de Tecnología",
    accessPeriod: "Acceso de por Vida",
    language: "Disponible en Inglés y Español",
    description:
      "La inteligencia artificial está transformando la forma en que los agentes captan propiedades, redactan anuncios y se comunican con sus clientes.\n\nEn este programa práctico, dominarás el uso de modelos como ChatGPT, Gemini, automatizaciones de correo y generadores visuales para ahorrar horas cada semana y multiplicar tus conversiones.",
    whoIsThisFor: [
      "Agentes inmobiliarios que desean ahorrar tiempo y automatizar tareas repetitivas.",
      "Brokers y líderes de equipo que buscan equipar a sus agentes con ventajas tecnológicas.",
      "Profesionales que quieren posicionarse como referentes modernos en su mercado."
    ],
    whatYouWillLearn: [
      "Estructuración de prompts avanzados para descripciones de propiedades de alto impacto",
      "Automatización de secuencias de seguimiento de prospectos por email y WhatsApp",
      "Generación de reportes de micromercado personalizados con análisis de datos",
      "Creación de planes de contenido y guiones de video inmobiliario con IA",
      "Ética, privacidad de datos de clientes y regulaciones publicitarias con IA"
    ],
    features: [
      "Biblioteca de Prompts Inmobiliarios Listos para Usar",
      "Plantillas de Automatización Descargables",
      "Acceso de por Vida con Actualizaciones Constantes",
      "Estudios de Caso Reales con Agentes de Alto Rendimiento"
    ],
    trustBar: [
      "Estrategias 100% Prácticas y Probadas",
      "Plantillas de Prompts Incluidas",
      "Acceso de por Vida",
      "Enfoque en Resultados Comerciales"
    ],
    faqs: [
      {
        question: "¿Necesito conocimientos técnicos previos para tomar este curso?",
        answer: "No. El curso está diseñado desde cero con instrucciones paso a paso pensadas específicamente para profesionales de bienes raíces."
      }
    ]
  },

  "business-planning-real-estate": {
    title: "Planificación Estratégica de Negocios para Agentes",
    headline: "Diseña un plan de negocio inmobiliario predecible, escalable y rentable adaptado a los mercados de alta competencia.",
    heroTagline: "Construye un Negocio Predecible.",
    hours: "6 Módulos Estratégicos",
    badge: "Masterclass de Crecimiento",
    accessPeriod: "Acceso de por Vida",
    language: "Disponible en Inglés y Español",
    description:
      "La mayoría de los agentes operan mes a mes sin un sistema claro de generación de ingresos ni previsibilidad financiera.\n\nEste programa te guía paso a paso para estructurar tus metas financieras, calcular tus métricas clave de conversión, gestionar tus presupuestos y crear un modelo de negocio sostenible año tras año.",
    whoIsThisFor: [
      "Agentes que desean superar los altibajos de ingresos y alcanzar consistencia.",
      "Profesionales que buscan escalar de agentes individuales a fundadores de equipo.",
      "Brokers que desean estandarizar la planificación financiera y de metas de sus asociados."
    ],
    whatYouWillLearn: [
      "Modelado financiero y cálculo de objetivos de comisiones netas",
      "Métricas de conversión: de contacto a cita, captación y cierre",
      "Gestión de flujo de caja, impuestos y presupuestos de marketing",
      "Sistemas de delegación, contratación de asistentes y estructura de equipo"
    ],
    features: [
      "Plantillas Financieras y Calculadoras de Negocio en Hojas de Cálculo",
      "Hojas de Ruta de Planificación Anual y Trimestral",
      "Acceso de por Vida",
      "Ejercicios Prácticos de Diagnóstico Empresarial"
    ],
    trustBar: [
      "Metodología de Negocio Probada",
      "Calculadoras Financieras Incluidas",
      "Acceso de por Vida",
      "Orientado a Rentabilidad Real"
    ],
    faqs: [
      {
        question: "¿Incluye plantillas de hojas de cálculo?",
        answer: "Sí, incluye plantillas listas para personalizar con tus metas financieras, presupuestos operativos y seguimiento de prospectos."
      }
    ]
  },

  "marketing-business-growth": {
    title: "Marketing Inmobiliario Moderno y Crecimiento",
    headline: "Construye una marca personal magnética y genera prospectos calificados utilizando video, redes sociales y posicionamiento local.",
    heroTagline: "Atrae Clientes Calificados.",
    hours: "10 Módulos Maestros",
    badge: "Masterclass de Atracción",
    accessPeriod: "Acceso de por Vida",
    language: "Disponible en Inglés y Español",
    description:
      "El marketing inmobiliario tradicional ha perdido efectividad frente al consumidor actual. Los compradores y vendedores buscan autoridad, transparencia y conexión digital.\n\nEste programa te enseña las estrategias exactas de video en formato corto, publicidad digital segmentada y posicionamiento de marca que utilizan los mejores productores del país.",
    whoIsThisFor: [
      "Agentes que desean dejar de depender exclusivamente de llamadas en frío o compra de prospectos.",
      "Profesionales que quieren dominar Instagram, YouTube y TikTok para bienes raíces.",
      "Agentes que buscan atraer clientes en segmentos residenciales y de lujo."
    ],
    whatYouWillLearn: [
      "Estrategia de video vertical corto (Reels, TikTok, Shorts) para bienes raíces",
      "Campañas publicitarias locales de alta conversión en Meta y Google",
      "Diseño de marca personal y propuestas de valor diferenciadas",
      "Funnels de conversión y páginas de captura que convierten tráfico en citas"
    ],
    features: [
      "Guiones de Video Inmobiliario Probados",
      "Tutoriales Paso a Paso de Configuración Publicitaria",
      "Acceso de por Vida",
      "Actualizaciones con Nuevas Tendencias de Plataforma"
    ],
    trustBar: [
      "Estrategias Actuales del Mercado",
      "Guiones de Video Incluidos",
      "Acceso de por Vida",
      "Sin Métodos Anticuados"
    ],
    faqs: [
      {
        question: "¿Necesito equipo profesional de cámara para aplicar lo aprendido?",
        answer: "No. Todas las estrategias de video están optimizadas para ejecutarse con un teléfono inteligente moderno y aplicaciones accesibles."
      }
    ]
  }
};

export const COURSES_ES_ARRAY: Course[] = COURSES.map((course) => {
  const overrides = COURSES_ES[course.id];
  if (!overrides) return course;
  return {
    ...course,
    ...overrides,
    category: overrides.category || course.category,
  } as Course;
});

