export interface AssistantResponse {
  keywords: string[]
  answer: string
}

export const assistantResponses: AssistantResponse[] = [
  {
    keywords: ['quien es', 'quien eres', 'eduardo', 'sobre ti', 'tu eres'],
    answer:
      'Soy el asistente de José Eduardo López García, estudiante de informática y desarrollador Full Stack en formación, de Guatemala. Le apasiona crear soluciones digitales y sigue creciendo profesionalmente en tecnologías modernas.',
  },
  {
    keywords: [
      'tecnologia',
      'tecnologias',
      'stack',
      'lenguaje',
      'lenguajes',
      'herramientas',
    ],
    answer:
      'Trabaja principalmente con React, JavaScript y HTML/CSS en frontend; Java, Spring Boot y C# en backend; SQL, PostgreSQL y MongoDB en bases de datos; y Git y Docker como herramientas. Puedes ver el detalle con niveles en la app Skills.',
  },
  {
    keywords: ['proyecto', 'proyectos', 'portafolio', 'trabajos'],
    answer:
      'Ha desarrollado NovaPay (sistema financiero académico con React, backend, base de datos y Docker), Bite-Go (gestor para restaurantes) y GESAP (sistema de gestión de salud). Puedes ver el detalle en la app Projects.',
  },
  {
    keywords: ['experiencia', 'trayectoria', 'formacion', 'educacion'],
    answer:
      'Actualmente cursa Perito en Computación en Kinal (inicio en 2024), con prácticas profesionales y graduación previstas para 2026. Puedes ver la línea de tiempo completa en la app Education.',
  },
  {
    keywords: ['contacto', 'contactar', 'correo', 'email', 'escribir'],
    answer:
      'Puedes escribirle a joseeduardolg07@gmail.com. También encontrarás sus redes en la app Contact.',
  },
]

export const assistantFallback =
  'No tengo una respuesta para eso todavía. Prueba preguntando quién es Eduardo, qué tecnologías usa, qué proyectos tiene, su experiencia o cómo contactarlo.'

export const assistantGreeting =
  'Hola, soy el asistente de JEOS. Pregúntame sobre Eduardo, sus tecnologías, proyectos, experiencia o cómo contactarlo.'
